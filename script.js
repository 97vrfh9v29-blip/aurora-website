/* AURORA WEBSITE — COMPLETE SCRIPT */

/* MEMBER PROFILES */
const members = [
  {name:"Mia",color:"#A32642",symbol:"✦",role:"Main Rapper · Vocalist",mbti:"ESTP",birthday:"December 19, 1999",zodiac:"Sagittarius",deity:"Ares",facts:["Oldest member of AURORA.","Produces and writes music.","Known for her lower harmonies.","Competitive, bold and adventurous."]},
  {name:"Lea",color:"#A7A4E6",symbol:"✧",role:"Leader · Main Vocalist · Lead Dancer",mbti:"INFP",birthday:"January 26, 2001",zodiac:"Aquarius",deity:"Zeus",facts:["Chosen as leader by the members.","Lived in New York during childhood.","Known for her clear, powerful vocals.","Caring, playful and mischievous."]},
  {name:"Yuri",color:"#742C47",symbol:"✳",role:"Main Vocalist · Lead Dancer",mbti:"ISTP",birthday:"February 2, 2001",zodiac:"Aquarius",deity:"Athena",facts:["Blunt, funny and competitive.","Loves cooking.","Known for her storytelling.","Adopted cats Mochi and Miso with Yejin."]},
  {name:"Yejin",color:"#22816A",symbol:"❀",role:"Main Vocalist",mbti:"INFJ",birthday:"September 22, 2001",zodiac:"Virgo",deity:"Hera",facts:["Born in Busan.","Enjoys drawing and painting.","Plays guitar, piano and violin.","Loves teasing the members."]},
  {name:"Yena",color:"#F0C94D",symbol:"★",role:"Lead Vocalist · Lead Rapper · Main Dancer",mbti:"ENFP",birthday:"April 23, 2002",zodiac:"Taurus",deity:"Hermes",facts:["Professionally trained in dance.","Energetic and spontaneous.","Part of Powerpuffz with Chaeyoung and Eunhee."]},
  {name:"Chaeyoung",color:"#7BBDE8",symbol:"✿",role:"Lead Vocalist · Center",mbti:"ESFJ",birthday:"June 1, 2002",zodiac:"Gemini",deity:"Poseidon",facts:["Loves video games.","Very good at math.","Her favorite color is pink.","Part of Powerpuffz."]},
  {name:"Eunhee",color:"#3566C3",symbol:"✶",role:"Main Vocalist · Lead Dancer",mbti:"ISTP",birthday:"August 1, 2002",zodiac:"Leo",deity:"Apollo",facts:["An only child.","Her mother is a famous actress.","Has perfect pitch.","Confident, outspoken and loyal."]},
  {name:"Chaerin",color:"#E8893C",symbol:"☼",role:"Lead Vocalist",mbti:"ENFP",birthday:"October 5, 2002",zodiac:"Libra",deity:"Demeter",facts:["Inspired by Girls’ Generation.","Excellent at keeping secrets.","Hosts Chaerin’s Corner.","Friendly and expressive."]},
  {name:"Miju",color:"#DB8FAD",symbol:"☾",role:"Sub Vocalist",mbti:"ISFJ",birthday:"October 15, 2002",zodiac:"Libra",deity:"Artemis",facts:["An only child.","Has written AURORA songs.","Originally wanted to be an actress.","Gentle, thoughtful and unexpectedly funny."]},
  {name:"Misa",color:"#714D80",symbol:"♣",role:"Sub Vocalist · Sub Rapper",mbti:"INTJ",birthday:"November 17, 2003",zodiac:"Scorpio",deity:"Dionysus",facts:["From Japan.","Wants a pet ferret.","Known for her dry humor.","Close friends with Yerin; their duo is Miniz."]},
  {name:"Yerin",color:"#C9A4DC",symbol:"♡",role:"Sub Vocalist",mbti:"INFP",birthday:"January 2, 2004",zodiac:"Capricorn",deity:"Hephaestus",facts:["The shortest member.","Fluent in Japanese.","Has an older brother.","Talkative, witty and chronically online."]},
  {name:"Mihyun",color:"#70C6C3",symbol:"✺",role:"Sub Vocalist · Sub Rapper · Visual · Face of the Group",mbti:"ISFP",birthday:"March 10, 2004",zodiac:"Pisces",deity:"Aphrodite",facts:["Youngest member.","Her older sister is an actress.","Loves mint chocolate ice cream.","Fashionable, confident and playful."]}
];

members.forEach(m => {
  m.image = "images/members/" + m.name.toLowerCase() + ".jpg";
});

/* SAFE TEXT AND IMAGE HELPERS */
function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[ch]);
}

function imageOrPlaceholder(path, alt, symbol = "✳") {
  return `
    <div class="media-frame">
      <img src="${safeText(path)}"
           alt="${safeText(alt)}"
           loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.hidden=false">
      <span class="image-placeholder" hidden>${safeText(symbol)}</span>
    </div>
  `;
}

/* MEMBERS SECTION */
function renderMembers() {
  const grid = document.getElementById("memberGrid");
  if (!grid) return;

  grid.innerHTML = members.map((m,i) => `
    <button class="member-tile" data-member="${i}">
      <div class="member-art" style="--member-color:${m.color}">
        <span class="member-index">${String(i+1).padStart(2,"0")} / 12</span>
        <img class="member-photo"
             src="${m.image}"
             alt="${m.name}"
             onerror="this.style.display='none'">
      </div>
      <span class="member-name">${m.name} ↗</span>
      <span class="member-role">${m.role}</span>
    </button>
  `).join("");

  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-member]");
    if (button) openMember(Number(button.dataset.member));
  });
}

let previousFocus = null;

function openMember(index) {
  const m = members[index];
  const modal = document.getElementById("memberModal");
  const content = document.getElementById("modalContent");
  if (!modal || !content || !m) return;

  previousFocus = document.activeElement;

  content.innerHTML = `
    <div class="modal-head">
      <div class="modal-avatar" style="background:${m.color}">
        <img src="${m.image}" alt="${m.name}"
             onerror="this.style.display='none'">
      </div>
      <div>
        <span class="modal-kicker">STAR ${String(index+1).padStart(2,"0")} / 12</span>
        <h2 id="modalName">${m.name}</h2>
        <p>${m.role}</p>
      </div>
    </div>

    <div class="official-profile-details">
      <div><span>STAGE NAME</span><strong>${m.name}</strong></div>
      <div><span>BIRTHDAY</span><strong>${m.birthday}</strong></div>
      <div><span>MBTI</span><strong>${m.mbti}</strong></div>
      <div><span>ZODIAC SIGN</span><strong>${m.zodiac}</strong></div>
      <div><span>REPRESENTATIVE DEITY</span><strong>${m.deity}</strong></div>
      <div><span>POSITIONS</span><strong>${m.role}</strong></div>
      <div><span>REPRESENTATIVE COLOR</span><strong>
        <i class="profile-color-dot" style="background:${m.color}"></i>
        ${m.color.toUpperCase()}
      </strong></div>
      <div><span>SYMBOL</span><strong>${m.symbol}</strong></div>
    </div>
    <div class="member-facts">
      <h3>ABOUT ${m.name.toUpperCase()}</h3>
      <ul>${m.facts.map(f => `<li>${safeText(f)}</li>`).join("")}</ul>
    </div>
  `;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("closeModal")?.focus();
}

function closeMember() {
  const modal = document.getElementById("memberModal");
  if (modal) modal.hidden = true;
  document.body.style.overflow = "";
  if (previousFocus) previousFocus.focus();
}

function setupMemberModal() {
  document.getElementById("closeModal")?.addEventListener("click", closeMember);

  document.getElementById("memberModal")?.addEventListener("click", e => {
    if (e.target.id === "memberModal") closeMember();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMember();
  });
}

/* UNIVERSE FOLDERS */
const folderContent = {
  archive: {
    title: "♫ MUSIC ARCHIVE",
    html: `
      <h3>Soundtrack of the stars ♫</h3>
      <p>Explore AURORA's music, from their 2019 debut to their newest releases.</p>
      <span class="mini-tag">FORMULA OF US</span>
      <span class="mini-tag">LUCID FLAME</span>
      <span class="mini-tag">REVERIE</span>
      <span class="mini-tag">GOLDEN DAWN</span>
    `
  },
  rorie: {
    title: "♡ RORIE ROOM",
    html: `
      <h3>Dear RORIE, ♡</h3>
      <p>A little corner of the internet for messages from AURORA.</p>
      <div class="message"><strong>YERIN · 10:42 PM</strong>who changed the group chat name again 😭</div>
      <div class="message"><strong>CHAERIN · 11:03 PM</strong>new Chaerin's Corner episode soon!! ♡</div>
      <div class="message"><strong>MIA · 11:19 PM</strong>it was me. you're welcome</div>
    `
  },
  tv: {
    title: "▶ AURORA TV",
    html: `
      <h3>On air with AURORA ▶</h3>
      <p>Shows, backstage moments, and twelve members who can never stay serious.</p>
      <ul>
        <li><strong>All In AURORA</strong> — the group's variety series</li>
        <li><strong>Chaerin's Corner</strong> — Chaerin's talk and variety show</li>
        <li><strong>Behind the Stars</strong> — backstage moments</li>
      </ul>
    `
  },
  vault: {
    title: "✧ THE VAULT",
    html: `
      <h3>Classified: RORIE only ✧</h3>
      <p>A collection of little moments from AURORA's world.</p>
      <ul>
        <li>Member duos: LeRi, Teniez, Miniz</li>
        <li>The Princesses: Chaeyoung, Miju and Mihyun</li>
        <li>Powerpuffz: Yena, Chaeyoung and Eunhee</li>
        <li>Mochi & Miso: Yuri and Yejin's cats</li>
      </ul>
    `
  }
};

function setupUniverse() {
  const windowEl = document.getElementById("universeWindow");
  let lastFolder = null;

  document.querySelectorAll("[data-window]").forEach(button => {
    button.addEventListener("click", () => {
      const content = folderContent[button.dataset.window];
      if (!content || !windowEl) return;

      lastFolder = button;
      document.getElementById("windowTitle").textContent = content.title;
      document.getElementById("windowBody").innerHTML = content.html;
      windowEl.hidden = false;
      document.getElementById("closeWindow")?.focus();
    });
  });

  document.getElementById("closeWindow")?.addEventListener("click", () => {
    if (windowEl) windowEl.hidden = true;
    if (lastFolder) lastFolder.focus();
  });
}

/* MOBILE MENU */
function setupMenu() {
  const button = document.getElementById("menuButton");
  const nav = document.getElementById("mobileNav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    nav.hidden = !nav.hidden;
    button.setAttribute("aria-expanded", String(!nav.hidden));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.hidden = true;
      button.setAttribute("aria-expanded", "false");
    });
  });
}

/* SOCIAL HANDLE */
function setupCopyHandle() {
  const button = document.getElementById("copyHandle");
  if (!button) return;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("@weareaurora");
      button.textContent = "COPIED ✓";
    } catch (error) {
      button.textContent = "@weareaurora";
    }

    setTimeout(() => {
      button.textContent = "COPY ↗";
    }, 1700);
  });
}

/* SOUNDTRACK — SIX RECENT RELEASES */
const albums = [
  {
    title:"THIS IS FOR",
    detail:"4th Full Album · Formula Of Us",
    image:"images/albums/this-is-for.jpg"
  },
  {
    title:"Know About Me",
    detail:"4th EP · Lucid Flame",
    image:"images/albums/know-about-me.jpg"
  },
  {
    title:"Escape Room",
    detail:"Special Mixtape · Reverie",
    image:"images/albums/escape-room.jpg"
  },
  {
    title:"Rewind",
    detail:"8th Mini Album · from our memento box",
    image:"images/albums/rewind.jpg"
  },
  {
    title:"Hot (placeholder)",
    detail:"3rd EP · Golden Dawn",
    image:"images/albums/hot.jpg"
  },
  {
    title:"Talk That Talk",
    detail:"7th Mini Album · BETWEEN 1&2",
    image:"images/albums/talk-that-talk.jpg"
  }
];

function renderAlbums() {
  const gallery = document.getElementById("albumGallery");
  if (!gallery) return;

  gallery.innerHTML = albums.map(album => `
    <article class="feature-card">
      ${imageOrPlaceholder(album.image, album.title, "♫")}
      <div class="feature-copy">
        <p class="feature-meta">${safeText(album.detail)}</p>
        <h3>${safeText(album.title)}</h3>
      </div>
    </article>
  `).join("");
}

/* UPDATES */
const news = [
  {
    date:"2026–2027",
    category:"WELCOME",
    title:"Welcome to AURORA WORLD",
    summary:"Explore AURORA's members, music, and little surprises.",
    image:"images/news/welcome.jpg"
  },
  {
    date:"COMING SOON",
    category:"UPDATES",
    title:"More announcements on the way",
    summary:"New music, performances, and more from AURORA.",
    image:"images/news/announcement.jpg"
  }
];

function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;

  grid.innerHTML = news.map(item => `
    <article class="feature-card">
      ${imageOrPlaceholder(item.image, item.title, "✧")}
      <div class="feature-copy">
        <p class="feature-meta">${safeText(item.date)} · ${safeText(item.category)}</p>
        <h3>${safeText(item.title)}</h3>
        <p>${safeText(item.summary)}</p>
      </div>
    </article>
  `).join("");
}

/* MUSIC VIDEOS — PICTURES ONLY, NO LINKS */
const musicVideos = [
  {title:"THIS IS FOR",era:"Formula Of Us · 4th Full Album",thumbnail:"images/videos/this-is-for.jpg"},
  {title:"Know About Me",era:"Lucid Flame · 4th EP",thumbnail:"images/videos/know-about-me.jpg"},
  {title:"Escape Room",era:"Reverie · Special Mixtape",thumbnail:"images/videos/escape-room.jpg"},
  {title:"Rewind",era:"from our memento box · 8th Mini Album",thumbnail:"images/videos/rewind.jpg"},
  {title:"Hot (placeholder)",era:"Golden Dawn · 3rd EP",thumbnail:"images/videos/hot.jpg"},
  {title:"Talk That Talk",era:"BETWEEN 1&2 · 7th Mini Album",thumbnail:"images/videos/talk-that-talk.jpg"}
];

function renderVideos() {
  const grid = document.getElementById("videoGrid");
  if (!grid) return;

  grid.innerHTML = musicVideos.map(video => `
    <article class="feature-card video-card">
      ${imageOrPlaceholder(video.thumbnail, video.title, "▶")}
      <div class="feature-copy">
        <p class="feature-meta">${safeText(video.era)}</p>
        <h3>${safeText(video.title)}</h3>
      </div>
    </article>
  `).join("");
}

/* MIMORI MASCOTS */
const mimoriInfo = {
  Mia:{
    name:"ROUKI",
    animal:"Wolf",
    personality:"Bold, competitive, adventurous",
    accessory:"Crimson rose",
    description:"Rouki is a fearless little wolf who loves a challenge. She acts tough but is secretly affectionate and hates being left out."
  },
  Lea:{
    name:"ANGBUN",
    animal:"Bunny",
    personality:"Caring, playful, mischievous",
    accessory:"Lotus flower",
    description:"Angbun is a sweet blue bunny who loves looking after her friends. Behind her innocent smile is a playful troublemaker."
  },
  Yuri:{
    name:"SÉLI",
    animal:"Swan",
    personality:"Witty, competitive, dependable",
    accessory:"Burgundy crown",
    description:"Séli is a graceful swan with a hilarious personality. She loves telling dramatic stories, teasing friends and turning everything into a competition."
  },
  Yejin:{
    name:"KLOVI",
    animal:"Fox",
    personality:"Clever, creative, mischievous",
    accessory:"Four-leaf clover",
    description:"Klovi is a clever little fox who enjoys painting, collecting pretty things and playing harmless tricks."
  },
  Yena:{
    name:"PIPPO",
    animal:"Duck",
    personality:"Energetic, curious, spontaneous",
    accessory:"Star",
    description:"Pippo is a cheerful little duck who loves exploring and trying new things. Her curiosity makes every day exciting."
  },
  Chaeyoung:{
    name:"BINNIE",
    animal:"Cat",
    personality:"Sweet, clever, playful",
    accessory:"Blue butterfly",
    description:"Binnie is a strawberry-pink cat with a sweet face and a mischievous personality. She loves games and puzzles."
  },
  Eunhee:{
    name:"ZAZI",
    animal:"Leopard",
    personality:"Confident, outspoken, loyal",
    accessory:"Cobalt bow",
    description:"Zazi is a confident little leopard who likes doing things her own way. She is fiercely loyal to her friends."
  },
  Chaerin:{
    name:"POMPOM",
    animal:"Puppy",
    personality:"Friendly, expressive, affectionate",
    accessory:"Daisy",
    description:"Pompom is a cheerful puppy who makes friends everywhere she goes and loves cheering everyone up."
  },
  Miju:{
    name:"DORONG",
    animal:"Deer",
    personality:"Gentle, thoughtful, easily startled",
    accessory:"Crescent moon",
    description:"Dorong is a gentle little deer with big expressive eyes. She loves giving thoughtful gifts and comforting her friends."
  },
  Misa:{
    name:"KIKO",
    animal:"Koala",
    personality:"Quiet, observant, secretly playful",
    accessory:"Black cat charm",
    description:"Kiko is a quiet koala who prefers observing from the sidelines. Around close friends, she is surprisingly sarcastic and playful."
  },
  Yerin:{
    name:"TAMTAM",
    animal:"Hamster",
    personality:"Talkative, cheeky, fearless",
    accessory:"Wing hair clip",
    description:"Tamtam is a tiny hamster with a huge personality. She is witty, talkative and loves teasing everyone."
  },
  Mihyun:{
    name:"LULI",
    animal:"Peacock",
    personality:"Fashionable, confident, playful",
    accessory:"Jeweled feather crown",
    description:"Luli is a stylish aquamarine peacock who loves dressing up, showing off her feathers and posing for pictures."
  }
};

const mascots = members.map(member => {
  const info = mimoriInfo[member.name];

  return {
    member:member.name,
    name:info.name,
    animal:info.animal,
    personality:info.personality,
    accessory:info.accessory,
    description:info.description,
    color:member.color,
    image:"images/mascots/" + member.name.toLowerCase() + ".png"
  };
});

function renderMascots() {
  const grid = document.getElementById("mascotGrid");
  const detail = document.getElementById("mascotDetail");
  if (!grid || !detail) return;

  grid.innerHTML = mascots.map((mascot,index) => `
    <button type="button"
            class="mascot-card"
            data-mascot="${index}"
            style="--mascot-color:${mascot.color}">
      ${imageOrPlaceholder(mascot.image, mascot.name, "♡")}
      <strong>${safeText(mascot.name)}</strong>
      <span>${safeText(mascot.member)}'s mascot ↗</span>
    </button>
  `).join("");

  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-mascot]");
    if (!button) return;

    const mascot = mascots[Number(button.dataset.mascot)];
    if (!mascot) return;

    detail.innerHTML = `
      <div class="mascot-detail-inner">
        ${imageOrPlaceholder(mascot.image, mascot.name, "♡")}
        <div>
          <p class="feature-meta">${safeText(mascot.member.toUpperCase())} · PLUSH FRIEND</p>
          <h3>${safeText(mascot.name)}</h3>
          <p><strong>Animal:</strong> ${safeText(mascot.animal)}</p>
          <p><strong>Personality:</strong> ${safeText(mascot.personality)}</p>
          <p><strong>Accessory:</strong> ${safeText(mascot.accessory)}</p>
          <p>${safeText(mascot.description)}</p>
        </div>
      </div>
    `;

    detail.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
}

/* START ALL WEBSITE SECTIONS */
function initializeAurora() {
  renderMembers();
  setupMemberModal();
  setupUniverse();
  setupMenu();
  setupCopyHandle();
  renderAlbums();
  renderNews();
  renderVideos();
  renderMascots();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAurora);
} else {
  initializeAurora();
}

/* AURORA MEMBER PROFILE CORRECTIONS */

// Correct Chaeyoung and Miju's positions
members.find(m => m.name === "Chaeyoung").role =
  "Sub Vocalist · Visual · Center";

members.find(m => m.name === "Miju").role =
  "Sub Vocalist · Visual";

// Update the positions shown on member cards
document.querySelectorAll("[data-member]").forEach(card => {
  const member = members[Number(card.dataset.member)];
  const roleLabel = card.querySelector(".member-role");

  if (member && roleLabel) {
    roleLabel.textContent = member.role;
  }
});

// Remove the facts section from member pop-ups
const originalOpenMember = openMember;

openMember = function(index) {
  originalOpenMember(index);

  const modal = document.getElementById("memberModal");
  const factsSection = modal.querySelector(".member-facts");

  if (factsSection) {
    factsSection.remove();
  }
};
