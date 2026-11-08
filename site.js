'use strict';
/* ---------------- icons ---------------- */
const IC = {
  paw:'<circle cx="7" cy="8" r="1.8"/><circle cx="12" cy="6" r="1.8"/><circle cx="17" cy="8" r="1.8"/><circle cx="4.5" cy="13" r="1.6"/><path d="M12 12c-3 0-5.5 2.2-5.5 4.8 0 1.9 1.6 2.7 3.1 2.1 1-.4 1.6-.4 2.4-.4s1.4 0 2.4.4c1.5.6 3.1-.2 3.1-2.1 0-2.6-2.5-4.8-5.5-4.8z"/>',
  home:'<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  shield:'<path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
  cert:'<circle cx="12" cy="8.5" r="5.5"/><path d="M9 13.3 7.5 21l4.5-2.5 4.5 2.5-1.5-7.7"/>',
  camera:'<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
  chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.5A8 8 0 1 1 21 12z"/>',
  heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  coin:'<circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.4 0-2.4.7-2.4 1.8 0 2.5 5 1.2 5 3.7 0 1.1-1.1 1.9-2.6 1.9-1.1 0-2.1-.5-2.6-1.3M12 6.5V8m0 8v1.5"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  map:'<path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10z"/><circle cx="12" cy="11" r="2.2"/>',
  id:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M6.5 16c.6-1.4 1.6-2 2.5-2s1.9.6 2.5 2M14 10h4M14 13h3"/>',
  file:'<path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  bell:'<path d="M6 17V11a6 6 0 1 1 12 0v6l1.5 2h-15z"/><path d="M10 21h4"/>',
  star:'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.8z"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/>',
  phone:'<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>'
};
function svg(name,s,sw){ return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||1.8)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(IC[name]||'')+'</svg>'; }
function paintIcons(root){ (root||document).querySelectorAll('[data-ic]').forEach(function(el){ if(el.dataset.done) return; el.dataset.done='1'; el.insertAdjacentHTML('afterbegin', svg(el.dataset.ic, +(el.dataset.s||22))); }); }

/* ---------------- copy ---------------- */
const D = {
tr:{
skip:'Ana içeriğe geç', nav_how:'Nasıl çalışır', nav_mission:'Misyonumuz', nav_trust:'Güven', nav_roles:'Kimler için', nav_earn:'Kazanç', nav_faq:'SSS',
login:'Giriş yap', signup:'Hesap oluştur', seehow:'Nasıl çalışır?', open_app:'Uygulamaya git',
eyebrow:"Türkiye'nin evcil hayvan pazaryeri", h1a:'Evden uzakta', h1b:'bir yuva.',
lead:'Pawcation, evcil hayvanına bakacak birine ihtiyacı olanları, bunu gerçekten isteyen doğrulanmış bakıcı ve eğitmenlerle buluşturur. Tatildeyken de içi rahat.',
n1:'Doğrulanmış bakıcılar', n2:'Emanetli güvenli ödeme', n3:'Günlük fotoğraf raporu',
mock_name:"Zeynep'in bahçeli evi", mock_loc:'Kadıköy, İstanbul', mock_days:'4 günlük konaklama', mock_ok:'Onaylandı',
f1:'Günlük rapor geldi', f1s:'3 fotoğraf · yürüyüş yapıldı', f2:'Ödeme emanette', f2s:'Konaklama bitince serbest', f3:'Tanışma görüşmesi', f3s:'Yarın 18:00',
how_h:'Üç adımda içi rahat bir tatil', how_s:'Aramadan ödemeye, tanışmadan günlük rapora kadar her şey tek yerde.',
s1h:'Bakıcını bul', s1p:'Şehrine, evcil hayvanının türüne ve tarihlerine göre doğrulanmış bakıcıları haritada ve listede gör. Profilleri, yorumları, ev fotoğraflarını incele.',
s2h:'Tanış, rezerve et', s2p:'Önce görüntülü ya da yüz yüze tanışma görüşmesi yap. İçine sinince tarih seç, kart, Troy ya da havale ile güvenle öde. Ödeme emanette bekler.',
s3h:'Rahat et, takip et', s3p:'Konaklama boyunca fotoğraflı günlük raporlar al, mesajlaş. Her şey yolunda bittiğinde ödeme bakıcıya geçer, sen de yorum bırakırsın.',
mis_h:'Her evcil hayvan <em>sevgiyle</em> bakılmayı hak eder.',
mis_s:'Pawcation\'ı, seyahat eden herkesin "Peki ya patim?" kaygısını ortadan kaldırmak, bakıcılara ise sevdikleri işten adil kazanç sağlamak için kuruyoruz. Kafes ve otel yerine, gerçek bir ev ve gerçek bir ilgi.',
v1h:'Önce güven', v1p:'Kimlik doğrulama, tanışma görüşmesi, günlük rapor ve olay bildirimi sürecin parçası.',
v2h:'Evde, ailenin bir parçası gibi', v2p:'Dostun stresli bir kafes yerine sıcak bir ev ortamında kalır.',
v3h:'Şeffaf ve adil fiyat', v3p:'Komisyon ve net kazanç baştan görünür. Sürpriz ücret yok.',
c1:'hesap türü: sahip, bakıcı, eğitmen', c2:'ödeme yöntemi: kart, Troy, havale', c3:'iptal politikası: esnek, orta, katı', c4:'güven özelliği: kimlik, emanet, rapor ve daha fazlası',
tr_h:'Güvenin her adımına bir önlem', tr_s:'İçin rahat etsin diye süreci baştan sona koruyan özellikler.',
pr_k:'Emanet (escrow) mantığı', pr_h:'Paran, her şey yolunda gidene kadar güvende',
pr_s:'Ödemeyi yaptığında para bakıcıya hemen geçmez; platformda tutulur. Konaklama tamamlanınca bakıcıya aktarılır. İptal durumunda seçilen politikaya göre iade otomatik hesaplanır.',
pr_f:'Not: Oranlar ve süreler örnek değerlerdir; canlıda ödeme kuruluşunun pazaryeri altyapısıyla çalışır.',
t1h:'Rezervasyon ve ödeme', t1p:'Kart, Troy ya da havale ile ödersin. Tutar emanete alınır.',
t2h:'Konaklama başlar', t2p:'Günlük fotoğraf raporları ve mesajlarla evcil dostunu takip edersin.',
t3h:'Teslim ve onay', t3p:'Dostun sağ salim sana döner, konaklama tamamlanır.',
t4h:'Ödeme serbest kalır', t4p:'Komisyon düşülür, net kazanç bakıcıya geçer. Makbuz indirilebilir.',
ro_h:"Pawcation'a nasıl katılırsın?", ro_s:'Üç farklı rol, tek bir hesap. Dilediğin zaman rol değiştirebilirsin.',
r1h:'Evcil hayvan sahibi', r1p:'Seyahate çıkıyorsun ve dostuna bakacak güvenilir birini arıyorsun.', r1a:'Harita ve filtrelerle bakıcı ara', r1b:'Sağlık kartı, hatırlatmalar, promosyon kodları', r1c:'Günlük rapor ve mesajlaşma', r1btn:'Bakıcı arıyorum',
r2h:'Bakıcı', r2p:'Evini aç, sevdiğin işi yap ve düzenli kazanç elde et.', r2a:'Kendi fiyatın, kendi takvimin', r2b:'Süper bakıcı rozeti ve paylaşılabilir profil', r2c:'Aylık kazanç dökümü, net kazanç gösterimi', r2btn:'Bakıcı olmak istiyorum',
r3h:'Eğitmen', r3p:'Eğitim seansları ver, ihtiyacı olan sahiplerle eşleş.', r3a:'Sertifikalarını profilinde göster', r3b:'Tek seans ya da paket sat', r3c:'Randevu ve ödemeler tek ekranda', r3btn:'Eğitmen olarak katıl',
ea_h:'Sevdiğin işten ne kadar kazanırsın?', ea1:'Gecelik fiyatı sen belirlersin; hafta sonu ve tatil için farklı fiyat girebilirsin.', ea2:'Komisyon açıkça gösterilir, net kazancın her zaman görünür.', ea3:'Ödeme konaklama bitince serbest kalır; aylık döküm indirebilirsin.', ea_btn:'Bakıcı olarak başla',
ca_n:'Gece sayısı', ca_p:'Gecelik fiyat', ca_g:'Toplam tutar', ca_c:'Platform komisyonu (%15)', ca_net:'Net kazancın', ca_f:'Örnek hesaplama; komisyon oranı demo değeridir ve değişebilir.',
fq_h:'Aklına takılanlar',
cta_h:'Dostun için en iyi yuvayı birlikte bulalım', cta_p:'Hesabını bir dakikada oluştur; bakıcıları incelemeye hemen başla.',
ft_t:"Evden uzakta bir yuva. Türkiye'de evcil hayvan sahipleri, bakıcılar ve eğitmenler için.", ft1:'Keşfet', ft2:'Katıl', ft3:'Yasal', lg_p:'Gizlilik ve KVKK', lg_t:'Kullanım koşulları', lg_c:'İletişim',
ft_d:'Bu sayfa ve uygulama bir demodur; gerçek ödeme ya da kimlik doğrulama yapılmaz.',
feats:[
 ['id','Kimlik doğrulama','Bakıcılar yayına girmeden kimlik ve profil kontrolünden geçer; doğrulanmış rozeti görünür.'],
 ['shield','Emanetli ödeme','Ödeme konaklama bitene kadar platformda tutulur, sonra bakıcıya geçer.'],
 ['camera','Günlük fotoğraf raporu','Beslenme, yürüyüş, oyun: bakıcıdan fotoğraflı rapor, mesajlaşma ile birlikte.'],
 ['chat','Tanışma görüşmesi','Rezervasyondan önce bakıcıyla tanış; evcil dostunun huyunu birlikte konuş.'],
 ['file','Dijital sağlık kartı','Aşı, ilaç ve alerji bilgileri tek kartta; aşı tarihi yaklaşınca hatırlatma gelir.'],
 ['star','Detaylı yorumlar','Yalnızca tamamlanan konaklamalardan, ilgi, iletişim ve temizlik gibi başlıklarla.']
],
faq:[
 ['Pawcation ücretsiz mi?','Hesap oluşturmak ve bakıcıları incelemek ücretsizdir. Rezervasyon yapıldığında bakıcıdan komisyon kesilir; oran ve net kazanç baştan görünür.'],
 ['Ödemem ne zaman bakıcıya geçer?','Ödeme emanette tutulur, konaklama tamamlandıktan sonra bakıcıya aktarılır.'],
 ['İptal edersem paramı geri alabilir miyim?','Bakıcının seçtiği esnek, orta ya da katı politikaya göre iade tutarı otomatik hesaplanır ve rezervasyon sırasında net görürsün.'],
 ['Evcil hayvanım hastalanırsa ne olur?','Bakıcı seni anında bilgilendirir; olay bildirimi ve sağlık kartı bilgileri uygulamada tutulur. Acil durumda veteriner süreci için Protect kapsamı devreye girer.'],
 ['Bakıcı olmak için ne gerekiyor?','18 yaşından büyük olmak, profilini ve evini tanıtmak ve kimlik doğrulamasını tamamlamak yeterli. Ardından fiyatını ve takvimini sen belirlersin.'],
 ['Hangi evcil hayvanlar için hizmet var?','Köpek ve kedi başta olmak üzere birçok tür için bakıcılar filtrelenebilir; her bakıcı hangi türlere baktığını profilinde belirtir.']
],
/* auth */
a_in_t:'Tekrar hoş geldin', a_in_s:'Hesabına giriş yap ve kaldığın yerden devam et.',
a_up_t:'Hesabını oluştur', a_up_s:'Birkaç adımda aramıza katıl.',
a_ver_t:'Doğrulama kodu', a_done_t:'Hoş geldin!',
tab_in:'Giriş yap', tab_up:'Hesap oluştur', email:'E-posta', phone:'Telefon', email_ph:'ornek@gmail.com', phone_ph:'5xx xxx xx xx',
pass:'Şifre', pass2:'Şifre (tekrar)', show:'Göster', hide:'Gizle', name:'Ad soyad', birth:'Doğum tarihi', birth_h:'Pawcation 18 yaş ve üzeri kullanıcılar içindir.',
remember:'Beni hatırla', forgot:'Şifremi unuttum', go_in:'Giriş yap', go_up:'Devam et', go_code:'Doğrula', go_app:'Pawcation\'a gir', back:'Geri',
or:'ya da', google:'Google ile devam et (demo)', demo_acc:'Demo hesabıyla gez',
who:'Pawcation\'ı nasıl kullanacaksın?', who_s:'Sonradan değiştirebilirsin.',
role_owner:'Bakıcı arıyorum', role_owner_s:'Evcil hayvanıma bakacak birine ihtiyacım var', role_sitter:'Bakıcı olmak istiyorum', role_sitter_s:'Evimi açıp kazanç sağlamak istiyorum', role_trainer:'Eğitmenim', role_trainer_s:'Eğitim seansları vermek istiyorum',
terms:'<a href="#" data-legal="terms">Kullanım koşulları</a> ve <a href="#" data-legal="privacy">Gizlilik/KVKK</a> metinlerini okudum, kabul ediyorum.',
e_name:'Lütfen adını ve soyadını yaz.', e_email:'Geçerli bir e-posta adresi yaz.', e_phone:'Telefon 5 ile başlayan 10 haneli olmalı.', e_pass:'En az 8 karakter; harf ve rakam içermeli.', e_pass2:'Şifreler eşleşmiyor.', e_birth:'Doğum tarihini seç.', e_age:'Hesap oluşturmak için 18 yaşında olmalısın.', e_terms:'Devam etmek için koşulları kabul etmelisin.', e_exists:'Bu bilgiyle bir hesap zaten var. Giriş yapmayı dene.', e_none:'Bu bilgiyle hesap bulunamadı. Hesap oluşturmak ister misin?', e_wrong:'Şifre hatalı.', e_code:'Kod hatalı. Tekrar dene.', e_empty:'Şifreni yaz.',
str:['Çok zayıf','Zayıf','Orta','İyi','Güçlü'],
ver_s:'{c} için 6 haneli bir doğrulama kodu gönderdik.', demo_code:'Demo kodun', resend:'Kodu tekrar gönder', resend_in:'Tekrar gönder ({n} sn)', resent:'Yeni kod gönderildi.',
done_p:'Hesabın hazır, {n}. Seni uygulamaya götürelim.', done_in:'Giriş başarılı. Seni uygulamaya götürelim.',
reset_t:'Şifreni sıfırla', reset_s:'Hesabına bağlı e-posta ya da telefonu yaz; sıfırlama bağlantısı gönderelim.', reset_go:'Bağlantı gönder', reset_ok:'Sıfırlama bağlantısı gönderildi (demo).',
guest_t:'Misafir olarak gez',
leg:{privacy:['Gizlilik ve KVKK','Bu bir taslak metindir. Canlıya çıkmadan önce bir avukat tarafından KVKK kapsamında hazırlanmalıdır. Demo sürümde girdiğin bilgiler yalnızca bu cihazın tarayıcısında saklanır ve hiçbir sunucuya gönderilmez.'],terms:['Kullanım koşulları','Bu bir taslak metindir. Platformun rolü, komisyon, iptal ve iade koşulları ile sorumluluk sınırları canlıya çıkmadan önce hukuki olarak netleştirilmelidir.'],contact:['İletişim','Bu demo için iletişim kanalı yoktur. Canlıda destek e-postası ve yardım merkezi burada yer alacak.']},
toast_logged:'Hesabın bu cihazda kayıtlı.', theme_l:'Açık tema', theme_d:'Koyu tema'
},
en:{
skip:'Skip to content', nav_how:'How it works', nav_mission:'Our mission', nav_trust:'Trust', nav_roles:'Who it is for', nav_earn:'Earnings', nav_faq:'FAQ',
login:'Log in', signup:'Create account', seehow:'How it works', open_app:'Open the app',
eyebrow:"Turkey's pet-care marketplace", h1a:'A home away', h1b:'from home.',
lead:'Pawcation connects people who need someone to look after a pet with verified sitters and trainers who genuinely want to. Travel with peace of mind.',
n1:'Verified sitters', n2:'Escrow-protected payment', n3:'Daily photo reports',
mock_name:"Zeynep's garden home", mock_loc:'Kadıköy, Istanbul', mock_days:'4-night stay', mock_ok:'Confirmed',
f1:'Daily report received', f1s:'3 photos · walk done', f2:'Payment in escrow', f2s:'Released when the stay ends', f3:'Meet & greet', f3s:'Tomorrow 6:00 PM',
how_h:'Worry-free travel in three steps', how_s:'From search to payment, from meet & greet to daily reports, everything in one place.',
s1h:'Find your sitter', s1p:'See verified sitters on a map and in a list by city, pet type and dates. Browse profiles, reviews and photos of the home.',
s2h:'Meet, then book', s2p:'Start with a video or in-person meet & greet. When it feels right, pick dates and pay safely by card, Troy or bank transfer. Your payment waits in escrow.',
s3h:'Relax and follow along', s3p:'Get daily photo reports and chat during the stay. When all goes well, payment is released to the sitter and you leave a review.',
mis_h:'Every pet deserves to be <em>loved</em> and looked after.',
mis_s:'We are building Pawcation to take away every traveller\'s "but what about my pet?" worry, and to give sitters fair earnings from work they love. A real home and real attention instead of a cage or a kennel.',
v1h:'Trust first', v1p:'ID verification, meet & greet, daily reports and incident reporting are part of the process.',
v2h:'At home, like family', v2p:'Your friend stays in a warm home instead of a stressful kennel.',
v3h:'Transparent, fair pricing', v3p:'Commission and net earnings are visible up front. No surprise fees.',
c1:'account types: owner, sitter, trainer', c2:'payment methods: card, Troy, transfer', c3:'cancellation policies: flexible, moderate, strict', c4:'trust features: ID, escrow, reports and more',
tr_h:'A safeguard at every step', tr_s:'Features that protect the whole journey so you can relax.',
pr_k:'How escrow works', pr_h:'Your money stays safe until all goes well',
pr_s:'When you pay, the money does not go straight to the sitter; it is held on the platform. It is released once the stay is complete. If you cancel, the refund is calculated automatically by the chosen policy.',
pr_f:'Note: rates and windows are sample values; in production this runs on a payment provider\'s marketplace infrastructure.',
t1h:'Book and pay', t1p:'You pay by card, Troy or bank transfer. The amount goes into escrow.',
t2h:'The stay begins', t2p:'Follow your pet with daily photo reports and messages.',
t3h:'Hand-back and confirmation', t3p:'Your friend returns safe and sound and the stay is completed.',
t4h:'Payment released', t4p:'Commission is deducted and net earnings go to the sitter. Receipts are downloadable.',
ro_h:'How will you join Pawcation?', ro_s:'Three roles, one account. Switch roles any time.',
r1h:'Pet owner', r1p:'You are travelling and looking for someone you can trust with your friend.', r1a:'Search sitters by map and filters', r1b:'Health card, reminders, promo codes', r1c:'Daily reports and messaging', r1btn:'I need a sitter',
r2h:'Sitter', r2p:'Open your home, do what you love and earn steadily.', r2a:'Your price, your calendar', r2b:'Super sitter badge and shareable profile', r2c:'Monthly statement and net earnings view', r2btn:'I want to host',
r3h:'Trainer', r3p:'Offer training sessions and match with owners who need help.', r3a:'Show your certificates on your profile', r3b:'Sell single sessions or packages', r3c:'Appointments and payments in one place', r3btn:'Join as a trainer',
ea_h:'How much can you earn doing what you love?', ea1:'You set the nightly price; add different rates for weekends and holidays.', ea2:'Commission is shown openly and your net earnings are always visible.', ea3:'Payment is released when the stay ends; download a monthly statement.', ea_btn:'Start as a sitter',
ca_n:'Number of nights', ca_p:'Price per night', ca_g:'Total', ca_c:'Platform commission (15%)', ca_net:'Your net earnings', ca_f:'Sample calculation; the commission rate is a demo value and may change.',
fq_h:'Questions you may have',
cta_h:"Let's find the best home for your pet", cta_p:'Create your account in a minute and start browsing sitters right away.',
ft_t:'A home away from home. For pet owners, sitters and trainers in Turkey.', ft1:'Explore', ft2:'Join', ft3:'Legal', lg_p:'Privacy & KVKK', lg_t:'Terms of use', lg_c:'Contact',
ft_d:'This page and app are a demo; no real payment or ID verification takes place.',
feats:[
 ['id','ID verification','Sitters go through ID and profile checks before going live; a verified badge is shown.'],
 ['shield','Escrow payments','Payment is held by the platform until the stay ends, then released to the sitter.'],
 ['camera','Daily photo reports','Meals, walks, play: photo reports from the sitter, plus messaging.'],
 ['chat','Meet & greet','Meet the sitter before booking and talk through your pet\'s personality.'],
 ['file','Digital health card','Vaccines, medication and allergies on one card, with reminders when a vaccine is due.'],
 ['star','Detailed reviews','Only from completed stays, with ratings for care, communication and cleanliness.']
],
faq:[
 ['Is Pawcation free?','Creating an account and browsing sitters is free. When a booking is made a commission is taken from the sitter; the rate and net earnings are shown up front.'],
 ['When does my payment reach the sitter?','Payment is held in escrow and released to the sitter after the stay is complete.'],
 ['Can I get a refund if I cancel?','The refund is calculated automatically by the sitter\'s flexible, moderate or strict policy, and you see it clearly while booking.'],
 ['What if my pet gets sick?','The sitter informs you immediately; incident reports and health card details are kept in the app. In emergencies the Protect coverage applies for vet care.'],
 ['What do I need to become a sitter?','Be over 18, describe yourself and your home, and complete ID verification. Then you set your price and calendar.'],
 ['Which pets are supported?','Sitters can be filtered for dogs, cats and many other species; each sitter lists the pets they accept.']
],
a_in_t:'Welcome back', a_in_s:'Log in and pick up where you left off.',
a_up_t:'Create your account', a_up_s:'Join in a few steps.',
a_ver_t:'Verification code', a_done_t:'Welcome!',
tab_in:'Log in', tab_up:'Create account', email:'Email', phone:'Phone', email_ph:'name@gmail.com', phone_ph:'5xx xxx xx xx',
pass:'Password', pass2:'Confirm password', show:'Show', hide:'Hide', name:'Full name', birth:'Date of birth', birth_h:'Pawcation is for users aged 18 and over.',
remember:'Remember me', forgot:'Forgot password', go_in:'Log in', go_up:'Continue', go_code:'Verify', go_app:'Enter Pawcation', back:'Back',
or:'or', google:'Continue with Google (demo)', demo_acc:'Explore with a demo account',
who:'How will you use Pawcation?', who_s:'You can change this later.',
role_owner:'I need a sitter', role_owner_s:'I need someone to look after my pet', role_sitter:'I want to host', role_sitter_s:'I want to open my home and earn', role_trainer:"I'm a trainer", role_trainer_s:'I want to offer training sessions',
terms:'I have read and accept the <a href="#" data-legal="terms">Terms of use</a> and <a href="#" data-legal="privacy">Privacy/KVKK</a>.',
e_name:'Please enter your full name.', e_email:'Enter a valid email address.', e_phone:'Phone must be 10 digits starting with 5.', e_pass:'At least 8 characters, with letters and numbers.', e_pass2:'Passwords do not match.', e_birth:'Choose your date of birth.', e_age:'You must be 18 to create an account.', e_terms:'You need to accept the terms to continue.', e_exists:'An account with these details already exists. Try logging in.', e_none:'No account found with these details. Create one?', e_wrong:'Incorrect password.', e_code:'Wrong code. Try again.', e_empty:'Enter your password.',
str:['Very weak','Weak','Fair','Good','Strong'],
ver_s:'We sent a 6-digit code to {c}.', demo_code:'Your demo code', resend:'Resend code', resend_in:'Resend ({n}s)', resent:'A new code was sent.',
done_p:'Your account is ready, {n}. Let us take you to the app.', done_in:'Logged in. Let us take you to the app.',
reset_t:'Reset your password', reset_s:'Enter the email or phone linked to your account and we will send a reset link.', reset_go:'Send link', reset_ok:'Reset link sent (demo).',
guest_t:'Explore as guest',
leg:{privacy:['Privacy & KVKK','This is placeholder text. It must be prepared by a lawyer under KVKK before launch. In this demo, details you enter are stored only in this device\'s browser and sent to no server.'],terms:['Terms of use','This is placeholder text. The platform\'s role, commission, cancellation and refund terms and limits of liability must be settled legally before launch.'],contact:['Contact','This demo has no contact channel. A support email and help centre will be listed here in production.']},
toast_logged:'Your account is saved on this device.', theme_l:'Light theme', theme_d:'Dark theme'
}};
const $ = (s,r)=> (r||document).querySelector(s), $$ = (s,r)=> Array.from((r||document).querySelectorAll(s));
let lang = (function(){ try{ var l=localStorage.getItem('pawcation.lang'); if(l==='tr'||l==='en') return l; }catch(e){} return (navigator.language||'tr').toLowerCase().startsWith('tr')?'tr':'en'; })();
const T = k => (D[lang][k] != null ? D[lang][k] : k);
const tpl = (s,o)=> s.replace(/\{(\w+)\}/g,(m,k)=> o[k]!=null?o[k]:m);

function applyLang(){
  document.documentElement.lang = lang;
  $$('[data-i]').forEach(el=>{ const v=D[lang][el.dataset.i]; if(v!=null) el.textContent=v; });
  $$('[data-i-ph]').forEach(el=>{ const v=D[lang][el.dataset.iPh]; if(v!=null) el.placeholder=v; });
  $$('[data-i-html]').forEach(el=>{ const v=D[lang][el.dataset.iHtml]; if(v!=null) el.innerHTML=v; });
  $('#langBtn').textContent = lang==='tr' ? 'EN' : 'TR';
  document.title = document.body.dataset['title'+lang.toUpperCase()] || (lang==='tr' ? 'Pawcation — Evden uzakta bir yuva' : 'Pawcation — A home away from home');
  buildFeatures(); buildFaq(); buildTicker(); updateCalc(); setNavForSession(); updateThemeBtn();
  if(authState.open) renderAuth();
}
function buildFeatures(){
  if(!$('#feat')) return;
  $('#feat').innerHTML = D[lang].feats.map((f,i)=>'<div class="fcard reveal in" style="--d:'+(i*.06)+'s"><div class="ic">'+svg(f[0],24)+'</div><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>').join('');
  $$('.fcard').forEach(c=> c.addEventListener('pointermove', e=>{ const r=c.getBoundingClientRect(); c.style.setProperty('--mx',(e.clientX-r.left)+'px'); c.style.setProperty('--my',(e.clientY-r.top)+'px'); }));
  observeReveals();
}
function buildFaq(){ if(!$('#faq')) return; $('#faq').innerHTML = D[lang].faq.map(q=>'<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>').join(''); }
function buildTicker(){
  if(!$('#tk')) return;
  const items = lang==='tr' ? ['Doğrulanmış bakıcılar','Emanetli ödeme','Günlük fotoğraf raporu','Tanışma görüşmesi','Dijital sağlık kartı','Süper bakıcı rozeti','Şeffaf komisyon','Kolay iptal ve iade'] : ['Verified sitters','Escrow payments','Daily photo reports','Meet & greet','Digital health card','Super sitter badge','Transparent commission','Easy cancel & refund'];
  const row = items.map(t=>'<span>'+svg('paw',18)+t+'</span>').join('');
  $('#tk').innerHTML = row+row;
}
/* hero paw trail */
(function(){ const t=$('#trail'); if(!t) return; let h=''; const pts=[[8,78],[16,66],[12,54],[22,44],[18,32],[30,24],[27,12]]; pts.forEach((p,i)=>{ h+='<span class="paw" style="left:'+p[0]+'%;top:'+p[1]+'%;--r:'+(i%2?18:-14)+'deg;animation-delay:'+(i*.7)+'s">'+svg('paw',34,1.6)+'</span>'; }); t.innerHTML=h; })();

/* ---------------- theme ---------------- */
function curTheme(){ const t=document.documentElement.dataset.theme; if(t==='dark') return 'dark'; if(t==='light') return 'light'; return matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'; }
function updateThemeBtn(){ const b=$('#themeBtn'); b.innerHTML = svg(curTheme()==='dark'?'sun':'moon',18); b.setAttribute('aria-label', curTheme()==='dark'?T('theme_l'):T('theme_d')); }
$('#themeBtn').addEventListener('click',()=>{ const n=curTheme()==='dark'?'light':'dark'; document.documentElement.dataset.theme=n; try{ const r=JSON.parse(localStorage.getItem('pawcation.prefs')||'{}'); r.theme=n; localStorage.setItem('pawcation.prefs',JSON.stringify(r)); }catch(e){} updateThemeBtn(); });
$('#langBtn').addEventListener('click',()=>{ lang = lang==='tr'?'en':'tr'; try{ localStorage.setItem('pawcation.lang',lang); }catch(e){} applyLang(); });

/* ---------------- nav / scroll ---------------- */
const nav=$('#nav'), prog=$('#progress');
const links = $$('#navLinks a');
function onScroll(){
  const y=scrollY, h=document.documentElement.scrollHeight-innerHeight;
  prog.style.transform='scaleX('+(h>0?y/h:0)+')';
  nav.classList.toggle('solid', y>40 || nav.classList.contains('always'));
  const tl=$('#timeline'); if(tl){ const r=tl.getBoundingClientRect(); const p=Math.min(1,Math.max(0,(innerHeight*.7-r.top)/r.height)); tl.style.setProperty('--tl',(p*100)+'%'); }
}
addEventListener('scroll',onScroll,{passive:true}); onScroll();
const secIds = ['nasil','misyon','guven','toplulugumuz','kazanc','sss'];
const so = new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ links.forEach(a=>a.classList.toggle('on', a.getAttribute('href')==='#'+e.target.id)); } }); },{rootMargin:'-45% 0px -50% 0px'});
/* page nav: active state set by page, not by scroll */
const burger=$('#burger'), mm=$('#mobileMenu');
function closeMenu(){ mm.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
burger.addEventListener('click',()=>{ const o=mm.classList.toggle('open'); burger.setAttribute('aria-expanded',o); });
mm.addEventListener('click',e=>{ if(e.target.closest('a')) closeMenu(); });
document.addEventListener('click',e=>{ const a=e.target.closest('a[href^="#"]'); if(a && a.getAttribute('href').length>1){ const t=document.querySelector(a.getAttribute('href')); if(t){ e.preventDefault(); t.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'}); history.replaceState(null,'',a.getAttribute('href')); } } });

/* reveal + counters */
let rvObs;
function observeReveals(){
  if(!rvObs) rvObs = new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); rvObs.unobserve(e.target); if(e.target.querySelector('[data-count]')) runCounters(e.target); } }); },{threshold:.15});
  $$('.reveal:not(.in)').forEach(el=>rvObs.observe(el));
}
function runCounters(root){
  $$('[data-count]',root).forEach(el=>{ if(el.dataset.ran) return; el.dataset.ran=1; const to=+el.dataset.count, suf=el.dataset.suffix||''; const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches||document.documentElement.dataset.motion==='reduce'; if(reduce){ el.textContent=to+suf; return; } const t0=performance.now(), dur=1400; (function f(t){ const p=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-p,3); el.textContent=Math.round(to*e)+suf; if(p<1) requestAnimationFrame(f); })(t0); });
}
observeReveals();

/* ---------------- calculator ---------------- */
const fmt = n => '₺'+Math.round(n).toLocaleString('tr-TR');
let shown = {g:0,c:0,n:0};
function updateCalc(){
  if(!$('#nights')) return; const n=+$('#nights').value, p=+$('#price').value, g=n*p, c=g*.15, net=g-c;
  $('#nOut').textContent=n; $('#pOut').textContent=fmt(p);
  tween('#rG','g',g,v=>fmt(v)); tween('#rC','c',c,v=>'−'+fmt(v)); tween('#rN','n',net,v=>fmt(v));
}
function tween(sel,key,to,f){ const el=$(sel), from=shown[key], t0=performance.now(); shown[key]=to; (function s(t){ const p=Math.min(1,(t-t0)/380), e=1-Math.pow(1-p,3); el.textContent=f(from+(to-from)*e); if(p<1) requestAnimationFrame(s); })(t0); }
if($('#nights')){ $('#nights').addEventListener('input',updateCalc); $('#price').addEventListener('input',updateCalc); }

/* ---------------- toast ---------------- */
let tt; function toast(m){ const el=$('#toast'); el.textContent=m; el.classList.add('on'); clearTimeout(tt); tt=setTimeout(()=>el.classList.remove('on'),2800); }

/* ---------------- accounts (mock, local only) ---------------- */
const ACC='pawcation.accounts', SES='pawcation.session';
const loadAcc=()=>{ try{ return JSON.parse(localStorage.getItem(ACC)||'{}'); }catch(e){ return {}; } };
const saveAcc=a=>{ try{ localStorage.setItem(ACC,JSON.stringify(a)); }catch(e){} };
const getSes=()=>{ try{ return JSON.parse(localStorage.getItem(SES)||'null'); }catch(e){ return null; } };
async function hash(pw,salt){ try{ const b=new TextEncoder().encode(salt+':'+pw); const d=await crypto.subtle.digest('SHA-256',b); return Array.from(new Uint8Array(d)).map(x=>x.toString(16).padStart(2,'0')).join(''); }catch(e){ let h=0; const s=salt+pw; for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))|0; return 'x'+h; } }
const normPhone = v => v.replace(/\D/g,'').replace(/^90/,'').replace(/^0/,'');
const keyOf = (kind,v)=> kind==='phone' ? 'p:'+normPhone(v) : 'e:'+v.trim().toLowerCase();
const okEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const okPhone = v => /^5\d{9}$/.test(normPhone(v));
function maskPhone(v){ const d=normPhone(v).slice(0,10); return d.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2}).*/,(m,a,b,c,e)=>[a,b,c,e].filter(Boolean).join(' ')); }
function strength(p){ let s=0; if(p.length>=8) s++; if(/[a-zçğıöşü]/i.test(p)&&/\d/.test(p)) s++; if(/[A-ZÇĞİÖŞÜ]/.test(p)&&/[a-zçğıöşü]/.test(p)) s++; if(/[^A-Za-z0-9çğıöşüÇĞİÖŞÜ]/.test(p)||p.length>=12) s++; return p?Math.max(1,s):0; }
function setNavForSession(){
  const s=getSes(), cta=$('#navCta'), lg=$('[data-auth="in"].hide-m');
  if(s){ cta.dataset.auth=''; cta.dataset.go='app'; cta.textContent=T('open_app'); if(lg) lg.style.display='none'; }
  else { cta.dataset.auth='up'; delete cta.dataset.go; cta.textContent=T('nv_signup'); if(lg) lg.style.display=''; }
}
function startSession(o){ try{ localStorage.setItem(SES,JSON.stringify(Object.assign({ts:Date.now()},o))); localStorage.setItem('pawcation.lang',lang); }catch(e){} }
function goApp(){ location.href='app.html?lang='+lang; }

/* ---------------- auth modal ---------------- */
const authState={open:false, mode:'in', step:1, role:'owner', kind:'email', data:{}, code:'', timer:null, view:'main'};
const ov=$('#authOv'); let lastFocus=null;
function openAuth(mode,role){
  authState.open=true; authState.mode=mode; authState.step=1; authState.view='main'; authState.kind='email';
  if(role) authState.role=role; authState.data = mode==='up' && role ? {preRole:true} : {};
  lastFocus=document.activeElement; ov.classList.add('open'); document.body.style.overflow='hidden'; closeMenu(); renderAuth();
  setTimeout(()=>{ const f=$('#authBody input,#authBody button'); if(f) f.focus(); },60);
}
function closeAuth(){ authState.open=false; clearInterval(authState.timer); ov.classList.remove('open'); document.body.style.overflow=''; if(lastFocus&&lastFocus.focus) lastFocus.focus(); }
const roleInfo = {owner:['paw','role_owner','role_owner_s'], sitter:['home','role_sitter','role_sitter_s'], trainer:['cert','role_trainer','role_trainer_s']};
function contactField(kind){
  return '<div class="seg" role="group" aria-label="'+T('email')+' / '+T('phone')+'"><button type="button" data-kind="email" aria-pressed="'+(kind==='email')+'">'+T('email')+'</button><button type="button" data-kind="phone" aria-pressed="'+(kind==='phone')+'">'+T('phone')+'</button></div>'+
  '<div class="fld" id="f-contact"><label for="contact">'+T(kind)+'</label>'+(kind==='email'?'<input type="email" id="contact" autocomplete="email" inputmode="email" placeholder="'+T('email_ph')+'">':'<div style="display:flex;gap:8px"><input type="text" value="+90" disabled aria-label="+90" style="width:74px;text-align:center"><input type="tel" id="contact" autocomplete="tel-national" inputmode="numeric" placeholder="'+T('phone_ph')+'"></div>')+'<div class="err" id="e-contact"></div></div>';
}
function pwField(id,label,ac,meter){ return '<div class="fld" id="f-'+id+'"><label for="'+id+'">'+label+'</label><div class="pw"><input type="password" id="'+id+'" autocomplete="'+ac+'"><button type="button" data-show="'+id+'">'+T('show')+'</button></div>'+(meter?'<div class="meter" id="meter" data-s="0"><i></i><i></i><i></i><i></i></div><div class="hint" id="meterT">&nbsp;</div>':'')+'<div class="err" id="e-'+id+'"></div></div>'; }
function socials(){ return '<div class="or">'+T('or')+'</div><button type="button" class="soc" data-act="google"><svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"/><path fill="#FBBC05" d="M10.5 28.7a14.5 14.5 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/></svg>'+T('google')+'</button><button type="button" class="linkbtn" data-act="demo" style="width:100%;text-align:center">'+T('demo_acc')+'</button>'; }
function renderAuth(){
  const b=$('#authBody'), s=authState, tt=$('#authTitle'), ts=$('#authSub');
  if(s.view==='reset'){
    tt.textContent=T('reset_t'); ts.textContent=T('reset_s');
    b.innerHTML=contactField(s.kind)+'<button class="btn btn-gold m-btn" data-act="reset">'+T('reset_go')+'</button><div style="text-align:center;margin-top:10px"><button class="linkbtn" data-act="to-in">'+T('back')+'</button></div>'; return;
  }
  if(s.mode==='in'){
    tt.textContent=T('a_in_t'); ts.textContent=T('a_in_s');
    b.innerHTML='<div class="tabs" role="tablist"><button role="tab" aria-selected="true">'+T('tab_in')+'</button><button role="tab" aria-selected="false" data-act="to-up">'+T('tab_up')+'</button></div>'+
      contactField(s.kind)+pwField('pass',T('pass'),'current-password')+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin:-2px 0 16px"><label class="chk" style="margin:0"><input type="checkbox" id="rem" checked>'+T('remember')+'</label><button type="button" class="linkbtn" data-act="forgot">'+T('forgot')+'</button></div>'+
      '<button class="btn btn-gold m-btn" data-act="login">'+T('go_in')+'</button>'+socials();
    return;
  }
  const dots='<div class="dots" aria-hidden="true">'+[1,2,3,4].map(i=>'<i class="'+(i<=s.step?'on':'')+'"></i>').join('')+'</div>';
  if(s.step===1){
    tt.textContent=T('a_up_t'); ts.textContent=T('a_up_s');
    b.innerHTML='<div class="tabs" role="tablist"><button role="tab" aria-selected="false" data-act="to-in">'+T('tab_in')+'</button><button role="tab" aria-selected="true">'+T('tab_up')+'</button></div>'+dots+
      '<h4 style="margin:0 0 4px;font-family:Fraunces,serif;font-size:19px">'+T('who')+'</h4><p class="hint" style="margin:0 0 12px">'+T('who_s')+'</p><div class="rolepick">'+
      Object.keys(roleInfo).map(r=>'<button type="button" class="rp" data-role-pick="'+r+'" aria-pressed="'+(s.role===r)+'"><span class="ic">'+svg(roleInfo[r][0],22)+'</span><span><b>'+T(roleInfo[r][1])+'</b><span>'+T(roleInfo[r][2])+'</span></span></button>').join('')+'</div>'+
      '<button class="btn btn-gold m-btn" style="margin-top:12px" data-act="step2">'+T('go_up')+'</button>'+socials();
    return;
  }
  if(s.step===2){
    tt.textContent=T('a_up_t'); ts.textContent=T(roleInfo[s.role][1]);
    const max=new Date(); max.setFullYear(max.getFullYear()-18);
    b.innerHTML=dots+
      '<div class="fld" id="f-name"><label for="nm">'+T('name')+'</label><input type="text" id="nm" autocomplete="name"><div class="err" id="e-name"></div></div>'+
      contactField(s.kind)+pwField('pass',T('pass'),'new-password',true)+pwField('pass2',T('pass2'),'new-password')+
      '<div class="fld" id="f-birth"><label for="birth">'+T('birth')+'</label><input type="date" id="birth" autocomplete="bday" min="1920-01-01" max="'+max.toISOString().slice(0,10)+'" ><div class="hint">'+T('birth_h')+'</div><div class="err" id="e-birth"></div></div>'+
      '<label class="chk"><input type="checkbox" id="terms"><span>'+T('terms')+'</span></label><div class="fld" id="f-terms" style="margin:-8px 0 8px"><div class="err" id="e-terms"></div></div>'+
      '<button class="btn btn-gold m-btn" data-act="submit-up">'+T('go_up')+'</button><div style="text-align:center;margin-top:10px"><button class="linkbtn" data-act="back1">'+T('back')+'</button></div>';
    const d=s.data; if(d.name) $('#nm').value=d.name; if(d.contact) $('#contact').value=d.contact; if(d.birth) $('#birth').value=d.birth;
    return;
  }
  if(s.step===3){
    tt.textContent=T('a_ver_t'); ts.textContent='';
    const c = s.kind==='phone' ? '+90 '+maskPhone(s.data.contact) : s.data.contact;
    b.innerHTML=dots+'<p style="text-align:center;color:var(--ink-soft);font-size:15px">'+tpl(T('ver_s'),{c:'<b style="color:var(--ink)">'+esc(c)+'</b>'})+'</p>'+
      '<div class="otp" id="otp">'+[0,1,2,3,4,5].map(i=>'<input inputmode="numeric" maxlength="1" aria-label="'+(i+1)+'/6" autocomplete="'+(i?'off':'one-time-code')+'">').join('')+'</div><div class="err" id="e-otp" style="text-align:center;display:none"></div>'+
      '<div class="demo">'+T('demo_code')+': <b>'+s.code+'</b></div>'+
      '<button class="btn btn-gold m-btn" data-act="verify">'+T('go_code')+'</button><div style="text-align:center;margin-top:10px"><button class="linkbtn" id="resend" data-act="resend"></button></div>';
    startResend(); wireOtp(); return;
  }
  tt.textContent=T('a_done_t'); ts.textContent='';
  b.innerHTML='<div class="ok"><div class="big">'+svg('check',40,2.4)+'</div><h3>'+esc(s.data.name.split(' ')[0])+'</h3><p>'+esc(tpl(T('done_p'),{n:s.data.name.split(' ')[0]}))+'</p><button class="btn btn-gold btn-lg m-btn" data-act="enter">'+T('go_app')+'</button></div><div class="confetti" id="conf"></div>';
  confetti();
}
function esc(s){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]); }
function confetti(){ const c=$('#conf'); if(!c) return; let h=''; for(let i=0;i<22;i++) h+='<svg viewBox="0 0 24 24" fill="currentColor" style="left:'+(Math.random()*95)+'%;animation-delay:'+(Math.random()*.8)+'s;color:'+(i%3?'var(--gold)':'var(--moss)')+'">'+IC.paw+'</svg>'; c.innerHTML=h; }
function startResend(){ clearInterval(authState.timer); let n=30; const b=$('#resend'); if(!b) return; b.disabled=true; b.textContent=tpl(T('resend_in'),{n}); authState.timer=setInterval(()=>{ n--; if(!$('#resend')){ clearInterval(authState.timer); return; } if(n<=0){ clearInterval(authState.timer); b.disabled=false; b.textContent=T('resend'); } else b.textContent=tpl(T('resend_in'),{n}); },1000); }
function wireOtp(){
  const ins=$$('#otp input');
  ins.forEach((el,i)=>{
    el.addEventListener('input',()=>{ el.value=el.value.replace(/\D/g,'').slice(-1); if(el.value&&ins[i+1]) ins[i+1].focus(); if(ins.every(x=>x.value)) verifyCode(); });
    el.addEventListener('keydown',e=>{ if(e.key==='Backspace'&&!el.value&&ins[i-1]){ ins[i-1].focus(); } });
    el.addEventListener('paste',e=>{ const t=(e.clipboardData.getData('text')||'').replace(/\D/g,'').slice(0,6); if(!t) return; e.preventDefault(); t.split('').forEach((ch,k)=>{ if(ins[k]) ins[k].value=ch; }); (ins[Math.min(t.length,5)]).focus(); if(t.length===6) verifyCode(); });
  });
  setTimeout(()=>ins[0].focus(),50);
}
function newCode(){ authState.code=String(Math.floor(100000+Math.random()*900000)); }
function fieldErr(id,msg){ const f=$('#f-'+id); if(!f) return; f.classList.toggle('bad',!!msg); const e=$('#e-'+id); if(e) e.textContent=msg||''; if(msg){ const inp=f.querySelector('input'); if(inp&&!document.querySelector('.bad input:focus')) {} } }
function firstBad(){ const f=$('#authBody .fld.bad input'); if(f) f.focus(); }
function readContact(){ const v=($('#contact')||{}).value||''; return authState.kind==='phone'?normPhone(v):v.trim(); }
function validContact(){ const v=readContact(); if(authState.kind==='email'){ if(!okEmail(v)){ fieldErr('contact',T('e_email')); return false; } } else if(!okPhone(v)){ fieldErr('contact',T('e_phone')); return false; } fieldErr('contact',''); return true; }
async function submitUp(){
  let ok=true; const name=$('#nm').value.trim(), pass=$('#pass').value, pass2=$('#pass2').value, birth=$('#birth').value;
  if(name.length<2||!/\s/.test(name)){ fieldErr('name',T('e_name')); ok=false; } else fieldErr('name','');
  if(!validContact()) ok=false;
  if(pass.length<8||!/[a-zçğıöşü]/i.test(pass)||!/\d/.test(pass)){ fieldErr('pass',T('e_pass')); ok=false; } else fieldErr('pass','');
  if(pass2!==pass||!pass2){ fieldErr('pass2',T('e_pass2')); ok=false; } else fieldErr('pass2','');
  if(!birth){ fieldErr('birth',T('e_birth')); ok=false; } else { const b=new Date(birth), n=new Date(); let age=n.getFullYear()-b.getFullYear(); const m=n.getMonth()-b.getMonth(); if(m<0||(m===0&&n.getDate()<b.getDate())) age--; if(isNaN(age)||age<18){ fieldErr('birth',T('e_age')); ok=false; } else fieldErr('birth',''); }
  if(!$('#terms').checked){ fieldErr('terms',T('e_terms')); ok=false; } else fieldErr('terms','');
  if(!ok){ firstBad(); return; }
  const contact=readContact(), acc=loadAcc();
  if(acc[keyOf(authState.kind,contact)]){ fieldErr('contact',T('e_exists')); firstBad(); return; }
  authState.data={name,contact,birth,pass}; newCode(); authState.step=3; renderAuth();
}
async function verifyCode(){
  const val=$$('#otp input').map(i=>i.value).join('');
  if(val.length<6) return;
  if(val!==authState.code){ const o=$('#otp'); o.classList.remove('bad'); void o.offsetWidth; o.classList.add('bad'); const e=$('#e-otp'); e.textContent=T('e_code'); e.style.display='block'; return; }
  const d=authState.data, salt=Math.random().toString(36).slice(2), acc=loadAcc();
  acc[keyOf(authState.kind,d.contact)]={name:d.name,kind:authState.kind,contact:d.contact,birth:d.birth,role:authState.role,salt,hash:await hash(d.pass,salt)};
  saveAcc(acc); delete authState.data.pass;
  startSession({name:d.name,contact:d.contact,kind:authState.kind,role:authState.role,birth:d.birth});
  authState.step=4; renderAuth(); setNavForSession();
}
async function doLogin(){
  const v=readContact(); let ok=true;
  if(!validContact()) ok=false;
  const pass=$('#pass').value; if(!pass){ fieldErr('pass',T('e_empty')); ok=false; } else fieldErr('pass','');
  if(!ok){ firstBad(); return; }
  const a=loadAcc()[keyOf(authState.kind,v)];
  if(!a){ fieldErr('contact',T('e_none')); firstBad(); return; }
  if(await hash(pass,a.salt)!==a.hash){ fieldErr('pass',T('e_wrong')); firstBad(); return; }
  startSession({name:a.name,contact:a.contact,kind:a.kind,role:a.role,birth:a.birth});
  authState.data={name:a.name}; authState.mode='up'; authState.step=4; renderAuth(); setNavForSession();
  const p=$('#authBody .ok p'); if(p) p.textContent=T('done_in');
}
ov.addEventListener('click',e=>{
  if(e.target===ov||e.target.closest('[data-close]')){ closeAuth(); return; }
  const k=e.target.closest('[data-kind]'); if(k){ authState.kind=k.dataset.kind; const keep={nm:($('#nm')||{}).value,b:($('#birth')||{}).value}; authState.data=Object.assign({},authState.data,{name:keep.nm,birth:keep.b}); renderAuth(); return; }
  const sh=e.target.closest('[data-show]'); if(sh){ const i=$('#'+sh.dataset.show); const h=i.type==='password'; i.type=h?'text':'password'; sh.textContent=h?T('hide'):T('show'); return; }
  const rp=e.target.closest('[data-role-pick]'); if(rp){ authState.role=rp.dataset.rolePick; $$('.rp').forEach(x=>x.setAttribute('aria-pressed',x===rp)); return; }
  const lg=e.target.closest('[data-legal]'); if(lg){ e.preventDefault(); openLegal(lg.dataset.legal); return; }
  const a=e.target.closest('[data-act]'); if(!a) return; const act=a.dataset.act;
  if(act==='to-up'){ authState.mode='up'; authState.step=1; authState.data={}; renderAuth(); }
  else if(act==='to-in'){ authState.mode='in'; authState.view='main'; renderAuth(); }
  else if(act==='forgot'){ authState.view='reset'; renderAuth(); }
  else if(act==='step2'){ authState.step=2; renderAuth(); setTimeout(()=>($('#nm')||{focus(){}}).focus(),30); }
  else if(act==='back1'){ authState.data={}; authState.step=1; renderAuth(); }
  else if(act==='submit-up') submitUp();
  else if(act==='verify') verifyCode();
  else if(act==='resend'){ newCode(); renderAuth(); toast(T('resent')); }
  else if(act==='login') doLogin();
  else if(act==='reset'){ if(validContact()){ toast(T('reset_ok')); authState.view='main'; renderAuth(); } else firstBad(); }
  else if(act==='google'){ startSession({name:'Google Kullanıcısı',contact:'google',kind:'email',role:authState.role,demo:true}); authState.data={name:lang==='tr'?'Misafir Kullanıcı':'Guest User'}; authState.mode='up'; authState.step=4; renderAuth(); setNavForSession(); }
  else if(act==='demo'){ startSession({name:lang==='tr'?'Demo Kullanıcı':'Demo User',contact:'demo',kind:'email',role:authState.role||'owner',demo:true}); goApp(); }
  else if(act==='enter') goApp();
});
ov.addEventListener('input',e=>{
  if(e.target.id==='pass'&&$('#meter')){ const s=strength(e.target.value); $('#meter').dataset.s=s; $('#meterT').textContent=s?T('str')[s]:' '; }
  if(e.target.id==='contact'&&authState.kind==='phone'){ e.target.value=maskPhone(e.target.value); }
  const f=e.target.closest('.fld'); if(f&&f.classList.contains('bad')) f.classList.remove('bad');
});
ov.addEventListener('keydown',e=>{ if(e.key==='Enter'&&e.target.tagName==='INPUT'&&e.target.type!=='checkbox'&&!e.target.closest('#otp')){ e.preventDefault(); const p=$('#authBody [data-act="login"],#authBody [data-act="submit-up"],#authBody [data-act="reset"],#authBody [data-act="step2"]'); if(p) p.click(); } });

/* legal modal */
const lov=$('#legalOv');
function openLegal(k){ const L=D[lang].leg[k]; $('#legalTitle').textContent=L[0]; $('#legalBody').innerHTML='<p>'+L[1]+'</p>'; lov.classList.add('open'); document.body.style.overflow='hidden'; }
function closeLegal(){ lov.classList.remove('open'); document.body.style.overflow = authState.open?'hidden':''; }
lov.addEventListener('click',e=>{ if(e.target===lov||e.target.closest('[data-close]')) closeLegal(); });
addEventListener('keydown',e=>{ if(e.key==='Escape'){ if(lov.classList.contains('open')) closeLegal(); else if(authState.open) closeAuth(); else closeMenu(); } if(e.key==='Tab'&&authState.open&&!lov.classList.contains('open')){ const f=$$('#authModal button:not([disabled]),#authModal input:not([disabled]),#authModal a[href]').filter(x=>x.offsetParent); if(!f.length) return; const a=f[0], z=f[f.length-1]; if(e.shiftKey&&document.activeElement===a){ e.preventDefault(); z.focus(); } else if(!e.shiftKey&&document.activeElement===z){ e.preventDefault(); a.focus(); } } });

/* global triggers */
document.addEventListener('click',e=>{
  const lg=e.target.closest('[data-legal]'); if(lg&&!ov.contains(lg)){ e.preventDefault(); openLegal(lg.dataset.legal); return; }
  const g=e.target.closest('[data-go="app"]'); if(g){ goApp(); return; }
  const b=e.target.closest('[data-auth]'); if(!b||!b.dataset.auth) return;
  e.preventDefault(); openAuth(b.dataset.auth,b.dataset.role);
});

Object.assign(D.tr,{"nv_search": "Bakıcı ara", "nv_sitter": "Bakıcı ol", "nv_trainer": "Eğitmen ol", "nv_signup": "Kayıt ol", "nv_signin": "Giriş yap", "nv_help": "Yardım", "hq": "Nasıl bir evcil hayvan bakımı arıyorsun?", "hsub": "Doğrulanmış bakıcılar, emanetli ödeme, günlük fotoğraf raporu.", "svc_boarding": "Konaklama", "svc_housesitting": "Evde bakım", "svc_dropin": "Ev ziyareti", "svc_daycare": "Gündüz bakımı", "svc_walking": "Gezdirme", "svc_training": "Eğitim", "svc_group": "Hizmet türü", "addr_ph": "Adresini gir (mahalle, ilçe…)", "addr_l": "Adresin", "srch": "Ara", "home_more": "Pawcation hakkında daha fazlası", "home_more_b": "Misyonumuz ve güvenlik", "ab_h": "Pawcation hakkında", "ab_p": "Misyonumuz, güvenlik önlemlerimiz ve nasıl kazandığımız.", "hp_h": "Yardım merkezi", "hp_p": "Sık sorulan sorular ve bize ulaşma yolları.", "hp_c_h": "Hâlâ yanıt bulamadın mı?", "hp_c_p": "Bize yaz, en kısa sürede dönelim. (Demo: bu adres henüz gerçek bir gelen kutusuna bağlı değil.)", "hp_c_b": "E-posta gönder", "title_home": "Pawcation — Evden uzakta bir yuva", "title_about": "Pawcation — Hakkımızda", "title_help": "Pawcation — Yardım", "bs_h1": "Hayvan sevgini gelire çevir", "bs_sub": "Pawcation rezervasyon, ödeme ve hatırlatmaları halleder; profilini yakınındaki evcil hayvan sahiplerine gösterir. Sevdiğin bir işi yaparak para kazan.", "bs_c1h": "Takvim de fiyat da senin elinde", "bs_c1a": "Kendi fiyatlarını belirle", "bs_c1b": "Müsait olduğun günleri işaretle, kalanını kapat", "bs_c1c": "Sana uyan talepleri kabul et, diğerlerini geç", "bs_c1d": "İstersen gezdirme ve ev ziyareti gibi gün içi hizmetler ekle", "bs_c2h": "Başarılı olman için gereken her şey", "bs_c2a": "Konaklama bitene kadar emanette tutulan güvenli ödeme", "bs_c2b": "Sahiplere fotoğraflı günlük rapor", "bs_c2c": "Hazır yanıtlar ve çeviriyle mesajlaşma", "bs_c2d": "Daha fazla sahibe ulaşmak için profilini öne çıkar", "bs_c2e": "Güven veren yorumlar ve Süper bakıcı rozeti", "bs_q1": "Müsaitliğimi ayarlamak bir dakika sürüyor. Takvimi açıp boş olduğum günleri işaretliyorum, bu kadar.", "bs_q2": "Aynı anda bir iki hayvana bakıyorum, o yüzden hepsiyle gerçekten ilgilenebiliyorum. İş gibi hissettirmiyor.", "bs_qn1": "Örnek bakıcı · Kadıköy", "bs_qn2": "Örnek bakıcı · Çankaya", "bs_sample": "Örnek yorum", "bs_how": "Nasıl çalışır", "bs_s1": "Profilini oluştur", "bs_s1p": "Evinin fotoğraflarını, deneyimini ve fiyatlarını ekle.", "bs_s2": "Talepleri kabul et", "bs_s2p": "Sahiplerle yaz, önce tanış, sana uyanlara evet de.", "bs_s3": "Ödemeni al", "bs_s3p": "Ödeme güvenle tutulur, konaklama bitince sana aktarılır.", "bs_go": "Başla", "bs_sv": "Hizmetler", "bs_sv1": "Konaklama", "bs_sv1p": "Bir köpek ya da kediye kendi evinde, geceleri bak.", "bs_pop": "Popüler", "bs_sv2": "Köpek gezdirme", "bs_sv2p": "Gününe uyan yürüyüşleri üstlen.", "bs_sv3": "Gündüz bakımı", "bs_sv3p": "Çalışırken hayvanını bırakmak isteyen sahipler için gündüz bakımı.", "bs_soon": "Yakında", "bs_sv4": "Evde bakım, ev ziyareti", "bs_sv4p": "Hayvanların kendi evinde onlarla kal ya da uğrayıp bak.", "bs_sv5": "Köpek eğitimi", "bs_sv5p": "Eğitmenler için özel seanslar.", "bs_sv5l": "Eğitmen ol", "bs_sf": "Önce güvenlik", "bs_sfp": "Kuyruklar sallansın, sahiplerin içi rahat olsun diye çalışıyoruz.", "bs_sf1": "Ödeme, konaklama bitene kadar emanette tutulur", "bs_sf2": "Bakıcılar kimlik doğrulama adımından geçer", "bs_sf3": "Kendi seçtiğin net bir iptal politikası", "bs_sf4": "Ekstra güvence için Pawcation Protect", "bs_sf5": "Bir sorun çıkarsa destek ekibi yanında", "bs_end": "Profilin onaylanınca evcil hayvan sahipleriyle buluş", "bs_end_b": "Profilini oluşturmaya başla", "title_bs": "Pawcation — Bakıcı ol", "bt_h1": "Eğitim becerini işe çevir", "bt_sub": "Pawcation evcil hayvan sahiplerini sana getirir; rezervasyon, ödeme ve mesajlaşmayı halleder. Sen en iyi yaptığın işe odaklan. Sevdiğin işi yaparak para kazan.", "bt_c1h": "Takvim senin, yöntem senin", "bt_c1a": "Seans ücretlerini kendin belirle", "bt_c1b": "Müsait olduğun günleri işaretle, kalanını kapat", "bt_c1c": "Sana uyan talepleri kabul et, diğerlerini geç", "bt_c1d": "Tek seanslık ya da çok seanslı programlar sun", "bt_c2h": "Müşterilerini yönetmek için her şey", "bt_c2a": "Seanslar bitene kadar emanette tutulan güvenli ödeme", "bt_c2b": "Hazır yanıtlar ve çeviriyle mesajlaşma", "bt_c2c": "Sertifikalarını ve deneyimini profilinde göster", "bt_c2d": "Daha fazla sahibe ulaşmak için profilini öne çıkar", "bt_c2e": "Güven veren yorumlar", "bt_q1": "Takvimimi kendim ayarlıyorum, sadece uyan seanslara evet diyorum. Müşteri bulmak için ayrıca uğraşmıyorum.", "bt_q2": "Seans ücretini ben belirliyorum ve ödeme güvende bekliyor. Hayvanla çalışmaya odaklanabiliyorum.", "bt_qn1": "Örnek eğitmen · Beşiktaş", "bt_qn2": "Örnek eğitmen · Çankaya", "bt_s1": "Profilini oluştur", "bt_s1p": "Deneyimini, sertifikalarını ve seans ücretlerini ekle.", "bt_s2": "Talepleri kabul et", "bt_s2p": "Sahiplerle yaz, ihtiyacı anla, sana uyanlara evet de.", "bt_s3": "Ödemeni al", "bt_s3p": "Ödeme güvenle tutulur, seanslar tamamlanınca sana aktarılır.", "bt_sv": "Eğitim türleri", "bt_sv1": "Birebir seanslar", "bt_sv1p": "Müşterinin evinde ya da mahallesinde özel eğitim.", "bt_sv2": "Temel itaat ve yavru eğitimi", "bt_sv2p": "Otur, bekle, gel ve tasma yürüyüşü gibi temel beceriler.", "bt_sv3": "Davranış desteği", "bt_sv3p": "Çekme, havlama ve ayrılık kaygısı gibi sorunlarda destek.", "bt_sv4": "Grup dersleri", "bt_sv4p": "Aynı anda birkaç köpekle çalışan sınıflar.", "bt_sf1": "Ödeme, seanslar bitene kadar emanette tutulur", "bt_sf2": "Sertifikalarını ve deneyimini profilinde gösterirsin", "bt_sf3": "Kendi seçtiğin net bir iptal politikası", "bt_sf4": "Bir sorun çıkarsa destek ekibi yanında", "bt_end": "Profilin onaylanınca evcil hayvan sahipleriyle buluş", "bt_end_b": "Eğitmen profilini oluştur", "title_bt": "Pawcation — Eğitmen ol"}); Object.assign(D.en,{"nv_search": "Search for a sitter", "nv_sitter": "Become a sitter", "nv_trainer": "Become a trainer", "nv_signup": "Sign up", "nv_signin": "Sign in", "nv_help": "Help", "hq": "What kind of pet care are you looking for?", "hsub": "Verified sitters, escrow payment, daily photo reports.", "svc_boarding": "Boarding", "svc_housesitting": "House sitting", "svc_dropin": "Drop-in visit", "svc_daycare": "Doggy day care", "svc_walking": "Dog walking", "svc_training": "Dog training", "svc_group": "Type of care", "addr_ph": "Enter your address (neighborhood, district…)", "addr_l": "Your address", "srch": "Search", "home_more": "Learn more about Pawcation", "home_more_b": "Our mission and safety", "ab_h": "About Pawcation", "ab_p": "Our mission, how we keep pets safe and how we earn.", "hp_h": "Help center", "hp_p": "Common questions and ways to reach us.", "hp_c_h": "Still can't find an answer?", "hp_c_p": "Write to us and we'll get back to you soon. (Demo: this address isn't connected to a real inbox yet.)", "hp_c_b": "Send an email", "title_home": "Pawcation — A home away from home", "title_about": "Pawcation — About", "title_help": "Pawcation — Help", "bs_h1": "Turn your love of pets into income", "bs_sub": "Pawcation takes care of bookings, payments and reminders, and puts your profile in front of pet owners near you. Earn money doing something you love.", "bs_c1h": "Your calendar, your prices", "bs_c1a": "Set your own prices", "bs_c1b": "Mark the days you're free and block the rest", "bs_c1c": "Accept the requests that suit you and pass on the others", "bs_c1d": "Add day services like walks and drop-in visits whenever you like", "bs_c2h": "Everything you need to do well", "bs_c2a": "Secure payment held until the stay is finished", "bs_c2b": "Daily photo reports for owners", "bs_c2c": "Chat with quick replies and translation", "bs_c2d": "Boost your profile to reach more owners", "bs_c2e": "Reviews and a Super sitter badge that build trust", "bs_q1": "Setting my availability takes a minute. I open the calendar, mark the days I'm free, and that's it.", "bs_q2": "I look after one or two pets at a time, so every one of them gets real attention. It never feels like work.", "bs_qn1": "Sample sitter · Kadıköy", "bs_qn2": "Sample sitter · Çankaya", "bs_sample": "Sample quote", "bs_how": "How it works", "bs_s1": "Create your profile", "bs_s1p": "Add photos of your home, your experience and your prices.", "bs_s2": "Accept requests", "bs_s2p": "Chat with owners, meet first and say yes to the ones that fit.", "bs_s3": "Get paid", "bs_s3p": "Payment is held safely and released to you when the stay is complete.", "bs_go": "Get started", "bs_sv": "Services", "bs_sv1": "Boarding", "bs_sv1p": "Look after a dog or cat overnight in your own home.", "bs_pop": "Popular", "bs_sv2": "Dog walking", "bs_sv2p": "Take walks that fit around your day.", "bs_sv3": "Doggy day care", "bs_sv3p": "Daytime care for dogs whose owners are at work.", "bs_soon": "Coming soon", "bs_sv4": "House sitting, drop-in visits", "bs_sv4p": "Stay with pets, or check in on them, in their own homes.", "bs_sv5": "Dog training", "bs_sv5p": "Private sessions for trainers.", "bs_sv5l": "Become a trainer", "bs_sf": "Safety comes first", "bs_sfp": "We work to keep tails wagging and owners at ease.", "bs_sf1": "Payment is held in escrow until the stay ends", "bs_sf2": "Sitters go through an ID verification step", "bs_sf3": "A clear cancellation policy that you choose", "bs_sf4": "Pawcation Protect for extra peace of mind", "bs_sf5": "Support on hand if something goes wrong", "bs_end": "Connect with pet owners once your profile is approved", "bs_end_b": "Start creating your profile", "title_bs": "Pawcation — Become a sitter", "bt_h1": "Turn your training skills into a business", "bt_sub": "Pawcation brings pet owners to you and handles bookings, payments and messages, so you can focus on what you do best. Earn money doing something you love.", "bt_c1h": "Your schedule, your methods", "bt_c1a": "Set your own session prices", "bt_c1b": "Mark the days you're free and block the rest", "bt_c1c": "Accept the requests that suit you and pass on the others", "bt_c1d": "Offer single sessions or multi-session programmes", "bt_c2h": "Everything to run your clients", "bt_c2a": "Secure payment held until sessions are complete", "bt_c2b": "Chat with quick replies and translation", "bt_c2c": "Show your certifications and experience on your profile", "bt_c2d": "Boost your profile to reach more owners", "bt_c2e": "Reviews that build trust", "bt_q1": "I set my own calendar and only say yes to sessions that fit. I don't have to chase clients.", "bt_q2": "I decide my session price and the payment waits safely. I can just focus on working with the animals.", "bt_qn1": "Sample trainer · Beşiktaş", "bt_qn2": "Sample trainer · Çankaya", "bt_s1": "Create your profile", "bt_s1p": "Add your experience, certifications and session prices.", "bt_s2": "Accept requests", "bt_s2p": "Chat with owners, understand the need, say yes to the right ones.", "bt_s3": "Get paid", "bt_s3p": "Payment is held safely and released to you when the sessions are done.", "bt_sv": "What you can teach", "bt_sv1": "One-to-one sessions", "bt_sv1p": "Private training at the client's home or around the neighborhood.", "bt_sv2": "Puppy and basic obedience", "bt_sv2p": "Sit, stay, come and loose-leash walking.", "bt_sv3": "Behaviour support", "bt_sv3p": "Help with pulling, barking and separation anxiety.", "bt_sv4": "Group classes", "bt_sv4p": "Classes that work with several dogs at once.", "bt_sf1": "Payment is held in escrow until the sessions are done", "bt_sf2": "You show your certifications and experience on your profile", "bt_sf3": "A clear cancellation policy that you choose", "bt_sf4": "Support on hand if something goes wrong", "bt_end": "Connect with pet owners once your profile is approved", "bt_end_b": "Create your trainer profile", "title_bt": "Pawcation — Become a trainer"});
Object.assign(IC,{arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'});
paintIcons(); applyLang(); observeReveals();
/* ---------------- home hero: service + address search ---------------- */
(function(){
  const f=$('#heroForm'); if(!f) return;
  let svc='boarding';
  const btns=$$('#svc [data-svc]');
  function pick(k,focus){ svc=k; btns.forEach(b=>{ const on=b.dataset.svc===k; b.setAttribute('aria-checked',on); b.tabIndex=on?0:-1; b.classList.toggle('on',on); if(on&&focus) b.focus(); }); }
  btns.forEach((b,i)=>{
    b.addEventListener('click',()=>pick(b.dataset.svc));
    b.addEventListener('keydown',e=>{ const k=e.key; if(['ArrowRight','ArrowDown','ArrowLeft','ArrowUp'].includes(k)){ e.preventDefault(); const d=(k==='ArrowRight'||k==='ArrowDown')?1:-1; pick(btns[(i+d+btns.length)%btns.length].dataset.svc,true); } });
  });
  pick('boarding');
  try{ const a=localStorage.getItem('pawcation.addr'); if(a) $('#addr').value=a; }catch(e){}
  f.addEventListener('submit',e=>{
    e.preventDefault(); const a=$('#addr').value.trim();
    try{ localStorage.setItem('pawcation.addr',a); localStorage.setItem('pawcation.lang',lang); }catch(x){}
    location.href='app.html?demo=1&svc='+svc+'&addr='+encodeURIComponent(a)+'&lang='+lang;
  });
  if(location.hash==='#search') setTimeout(()=>{ const a=$('#addr'); if(a) a.focus({preventScroll:true}); },400);
})();
/* “Search for a sitter” on the home page scrolls to the search box and focuses it */
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-nav="search"]'); if(!a||!$('#heroForm')) return;
  e.preventDefault(); closeMenu(); window.scrollTo({top:0,behavior:'smooth'}); setTimeout(()=>$('#addr').focus({preventScroll:true}),350);
});

if(location.hash==='#giris') openAuth('in'); if(location.hash==='#kayit') openAuth('up');
