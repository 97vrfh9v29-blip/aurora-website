const members = [
  {name:'Mia',color:'#A32642',symbol:'✦',role:'Main Rapper · Vocalist',mbti:'ESTP',birthday:'December 19, 1999',zodiac:'Sagittarius',deity:'Ares',facts:['Oldest member of AURORA.','Produces, composes and writes music for the group.','Often sings the lower harmonies.','Started making beats at eleven.','Competitive, daring and loves high heels.']},
  {name:'Lea',color:'#A7A4E6',symbol:'✧',role:'Leader · Main Vocalist · Lead Dancer',mbti:'INFP',birthday:'January 26, 2001',zodiac:'Aquarius',deity:'Zeus',facts:['Chosen as leader by the members before debut.','Lived in New York during childhood.','Known for her clear, powerful vocal tone.','Has written many AURORA songs.','The members affectionately call her odd.']},
  {name:'Yuri',color:'#742C47',symbol:'✳',role:'Main Vocalist · Lead Dancer',mbti:'ISTP',birthday:'February 2, 2001',zodiac:'Aquarius',deity:'Athena',facts:['Blunt, funny and a great storyteller.','The members call her their best judge of character.','Loves cooking meals for the group.','Hates crying in front of others because she gets embarrassed.','Co-adopted cats Mochi and Miso with Yejin.']},
  {name:'Yejin',color:'#22816A',symbol:'❀',role:'Main Vocalist',mbti:'INFJ',birthday:'September 22, 2001',zodiac:'Virgo',deity:'Hera',facts:['Born in Busan.','Enjoys drawing and painting.','Plays guitar, piano and violin.','Seems calm at first, but loves teasing the members.','Co-adopted Mochi and Miso with Yuri.']},
  {name:'Yena',color:'#F0C94D',symbol:'★',role:'Lead Vocalist · Lead Rapper · Main Dancer',mbti:'ENFP',birthday:'April 23, 2002',zodiac:'Taurus',deity:'Hermes',facts:['Professionally trained in dance.','Known for her lively, spontaneous sense of humor.','Part of Powerpuffz with Chaeyoung and Eunhee.']},
  {name:'Chaeyoung',color:'#7BBDE8',symbol:'✿',role:'Sub Vocalist · Visual · Center',mbti:'ESFJ',birthday:'June 1, 2002',zodiac:'Gemini',deity:'Poseidon',facts:['Loves video games and has a custom pink keyboard and controller.','Very good at math.','Her favorite color is pink.','Part of Powerpuffz with Yena and Eunhee.']},
  {name:'Eunhee',color:'#3566C3',symbol:'✶',role:'Main Vocalist · Lead Dancer',mbti:'ISTP',birthday:'August 1, 2002',zodiac:'Leo',deity:'Apollo',facts:['An only child.','Her mother is a famous actress.','Has perfect pitch.','Part of Powerpuffz with Yena and Chaeyoung.']},
  {name:'Chaerin',color:'#E8893C',symbol:'☼',role:'Lead Vocalist',mbti:'ENFP',birthday:'October 5, 2002',zodiac:'Libra',deity:'Demeter',facts:['Inspired to become an idol by Girls’ Generation.','Excellent at keeping secrets.','Hosts Chaerin’s Corner.','The most energetic member, and one of the best at variety shows.','The members joke she is the worst cook.']},
  {name:'Miju',color:'#DB8FAD',symbol:'☾',role:'Sub Vocalist · Visual',mbti:'ISFJ',birthday:'October 15, 2002',zodiac:'Libra',deity:'Artemis',facts:['An only child.','Has written multiple AURORA songs.','Originally wanted to be an actress.','Her favorite season is autumn.','Known for being emotional and unexpectedly funny.']},
  {name:'Misa',color:'#714D80',symbol:'♣',role:'Sub Vocalist · Sub Rapper',mbti:'INTJ',birthday:'November 17, 2003',zodiac:'Scorpio',deity:'Dionysus',facts:['From Japan.','Wants a pet ferret.','Known for dry humor and a playful side around the members.','Close friends with Yerin; their duo is called Miniz.']},
  {name:'Yerin',color:'#C9A4DC',symbol:'♡',role:'Sub Vocalist',mbti:'INFP',birthday:'January 2, 2004',zodiac:'Capricorn',deity:'Hephaestus',facts:['The shortest member.','Fluent in Japanese.','Has an older brother.','The most chronically online member.','The most active in the group chat.']},
  {name:'Mihyun',color:'#70C6C3',symbol:'✺',role:'Sub Vocalist · Sub Rapper · Visual · Face of the Group',mbti:'ISFP',birthday:'March 10, 2004',zodiac:'Pisces',deity:'Aphrodite',facts:['Youngest member of AURORA.','Her older sister is an actress.','Loves mint chocolate ice cream, unlike the other members.','Part of the Princesses trio with Chaeyoung and Miju.']}
];
members.forEach(m => m.image = `images/members/${m.name.toLowerCase()}.jpg`);

const grid=document.getElementById('memberGrid');
grid.innerHTML=members.map((m,i)=>`<button class="member-tile" data-member="${i}" aria-label="View ${m.name}'s profile"><div class="member-art" style="--member-color:${m.color}"><span class="member-index">${String(i+1).padStart(2,'0')} / 12</span>${m.image?`<img class="member-photo" src="${m.image}" alt="${m.name}" onerror="this.style.display='none'">`:`<span>${m.symbol}</span>`}</div><span class="member-name">${m.name} ↗</span><span class="member-role">${m.role}</span></button>`).join('');

const modal=document.getElementById('memberModal');
let previousFocus=null;

function openMember(i){
 const m=members[i];
 previousFocus=document.activeElement;
 document.getElementById('modalContent').innerHTML=`
 <div class="modal-head">
  <div class="modal-avatar" style="background:${m.color}">${m.image?`<img src="${m.image}" alt="${m.name}" onerror="this.style.display='none'">`:m.symbol}</div>
  <div><span class="modal-kicker">STAR ${String(i+1).padStart(2,'0')} / 12</span><h2 id="modalName">${m.name}</h2><p>${m.role}</p></div>
 </div>
 <div class="official-profile-details">
  <div><span>STAGE NAME</span><strong>${m.name}</strong></div>
  <div><span>BIRTHDAY</span><strong>${m.birthday}</strong></div>
  <div><span>MBTI</span><strong>${m.mbti}</strong></div>
  <div><span>ZODIAC SIGN</span><strong>${m.zodiac}</strong></div>
  <div><span>REPRESENTATIVE DEITY</span><strong>${m.deity}</strong></div>
  <div><span>POSITIONS</span><strong>${m.role}</strong></div>
  <div><span>REPRESENTATIVE COLOR</span><strong><i class="profile-color-dot" style="background:${m.color}"></i>${m.color.toUpperCase()}</strong></div>
  <div><span>SYMBOL</span><strong>${m.symbol}</strong></div>
 </div>`;
 modal.hidden=false;
 document.body.style.overflow='hidden';
 document.getElementById('closeModal').focus();
}

function closeMember(){
 modal.hidden=true;
 document.body.style.overflow='';
 if(previousFocus)previousFocus.focus();
}

grid.addEventListener('click',e=>{
 const btn=e.target.closest('[data-member]');
 if(btn)openMember(Number(btn.dataset.member));
});

document.getElementById('closeModal').addEventListener('click',closeMember);
modal.addEventListener('click',e=>{
 if(e.target===modal)closeMember();
});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&!modal.hidden)closeMember();
});

const folderContent={
archive:{title:'♫ MUSIC ARCHIVE',html:`<h3>Soundtrack of the stars ♫</h3><p>Browse the eras that made AURORA, from their 2019 debut to their next chapter.</p><span class="mini-tag">2019 · INTO BLOOM</span><span class="mini-tag">2019 · RISE OF WINGS</span><span class="mini-tag">2027 · A★POP</span><p>✧ This archive is a starter collection. Add more releases as the Wattpad story develops.</p>`},
rorie:{title:'♡ RORIE ROOM',html:`<h3>Dear RORIE, ♡</h3><p>A tiny corner of the internet for messages from the girls.</p><div class="message"><strong>YERIN · 10:42 PM</strong>who changed the group chat name again 😭</div><div class="message"><strong>CHAERIN · 11:03 PM</strong>new Chaerin's Corner episode soon!! ♡</div><div class="message"><strong>MIA · 11:19 PM</strong>it was me. you're welcome</div><p><em>These are fictional sample messages. Edit them anytime in script.js.</em></p>`},
tv:{title:'▶ AURORA TV',html:`<h3>On air with AURORA ▶</h3><p>Shows, backstage moments, and twelve people who can never stay serious for long.</p><ul><li><strong>All In AURORA</strong> — the group's variety series</li><li><strong>Chaerin's Corner</strong> — Chaerin's very own talk and variety show</li><li><strong>Behind the Stars</strong> — behind-the-scenes archive (sample section)</li></ul><p>Episode thumbnails and real links can be added later.</p>`},
vault:{title:'✧ THE VAULT',html:`<h3>Classified: RORIE only ✧</h3><p>A collection of little moments that don't belong anywhere else.</p><ul><li>Favorite member duos: LeRi, Teniez, Miniz</li><li>The Princesses: Chaeyoung, Miju and Mihyun</li><li>Powerpuffz: Yena, Chaeyoung and Eunhee</li><li>Mochi & Miso: the cats Yuri and Yejin adopted together</li></ul><p>✳ Add photos, inside jokes and easter eggs here as your universe grows.</p>`}
};

const windowEl=document.getElementById('universeWindow');
let lastFolder=null;

document.querySelectorAll('[data-window]').forEach(b=>b.addEventListener('click',()=>{
 const c=folderContent[b.dataset.window];
 lastFolder=b;
 document.getElementById('windowTitle').textContent=c.title;
 document.getElementById('windowBody').innerHTML=c.html;
 windowEl.hidden=false;
 document.getElementById('closeWindow').focus();
}));

document.getElementById('closeWindow').addEventListener('click',()=>{
 windowEl.hidden=true;
 if(lastFolder)lastFolder.focus();
});

document.getElementById('copyHandle').addEventListener('click',async()=>{
 const b=document.getElementById('copyHandle');
 try{
  await navigator.clipboard.writeText('@weareaurora');
  b.textContent='COPIED ✓';
 }catch(e){
  b.textContent='@weareaurora';
 }
 setTimeout(()=>b.textContent='COPY ↗',1700);
});

const menuButton=document.getElementById('menuButton'),
mobileNav=document.getElementById('mobileNav');

menuButton.addEventListener('click',()=>{
 mobileNav.hidden=!mobileNav.hidden;
 menuButton.setAttribute('aria-expanded',String(!mobileNav.hidden));
});

mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
 mobileNav.hidden=true;
 menuButton.setAttribute('aria-expanded','false');
}));

/* ===== EDIT YOUR SITE CONTENT BELOW ===== */
const albums = [
  {title:'THIS IS FOR',detail:'4th Full Album · Formula Of Us',image:'images/albums/this-is-for.jpg'},
  {title:'Know About Me',detail:'4th EP · Lucid Flame',image:'images/albums/know-about-me.jpg'},
  {title:'Escape Room',detail:'Special Mixtape · Reverie',image:'images/albums/escape-room.jpg'},
  {title:'Rewind',detail:'8th Mini Album · from our memento box',image:'images/albums/rewind.jpg'},
  {title:'Hot (placeholder)',detail:'3rd EP · Golden Dawn',image:'images/albums/hot.jpg'},
  {title:'Talk That Talk',detail:'7th Mini Album · BETWEEN 1&2',image:'images/albums/talk-that-talk.jpg'}
];

const news = [
  {date:'2026–2027',category:'WELCOME',title:'Welcome to AURORA WORLD',summary:'The official-style fictional fan universe is open. Explore the members, music, and little surprises.',image:'images/news/welcome.jpg'},
  {date:'COMING SOON',category:'UPDATES',title:'More announcements on the way',summary:'Replace this sample with a story-era comeback announcement, performance, interview, or episode release.',image:'images/news/announcement.jpg'}
];

const musicVideos = [
  {title:'La Vie en Rose',era:'Into Bloom · 2019',thumbnail:'images/videos/la-vie-en-rose.jpg',url:''},
  {title:'Butterfly',era:'Rise of Wings · 2019',thumbnail:'images/videos/butterfly.jpg',url:''}
];

/* MIMORI official mascot information */
const mimoriInfo = {
  Mia: {
    name: 'ROUKI',
    animal: 'Wolf',
    personality: 'Bold, competitive, adventurous',
    accessory: 'Rose',
    description: "Rouki is a fearless little wolf who loves a challenge. She's confident, competitive, and always ready for an adventure. Although she acts tough, she's secretly affectionate and hates being left out."
  },
  Lea: {
    name: 'ANGBUN',
    animal: 'Bunny',
    personality: 'Caring, playful, mischievous',
    accessory: 'Lotus flower',
    description: "Angbun is a sweet blue bunny who loves looking after her friends. Behind her innocent smile is a playful troublemaker who loves teasing others and joining in on the fun."
  },
  Yuri: {
    name: 'SÉLI',
    animal: 'Swan',
    personality: 'Witty, competitive, dependable',
    accessory: 'Crown',
    description: "Séli is a graceful swan with a surprisingly hilarious personality. She loves telling dramatic stories, teasing her friends, and turning ordinary activities into competitions."
  },
  Yejin: {
    name: 'KLOVI',
    animal: 'Fox',
    personality: 'Clever, creative, mischievous',
    accessory: 'Clover',
    description: "Klovi is a clever little fox who enjoys painting, collecting pretty things, and playing harmless tricks. She always manages to look completely innocent when she's the one causing trouble."
  },
  Yena: {
    name: 'PIPPO',
    animal: 'Duck',
    personality: 'Energetic, curious, spontaneous',
    accessory: 'Star',
    description: "Pippo is a cheerful little duck who loves exploring and trying new things. Her endless curiosity and spontaneous ideas make every day more exciting."
  },
  Chaeyoung: {
    name: 'BINNIE',
    animal: 'Cat',
    personality: 'Sweet, clever, playful',
    accessory: 'Butterfly',
    description: "Binnie is a strawberry-pink cat with a sweet face and a mischievous personality. She loves games, puzzles, and teasing her friends. She's always thinking several steps ahead."
  },
  Eunhee: {
    name: 'ZAZI',
    animal: 'Leopard',
    personality: 'Confident, outspoken, loyal',
    accessory: 'Leopard-print bow',
    description: "Zazi is a confident little leopard who likes doing things her own way. She can be stubborn and competitive, but she's fiercely loyal and protective of her friends."
  },
  Chaerin: {
    name: 'POMPOM',
    animal: 'Puppy',
    personality: 'Friendly, expressive, affectionate',
    accessory: 'Daisy',
    description: "Pompom is a cheerful puppy with a daisy in her hair. She makes friends everywhere she goes, loves cheering everyone up, and always brings excitement wherever she goes."
  },
  Miju: {
    name: 'DORONG',
    animal: 'Deer',
    personality: 'Gentle, thoughtful, easily startled',
    accessory: 'Crescent moon',
    description: "Dorong is a gentle little deer with big expressive eyes. She notices when her friends need comfort and loves giving thoughtful gifts. She's easily frightened but has an unexpectedly funny side."
  },
  Misa: {
    name: 'KIKO',
    animal: 'Koala',
    personality: 'Quiet, observant, secretly playful',
    accessory: 'Black-cat charm',
    description: "Kiko is a quiet koala who prefers observing from the sidelines. Around her closest friends, she's surprisingly sarcastic, expressive, and playful. Scary games always bring out her loudest reactions."
  },
  Yerin: {
    name: 'TAMTAM',
    animal: 'Hamster',
    personality: 'Talkative, cheeky, fearless',
    accessory: 'Wing clip',
    description: "Tamtam is a tiny hamster with a huge personality. She's witty, talkative, and loves teasing everyone. Despite her size, she never backs down from an argument."
  },
  Mihyun: {
    name: 'LULI',
    animal: 'Peacock',
    personality: 'Fashionable, confident, playful',
    accessory: 'Jeweled feather crown',
    description: "Luli is a stylish aquamarine peacock who loves dressing up and showing off her beautiful feathers. She's playful, confident, and always ready for a photo."
  }
};

const mascots = members.map(m => {
  const info = mimoriInfo[m.name];
  return {
    member: m.name,
    name: info.name,
    animal: info.animal,
    personality: info.personality,
    accessory: info.accessory,
    description: info.description,
    image: `images/mascots/${m.name.toLowerCase()}.png`,
    color: m.color
  };
});

function safeText(value){
 return String(value ?? '').replace(/[&<>"']/g,ch=>({
  '&':'&amp;',
  '<':'&lt;',
  '>':'&gt;',
  '"':'&quot;',
  "'":'&#39;'
 }[ch]));
}

function imageOrPlaceholder(path,alt,placeholder='✳'){
 return `<div class="media-frame"><img src="${safeText(path)}" alt="${safeText(alt)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false"><span class="image-placeholder" hidden>${safeText(placeholder)}</span></div>`;
}

function renderAlbums(){
 document.getElementById('albumGallery').innerHTML=albums.map(a=>`<article class="album-card">${imageOrPlaceholder(a.image,a.title+' album cover','♫')}<h3>${safeText(a.title)}</h3><p>${safeText(a.detail)}</p></article>`).join('');
 folderContent.archive.html=`<h3>Soundtrack of the stars ♫</h3><p>Visit the Soundtrack section for the full discography.</p>${albums.map(a=>`<span class="mini-tag">${safeText(a.detail)} · ${safeText(a.title)}</span>`).join('')}<p><a href="#music" class="window-link" onclick="document.getElementById('universeWindow').hidden=true">VIEW THE SOUNDTRACK ↗</a></p>`;
}

function renderNews(){
 document.getElementById('newsGrid').innerHTML=news.map(n=>`<article class="feature-card">${imageOrPlaceholder(n.image,n.title,'✧')}<div class="feature-copy"><p class="feature-meta">${safeText(n.date)} · ${safeText(n.category)}</p><h3>${safeText(n.title)}</h3><p>${safeText(n.summary)}</p></div></article>`).join('');
}

function renderVideos(){
 document.getElementById('videoGrid').innerHTML=musicVideos.map(v=>`<article class="feature-card video-card">${imageOrPlaceholder(v.thumbnail,v.title+' video thumbnail','▶')}<div class="feature-copy"><p class="feature-meta">${safeText(v.era)}</p><h3>${safeText(v.title)}</h3>${/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(v.url)?`<a class="feature-link" href="${safeText(v.url)}" target="_blank" rel="noopener noreferrer">WATCH VIDEO ↗</a>`:'<span class="feature-unavailable">VIDEO LINK COMING SOON</span>'}</div></article>`).join('');
}

function renderMascots(){
 const el=document.getElementById('mascotGrid');
 el.innerHTML=mascots.map((m,i)=>`<button type="button" class="mascot-card" data-mascot="${i}" style="--mascot-color:${safeText(m.color)}">${imageOrPlaceholder(m.image,m.member+' mascot','♡')}<strong>${safeText(m.name)}</strong><span>${safeText(m.member)}’s mascot ↗</span></button>`).join('');

 el.addEventListener('click',e=>{
  const b=e.target.closest('[data-mascot]');
  if(!b)return;

  const m=mascots[Number(b.dataset.mascot)];
  document.getElementById('mascotDetail').innerHTML=`
   <div class="mascot-detail-inner">
    ${imageOrPlaceholder(m.image,m.member+' mascot','♡')}
    <div>
     <p class="feature-meta">${safeText(m.member.toUpperCase())} · PLUSH FRIEND</p>
     <h3>${safeText(m.name)}</h3>
     <p><strong>Animal:</strong> ${safeText(m.animal)}</p>
     <p><strong>Personality:</strong> ${safeText(m.personality)}</p>
     <p><strong>Symbol accessory:</strong> ${safeText(m.accessory)}</p>
     <p>${safeText(m.description)}</p>
    </div>
   </div>`;

  document.getElementById('mascotDetail').scrollIntoView({
   behavior:'smooth',
   block:'nearest'
  });
 });
}

renderAlbums();
renderNews();
renderVideos();
renderMascots();
