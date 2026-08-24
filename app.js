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
  {id:'p1',n:'Sandal Agarbatti — Gift Box',p:299,o:399,icon:'incense',cat:'Pooja Samagri',r:4.9,c:820,badge:'new',stock:120,active:true,desc:'A premium box of long-burning sandalwood agarbatti, ideal for daily aarti and a calm, fragrant home mandir.'},
  {id:'p2',n:'Sai Satcharitra — Marathi',p:449,o:null,icon:'book',cat:'Books',r:5.0,c:1240,badge:'',stock:60,active:true,desc:'The beloved life and teachings of Sai Baba, in a clean, readable Marathi edition on quality paper.'},
  {id:'p3',n:'Rudraksha 108 Mala',p:699,o:899,icon:'mala',cat:'Malas',r:4.8,c:560,badge:'',stock:75,active:true,desc:'A traditional 108-bead rudraksha mala, hand-knotted and finished for daily japa and everyday wear.'},
  {id:'p4',n:'Marble Sai Murti — 9"',p:2899,o:3499,icon:'kalash',cat:'Idols',r:4.9,c:410,badge:'Bestseller',stock:24,active:true,desc:'A finely carved marble murti with hand-painted detailing, a serene centrepiece for your home shrine.'},
  {id:'p5',n:'Saffron Prayer Shawl',p:849,o:1099,icon:'shawl',cat:'Apparel',r:4.7,c:295,badge:'',stock:40,active:true,desc:'A soft saffron shawl with a gold border, comfortable for prayer, parayan and festival wear.'},
  {id:'p6',n:'Sai Leela Photo Frame',p:599,o:799,icon:'frame',cat:'Frames',r:4.8,c:670,badge:'',stock:90,active:true,desc:'An elegant framed photo with a warm gold finish, ready to hang or stand in your pooja space.'},
  {id:'p7',n:'Lotus Brass Diya Set',p:499,o:null,icon:'lotus',cat:'Pooja Samagri',r:4.9,c:930,badge:'new',stock:110,active:true,desc:'A set of lotus-shaped brass diyas that bring a soft, steady glow to your daily worship.'},
  {id:'p8',n:'Brass Palki Showpiece',p:1999,o:2499,icon:'palki',cat:'Frames',r:4.9,c:180,badge:'',stock:18,active:true,desc:'A detailed brass palki showpiece, a graceful decorative tribute for mandir or living room.'},
  {id:'p9',n:'Brass Shirdi Diya',p:1499,o:1899,icon:'diya',cat:'Pooja Samagri',r:4.9,c:340,badge:'Exclusive',stock:30,active:true,desc:'A heavyweight brass diya from our Saileela Exclusive line, crafted by Shirdi artisans.'},
  {id:'p10',n:'Saileela Signature Hamper',p:2499,o:2999,icon:'hamper',cat:'Gifting',r:5.0,c:210,badge:'Exclusive',stock:22,active:true,desc:'A hand-curated gift hamper of devotional essentials, beautifully boxed — our most-loved gift.'},
  {id:'p11',n:'Silver Sai Pocket Shrine',p:3299,o:null,icon:'kalash',cat:'Idols',r:4.9,c:96,badge:'Exclusive',stock:15,active:true,desc:'A pocket-sized silver-finish shrine to carry Baba with you, wherever the day takes you.'},
  {id:'p12',n:'Devotional Gift Wrap Add-on',p:99,o:null,icon:'lotus',cat:'Gifting',r:4.8,c:150,badge:'',stock:300,active:true,desc:'Premium festive wrapping with a handwritten note — add a blessing to any order.'},
  {id:'sagunopasna-kit',n:'Shree Sai Sagunopasna Kit',p:2499,o:2999,icon:'hamper',cat:'Pooja Samagri',r:5.0,c:0,badge:'Bestseller',stock:25,active:true,excl:true,featured:true,
   img:'sagunopasna-kit-box-v3.jpg',
   images:['sagunopasna-kit-box-v3.jpg','sagunopasna-kit-box-2-v3.jpg','kit-murti.jpg','kit-mukut.jpg','kit-vastra-red.jpg','kit-vastra-pink.jpg','kit-kalash.jpg','kit-katori.jpg','kit-diya.jpg','kit-agarbatti-stand.jpg','kit-bell.jpg','kit-chandan-tika.jpg','kit-chandan-agarbatti.jpg'],
   contents:['Marble Sai Baba Murti','Decorative Mukut (crown)','Vastra — 2 pieces','Brass Kalash','Brass Katori','Brass Diya','Brass Agarbatti Stand','Brass Ghanti (hand bell)','Tulsi Mala','Sai Chandan Tika','Sai Chandan Agarbatti','Shree Sai Sagunopasna Pustika','Shree Sainath Stavanmanjiri'],
   desc:'A thoughtfully curated devotional kit for performing Shree Sai Sagunopasana with श्रद्धा and devotion. Ideal for daily worship, special occasions and gifting to Sai devotees. Every item is chosen by hand and carefully packed in Shirdi.'},
  {id:'divya-darshan-kit',n:'Shree Sai Divya Darshan Kit',p:1599,o:2100,icon:'hamper',cat:'Pooja Samagri',r:5.0,c:0,badge:'Bestseller',stock:30,active:true,excl:true,
   img:'sagunopasna-kit-box-v3.jpg',
   images:['sagunopasna-kit-box-v3.jpg','sagunopasna-kit-box-2-v3.jpg','kit-murti.jpg','kit-mukut.jpg','kit-vastra-red.jpg','kit-vastra-pink.jpg','kit-chandan-tika.jpg','kit-chandan-agarbatti.jpg'],
   contents:['Marble Sai Baba Murti','Decorative Mukut (crown)','Vastra — 2 pieces','Tulsi Mala','Sai Chandan Tika','Sai Chandan Agarbatti','Shree Sai Sagunopasna Pustika','Shree Sainath Stavanmanjiri'],
   desc:'A Saileela Exclusive and Best Seller devotional kit designed to bring a divine Shirdi-inspired worship experience into your home. It contains the same devotional items as the Shree Sai Sagunopasna Kit, excluding all five brass pooja pots.'},
  {id:'divya-swaroop-kit',n:'Shree Sai Divya Swaroop Kit',p:1199,o:1600,icon:'kalash',cat:'Idols',r:5.0,c:0,badge:'Bestseller',stock:30,active:true,excl:true,
   img:'divya-swaroop-box.jpg',
   images:['divya-swaroop-box.jpg','divya-swaroop-open.jpg'],
   contents:['Shree Saibaba Idol','Vastra','Tulsi Mala','Decorative Mukut (crown)'],
   desc:'A Saileela Exclusive and Best Seller kit featuring a beautiful Shree Saibaba idol with Vastra, Mala and Mukut. A complete divine swaroop for your home temple, daily darshan and spiritual gifting.'},
  {id:'sai-akash-jyoti',n:'Shree Sai Akash Jyoti',p:1199,o:1500,icon:'frame',cat:'Frames',r:5.0,c:0,badge:'Bestseller',stock:40,active:true,excl:true,
   img:'sai-akash-jyoti-1.jpg',
   images:['sai-akash-jyoti-1.jpg','sai-akash-jyoti-2.jpg','sai-akash-jyoti-3.jpg','sai-akash-jyoti-4.jpg','sai-akash-jyoti-5.jpg'],
   desc:'A beautifully illuminated decorative lantern featuring divine images of Shree Saibaba on multiple sides. This Saileela Exclusive and Best Seller fills your home temple or prayer space with warm light and an uplifting devotional ambience.'},
  {id:'divya-ganesh-jyoti',n:'Shree Divya Ganesh Jyoti',p:1199,o:1500,icon:'frame',cat:'Frames',r:5.0,c:0,badge:'Bestseller',stock:40,active:true,excl:true,
   img:'ganesh-jyoti-1.jpg',
   images:['ganesh-jyoti-1.jpg','ganesh-jyoti-2.jpg','ganesh-jyoti-3.jpg','ganesh-jyoti-4.jpg'],
   desc:'An illuminated decorative Jyoti featuring divine images of Shree Ganesh on multiple sides. This Saileela Exclusive and Best Seller creates a warm, auspicious ambience for home temples, festive décor and spiritual gifting.'},
  {id:'ram-jyoti',n:'Shree Ram Jyoti Akashdeep',p:1199,o:1500,icon:'frame',cat:'Frames',r:5.0,c:0,badge:'Bestseller',stock:40,active:true,excl:true,
   img:'ram-jyoti-1.jpg',
   images:['ram-jyoti-1.jpg','ram-jyoti-2.jpg','ram-jyoti-3.jpg'],
   desc:'A beautifully illuminated devotional Akashdeep featuring divine images of Prabhu Shree Ram and Shree Ram Darbar on multiple sides. This Saileela Exclusive and Best Seller brings a warm, auspicious glow to your home, temple and festive celebrations.'}
];
const DEFAULT_CATS=['Idols','Pooja Samagri','Books','Frames','Apparel','Malas','Gifting'];
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
  whatsapp:'', email:'hello@saileela.store', phone:'', address:'Shirdi, Maharashtra 423109'
};
const DEFAULT_TV={
  nowTitle:'Prabhat Bhajan Sandhya', liveUrl:'https://stream.ottlive.co.in/saileelatv/index.m3u8',
  programmes:[
    {n:'Prabhat Bhajan Sandhya',w:'Daily · 5:30 AM',d:'Start the day with soulful morning bhajans and devotional keertan.',icon:'diya'},
    {n:'Sai Aarti Live',w:'Daily · 7:00 AM & 6:30 PM',d:'Join the morning and evening aarti with live darshan-style visuals.',icon:'lotus'},
    {n:'Sai Satcharitra Parayan',w:'Daily · 9:00 AM',d:'A chapter-a-day reading of Baba life and leelas, in Marathi & Hindi.',icon:'book'},
    {n:'Sai Katha & Pravachan',w:'Daily · 11:00 AM',d:'Discourses and stories from respected speakers on Baba teachings.',icon:'kalash'},
    {n:'Bal Sai — Kids Stories',w:'Weekends · 4:00 PM',d:'Animated Sai stories and values, made for young devotees.',icon:'frame'},
    {n:'Sai Leela — Devotee Diaries',w:'Guruvar · 8:00 PM',d:'Real devotees share the miracles and grace they have experienced.',icon:'hands'}
  ],
  schedule:[
    {t:'5:30 AM',n:'Prabhat Bhajan Sandhya',d:'Morning bhajans & keertan'},
    {t:'7:00 AM',n:'Sai Aarti Live',d:'Kakad-time morning aarti'},
    {t:'9:00 AM',n:'Sai Satcharitra Parayan',d:'Daily chapter reading'},
    {t:'11:00 AM',n:'Sai Katha & Pravachan',d:'Discourse of the day'},
    {t:'1:00 PM',n:'Bhajan & Abhang',d:'Devotional music hour'},
    {t:'4:00 PM',n:'Bal Sai Stories',d:'For young devotees'},
    {t:'6:30 PM',n:'Sai Aarti Live',d:'Evening aarti'},
    {t:'8:00 PM',n:'Sai Leela — Devotee Diaries',d:'Devotee experiences'},
    {t:'10:00 PM',n:'Shej Bhajan',d:'Night devotional wind-down'}
  ],
  distribution:{
    dth:[{name:'Tata Play',num:'Ch •••'},{name:'Airtel Digital TV',num:'Ch •••'},{name:'Dish TV',num:'Ch •••'},{name:'d2h',num:'Ch •••'},{name:'Sun Direct',num:'Ch •••'}],
    cable:[{name:'GTPL',num:'Ch •••'},{name:'Hathway',num:'Ch •••'},{name:'DEN Networks',num:'Ch •••'},{name:'Siti Cable',num:'Ch •••'},{name:'Local MSOs (Maharashtra)',num:'Ch •••'}],
    ott:[{name:'YouTube Live',num:'Subscribe'},{name:'Saileela TV App',num:'iOS · Android'},{name:'JioTV',num:'Live'},{name:'Facebook Live',num:'Follow'},{name:'Website live player',num:'Watch'}]
  },
  socials:[
    {plat:'YouTube',count:'1.2M',label:'subscribers',cta:'Subscribe',url:'#',color:'#c4302b'},
    {plat:'Facebook',count:'860K',label:'followers',cta:'Follow',url:'#',color:'#1877f2'},
    {plat:'Instagram',count:'540K',label:'followers',cta:'Follow',url:'#',color:'linear-gradient(45deg,#f09433,#bc1888)'},
    {plat:'WhatsApp',count:'Join',label:'daily blessings channel',cta:'Join',url:'#',color:'#25d366'}
  ]
};
const DATA_KEY='saileela_data_v5';
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
const NAV=[['shop.html','Shop'],['index.html#exclusive','Saileela Exclusive'],['saileela-tv.html','Saileela TV'],['about.html','Our Story']];
const brandSVG=`<svg class="brand-mark" viewBox="0 0 46 54" fill="none" aria-hidden="true"><defs><linearGradient id="bf" x1="0" y1="0" x2="46" y2="54"><stop stop-color="#F3E2A8"/><stop offset=".5" stop-color="#C9A554"/><stop offset="1" stop-color="#8A6A2C"/></linearGradient></defs><path d="M5 51V22C5 11 13 4 23 4s18 7 18 18v29" stroke="url(#bf)" stroke-width="1.5"/><path d="M9 51V23c0-9 6-15 14-15s14 6 14 15v28" stroke="url(#bf)" stroke-width="1" opacity=".45"/><circle cx="23" cy="4" r="2" fill="url(#bf)"/><path d="M23 12v7" stroke="url(#bf)" stroke-width="1"/><path d="M16 20q7 11 14 0-3 7-7 7t-7-7Z" fill="url(#bf)"/><path d="M23 20c-4-6 2-9-.5-15 5.5 6 3.5 12 .5 15Z" fill="#E0A32E"/><path d="M5 51h36" stroke="url(#bf)" stroke-width="1.5"/></svg>`;

function renderHeader(){
  const _s=Store.load().settings;
  const page=document.body.dataset.page||'index.html';
  const links=NAV.map(([h,l])=>`<a href="${h}" class="${h.split('#')[0]===page?'active':''}">${l}</a>`).join('');
  const mlinks=NAV.map(([h,l])=>`<a href="${h}">${l}</a>`).join('');
  const html=`
  <div class="announce"><span>Ships from Shirdi</span><span class="sep">•</span><span>Free shipping above ${money(_s.freeShipThreshold)}</span><span class="sep">•</span><span>Carefully packed</span></div>
  <header id="header"><div class="nav">
    <a class="brand" href="index.html" aria-label="Saileela home">
      <img class="brand-logo" src="saileela-logo.png" alt="Saileela" width="46" height="46">
      <div class="brand-name">Saileela</div></a>
    <nav class="links" aria-label="Primary">${links}</nav>
    <div class="nav-actions">
      <button class="icon-btn" aria-label="Search" onclick="Saileela.openSearch()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>
      <a class="icon-btn" href="shop.html?wish=1" aria-label="Wishlist"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-6.5-4.2-9-8C1.4 9.3 3 6 6.3 6 8.6 6 12 8.3 12 8.3S15.4 6 17.7 6C21 6 22.6 9.3 21 12c-2.5 3.8-9 8-9 8Z"/></svg><span class="wish-count" id="wishCount">0</span></a>
      <a class="icon-btn" href="cart.html" aria-label="Cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 7h13l-1.2 9.5a1 1 0 0 1-1 .9H8.2a1 1 0 0 1-1-.9L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg><span class="cart-count" id="cartCount">0</span></a>
      <button class="icon-btn burger" id="burger" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div></div></header>
  <div class="mnav" id="mnav" aria-hidden="true">
    <button class="icon-btn close" id="mnavClose" aria-label="Close menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    ${mlinks}</div>`;
  document.getElementById('site-header').innerHTML=html;
}

function renderFooter(){
  const html=`
  <section class="news"><div class="wrap inner reveal">
    <div class="eyebrow">Join the Saileela family</div>
    <h2>New arrivals & stories from Shirdi</h2>
    <p>Guruvar selections, new arrivals and stories from Shirdi — with ₹100 off your first order.</p>
    <form onsubmit="return Saileela.subscribe(event)"><input type="email" placeholder="Your email address" aria-label="Email address" required><button class="btn btn-primary" type="submit">Subscribe</button></form>
    <span class="wa"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Z"/></svg> Prefer WhatsApp? Get updates on WhatsApp</span>
  </div></section>
  <footer><div class="wrap"><div class="foot-grid">
    <div class="foot-brand"><div class="brand"><img class="brand-logo" src="saileela-logo.png" alt="Saileela" width="50" height="50"><span class="brand-name" style="font-family:Fraunces;font-size:1.4rem">Saileela</span></div>
      <div class="malik-f">॥ श्रद्धा • सबुरी • समर्पण ॥</div>
      <p>A premium devotional store, rooted in Shirdi. Chosen by hand, packed with care, delivered across India.</p>
      <div class="foot-addr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>Shirdi, Ahilyanagar, Maharashtra 423109</div>
      <p class="foot-future">Coming later — Shirdi Stay • Local Travel • Devotee Assistance</p>
    </div>
    <div><h4>Shop</h4><ul><li><a href="shop.html">All products</a></li><li><a href="index.html#exclusive">Saileela Exclusive</a></li><li><a href="shop.html?cat=Gifting">Gifting &amp; Hampers</a></li></ul></div>
    <div><h4>Saileela</h4><ul><li><a href="about.html">Our Story</a></li><li><a href="saileela-tv.html">Saileela TV</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    <div><h4>Help</h4><ul><li><a href="contact.html">Shipping</a></li><li><a href="contact.html">Returns</a></li><li><a href="contact.html">FAQ</a></li><li><a href="contact.html">Order support</a></li></ul></div>
    <div><h4>Follow</h4>
      <div class="socials">
        <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.5-5c-.3-1-1-1.7-2-2C18.5 4.5 12 4.5 12 4.5s-6.5 0-8.5.5c-1 .3-1.7 1-2 2C1 8.5 1 12 1 12s0 3.5.5 5c.3 1 1 1.7 2 2 2 .5 8.5.5 8.5.5s6.5 0 8.5-.5c1-.3 1.7-1 2-2 .5-1.5.5-5 .5-5Zm-13 3V9l5 3-5 3Z"/></svg></a>
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"/></svg></a>
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg></a>
        <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Z"/></svg></a>
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
      <div class="body"><div class="cat-label">${p.cat}</div><h3><a href="product.html?id=${p.id}">${p.n}</a></h3>
        <div class="foot"><div class="price">${money(p.p)}${p.o?`<s>${money(p.o)}</s>`:''}</div>
          <button class="add" aria-label="Add ${p.n} to cart" onclick="Saileela.addToCart('${p.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 7h13l-1.2 9.5a1 1 0 0 1-1 .9H8.2a1 1 0 0 1-1-.9L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg></button></div></div></article>`;
  },
  toggleWish(id,btn){const on=Wish.toggle(id);if(btn)btn.classList.toggle('on',on);this.wishBump();this.toast(on?'Saved to wishlist':'Removed from wishlist');},
  wishBump(){const el=document.getElementById('wishCount');if(!el)return;const n=Wish.count();el.textContent=n;el.classList.toggle('show',n>0);},
  openSearch(){const o=document.getElementById('searchOv');if(!o)return;o.classList.add('open');const i=o.querySelector('input');if(i)setTimeout(()=>i.focus(),60);},
  closeSearch(){const o=document.getElementById('searchOv');if(o)o.classList.remove('open');},
  addToCart(id,qty=1){ Cart.add(id,qty); const p=findProduct(id); this.toast(`${p?p.n:'Item'} added to cart`); this.bump(); },
  toast(msg){ const t=document.getElementById('toast'); if(!t)return; document.getElementById('toastMsg').textContent=msg; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2200); },
  bump(){ const el=document.getElementById('cartCount'); if(!el)return; const q=Cart.count(); el.textContent=q; el.classList.toggle('show',q>0); el.style.transform='scale(1.4)'; setTimeout(()=>el.style.transform='',180); this.renderDrawer(); },
  openDrawer(){ this.renderDrawer(); document.getElementById('drawer').classList.add('open'); document.getElementById('scrim').classList.add('open'); },
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
  renderHeader(); renderFooter(); injectOverlays(); Saileela.applyContent();
  Saileela.bump(); Saileela.wishBump();
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
