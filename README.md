# Pawcation — uygulama paketi

Tek sayfalık, mobil öncelikli Pawcation uygulaması. Bu klasör bir **PWA** olarak yayınlanabilir.

## Klasör yapısı
| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın kendisi |
| `config.js` | Supabase anahtarları (boşsa demo modu) |
| `manifest.webmanifest`, `sw.js`, `icons/` | PWA: ana ekrana ekleme + çevrimdışı çalışma |
| `vendor/` | Leaflet (harita) ve supabase-js — CDN'e bağımlı değil |
| `supabase/schema.sql`, `supabase/seed.sql` | Veritabanı şeması, güvenlik kuralları ve örnek bakıcılar |

## 1) Yerelde çalıştırma
Service worker ve PWA özellikleri `file://` ile çalışmaz; bir HTTP sunucusu gerekir:

```bash
cd app
python3 -m http.server 8080      # sonra http://localhost:8080
```
`localhost` güvenli bağlam sayıldığı için PWA kurulumu da burada test edilebilir.

## 2) Yayınlama (PWA için HTTPS şart)
Klasörü olduğu gibi herhangi bir statik barındırmaya yükle: Netlify, Vercel, Cloudflare Pages, GitHub Pages, Firebase Hosting…
Derleme adımı yok. Yayınladıktan sonra Chrome/Edge'de "Uygulamayı yükle", iOS Safari'de Paylaş → "Ana Ekrana Ekle".

Güncelleme çıkarırken `sw.js` içindeki `VERSION` değerini artır (ör. `pawcation-v9`), yoksa eski önbellek kullanılır.

## 3) Backend'i açma (Supabase)
1. https://supabase.com → **New project** (bölge: Frankfurt/Avrupa; KVKK için önerilir).
2. **SQL Editor**'de sırayla `supabase/schema.sql` ve `supabase/seed.sql` dosyalarını çalıştır.
3. **Project Settings → API** sayfasından *Project URL* ve **anon public** anahtarı kopyala, `config.js` içine yapıştır.
4. **Authentication → URL Configuration**: *Site URL* olarak yayın adresini (veya `http://localhost:8080`) gir.
   Aynı yerde e-posta onayını açık/kapalı seçebilirsin (açıksa kayıttan sonra onay e-postası gider).
5. Sayfayı yenile: giriş/kayıt ekranı gelir.

### Neler hesaba kaydolur
Profil ve puanlar, hayvanlar (sağlık kartı + fotoğraf → Storage), rezervasyonlar, favoriler, fiyatlandırma, takvim kapatmaları, tercihler (tema, yazı boyutu), bakıcı listesi (`sitters` tablosundan okunur).

**Tur 10 ile eklenenler:** bildirim tercihleri, kapatılan hatırlatmalar, promosyon kullanım durumu ve bakıcı profili (başlık/tanıtım; yalnızca http(s) adresli fotoğraflar) profil verisiyle senkronlanır. Bakıcı profilini *yayınladığında* `sitters` tablosuna bir satır yazılır (`data.slug` = ad slug'ı) ve galeri/ev videosu `sitter-media` Storage bucket'ına yüklenir — **`schema.sql`'i yeniden çalıştır** (yeni bucket + indeks).

### Paylaşım bağlantısı, promosyon ve bildirimler — bilmen gerekenler
- **Profil linki**: `index.html?sitter=<ad-slug>&utm_source=instagram`. Demo modunda kendi profilin yalnızca bu cihazda açılır; backend açıkken link herkes için çalışır (giriş yapmamış ziyaretçi "Hesapsız keşfet" ile profile iner).
- **Instagram / WhatsApp önizleme kartı**: Bu statik bir dosya olduğu için sosyal ağlar bağlantıdan başlık/görsel (Open Graph) okuyamaz. Zengin önizleme için `?sitter=` isteğini sunucu tarafında karşılayıp `og:title`/`og:image` etiketleri basan küçük bir Edge Function/Vercel middleware'i gerekir. Bu yüzden uygulama ayrıca **1080×1920 hikâye kartı (PNG + QR)** üretir; Instagram'a bunu yükle, linki bio'ya koy.
- **Promosyon kodları** (`PAWS100`, `PAWS10`, ödül kodları, ilk rezervasyon %15) şu an **tarayıcıda** doğrulanıyor — demo içindir. Canlıda kod listesi, süre, min. tutar ve tek kullanımlık kontrol mutlaka sunucuda (tablo + RPC) yapılmalı; aksi halde istemci değiştirilerek indirim alınabilir.
- **Süper bakıcı** rozeti kuralı (puan ≥4,8 · yanıt oranı ≥%90 · ort. yanıt ≤60 dk · ≥10 tamamlanan konaklama · doluluk ≥%40) istemcide hesaplanır; canlıda aynı kural gerçek rezervasyon verisiyle sunucuda (view/cron) hesaplanmalı.
- **Hatırlatmalar** uygulama açıkken/yüklüyken cihaz bildirimi olarak da gösterilebilir (izin verilirse). Uygulama tamamen kapalıyken bildirim için Web Push (VAPID anahtarları + zamanlanmış sunucu işi) gerekir; bu pakette yok.

### Para akışı (Tur 11) — demo mantığı, canlıya nasıl taşınır
- **Emanet (escrow)**: Ödeme `authorized → held → released` durumlarından geçer; konaklama bitince (check-out + 1 gün) bakıcıya aktarılır. Burada tamamen simülasyon. Canlıda bunu kendin yazma: iyzico veya PayTR'nin **pazaryeri / alt üye iş yeri** ürünüyle (ödemeyi tutar, onay sonrası alt üye iş yerine aktarır) yap; kart verisi yalnızca sağlayıcının barındırdığı formda girilmeli.
- **Komisyon** (%15) ve **iptal politikaları** (Esnek/Orta/Katı: 2/7/14 gün eşikleri) `app/index.html` içindeki `COMMISSION` ve `CANCEL_POLICIES` sabitlerinde — yer tutucu değerlerdir; iş modeline göre değiştir. Hesap (iade, bakıcıya kalan, komisyon) istemcide yapılıyor; canlıda sunucuda yapılmalı ve hukuki metinle (Politika Merkezi → İptal ve İade) birebir uyumlu tutulmalı.
- **Makbuz** resmî fatura değildir. Gerçek fatura/e-Arşiv için bir e-fatura entegratörü (ör. Paraşüt, Logo, Uyumsoft) ve vergi danışmanı gerekir; komisyon faturasını Pawcation, hizmet bedelini bakıcı (veya ödeme kuruluşu) keser — bunu muhasebecinle netleştir.
- **Havale**: IBAN ve referans kodu demo değerdir; gerçek akışta sanal IBAN/eşleştirme için ödeme sağlayıcısının havale ürünü gerekir.
- Rezervasyonlardaki ödeme/iade alanları (`payment`, `cancel`, `lines`, `policy`) rezervasyon kaydıyla (`bookings.data`) hesaba senkronlanır; bakıcı politikası profil verisiyle.

### Henüz hesaba bağlı OLMAYANLAR (bilerek)
- **Ödeme / banka / kart bilgisi**: Gerçek kart ya da IBAN verisini kendi veritabanında tutma. Ödeme için iyzico veya PayTR gibi bir sağlayıcı kullan; sağlayıcıdan gelen token/ödeme sonucu sunucu tarafında (Edge Function) işlenmeli.
- **Kimlik doğrulama görselleri** (selfie/kimlik): yalnızca durum kaydedilir; gerçek akışta özel bir Storage bucket'ı ve admin onayı gerekir.
- **Mesajlaşma ve bildirimler**: hâlâ demo verisi (sohbet medyası dahil; günlük raporlar rezervasyonla birlikte kaydolur ama rapor fotoğrafları şimdilik kaydedilmez).
- **Tanışma görüşmeleri ve olay bildirimleri**: şimdilik yalnızca cihazda. Hesaba bağlamak için `meets` ve `incidents` tabloları (RLS ile) eklenmeli; olay kanıt fotoğrafları özel bir Storage bucket'ında tutulmalı. Gerçek zamanlı için `messages` tablosu + Supabase Realtime eklenmeli.
- **Sahip ↔ bakıcı arasında gerçek talep akışı**: rezervasyon şu an kullanıcının kendi kaydı; bakıcının kendi hesabında görmesi için `requests` tablosu ve onay akışı gerekir.
- **Puanlar**: şemada istemci tarafından yazılabilir (demo kolaylığı). Gerçek ödül vermeden önce `schema.sql` içindeki NOT'a bak: puanları yalnızca sunucu fonksiyonlarıyla değiştir.

## Güvenlik notları
- `anon` anahtar herkese açıktır; veriyi **Row Level Security** korur (şemada tüm tablolar için açık). `service_role` anahtarını asla istemciye koyma.
- Yayından önce Supabase panelinden: e-posta onayı, şifre uzunluğu, rate limit ve CAPTCHA ayarlarını gözden geçir.

## Tanıtım sayfası (Tur 12)
- `index.html` artık tanıtım sayfasıdır (hero, nasıl çalışır, misyon, güven, roller, kazanç hesaplayıcı, SSS, giriş/hesap oluştur penceresi). Uygulama `app.html` olarak taşındı.
- Giriş akışı **demo**dur: hesaplar yalnızca tarayıcıda (`pawcation.accounts`, şifre SHA-256+tuz ile) saklanır; doğrulama kodu ekranda gösterilir. Canlıda Supabase Auth + SMS/e-posta sağlayıcısı ile değiştirilmelidir.
- `app.html`, oturum yoksa tanıtım sayfasına yönlendirir (`?sitter=` bağlantıları, PWA ve `?demo=1` hariç). Çıkış yapınca tanıtım sayfasına dönülür.
- Sonraki turlarda ana kaynak `pawcation.html` ise `app/app.html` olarak kopyalanmalıdır (`index.html` artık tanıtım sayfası).
