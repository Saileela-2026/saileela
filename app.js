/* ============ Saileela Store — shared app.js ============ */
document.documentElement.classList.add('js');

/* ---------- SVG motif library (respectful, non-figurative) ---------- */
const ICON = {
  diya:'<svg viewBox="0 0 80 80" fill="none"><path d="M18 42c0 12 10 18 22 18s22-6 22-18c-6 6-16 8-22 8s-16-2-22-8Z" fill="#2A2016"/><path d="M40 44c-8-6 2-14-2-24 10 8 14 18 2 24Z" fill="#E0A32E"/><path d="M40 40c-4-4 1-8-1-13 5 4 7 9 1 13Z" fill="#EBCF86"/></svg>',
  mala:'<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="22" stroke="#2A2016" stroke-width="2" stroke-dasharray="1 6" stroke-linecap="round"/><circle cx="40" cy="18" r="5" fill="#E0A32E"/><path d="M40 62v10" stroke="#2A2016" stroke-width="2"/><circle cx="40" cy="74" r="3" fill="#B18E3E"/></svg>',
  book:'<svg viewBox="0 0 80 80" fill="none"><path d="M18 20h20a4 4 0 0 1 4 4v34H22a4 4 0 0 1-4-4V20Z" fill="#2A2016"/><path d="M62 20H42a4 4 0 0 0-4 4v34h20a4 4 0 0 0 4-4V20Z" fill="#A82D22"/><path d="M26 30h10M26 38h10" stroke="#EBCF86" stroke-width="2" stroke-linecap="round"/></svg>',
  frame:'<svg viewBox="0 0 80 80" fill="none"><rect x="20" y="16" width="40" height="48" rx="3" fill="#2A2016"/><rect x="27" y="23" width="26" height="34" rx="2" fill="#FCF5E1"/><text x="40" y="46" text-anchor="middle" fill="#B18E3E" font-family="Tiro Devanagari Hindi" font-size="18">ॐ</text></svg>',
  incense:'<svg viewBox="0 0 80 80" fill="none"><path d="M30 64h20M34 24v40M40 20v44M46 24v40" stroke="#2A2016" stroke-width="2.4" stroke-linecap="round"/><circle cx="34" cy="22" r="3" fill="#E0A32E"/><circle cx="40" cy="18" r="3" fill="#E0A32E"/><circle cx="46" cy="22" r="3" fill="#E0A32E"/></svg>',
  kalash:'<svg viewBox="0 0 80 80" fill="none"><path d="M28 36c-2 12 4 26 12 26s14-14 12-26Z" fill="#2A2016"/><path d="M26 34h28l-4-6H30Z" fill="#B18E3E"/><path d="M40 28c-3-6 3-6 0-12-3 6 3 6 0 12Z" fill="#E0A32E"/><path d="M34 46h12" stroke="#EBCF86" stroke-width="2" stroke-linecap="round"/></svg>',
  shawl:'<svg viewBox="0 0 80 80" fill="none"><path d="M20 22c8 6 32 6 40 0l-4 40c-12 4-20 4-32 0Z" fill="#E0A32E"/><path d="M24 26v32M56 26v32" stroke="#B18E3E" stroke-width="2"/><path d="M26 58h28" stroke="#2A2016" stroke-width="2" stroke-dasharray="2 3"/></svg>',
  hamper:'<svg viewBox="0 0 80 80" fill="none"><rect x="20" y="34" width="40" height="26" rx="3" fill="#2A2016"/><path d="M18 34h44v6H18z" fill="#B18E3E"/><path d="M40 34V22m-8 12c0-8 4-12 8-12s8 4 8 12" stroke="#E0A32E" stroke-width="2.4" fill="none"/><path d="M40 40v20" stroke="#EBCF86" stroke-width="2"/></svg>',
  palki:'<svg viewBox="0 0 80 80" fill="none"><path d="M22 40h36l-4 16H26Z" fill="#2A2016"/><path d="M18 40h44l-4-8H22Z" fill="#B18E3E"/><path d="M40 32V22" stroke="#E0A32E" stroke-width="2.4"/><path d="M32 22c0-6 16-6 16 0" stroke="#E0A32E" stroke-width="2.4" fill="none"/><path d="M20 56v6M60 56v6" stroke="#2A2016" stroke-width="2.4"/></svg>',
  lotus:'<svg viewBox="0 0 80 80" fill="none"><path d="M40 52c-14 0-24-8-24-8 6-2 10-2 14 0-4-6-2-14-2-14 6 4 10 10 12 16 2-6 6-12 12-16 0 0 2 8-2 14 4-2 8-2 14 0 0 0-10 8-24 8Z" fill="#E0A32E"/><path d="M40 52c-6 0-10-2-10-2 0-6 4-12 10-16 6 4 10 10 10 16 0 0-4 2-10 2Z" fill="#2A2016"/></svg>',
  pin:'<svg viewBox="0 0 80 80" fill="none"><path d="M40 10c-13 0-23 10-23 23 0 17 23 37 23 37s23-20 23-37c0-13-10-23-23-23Z" fill="#2A2016"/><circle cx="40" cy="33" r="11" fill="#FCF5E1"/><path d="M40 26c-1.5 3-3 4-5 4.4 2 .6 3.5 2 5 4.6 1.5-2.6 3-4 5-4.6-2-.4-3.5-1.4-5-4.4Z" fill="#E0A32E"/></svg>',
  hands:'<svg viewBox="0 0 80 80" fill="none"><path d="M40 16c-6 10-16 16-22 30-2 5 2 8 6 8h16Z" fill="#2A2016"/><path d="M40 16c6 10 16 16 22 30 2 5-2 8-6 8H40Z" fill="#A82D22"/><path d="M40 16v46" stroke="#EBCF86" stroke-width="1.4"/><path d="M32 62h16" stroke="#B18E3E" stroke-width="3" stroke-linecap="round"/></svg>',
  care:'<svg viewBox="0 0 80 80" fill="none"><rect x="22" y="36" width="36" height="26" rx="3" fill="#2A2016"/><path d="M20 36h40v6H20z" fill="#B18E3E"/><path d="M40 36v26" stroke="#EBCF86" stroke-width="1.4"/><path d="M40 32c-2-4-9-4-9 1.5 0 4.5 9 8.5 9 8.5s9-4 9-8.5C49 28 42 28 40 32Z" fill="#E0A32E"/></svg>',
  tv:'<svg viewBox="0 0 80 80" fill="none"><rect x="16" y="22" width="48" height="34" rx="5" fill="#2A2016"/><rect x="21" y="27" width="38" height="24" rx="2" fill="#FCF5E1"/><path d="M36 33v12l11-6z" fill="#E0A32E"/><path d="M30 62h20M40 56v6" stroke="#B18E3E" stroke-width="2.6" stroke-linecap="round"/></svg>'
};
const tint=i=>'';   /* niches styled in CSS */

/* ================= DATA LAYER (localStorage + JSON export/import) ================= */
const DEFAULT_PRODUCTS=[
  {id:'sagunopasna-kit',n:'Shree Sai Sagunopasna Kit',p:2499,o:2999,icon:'hamper',cat:'Pooja Samagri',r:5.0,c:0,badge:'Bestseller',stock:25,active:true,excl:true,featured:true,
   img:'sagunopasna-kit-box-v3.jpg',
   images:['sagunopasna-kit-box-v3.jpg','sagunopasna-kit-box-2-v3.jpg','kit-murti-2.jpg','kit-mukut-2.jpg','kit-vastra-red-2.jpg','kit-vastra-pink-2.jpg','kit-kalash-2.jpg','kit-katori-2.jpg','kit-diya-2.jpg','kit-agarbatti-stand-2.jpg','kit-bell-2.jpg','kit-mala.jpg','kit-dhaga.jpg','kit-itra.jpg','kit-chandan-tika-2.jpg','kit-chandan-agarbatti-2.jpg'],
   contents:['Marble Sai Baba Murti','Decorative Mukut (crown)','Vastra — 2 pieces','Brass Kalash','Brass Katori','Brass Diya','Brass Agarbatti Stand','Brass Ghanti (hand bell)','Tulsi Mala','Sacred Dhaga','Kesariya Chandan Itra','Sai Chandan Tika','Sai Chandan Agarbatti','Shree Sai Sagunopasna Pustika','Shree Sainath Stavanmanjiri'],
   desc:'A thoughtfully curated devotional kit for performing Shree Sai Sagunopasana with श्रद्धा and devotion. Ideal for daily worship, special occasions and gifting to Sai devotees. Every item is chosen by hand and carefully packed in Shirdi.'},
  {id:'divya-darshan-kit',n:'Shree Sai Divya Darshan Kit',p:1599,o:2100,icon:'hamper',cat:'Pooja Samagri',r:5.0,c:0,badge:'Bestseller',stock:30,active:true,excl:true,
   img:'divya-darshan-box.jpg',
   images:['divya-darshan-box.jpg','kit-murti-2.jpg','kit-mukut-2.jpg','kit-vastra-red-2.jpg','kit-vastra-pink-2.jpg','kit-mala.jpg','kit-dhaga.jpg','kit-itra.jpg','kit-chandan-tika-2.jpg','kit-chandan-agarbatti-2.jpg'],
   contents:['Marble Sai Baba Murti','Decorative Mukut (crown)','Vastra — 2 pieces','Tulsi Mala','Sacred Dhaga','Kesariya Chandan Itra','Sai Chandan Tika','Sai Chandan Agarbatti','Shree Sai Sagunopasna Pustika','Shree Sainath Stavanmanjiri'],
   desc:'A Saileela Exclusive and Best Seller devotional kit designed to bring a divine Shirdi-inspired worship experience into your home. It contains the same devotional items as the Shree Sai Sagunopasna Kit, excluding all five brass pooja pots.'},
  {id:'divya-swaroop-kit',n:'Shree Sai Divya Swaroop Kit',p:1199,o:1600,icon:'kalash',cat:'Idols',r:5.0,c:0,badge:'Bestseller',stock:30,active:true,excl:true,
   img:'divya-swaroop-box-v2.jpg',
   images:['divya-swaroop-box-v2.jpg','swaroop-idol.jpg','swaroop-vastra-1.jpg','swaroop-vastra-2.jpg','swaroop-mala.jpg','swaroop-mukut.jpg'],
   contents:['Shree Saibaba Idol','Vastra','Tulsi Mala','Decorative Mukut (crown)'],
   desc:'A Saileela Exclusive and Best Seller kit featuring a beautiful Shree Saibaba idol with Vastra, Mala and Mukut. A complete divine swaroop for your home temple, daily darshan and spiritual gifting.'},
  {id:'sai-akash-jyoti',n:'Shree Sai Akash Jyoti',p:1199,o:1500,icon:'frame',cat:'Gifting',r:5.0,c:0,badge:'Bestseller',stock:40,active:true,excl:true,
   img:'sai-jyoti-lit-1.jpg',
   images:['sai-jyoti-lit-1.jpg','sai-jyoti-lit-2.jpg'],
   desc:'A beautifully illuminated decorative lantern featuring divine images of Shree Saibaba on multiple sides. This Saileela Exclusive and Best Seller fills your home temple or prayer space with warm light and an uplifting devotional ambience.'},
  {id:'divya-ganesh-jyoti',n:'Shree Divya Ganesh Jyoti',p:1199,o:1500,icon:'frame',cat:'Gifting',r:5.0,c:0,badge:'Bestseller',stock:40,active:true,excl:true,
   img:'ganesh-jyoti-lit-1.jpg',
   images:['ganesh-jyoti-lit-1.jpg','ganesh-jyoti-lit-2.jpg','ganesh-jyoti-lit-3.jpg'],
   desc:'An illuminated decorative Jyoti featuring divine images of Shree Ganesh on multiple sides. This Saileela Exclusive and Best Seller creates a warm, auspicious ambience for home temples, festive décor and spiritual gifting.'},
  {id:'ram-jyoti',n:'Shree Ram Jyoti Akashdeep',p:1199,o:1500,icon:'frame',cat:'Gifting',r:5.0,c:0,badge:'Bestseller',stock:40,active:true,excl:true,
   img:'ram-jyoti-lit-1.jpg',
   images:['ram-jyoti-lit-1.jpg','ram-jyoti-lit-2.jpg'],
   desc:'A beautifully illuminated devotional Akashdeep featuring divine images of Prabhu Shree Ram and Shree Ram Darbar on multiple sides. This Saileela Exclusive and Best Seller brings a warm, auspicious glow to your home, temple and festive celebrations.'},
  {id:'agar-stavan',n:'Sai Tattva Agarbatti — Stavan',p:220,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-stavan.jpg',images:['agar-stavan.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Stavan incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-amrut',n:'Sai Tattva Agarbatti — Amrut',p:220,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-amrut.jpg',images:['agar-amrut.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Amrut incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-chandan',n:'Sai Tattva Agarbatti — Chandan',p:220,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-chandan.jpg',images:['agar-chandan.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Chandan incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-vibhuti',n:'Sai Tattva Agarbatti — Vibhuti',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-vibhuti.jpg',images:['agar-vibhuti.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Vibhuti incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-tirth',n:'Sai Tattva Agarbatti — Tirth',p:95,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-tirth.jpg',images:['agar-tirth.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Tirth incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-tilak',n:'Sai Tattva Agarbatti — Tilak',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-tilak.jpg',images:['agar-tilak.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Tilak incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-kalash',n:'Sai Tattva Agarbatti — Kalash',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-kalash.jpg',images:['agar-kalash.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Kalash incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-kasturi',n:'Sai Tattva Agarbatti — Kasturi',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-kasturi.jpg',images:['agar-kasturi.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Kasturi incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-lavender',n:'Sai Tattva Agarbatti — Lavender',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-lavender.jpg',images:['agar-lavender.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Lavender incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-loban',n:'Sai Tattva Agarbatti — Loban',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-loban.jpg',images:['agar-loban.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Loban incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-mogra',n:'Sai Tattva Agarbatti — Mogra',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-mogra.jpg',images:['agar-mogra.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Mogra incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-parikrama',n:'Sai Tattva Agarbatti — Parikrama 4-in-1',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-parikrama.jpg',images:['agar-parikrama.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Parikrama 4-in-1 incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-pineapple',n:'Sai Tattva Agarbatti — Pineapple',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-pineapple.jpg',images:['agar-pineapple.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Pineapple incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'agar-sairose',n:'Sai Tattva Agarbatti — Sai Rose',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,weight:250,img:'agar-sairose.jpg',images:['agar-sairose.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — premium Sai Rose incense sticks in a 250 gm jar, for daily pooja and a fragrant, devotional home.'},
  {id:'masala-samadhi',n:'Sai Tattva Natural Masala — Samadhi',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,img:'masala-samadhi.jpg',images:['masala-samadhi.jpg','masala-samadhi-2.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — Samadhi natural masala incense sticks from the Shirdi Sai Baba collection, hand-rolled for a rich, long-lasting devotional fragrance.'},
  {id:'masala-chavadi',n:'Sai Tattva Natural Masala — Chavadi',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,img:'masala-chavadi.jpg',images:['masala-chavadi.jpg','masala-chavadi-2.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — Chavadi natural masala incense sticks from the Shirdi Sai Baba collection, hand-rolled for a rich, long-lasting devotional fragrance.'},
  {id:'masala-dwarkamai',n:'Sai Tattva Natural Masala — Dwarkamai',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,img:'masala-dwarkamai.jpg',images:['masala-dwarkamai.jpg','masala-dwarkamai-2.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — Dwarkamai natural masala incense sticks from the Shirdi Sai Baba collection, hand-rolled for a rich, long-lasting devotional fragrance.'},
  {id:'masala-gurusthan',n:'Sai Tattva Natural Masala — Gurusthan',p:250,o:null,icon:'incense',cat:'Pooja Samagri',subcat:'Incense Stick',r:5.0,c:0,badge:'',stock:100,active:true,img:'masala-gurusthan.jpg',images:['masala-gurusthan.jpg','masala-gurusthan-2.jpg'],desc:'Sai Tattva ‘Sugandh Shirdi Ki’ — Gurusthan natural masala incense sticks from the Shirdi Sai Baba collection, hand-rolled for a rich, long-lasting devotional fragrance.'},

  /* ===== Ashtagandh (Tika) — subcategory under Pooja Samagri ===== */
  {id:'sba-010-hd-white-tika',n:'Hari Darshan White Chandan Tika',p:40,o:null,icon:'care',cat:'Pooja Samagri',subcat:'Ashtagandh (Tika)',r:5.0,c:0,badge:'',stock:100,active:true,weight:40,img:'sba-010-white-1.jpg',images:['sba-010-white-1.jpg','sba-010-white-2.jpg'],desc:'Hari Darshan safed (white) chandan tika in a handy 40 gm jar — a smooth, ready-to-apply tilak for daily pooja, aarti and festive occasions.'},
  {id:'sba-011-hd-yellow-tika',n:'Hari Darshan Yellow Chandan Tika',p:40,o:null,icon:'care',cat:'Pooja Samagri',subcat:'Ashtagandh (Tika)',r:5.0,c:0,badge:'',stock:100,active:true,weight:40,img:'sba-011-yellow-1.jpg',images:['sba-011-yellow-1.jpg','sba-011-yellow-2.jpg'],desc:'Hari Darshan peela (yellow) shuddh kumkum chandan tika in a 40 gm jar — a smooth, ready-to-apply tilak for daily pooja, aarti and festive occasions.'},
  {id:'sba-017-shivika-red-tika',n:'Shivika Kasturi Chandan Tilak — Red',p:98,o:null,icon:'care',cat:'Pooja Samagri',subcat:'Ashtagandh (Tika)',r:5.0,c:0,badge:'',stock:70,active:true,weight:70,img:'sba-017-red.jpg',images:['sba-017-red.jpg'],desc:'Shivika kasturi chandan tilak with kesar and ashtagandh, in a 70 gm jar. A rich red tilak intended for pooja and worship.'},
  {id:'sba-020-shivika-sandalwood-tika',n:'Shivika Sandal Wood Chandan Tilak',p:98,o:null,icon:'care',cat:'Pooja Samagri',subcat:'Ashtagandh (Tika)',r:5.0,c:0,badge:'',stock:70,active:true,weight:70,img:'sba-020-sandalwood.jpg',images:['sba-020-sandalwood.jpg'],desc:'Shivika sandal wood chandan tilak in a 70 gm jar — a fragrant natural-toned tilak for pooja and worship.'},
  {id:'sba-026-krushnamurari-kesari-tika',n:'Krushnamurari Kesari Chandan Tika',p:125,o:null,icon:'care',cat:'Pooja Samagri',subcat:'Ashtagandh (Tika)',r:5.0,c:0,badge:'',stock:70,active:true,weight:70,img:'sba-026-kesari.jpg',images:['sba-026-kesari.jpg'],desc:'Krushnamurari “Pandit Ji” kesari chandan tika in a 70 gm jar — a premium saffron-toned tilak for daily pooja, aarti and festive worship.'}
];
const DEFAULT_CATS=['Idols','Pooja Samagri','Books','Frames','Malas','Gifting'];
const ICON_KEYS=['diya','mala','book','frame','incense','kalash','shawl','hamper','palki','lotus','pin','hands','care','tv'];
const DEFAULT_SETTINGS={
  storeName:'Saileela Store', currency:'₹',
  announceDeva:'॥ हर हर साई • घर घर साई ॥',
  announceMsg:'<b>Guruvar drop</b> every Thursday from Shirdi',
  freeShipThreshold:999, shipFee:60,
  heroTagline:'॥ हर हर साई • घर घर साई ॥',
  heroTitle:'Everything a Sai<br>Devotee <em>Needs</em>',
  heroSub:'Thoughtfully selected in Shirdi. Delivered to your home.',
  festivalName:'Vijayadashami Special Hampers',
  festivalDate:'2026-10-20',
  whatsapp:'+91 6262072020', email:'hello@saileela.store', phone:'', address:'Shirdi, Maharashtra 423109'
};
const DEFAULT_TV={
  nowTitle:'Sai Bhajan Sandhya', liveUrl:'https://stream.ottlive.co.in/saileelatv/index.m3u8',
  programmes:[
    {n:'Kakad Aarti',img:'aarti-kakad.jpg',href:'saileela-tv.html',w:'Daily · 5:15 AM',live:1},
    {n:'Madhyan Aarti',img:'aarti-madhyan.jpg',href:'saileela-tv.html',w:'Daily · 12:00 PM',live:1},
    {n:'Dhoop Aarti',img:'aarti-dhoop.jpg',href:'saileela-tv.html',w:'Daily · 6:15 PM',live:1},
    {n:'Shej Aarti',img:'aarti-shej.jpg',href:'saileela-tv.html',w:'Daily · 10:00 PM',live:1},
    {n:'Mere Sai Mera Vishwas',yt:'fYG_bvdwPdY',href:'https://youtu.be/fYG_bvdwPdY',w:'Experiences'},
    {n:'Sai Bhakti Dhara',yt:'02tDl8VI9Uk',href:'https://youtu.be/02tDl8VI9Uk',w:'Devotional songs'},
    {n:'Shree Sai Satcharit (Leela)',yt:'PKI2BO9BegQ',href:'https://youtu.be/PKI2BO9BegQ',w:'Parayan'},
    {n:'Yatra Sai Dham Ki',yt:'3KOxZTy4cOA',href:'https://youtu.be/3KOxZTy4cOA',w:'Pilgrimage'},
    {n:'Baba ke Darbar Mein',yt:'SW4d7xGJ4Gk',href:'https://www.youtube.com/live/SW4d7xGJ4Gk',w:'Live darshan'}
  ],
  festivals:[
    {n:'Shree Ramnavami Utsav',w:'Chaitra · Mar–Apr'},
    {n:'Shree Gurupurnima Utsav',w:'Ashadha · July'},
    {n:'Shree Saibaba Punyatithi Utsav',w:'Vijayadashami · Sep–Oct'},
    {n:'Shirdi Parikrama Mahotsav',w:'13 February'},
    {n:'Shree Sai Satcharit Parayan',w:'7 days · Shravan Month'}
  ],
  schedule:[
    {"t": "12:00 AM", "n": "Mere Sai Mera Vishwas", "d": "Experiences"},
    {"t": "1:00 AM", "n": "Special Programme", "d": "Talk show"},
    {"t": "2:00 AM", "n": "Sai Bhajan Sandhya", "d": "Musical"},
    {"t": "4:00 AM", "n": "Sai Bhakti Dhara", "d": "Songs"},
    {"t": "5:00 AM", "n": "Temple Opening & Bhupali", "d": "Live · Marathi", "live": 1},
    {"t": "5:15 AM", "n": "Kakad Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "5:45 AM", "n": "Mangal Snan", "d": "Live · Marathi", "live": 1},
    {"t": "6:15 AM", "n": "Choti Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "6:30 AM", "n": "Stavanmanjiri", "d": "Devotional"},
    {"t": "7:00 AM", "n": "Shri Sai Satcharitra", "d": "Devotional"},
    {"t": "7:30 AM", "n": "108 Namawali & 11 Vachan", "d": "Devotional"},
    {"t": "8:00 AM", "n": "Sai Bhakti Dhara", "d": "Songs"},
    {"t": "9:00 AM", "n": "Special Programme", "d": "Talk show"},
    {"t": "10:00 AM", "n": "Mere Sai Mera Vishwas", "d": "Experiences"},
    {"t": "11:00 AM", "n": "108 Namawali & 11 Vachan", "d": "Devotional"},
    {"t": "11:30 AM", "n": "Mantrapushpanjali", "d": "Devotional"},
    {"t": "12:00 PM", "n": "Madhyan Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "12:30 PM", "n": "Sai Bhakti Dhara", "d": "Songs"},
    {"t": "1:00 PM", "n": "Serial STHH", "d": "Talk show"},
    {"t": "1:30 PM", "n": "Dr. Ashutosh Kumar", "d": "Talk show"},
    {"t": "2:00 PM", "n": "Mere Sai Mera Vishwas", "d": "Experiences"},
    {"t": "3:00 PM", "n": "Special Programme", "d": "Talk show"},
    {"t": "4:00 PM", "n": "Gurupathache Abhang", "d": "Devotional"},
    {"t": "5:05 PM", "n": "Bhavpushpanjali", "d": "Songs"},
    {"t": "5:45 PM", "n": "Mantrapushpanjali", "d": "Devotional"},
    {"t": "6:15 PM", "n": "Dhoop Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "6:45 PM", "n": "Shri Sai Satcharitra", "d": "Devotional"},
    {"t": "7:30 PM", "n": "Serial STHH", "d": "Devotional"},
    {"t": "8:00 PM", "n": "Dr. Ashutosh Kumar", "d": "Talk show"},
    {"t": "8:30 PM", "n": "Mere Sai Mera Vishwas", "d": "Experiences"},
    {"t": "9:30 PM", "n": "Mantrapushpanjali", "d": "Devotional"},
    {"t": "10:00 PM", "n": "Shej Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "10:30 PM", "n": "Serial STHH", "d": "Talk show"},
    {"t": "11:00 PM", "n": "Dr. Ashutosh Kumar", "d": "Talk show"},
    {"t": "11:30 PM", "n": "Saibaba Ki Adbhut Lilayein", "d": "Story telling"}
  ],
  scheduleThursday:[
    {"t": "12:00 AM", "n": "Mere Sai Mera Vishwas", "d": "Experiences"},
    {"t": "1:00 AM", "n": "Special Programme", "d": "Talk show"},
    {"t": "2:00 AM", "n": "Sai Bhajan Sandhya", "d": "Musical"},
    {"t": "4:00 AM", "n": "Sai Bhakti Dhara", "d": "Songs"},
    {"t": "5:00 AM", "n": "Temple Opening & Bhupali", "d": "Live · Marathi", "live": 1},
    {"t": "5:15 AM", "n": "Kakad Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "5:45 AM", "n": "Mangal Snan", "d": "Live · Marathi", "live": 1},
    {"t": "6:15 AM", "n": "Choti Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "6:30 AM", "n": "Stavanmanjiri", "d": "Devotional"},
    {"t": "7:00 AM", "n": "Shri Sai Satcharitra", "d": "Devotional"},
    {"t": "7:30 AM", "n": "108 Namawali & 11 Vachan", "d": "Devotional"},
    {"t": "8:00 AM", "n": "Sai Bhakti Dhara", "d": "Songs"},
    {"t": "9:00 AM", "n": "Special Programme", "d": "Talk show"},
    {"t": "10:00 AM", "n": "Mere Sai Mera Vishwas", "d": "Experiences"},
    {"t": "11:00 AM", "n": "108 Namawali & 11 Vachan", "d": "Devotional"},
    {"t": "11:30 AM", "n": "Mantrapushpanjali", "d": "Devotional"},
    {"t": "12:00 PM", "n": "Madhyan Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "12:30 PM", "n": "Sai Bhakti Dhara", "d": "Songs"},
    {"t": "1:00 PM", "n": "Serial STHH", "d": "Talk show"},
    {"t": "1:30 PM", "n": "Dr. Ashutosh Kumar", "d": "Talk show"},
    {"t": "2:00 PM", "n": "Mere Sai Mera Vishwas", "d": "Experiences"},
    {"t": "3:00 PM", "n": "Special Programme", "d": "Talk show"},
    {"t": "4:00 PM", "n": "Gurupathache Abhang", "d": "Devotional"},
    {"t": "5:05 PM", "n": "Bhavpushpanjali", "d": "Songs"},
    {"t": "5:45 PM", "n": "Mantrapushpanjali", "d": "Devotional"},
    {"t": "6:15 PM", "n": "Dhoop Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "6:45 PM", "n": "Shri Sai Satcharitra", "d": "Devotional"},
    {"t": "7:30 PM", "n": "Serial STHH", "d": "Devotional"},
    {"t": "8:00 PM", "n": "Dr. Ashutosh Kumar", "d": "Talk show"},
    {"t": "8:30 PM", "n": "Mere Sai Mera Vishwas", "d": "Experiences"},
    {"t": "9:00 PM", "n": "Sai Bhakti Dhara", "d": "Songs"},
    {"t": "9:15 PM", "n": "Palkhi", "d": "Live · Marathi", "live": 1},
    {"t": "10:00 PM", "n": "Shej Aarti", "d": "Live · Marathi", "live": 1},
    {"t": "10:30 PM", "n": "Serial STHH", "d": "Talk show"},
    {"t": "11:00 PM", "n": "Dr. Ashutosh Kumar", "d": "Talk show"},
    {"t": "11:30 PM", "n": "Saibaba Ki Adbhut Lilayein", "d": "Story telling"}
  ],
    distribution:{
    dth:[{name:'DishTV',num:'Ch 1094'},{name:'d2h',num:'Ch 1216'},{name:'DishTV ZiNG',num:'Ch 1094'}],
    cable:[{name:'GTPL',num:'Ch 570'},{name:'Hathway',num:'Ch 820'},{name:'DEN',num:'Ch 286'},{name:'Fastway (Punjab)',num:'Ch 607'},{name:'IN Cable',num:'Ch 119'},{name:'SITI (East)',num:'Ch 401'},{name:'SITI (South)',num:'Ch 603'},{name:'SSDM (Gujarat)',num:'Ch 509'},{name:'DIGIANA (MP)',num:'Ch 029'},{name:'BRDS (Kolhapur)',num:'Ch 453'},{name:'Sangali Media',num:'Ch 534'},{name:'Metrocast',num:'Ch 555'},{name:'Metrocast',num:'Ch 503'}],
    ott:[{name:'Tata Play'},{name:'Jio TV'},{name:'Jio TV+'},{name:'Watcho'},{name:'Vi'},{name:'ShemarooMe'}]
  },
  socials:[
    {plat:'YouTube',count:'218K',label:'subscribers',cta:'Subscribe',url:'https://www.youtube.com/@SaileelaTV',color:'#c4302b'},
    {plat:'Facebook',count:'640K',label:'followers',cta:'Follow',url:'https://www.facebook.com/saileelatv1',color:'#1877f2'},
    {plat:'Instagram',count:'89K',label:'followers',cta:'Follow',url:'https://www.instagram.com/saileela.tv.official/',color:'linear-gradient(45deg,#f09433,#bc1888)'},
    {plat:'WhatsApp',count:'Join',label:'daily blessings channel',cta:'Join',url:'https://chat.whatsapp.com/J492w3BHCMG27rG8omCZb3',color:'#25d366'}
  ]
};
const DATA_KEY='saileela_data_v19';
const Store={
  _d:null,
  defaults(){return JSON.parse(JSON.stringify({products:DEFAULT_PRODUCTS,cats:DEFAULT_CATS,settings:DEFAULT_SETTINGS,tv:DEFAULT_TV,orders:[]}));},
  load(){ if(this._d)return this._d; let d=null; try{d=JSON.parse(localStorage.getItem(DATA_KEY))}catch(e){} const def=this.defaults(); d=d||{};
    this._d={ products:Array.isArray(d.products)?d.products:def.products, cats:Array.isArray(d.cats)?d.cats:def.cats, orders:Array.isArray(d.orders)?d.orders:[], settings:Object.assign({},def.settings,d.settings||{}), tv:Object.assign({},def.tv,d.tv||{}) };
    this._d.tv.distribution=Object.assign({},def.tv.distribution,(d.tv&&d.tv.distribution)||{});
    return this._d; },
  save(){ try{localStorage.setItem(DATA_KEY,JSON.stringify(this._d))}catch(e){} document.dispatchEvent(new Event('data:change')); },
  set(d){ this._d=d; this.save(); },
  reset(){ this._d=this.defaults(); this.save(); },
  exportJSON(){ return JSON.stringify(this.load(),null,2); },
  importJSON(t){ const d=JSON.parse(t); const def=this.defaults(); this._d={products:d.products||def.products,cats:d.cats||def.cats,orders:d.orders||[],settings:Object.assign({},def.settings,d.settings||{}),tv:Object.assign({},def.tv,d.tv||{})}; this.save(); }
};
const money=n=>String(Store.load().settings.currency||'₹')+Number(n||0).toLocaleString('en-IN');
const findProduct=id=>Store.load().products.find(p=>p.id===id);


/* ---------- cart (persists across pages, falls back to memory) ---------- */
const Cart={
  read(){ try{return JSON.parse(localStorage.getItem('saileela_cart'))||[]}catch(e){return window.__cart||[]} },
  write(c){ window.__cart=c; try{localStorage.setItem('saileela_cart',JSON.stringify(c))}catch(e){} document.dispatchEvent(new Event('cart:change')); },
  add(id,qty=1){ const c=this.read(); const it=c.find(x=>x.id===id); if(it)it.qty+=qty; else c.push({id,qty}); this.write(c); },
  setQty(id,qty){ let c=this.read(); c=c.map(x=>x.id===id?{...x,qty}:x).filter(x=>x.qty>0); this.write(c); },
  remove(id){ this.write(this.read().filter(x=>x.id!==id)); },
  clear(){ this.write([]); },
  count(){ return this.read().reduce((s,x)=>s+x.qty,0); },
  subtotal(){ return this.read().reduce((s,x)=>{const p=findProduct(x.id);return s+(p?p.p*x.qty:0)},0); },
  detailed(){ return this.read().map(x=>({...findProduct(x.id),qty:x.qty})).filter(x=>x.id); }
};
const Wish={
  read(){try{return JSON.parse(localStorage.getItem('saileela_wish'))||[]}catch(e){return[]}},
  write(a){try{localStorage.setItem('saileela_wish',JSON.stringify(a))}catch(e){} document.dispatchEvent(new Event('wish:change'));},
  has(id){return this.read().includes(id)},
  toggle(id){let a=this.read();if(a.includes(id))a=a.filter(x=>x!==id);else a.push(id);this.write(a);return a.includes(id)},
  count(){return this.read().length}
};

/* ---------- header + footer ---------- */
const NAV=[['shop.html','Shop','nav_shop'],['index.html#exclusive','Saileela Exclusive','nav_exclusive'],['shirdi-travel.html','Shirdi Travel','nav_travel'],['saileela-tv.html','Saileela TV','nav_tv'],['about.html','Our Story','nav_story']];
const brandSVG=`<svg class="brand-mark" viewBox="0 0 46 54" fill="none" aria-hidden="true"><defs><linearGradient id="bf" x1="0" y1="0" x2="46" y2="54"><stop stop-color="#F3E2A8"/><stop offset=".5" stop-color="#C9A554"/><stop offset="1" stop-color="#8A6A2C"/></linearGradient></defs><path d="M5 51V22C5 11 13 4 23 4s18 7 18 18v29" stroke="url(#bf)" stroke-width="1.5"/><path d="M9 51V23c0-9 6-15 14-15s14 6 14 15v28" stroke="url(#bf)" stroke-width="1" opacity=".45"/><circle cx="23" cy="4" r="2" fill="url(#bf)"/><path d="M23 12v7" stroke="url(#bf)" stroke-width="1"/><path d="M16 20q7 11 14 0-3 7-7 7t-7-7Z" fill="url(#bf)"/><path d="M23 20c-4-6 2-9-.5-15 5.5 6 3.5 12 .5 15Z" fill="#E0A32E"/><path d="M5 51h36" stroke="url(#bf)" stroke-width="1.5"/></svg>`;


/* ---------- i18n (English / Hindi / Telugu) ---------- */
const LANGS=[['en','EN'],['hi','हिं'],['te','తె']];
const I18N={
  en:{nav_shop:'Shop',nav_exclusive:'Saileela Exclusive',nav_travel:'Shirdi Travel',nav_tv:'Saileela TV',nav_story:'Our Story',
      a_ship:'Ships from Shirdi',a_free:'Free shipping above',a_pack:'Carefully packed',
      search:'Search',wishlist:'Wishlist',cart:'Cart',
      hero_h1:'Everything a Sai<br>Devotee Needs',hero_sub:'Thoughtfully selected in Shirdi. Delivered to your home.',
      cta_shop:'Shop now',cta_explore:'Explore Saileela Exclusive',
      sec_exclusive:'Saileela Exclusive',sec_category:'Shop by category',sec_new:'New arrivals',
      sec_best:'Bestsellers',sec_gift:'Devotional gifting',sec_reviews:'Loved by devotees',
      foot_tag:'A premium devotional store, rooted in Shirdi. Chosen by hand, packed with care, delivered across India.'},
  hi:{nav_shop:'दुकान',nav_exclusive:'साईलीला एक्सक्लूसिव',nav_travel:'शिरडी यात्रा',nav_tv:'साईलीला टीवी',nav_story:'हमारी कहानी',
      a_ship:'शिरडी से भेजा जाता है',a_free:'मुफ़्त शिपिंग इससे ऊपर',a_pack:'सावधानी से पैक किया गया',
      search:'खोजें',wishlist:'पसंदीदा',cart:'कार्ट',
      hero_h1:'हर साई भक्त की<br>ज़रूरत की हर चीज़',hero_sub:'शिरडी में सावधानी से चुना गया। आपके घर तक पहुँचाया गया।',
      cta_shop:'अभी खरीदें',cta_explore:'साईलीला एक्सक्लूसिव देखें',
      sec_exclusive:'साईलीला एक्सक्लूसिव',sec_category:'श्रेणी से खरीदें',sec_new:'नए उत्पाद',
      sec_best:'बेस्टसेलर',sec_gift:'भक्ति उपहार',sec_reviews:'भक्तों का प्रिय',
      foot_tag:'शिरडी में बसा एक प्रीमियम भक्ति स्टोर। हाथ से चुना, सावधानी से पैक किया, पूरे भारत में पहुँचाया गया।'},
  te:{nav_shop:'షాప్',nav_exclusive:'సాయిలీల ఎక్స్‌క్లూజివ్',nav_travel:'షిర్డీ యాత్ర',nav_tv:'సాయిలీల టీవీ',nav_story:'మా కథ',
      a_ship:'షిర్డీ నుండి పంపబడుతుంది',a_free:'ఈ మొత్తానికి పైన ఉచిత షిప్పింగ్',a_pack:'జాగ్రత్తగా ప్యాక్ చేయబడింది',
      search:'వెతకండి',wishlist:'ఇష్టాలు',cart:'కార్ట్',
      hero_h1:'ప్రతి సాయి భక్తునికి<br>కావలసినవన్నీ',hero_sub:'షిర్డీలో జాగ్రత్తగా ఎంపిక చేయబడింది. మీ ఇంటికి చేరవేయబడుతుంది.',
      cta_shop:'ఇప్పుడు షాప్ చేయండి',cta_explore:'సాయిలీల ఎక్స్‌క్లూజివ్ చూడండి',
      sec_exclusive:'సాయిలీల ఎక్స్‌క్లూజివ్',sec_category:'వర్గం వారీగా షాప్',sec_new:'కొత్త ఉత్పత్తులు',
      sec_best:'బెస్ట్‌సెల్లర్లు',sec_gift:'భక్తి బహుమతులు',sec_reviews:'భక్తులకు ప్రియమైనవి',
      foot_tag:'షిర్డీలో పాతుకుపోయిన ప్రీమియం భక్తి స్టోర్. చేతితో ఎంపిక చేసి, జాగ్రత్తగా ప్యాక్ చేసి, భారతదేశమంతటా చేరవేయబడుతుంది.'}
};
function brandName(){var m=document.cookie.match(/googtrans=\/en\/(\w+)/);var l=m?m[1]:'en';return l==='hi'?'साईलीला':(l==='te'?'సాయిలీల':'Saileela');}
function T(k){const l=localStorage.getItem('saileela_lang')||'en';return (I18N[l]&&I18N[l][k])||I18N.en[k]||k;}
function applyI18n(){const l=localStorage.getItem('saileela_lang')||'en';document.documentElement.lang=l;if(l==='en')return;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const v=(I18N[l]&&I18N[l][el.getAttribute('data-i18n')]);if(v!=null)el.innerHTML=v;});}

function renderHeader(){
  const _s=Store.load().settings;
  const page=document.body.dataset.page||'index.html';
  const links=NAV.map(([h,l,k])=>`<a href="${h}" class="${h.split('#')[0]===page?'active':''}">${k?T(k):l}</a>`).join('');
  const mlinks=NAV.map(([h,l,k])=>`<a href="${h}" onclick="Saileela.closeAll()">${k?T(k):l}</a>`).join('');
  const _cm=document.cookie.match(/googtrans=\/en\/(\w+)/); const curLang=_cm?_cm[1]:'en';
  const langOpts=LANGS.map(([v,lbl])=>`<option value="${v}" ${v===curLang?'selected':''}>${lbl}</option>`).join('');
  const langSel=`<select class="lang-sel" aria-label="Language" onchange="Saileela.setLang(this.value)">${langOpts}</select>`;
  const langSelM=`<select class="lang-sel lang-sel-m" aria-label="Language" onchange="Saileela.setLang(this.value)">${langOpts}</select>`;
  const html=`
  <div class="announce"><span>${T('a_ship')}</span><span class="sep">•</span><span>${T('a_free')} ${money(_s.freeShipThreshold)}</span><span class="sep">•</span><span>${T('a_pack')}</span></div>
  <header id="header"><div class="nav">
    <a class="brand" href="index.html" aria-label="Saileela home">
      <img class="brand-logo" src="saileela-logo.png" alt="Saileela" width="46" height="46">
      <div class="brand-name notranslate" translate="no">${brandName()}</div></a>
    <nav class="links" aria-label="Primary">${links}</nav>
    <div class="nav-actions">
      ${langSel}
      <button class="icon-btn" aria-label="Search" onclick="Saileela.openSearch()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>
      <a class="icon-btn" href="shop.html?wish=1" aria-label="Wishlist"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-6.5-4.2-9-8C1.4 9.3 3 6 6.3 6 8.6 6 12 8.3 12 8.3S15.4 6 17.7 6C21 6 22.6 9.3 21 12c-2.5 3.8-9 8-9 8Z"/></svg><span class="wish-count" id="wishCount">0</span></a>
      <a class="icon-btn" href="cart.html" aria-label="Cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 7h13l-1.2 9.5a1 1 0 0 1-1 .9H8.2a1 1 0 0 1-1-.9L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg><span class="cart-count" id="cartCount">0</span></a>
      <button class="icon-btn burger" id="burger" aria-label="Menu" onclick="var m=document.getElementById('mnav');if(m)m.classList.add('open');var s=document.getElementById('scrim');if(s)s.classList.add('open');"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div></div></header>
  <div class="mnav" id="mnav" aria-hidden="true">
    <button class="icon-btn close" id="mnavClose" aria-label="Close menu" onclick="Saileela.closeAll()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    ${langSelM}
    ${mlinks}</div>`;
  document.getElementById('site-header').innerHTML=html;
  var _mn=document.getElementById('mnav'); if(_mn&&_mn.parentElement!==document.body) document.body.appendChild(_mn);
}

function renderFooter(){
  const html=`
  <section class="news"><div class="wrap inner reveal">
    <div class="eyebrow">Join the Saileela family</div>
    <h2>New arrivals & stories from Shirdi</h2>
    <p>Guruvar selections, new arrivals and stories from Shirdi — join our WhatsApp channel for daily darshan and blessings.</p>
    <a class="btn btn-primary nl-wa" href="https://chat.whatsapp.com/J492w3BHCMG27rG8omCZb3" target="_blank" rel="noopener">Join our WhatsApp channel</a>
    <span class="wa"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Z"/></svg> Prefer WhatsApp? Get updates on WhatsApp</span>
  </div></section>
  <footer><div class="wrap"><div class="foot-grid">
    <div class="foot-brand"><div class="brand"><img class="brand-logo" src="saileela-logo.png" alt="Saileela" width="50" height="50"><span class="brand-name notranslate" translate="no" style="font-family:Fraunces;font-size:1.4rem">${brandName()}</span></div>
      <div class="malik-f">॥ श्रद्धा • सबुरी • समर्पण ॥</div>
      <p data-i18n="foot_tag">A premium devotional store, rooted in Shirdi. Chosen by hand, packed with care, delivered across India.</p>
      <div class="foot-addr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>Shirdi, Ahilyanagar, Maharashtra 423109</div>
      <p class="foot-future">Coming later — Shirdi Stay • Local Travel • Devotee Assistance</p>
    </div>
    <div><h4>Shop</h4><ul><li><a href="shop.html">All products</a></li><li><a href="index.html#exclusive">Saileela Exclusive</a></li><li><a href="shop.html?cat=Gifting">Gifting &amp; Hampers</a></li></ul></div>
    <div><h4>Saileela</h4><ul><li><a href="about.html">Our Story</a></li><li><a href="saileela-tv.html">Saileela TV</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    <div><h4>Help</h4><ul><li><a href="contact.html">Shipping</a></li><li><a href="contact.html">Returns</a></li><li><a href="contact.html">FAQ</a></li><li><a href="contact.html">Order support</a></li></ul></div>
    <div><h4>Follow</h4>
      <div class="socials">
        <a href="https://www.youtube.com/@SaileelaTV" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.5-5c-.3-1-1-1.7-2-2C18.5 4.5 12 4.5 12 4.5s-6.5 0-8.5.5c-1 .3-1.7 1-2 2C1 8.5 1 12 1 12s0 3.5.5 5c.3 1 1 1.7 2 2 2 .5 8.5.5 8.5.5s6.5 0 8.5-.5c1-.3 1.7-1 2-2 .5-1.5.5-5 .5-5Zm-13 3V9l5 3-5 3Z"/></svg></a>
        <a href="https://www.facebook.com/saileelatv1" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"/></svg></a>
        <a href="https://www.instagram.com/saileela.tv.official/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg></a>
        <a href="https://chat.whatsapp.com/J492w3BHCMG27rG8omCZb3" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Z"/></svg></a>
      </div>
    </div>
  </div>
  <div class="foot-bottom"><span>© 2026 Saileela · Shirdi, Maharashtra · An independent devotee store, not affiliated with Shree Saibaba Sansthan Trust.</span>
    <div class="pay"><span class="chip">UPI</span><span class="chip">Razorpay</span><span class="chip">Cards</span><span class="chip">COD</span></div></div>
  </div></footer>`;
  document.getElementById('site-footer').innerHTML=html;
}

/* ---------- drawer + toast (injected once) ---------- */
function injectOverlays(){
  const _s=Store.load().settings; const wa=(_s.whatsapp||'').replace(/\D/g,'');
  const el=document.createElement('div');
  el.innerHTML=`
  <div class="scrim" id="scrim"></div>
  <aside class="drawer" id="drawer" aria-label="Shopping cart" aria-hidden="true">
    <div class="drawer-head"><h3>Your cart</h3><button class="icon-btn" id="drawerClose" aria-label="Close cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>
    <div class="drawer-items" id="drawerItems"></div>
    <div class="drawer-foot" id="drawerFoot" style="display:none">
      <div class="row"><span>Subtotal</span><b id="dSub">₹0</b></div>
      <a href="cart.html" class="btn btn-primary" style="width:100%;justify-content:center">View cart & checkout</a>
      <div class="note">Packed with care in Shirdi.</div></div>
  </aside>
  <div class="toast" id="toast"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 5 5L20 7"/></svg><span id="toastMsg">Added to cart</span></div>
  <div class="search-ov" id="searchOv"><div class="sbox">
    <form class="sform" onsubmit="return Saileela.search(this)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input type="search" name="q" placeholder="Search idols, books, malas, frames…" aria-label="Search products"><span class="sclose" onclick="Saileela.closeSearch()">Esc</span></form>
    <div class="ssug"><p>Popular</p><a href="shop.html?cat=Idols">Idols</a><a href="shop.html?cat=Books">Books</a><a href="shop.html?cat=Malas">Malas</a><a href="shop.html?cat=Frames">Frames</a><a href="shop.html?cat=Gifting">Gifting</a></div>
  </div></div>
  <a class="wa-fab" href="${wa?('https://wa.me/'+wa):'contact.html'}" ${wa?'target="_blank" rel="noopener"':''} aria-label="Chat with Saileela on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Z"/></svg><span class="wa-txt">Chat with Saileela</span></a>`;
  document.body.appendChild(el);
}

/* Shree Sainath Maharaj — ElevenLabs Conversational AI widget (site-wide, skips admin) */
function injectVoiceAgent(){
  try{
    if(/admin\.html$/i.test(location.pathname)) return;
    if(!document.querySelector('elevenlabs-convai')){
      const w=document.createElement('elevenlabs-convai');
      w.setAttribute('agent-id','iIFqwTNAKd8d4zxGyvV0');
      document.body.appendChild(w);
    }
    if(!document.querySelector('script[data-convai-embed]')){
      const s=document.createElement('script');
      s.src='https://unpkg.com/@elevenlabs/convai-widget-embed';
      s.async=true; s.type='text/javascript'; s.setAttribute('data-convai-embed','1');
      document.body.appendChild(s);
    }
  }catch(e){}
}

/* Correct Google-Translate mistransliteration of the brand name site-wide.
   Google renders "Saileela" as सैलीला / साइलीला (Hindi) or సైలీల (Telugu);
   the correct forms are साईलीला and సాయిలీల. Runs after Google rewrites the DOM. */
var BRAND_TRANSLIT=[[/सैलीला/g,'साईलीला'],[/सैलिला/g,'साईलीला'],[/साइलीला/g,'साईलीला'],[/सायलीला/g,'साईलीला'],[/సైలీల/g,'సాయిలీల'],[/సైలీల/g,'సాయిలీల']];
function fixBrandTranslit(root){
  try{
    var start=root||document.body; if(!start) return;
    var walk=function(n){
      if(n.nodeType===3){
        var t=n.nodeValue,o=t;
        for(var i=0;i<BRAND_TRANSLIT.length;i++) t=t.replace(BRAND_TRANSLIT[i][0],BRAND_TRANSLIT[i][1]);
        if(t!==o) n.nodeValue=t;
        return;
      }
      if(n.nodeType===1){
        var nm=n.nodeName;
        if(nm==='SCRIPT'||nm==='STYLE'||nm==='TEXTAREA') return;
        if(n.getAttribute&&n.getAttribute('translate')==='no') return;
        for(var c=n.firstChild;c;c=c.nextSibling) walk(c);
      }
    };
    walk(start);
  }catch(e){}
}
function startBrandTranslitWatch(){
  fixBrandTranslit();
  try{
    var mo=new MutationObserver(function(){ clearTimeout(window.__btf); window.__btf=setTimeout(function(){fixBrandTranslit();},250); });
    mo.observe(document.body,{childList:true,subtree:true,characterData:true});
  }catch(e){}
}

/* ---- Ganesh Chaturthi festival pop-up for Shree Divya Ganesh Jyoti ---- */
/* Easy-to-edit settings: */
var GPOP = {
  productId : 'divya-ganesh-jyoti',
  endDate   : '2026-09-26T00:00:00+05:30',   // stops showing after Visarjan (25 Sep 2026)
  eyebrow   : '॥ गणपती बाप्पा मोरया ॥',
  title     : 'Welcome Bappa with divine light',
  sub       : 'Shree Divya Ganesh Jyoti — a radiant akhand glow for your Ganpati mandap.',
  offer     : '<b>✦ Free shipping</b> above ₹999 · Cash on Delivery · Ships from Shirdi',
  cta       : 'Light up my Ganpati →',
  showDelayMs : 2500,
  repeatAfterMs : 24*60*60*1000   // show at most once per 24h per visitor
};
function initGaneshPopup(){
  try{
    if(Date.now() > new Date(GPOP.endDate).getTime()) return;              // festival over
    if(/admin\.html$/i.test(location.pathname)) return;                     // not on admin
    var params=new URLSearchParams(location.search);
    if(/product\.html$/i.test(location.pathname) && params.get('id')===GPOP.productId) return; // not on the product's own page
    var KEY='gpop_ganesh_2026';
    try{ if(Date.now() - (+(localStorage.getItem(KEY)||0)) < GPOP.repeatAfterMs) return; }catch(e){}

    var p = (typeof findProduct==='function') ? findProduct(GPOP.productId) : null;
    var img = p&&p.img ? p.img : 'ganesh-jyoti-lit-1.jpg';
    var priceHtml='';
    if(p){
      var off = p.o ? Math.round((1-p.p/p.o)*100) : 0;
      priceHtml='<div class="gpop-price"><b>'+Saileela.money(p.p)+'</b>'+(p.o?'<s>'+Saileela.money(p.o)+'</s>':'')+(off>0?'<span class="off">'+off+'% off</span>':'')+'</div>';
    }
    var wrap=document.createElement('div');
    wrap.className='gpop-backdrop'; wrap.setAttribute('role','presentation');
    wrap.innerHTML=
      '<div class="gpop-card" role="dialog" aria-modal="true" aria-label="Ganesh Chaturthi special offer">'+
        '<button class="gpop-x" aria-label="Close">&times;</button>'+
        '<div class="gpop-media"><span class="gpop-toran"></span><img src="'+img+'" alt="Shree Divya Ganesh Jyoti"></div>'+
        '<div class="gpop-body">'+
          '<div class="gpop-eyebrow" translate="no">'+GPOP.eyebrow+'</div>'+
          '<h3 class="gpop-title">'+GPOP.title+'</h3>'+
          '<p class="gpop-sub">'+GPOP.sub+'</p>'+
          priceHtml+
          '<div class="gpop-offer">'+GPOP.offer+'</div>'+
          '<a class="gpop-cta" href="product.html?id='+GPOP.productId+'">'+GPOP.cta+'</a>'+
          '<button class="gpop-later">Maybe later</button>'+
        '</div>'+
      '</div>';
    var mark=function(){ try{ localStorage.setItem(KEY, Date.now()); }catch(e){} };
    var close=function(){ wrap.classList.remove('open'); mark(); document.removeEventListener('keydown',onKey); setTimeout(function(){ wrap.remove(); },320); };
    var onKey=function(e){ if(e.key==='Escape') close(); };
    wrap.addEventListener('click',function(e){ if(e.target===wrap) close(); });
    wrap.querySelector('.gpop-x').addEventListener('click',close);
    wrap.querySelector('.gpop-later').addEventListener('click',close);
    wrap.querySelector('.gpop-cta').addEventListener('click',mark);
    document.body.appendChild(wrap);
    setTimeout(function(){
      wrap.classList.add('open'); mark();
      document.addEventListener('keydown',onKey);
      var x=wrap.querySelector('.gpop-x'); if(x) x.focus();
    }, GPOP.showDelayMs);
  }catch(e){}
}

/* ---- Live activity toast: honest "the store is alive" nudges (no fake purchases) ---- */
/* Messages are true perks, timely festival picks, and editorial product spotlights
   pulled from the real catalog. No fabricated purchases / false popularity. */
function startLiveActivity(){
  try{
    if(/admin\.html$/i.test(location.pathname)) return;
    if(window.matchMedia && window.matchMedia('(max-width:520px)').matches===false){} // (placeholder, keep on all)
    var base=[
      {ic:'🛕', s:'From Shirdi', t:'Handpicked in Shirdi, delivered to your door'},
      {ic:'✦', s:'Free shipping', t:'On all orders above ₹999 across India'},
      {ic:'🪔', s:'Fresh dispatch', t:'Ships with care, straight from Shirdi'},
      {ic:'🙏', s:'Easy payment', t:'Cash on Delivery available nationwide'},
      {ic:'🎁', s:'Ganpati special', t:'Shree Divya Ganesh Jyoti — light up your mandap', href:'product.html?id=divya-ganesh-jyoti'},
      {ic:'🌼', s:'Ganeshotsav', t:'Explore our festive gifting picks', href:'shop.html?cat=Gifting'},
      {ic:'🕉️', s:'Saileela', t:'Har Har Sai • Ghar Ghar Sai', href:'index.html'}
    ];
    // Editorial spotlights from the real catalog (exclusives / bestsellers)
    try{
      var prods=(Store.load().products||[]).filter(function(p){return p.active!==false && (p.excl || /bestseller/i.test(p.badge||''));});
      for(var i=prods.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=prods[i];prods[i]=prods[j];prods[j]=tmp;}
      prods.slice(0,5).forEach(function(p){ base.push({ic:'✨', s:'Featured', t:p.n, href:'product.html?id='+p.id}); });
    }catch(e){}

    var order=base.slice(); for(var k=order.length-1;k>0;k--){var m=Math.floor(Math.random()*(k+1));var t=order[k];order[k]=order[m];order[m]=t;}
    var idx=0, shown=0, MAX=6, current=null;
    function build(msg){
      var el=document.createElement(msg.href?'a':'div');
      el.className='slt';
      if(msg.href) el.setAttribute('href',msg.href);
      el.setAttribute('role','status'); el.setAttribute('aria-live','polite');
      el.innerHTML='<span class="slt-ic" aria-hidden="true">'+msg.ic+'</span>'+
        '<div class="slt-tx">'+(msg.s?'<small>'+msg.s+'</small>':'')+msg.t+'</div>'+
        '<button class="slt-x" aria-label="Dismiss">&times;</button>';
      el.querySelector('.slt-x').addEventListener('click',function(ev){ ev.preventDefault(); ev.stopPropagation(); hide(el); shown=MAX; /* dismiss = stop for this session */ });
      return el;
    }
    function hide(el){ if(!el)return; el.classList.remove('in'); setTimeout(function(){ if(el&&el.parentNode) el.remove(); },500); if(current===el)current=null; }
    function showNext(){
      if(shown>=MAX) return;
      // don't stack over the festival modal
      if(document.querySelector('.gpop-backdrop.open')){ setTimeout(showNext, 8000); return; }
      var msg=order[idx % order.length]; idx++;
      var el=build(msg); document.body.appendChild(el);
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ el.classList.add('in'); }); });
      current=el; shown++;
      setTimeout(function(){ hide(el); }, 6500);              // visible ~6.5s
      setTimeout(showNext, 6500 + 18000 + Math.random()*14000); // then a varied gap (~24–38s)
    }
    setTimeout(showNext, 7000); // first appears after 7s
  }catch(e){}
}

/* ================= DEVOTION CORNER (homepage) =================
   A) Live Shirdi aarti sync   B) Light a diya   C) Naam-jaap mala
   All state is the visitor's own (session/local) — nothing fabricated. */
var AARTIS=[['Kakad Aarti',270],['Madhyan Aarti',720],['Dhoop Aarti',1110],['Shej Aarti',1350]]; // start minute (IST)
function istNow(){ var d=new Date(); return new Date(d.getTime()+d.getTimezoneOffset()*60000+5.5*3600000); }
function ymd(d){ return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate(); }
function pad2(n){ return (n<10?'0':'')+n; }

function initDevotionCorner(){
  try{
    var host=document.getElementById('devotion-corner'); if(!host) return;
    host.innerHTML=
      '<div class="dev-head">'+
        '<div class="eyebrow">Your Shirdi darshan corner</div>'+
        '<h2>A moment of devotion</h2>'+
      '</div>'+
      '<a class="dev-aarti" id="devAarti" href="saileela-tv.html">'+
        '<span class="dev-aarti-dot"></span>'+
        '<span class="dev-aarti-tx" id="devAartiTx">Checking the aarti schedule…</span>'+
        '<span class="dev-aarti-cta" id="devAartiCta">Watch live \u2192</span>'+
      '</a>'+
      '<div class="dev-cards">'+
        '<div class="dev-card dev-diya" id="devDiya">'+
          '<div class="diya-stage" id="diyaStage"><span class="diya-glow"></span><span class="diya-flame"></span><span class="diya-lamp"></span></div>'+
          '<h3>Light a diya</h3>'+
          '<p class="dev-card-sub" id="diyaSub">Offer a diya at Saileela for someone you love.</p>'+
          '<div class="diya-form" id="diyaForm">'+
            '<input id="diyaName" maxlength="60" placeholder="For whom or what? (optional)" aria-label="Diya intention">'+
            '<button class="dev-btn" id="diyaBtn">Light the diya</button>'+
          '</div>'+
          '<div class="diya-done" id="diyaDone" hidden>'+
            '<button class="dev-link" id="diyaShare">\uD83D\uDCF2 Share on WhatsApp</button>'+
            '<button class="dev-link" id="diyaReset">Light another</button>'+
          '</div>'+
        '</div>'+
        '<div class="dev-card dev-jaap">'+
          '<h3>Naam Jaap</h3>'+
          '<p class="dev-card-sub" translate="no">Tap the mala with each \u0913\u092E\u094D \u0938\u093E\u0908\u0902 \u0930\u093E\u092E</p>'+
          '<button class="jaap-ring" id="jaapRing" aria-label="Count one chant">'+
            '<svg viewBox="0 0 120 120" width="132" height="132" aria-hidden="true">'+
              '<circle cx="60" cy="60" r="54" fill="none" stroke="rgba(199,154,58,.25)" stroke-width="7"/>'+
              '<circle id="jaapArc" cx="60" cy="60" r="54" fill="none" stroke="url(#jaapGrad)" stroke-width="7" stroke-linecap="round" transform="rotate(-90 60 60)" stroke-dasharray="339.29" stroke-dashoffset="339.29"/>'+
              '<defs><linearGradient id="jaapGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EF7F1A"/><stop offset="1" stop-color="#F6D77E"/></linearGradient></defs>'+
            '</svg>'+
            '<span class="jaap-num"><b id="jaapCount">0</b><small>/ 108</small></span>'+
          '</button>'+
          '<div class="jaap-stats"><span id="jaapMalas">0 malas today</span><span class="dot-sep">\u00b7</span><span id="jaapStreak">\uD83E\uDE94 1-day streak</span></div>'+
          '<button class="dev-link" id="jaapReset">Reset today</button>'+
        '</div>'+
      '</div>';
    host.classList.add('in');
    wireAarti(); wireDiya(); wireJaap();
  }catch(e){}
}

function wireAarti(){
  var tx=document.getElementById('devAartiTx'), cta=document.getElementById('devAartiCta'), box=document.getElementById('devAarti');
  if(!tx) return;
  function fmt(s){ var h=Math.floor(s/3600), m=Math.floor((s%3600)/60), ss=s%60; return (h>0?h+':':'')+pad2(m)+':'+pad2(ss); }
  function tick(){
    var n=istNow(); var nowSec=n.getHours()*3600+n.getMinutes()*60+n.getSeconds();
    var LIVE=30*60, live=null, next=null, best=1e9;
    AARTIS.forEach(function(a){ var st=a[1]*60; if(nowSec>=st && nowSec<st+LIVE) live=a; var d=st-nowSec; if(d<0)d+=86400; if(d<best){best=d;next=a;} });
    if(live){
      box.classList.add('is-live');
      tx.innerHTML='<b>'+live[0]+'</b> is being offered in Shirdi \u2014 join the darshan';
      cta.textContent='Watch live \u2192';
    }else{
      box.classList.remove('is-live');
      tx.innerHTML='Next: <b>'+next[0]+'</b> in '+fmt(best);
      cta.textContent='Open Saileela TV \u2192';
    }
  }
  tick(); if(window.__aartiTimer) clearInterval(window.__aartiTimer); window.__aartiTimer=setInterval(tick,1000);
}

function wireDiya(){
  var stage=document.getElementById('diyaStage'), form=document.getElementById('diyaForm'), done=document.getElementById('diyaDone'),
      sub=document.getElementById('diyaSub'), inp=document.getElementById('diyaName'),
      btn=document.getElementById('diyaBtn'), share=document.getElementById('diyaShare'), reset=document.getElementById('diyaReset');
  if(!stage) return;
  function showLit(forWhom){
    stage.classList.add('lit');
    sub.innerHTML='Your diya is glowing \uD83D\uDD4A\uFE0F'+(forWhom?' \u00b7 <b>for '+forWhom.replace(/</g,'&lt;')+'</b>':'');
    form.hidden=true; done.hidden=false;
  }
  try{ if(sessionStorage.getItem('diya_lit')==='1') showLit(sessionStorage.getItem('diya_for')||''); }catch(e){}
  btn && btn.addEventListener('click',function(){
    var forWhom=(inp.value||'').trim();
    try{ sessionStorage.setItem('diya_lit','1'); sessionStorage.setItem('diya_for',forWhom); }catch(e){}
    stage.classList.add('kindle'); setTimeout(function(){ stage.classList.remove('kindle'); },700);
    if(navigator.vibrate) navigator.vibrate(30);
    showLit(forWhom);
  });
  share && share.addEventListener('click',function(){
    var forWhom=''; try{ forWhom=sessionStorage.getItem('diya_for')||''; }catch(e){}
    var msg='\uD83E\uDE94 I lit a diya at Saileela'+(forWhom?' for '+forWhom:'')+'. Om Sai Ram \uD83D\uDE4F  '+location.origin+location.pathname;
    window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank','noopener');
  });
  reset && reset.addEventListener('click',function(){
    try{ sessionStorage.removeItem('diya_lit'); sessionStorage.removeItem('diya_for'); }catch(e){}
    stage.classList.remove('lit'); if(inp)inp.value=''; sub.textContent='Offer a diya at Saileela for someone you love.'; done.hidden=true; form.hidden=false;
  });
}

function wireJaap(){
  var ring=document.getElementById('jaapRing'), arc=document.getElementById('jaapArc'), numEl=document.getElementById('jaapCount'),
      malasEl=document.getElementById('jaapMalas'), streakEl=document.getElementById('jaapStreak'), reset=document.getElementById('jaapReset');
  if(!ring) return;
  var C=339.29, TARGET=108, KEY='saileela_jaap';
  var today=ymd(istNow());
  var d; try{ d=JSON.parse(localStorage.getItem(KEY)||'{}'); }catch(e){ d={}; }
  if(d.date!==today){ d.date=today; d.count=0; d.malas=0; }          // fresh day: reset today's tally
  if(typeof d.streak!=='number') d.streak=0;
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify(d)); }catch(e){} }
  function paint(){
    numEl.textContent=d.count;
    arc.setAttribute('stroke-dashoffset', C*(1 - d.count/TARGET));
    malasEl.textContent=d.malas+(d.malas===1?' mala today':' malas today');
    streakEl.innerHTML='\uD83E\uDE94 '+(d.streak||1)+'-day streak';
  }
  function bumpStreak(){
    if(d.lastActive===today) return;
    var y=new Date(istNow().getTime()-86400000);
    d.streak = (d.lastActive===ymd(y)) ? (d.streak||0)+1 : 1;
    d.lastActive=today;
  }
  ring.addEventListener('click',function(){
    bumpStreak();
    d.count++;
    if(d.count>=TARGET){ d.count=0; d.malas++; ring.classList.add('done'); if(navigator.vibrate)navigator.vibrate([40,60,40]); setTimeout(function(){ ring.classList.remove('done'); },900); }
    else { ring.classList.add('pulse'); setTimeout(function(){ ring.classList.remove('pulse'); },160); if(navigator.vibrate)navigator.vibrate(12); }
    paint(); save();
  });
  reset && reset.addEventListener('click',function(){ d.count=0; d.malas=0; paint(); save(); });
  paint();
}

/* ---- Darshan surprise: an immersive "take Baba's blessing" moment, mid-visit ---- */
var DPOP_actx=null, DPOP_sound=true;
function dpopBell(){
  if(!DPOP_sound) return;
  try{
    DPOP_actx=DPOP_actx||new (window.AudioContext||window.webkitAudioContext)();
    var t=DPOP_actx.currentTime;
    [[523.25,0.22],[783.99,0.13],[1046.5,0.08],[1567,0.05]].forEach(function(p){
      var o=DPOP_actx.createOscillator(), g=DPOP_actx.createGain();
      o.type='sine'; o.frequency.value=p[0];
      g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(p[1],t+0.02); g.gain.exponentialRampToValueAtTime(0.0001,t+1.9);
      o.connect(g).connect(DPOP_actx.destination); o.start(t); o.stop(t+2);
    });
  }catch(e){}
}
function dpopAartiLine(){
  try{
    var n=istNow(), nowSec=n.getHours()*3600+n.getMinutes()*60+n.getSeconds(), LIVE=30*60, live=null;
    AARTIS.forEach(function(a){ var st=a[1]*60; if(nowSec>=st && nowSec<st+LIVE) live=a; });
    return live ? ('\uD83D\uDD14 '+live[0]+' is being offered now in Shirdi') : '';
  }catch(e){ return ''; }
}
function initDarshanPopup(){
  try{
    if(/admin\.html$/i.test(location.pathname)) return;
    var KEY='darshan_seen';
    try{ if(Date.now()-(+(localStorage.getItem(KEY)||0)) < 48*3600*1000) return; }catch(e){}
    var fired=false;
    function show(){
      if(fired) return;
      if(document.querySelector('.gpop-backdrop.open')){ setTimeout(show,10000); return; } // don't stack on the festival popup
      fired=true; try{ localStorage.setItem(KEY, Date.now()); }catch(e){}
      build();
    }
    setTimeout(show, 25000); // a "middle of the visit" surprise
  }catch(e){}
}
function build(){
  var wrap=document.createElement('div'); wrap.className='dpop'; wrap.setAttribute('role','dialog'); wrap.setAttribute('aria-modal','true'); wrap.setAttribute('aria-label','A moment of darshan');
  var aarti=dpopAartiLine();
  wrap.innerHTML=
    '<div class="dpop-scene" id="dScene" style="background-image:url(\'darshan-backdrop.jpg\')">'+
      '<div class="dpop-bg" style="background-image:url(\'darshan-backdrop.jpg\')"></div>'+
      '<div class="dpop-rays"></div>'+
      '<img class="dpop-baba" src="darshan-baba.png" alt="Shree Sai Baba darshan">'+
      '<div class="dpop-lamp">'+
        '<span class="dpop-diyaGlow"></span>'+
        '<img class="dpop-diya unlit" src="darshan-diya-unlit.png" alt="" aria-hidden="true">'+
        '<img class="dpop-diya lit" src="darshan-diya-lit.png" alt="" aria-hidden="true">'+
      '</div>'+
      '<div class="dpop-text">'+
        '<div class="dpop-aarti">'+aarti+'</div>'+
        '<h3 class="dpop-title" id="dTitle">A moment of darshan</h3>'+
        '<p class="dpop-sub" id="dSub">Light a diya and take Baba\u2019s blessing.</p>'+
        '<button class="dpop-light" id="dLight">\uD83E\uDE94 Light the diya</button>'+
        '<div class="dpop-after" id="dAfter" hidden>'+
          '<a class="dpop-cta" href="shop.html">Continue with blessings \u2192</a>'+
          '<button class="dpop-share" id="dShare">\uD83D\uDCF2 Share this darshan</button>'+
        '</div>'+
      '</div>'+
      '<button class="dpop-sound" id="dSound" aria-label="Toggle sound" title="Sound">\uD83D\uDD14</button>'+
      '<button class="dpop-x" id="dX" aria-label="Close">\u00d7</button>'+
    '</div>';
  document.body.appendChild(wrap);
  var scene=wrap.querySelector('#dScene');
  function close(){ wrap.classList.remove('open'); setTimeout(function(){ wrap.remove(); },600); document.removeEventListener('keydown',onKey); }
  function onKey(e){ if(e.key==='Escape') close(); }
  function petals(){
    try{ for(var i=0;i<9;i++){ (function(){ var p=document.createElement('span'); p.className='dpop-petal';
      p.style.left=(6+Math.random()*88)+'%'; p.style.animationDuration=(3.4+Math.random()*2.4)+'s'; p.style.animationDelay=(Math.random()*0.8)+'s';
      p.style.width=p.style.height=(9+Math.random()*9)+'px'; scene.appendChild(p); setTimeout(function(){p.remove();},7000); })(); } }catch(e){}
  }
  wrap.querySelector('#dLight').addEventListener('click',function(){
    scene.classList.add('lit-on');
    dpopBell(); if(navigator.vibrate) navigator.vibrate([25,40,20]); petals();
    var sub=wrap.querySelector('#dSub'), after=wrap.querySelector('#dAfter'), title=wrap.querySelector('#dTitle');
    title.textContent='Baba\u2019s blessings be with you';
    sub.innerHTML='<span class="bless" translate="no">\u0965 \u0936\u094D\u0930\u0940 \u0938\u093E\u0908\u0928\u093E\u0925\u093E\u092F \u0928\u092E\u0903 \u0965</span>May Baba bless you and your family with Shraddha &amp; Saburi.';
    this.hidden=true; after.hidden=false;
  });
  wrap.querySelector('#dShare').addEventListener('click',function(){
    var msg='\uD83E\uDE94 I took Baba\u2019s darshan at Saileela and lit a diya. Om Sai Ram \uD83D\uDE4F  '+location.origin+'/';
    window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank','noopener');
  });
  var sBtn=wrap.querySelector('#dSound');
  sBtn.addEventListener('click',function(){ DPOP_sound=!DPOP_sound; sBtn.classList.toggle('off',!DPOP_sound); sBtn.textContent=DPOP_sound?'\uD83D\uDD14':'\uD83D\uDD07'; });
  wrap.querySelector('#dX').addEventListener('click',close);
  wrap.addEventListener('click',function(e){ if(e.target===wrap) close(); });
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ wrap.classList.add('open'); document.addEventListener('keydown',onKey); }); });
}

/* ---------- public API + wiring ---------- */
const Saileela={
  money,ICON,tint,findProduct,Cart,Store,ICON_KEYS,
  get CATALOG(){return Store.load().products.filter(p=>p.active!==false);},
  get CATS(){return ['All',...Store.load().cats];},
  settings(){return Store.load().settings;},
  tv(){return Store.load().tv;},
  placeOrder(o){const d=Store.load();o.id='SL'+String(Date.now()).slice(-6);o.ts=Date.now();o.status='New';d.orders.unshift(o);Store.save();return o.id;},
  applyContent(){const s=Store.load().settings;document.querySelectorAll('[data-bind]').forEach(el=>{const k=el.dataset.bind;if(s[k]!=null)el.innerHTML=s[k];});},
  productCard(p,i=0){
    const b=(p.badge||'').toLowerCase();
    const badge=p.badge?`<span class="badge ${b==='new'?'new':(b==='exclusive'?'excl':'')}">${b==='new'?'New':p.badge}</span>`:'';
    const on=Wish.has(p.id)?'on':'';
    return `<article class="card reveal">
      <div class="tile">${badge}<button class="wish ${on}" aria-label="Save ${p.n} to wishlist" onclick="Saileela.toggleWish('${p.id}',this)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20s-6.5-4.2-9-8C1.4 9.3 3 6 6.3 6 8.6 6 12 8.3 12 8.3S15.4 6 17.7 6C21 6 22.6 9.3 21 12c-2.5 3.8-9 8-9 8Z"/></svg></button><a class="tilelink" href="product.html?id=${p.id}" aria-label="${p.n}">${p.img?`<img class="ph-img" src="${p.img}" alt="${p.n}" loading="lazy">`:`<span class="ph-mark">${ICON[p.icon]}</span>`}<span class="ph-shadow"></span></a></div>
      <div class="body"><div class="cat-label">${p.subcat||p.cat}</div><h3><a href="product.html?id=${p.id}">${p.n}</a></h3>
        <div class="foot"><div class="price">${money(p.p)}${p.o?`<s>${money(p.o)}</s>`:''}</div>
          <button class="add" aria-label="Add ${p.n} to cart" onclick="Saileela.addToCart('${p.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 7h13l-1.2 9.5a1 1 0 0 1-1 .9H8.2a1 1 0 0 1-1-.9L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg></button></div></div></article>`;
  },
  toggleWish(id,btn){const on=Wish.toggle(id);if(btn)btn.classList.toggle('on',on);this.wishBump();this.toast(on?'Saved to wishlist':'Removed from wishlist');},
  wishBump(){const el=document.getElementById('wishCount');if(!el)return;const n=Wish.count();el.textContent=n;el.classList.toggle('show',n>0);},
  openSearch(){const o=document.getElementById('searchOv');if(!o)return;o.classList.add('open');const i=o.querySelector('input');if(i)setTimeout(()=>i.focus(),60);},
  closeSearch(){const o=document.getElementById('searchOv');if(o)o.classList.remove('open');},
  addToCart(id,qty=1){ Cart.add(id,qty); const p=findProduct(id); this.toast(`${p?p.n:'Item'} added to cart`); this.bump(); },
  enquire(msg){ const wa=(Store.load().settings.whatsapp||'').replace(/\D/g,''); const url=wa?('https://wa.me/'+wa+'?text='+encodeURIComponent(msg||'Namaste Saileela, I would like to enquire about your Shirdi travel services.')):'contact.html'; window.open(url,'_blank','noopener'); },
  toast(msg){ const t=document.getElementById('toast'); if(!t)return; document.getElementById('toastMsg').textContent=msg; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2200); },
  bump(){ const el=document.getElementById('cartCount'); if(!el)return; const q=Cart.count(); el.textContent=q; el.classList.toggle('show',q>0); el.style.transform='scale(1.4)'; setTimeout(()=>el.style.transform='',180); this.renderDrawer(); },
  openDrawer(){ this.renderDrawer(); document.getElementById('drawer').classList.add('open'); document.getElementById('scrim').classList.add('open'); },
  setLang(l){
    var host=location.hostname;
    document.cookie='googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    document.cookie='googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain='+host;
    document.cookie='googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.'+host;
    if(l&&l!=='en'){var val='/en/'+l;document.cookie='googtrans='+val+';path=/';document.cookie='googtrans='+val+';path=/;domain='+host;document.cookie='googtrans='+val+';path=/;domain=.'+host;}
    location.reload();
  },
  closeAll(){ document.querySelectorAll('.drawer,.scrim,.mnav').forEach(e=>e.classList.remove('open')); },
  renderDrawer(){
    const box=document.getElementById('drawerItems'),foot=document.getElementById('drawerFoot'); if(!box)return;
    const items=Cart.detailed();
    if(!items.length){ box.innerHTML=`<div class="drawer-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg><p>Your cart is empty.</p></div>`; foot.style.display='none'; return; }
    box.innerHTML=items.map((c,i)=>`<div class="ditem"><div class="dt" style="background:${tint(i)}">${ICON[c.icon]}</div><div><h4>${c.n}</h4><div class="dp">${money(c.p)} × ${c.qty}</div><div class="rm" role="button" tabindex="0" onclick="Saileela.removeFromCart('${c.id}')" onkeydown="if(event.key==='Enter')Saileela.removeFromCart('${c.id}')">Remove</div></div></div>`).join('');
    document.getElementById('dSub').textContent=money(Cart.subtotal()); foot.style.display='block';
  },
  removeFromCart(id){ Cart.remove(id); this.bump(); document.dispatchEvent(new Event('cart:render')); },
  subscribe(e){ e.preventDefault(); e.target.reset(); this.toast('Welcome to the Saileela family 🙏'); return false; }
};
Saileela.search=function(form){var i=form.querySelector('input');var q=(i&&i.value||'').trim();window.location.href='shop.html'+(q?('?q='+encodeURIComponent(q)):'');return false;};
window.Saileela=Saileela;

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  renderHeader(); renderFooter(); injectOverlays(); injectVoiceAgent(); startBrandTranslitWatch(); initGaneshPopup(); startLiveActivity(); initDevotionCorner(); initDarshanPopup();
  // wire the mobile menu immediately (before anything that could throw)
  try{
    const burger=document.getElementById('burger'); if(burger)burger.onclick=()=>{const m=document.getElementById('mnav');if(m)m.classList.add('open');const s2=document.getElementById('scrim');if(s2)s2.classList.add('open');};
    const mc=document.getElementById('mnavClose'); if(mc)mc.onclick=()=>Saileela.closeAll();
    document.querySelectorAll('.mnav a').forEach(a=>a.onclick=()=>Saileela.closeAll());
  }catch(e){}
  try{Saileela.applyContent();Saileela.bump();Saileela.wishBump();}catch(e){}
  try{
    if(!document.getElementById('google_translate_element')){
      window.googleTranslateElementInit=function(){try{new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'en,hi,te',autoDisplay:false},'google_translate_element');}catch(e){}};
      var _gd=document.createElement('div');_gd.id='google_translate_element';_gd.style.cssText='display:none';document.body.appendChild(_gd);
      var _gs=document.createElement('script');_gs.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';document.body.appendChild(_gs);
    }
  }catch(e){}
  const sov=document.getElementById('searchOv'); if(sov)sov.onclick=e=>{if(e.target.id==='searchOv')Saileela.closeSearch();};
  const header=document.getElementById('header');
  addEventListener('scroll',()=>header&&header.classList.toggle('shrunk',scrollY>20));
  const dc=document.getElementById('drawerClose'); if(dc)dc.onclick=()=>Saileela.closeAll();
  const scr=document.getElementById('scrim'); if(scr)scr.onclick=()=>Saileela.closeAll();
  const burger=document.getElementById('burger'); if(burger)burger.onclick=()=>{const m=document.getElementById('mnav');if(m)m.classList.add('open');const s2=document.getElementById('scrim');if(s2)s2.classList.add('open');};
  const mc=document.getElementById('mnavClose'); if(mc)mc.onclick=()=>Saileela.closeAll();
  document.querySelectorAll('.mnav a').forEach(a=>a.onclick=()=>Saileela.closeAll());
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){Saileela.closeAll();Saileela.closeSearch();}});
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
});
