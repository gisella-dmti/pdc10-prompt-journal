// =========================================================
// Builds the flipbook pages from data.js. You normally
// don't need to edit this file.
// =========================================================

const tagNames = {
  role: "Role", audience: "Audience", task: "Task", context: "Context",
  format: "Format", constraint: "Constraint", example: "Example", tone: "Tone"
};

const pages = [];
const chapterStart = [];

const page = (html, cls = "", hard = false) =>
  pages.push(
    `<div class="page ${cls}"${hard ? ' data-density="hard"' : ""}><div class="inner">${html}</div></div>`
  );

const highlight = (parts) =>
  parts.map(([t, x]) => `<mark class="hl-${t}" title="${tagNames[t] || t}">${x}</mark>`).join("");

const legend = (parts) =>
  [...new Set(parts.map((p) => p[0]))]
    .map((t) => `<mark class="hl-${t}">${tagNames[t] || t}</mark>`)
    .join("");

const shots = (list) =>
  list.length
    ? list
        .map((e) => `<figure><img src="${e.img}" alt="${e.caption}" loading="lazy"><figcaption>${e.caption}</figcaption></figure>`)
        .join("")
    : `<div class="placeholder">Tape your screenshots here<br><small>Add them in data.js → evidence</small></div>`;

const notes = (list) =>
  list
    .map((n) =>
      `<h4>${n.h}</h4>${Array.isArray(n.t)
        ? `<ul>${n.t.map((x) => `<li>${x}</li>`).join("")}</ul>`
        : `<p>${n.t}</p>`}`
    )
    .join("");

// ---------- Cover ----------
page(
  `<div class="tape"></div>
   <img class="polaroid" src="${profile.photo}" alt="Photo of ${profile.name}">
   <h1>${profile.nickname}'s<br>Prompt Journal</h1>
   <p class="cover__course">${profile.course}</p>
   <p class="small">${profile.name}<br>${profile.cls}</p>`,
  "cover",
  true
);

// ---------- About the author ----------
page(
  `<h2>About the Author</h2>
   <p>${profile.intro}</p>
   <h3>Skills</h3>
   <div class="stickers">${profile.skills.map((s) => `<span>${s}</span>`).join("")}</div>
   <h3>Certifications</h3>
   <ul class="stamps">${profile.certs
     .map(
       (c) =>
         `<li>${c.url ? `<a href="${c.url}" target="_blank" rel="noopener">${c.name}</a>` : c.name}<small>${c.issuer} · ${c.date}</small></li>`
     )
     .join("")}</ul>`
);

// ---------- Contents ----------
page(
  `<h2>Contents</h2>
   <ol class="toc">${chapters
     .map((c, i) => `<li><button class="toc__link" data-ch="${i}">${c.title}</button></li>`)
     .join("")}</ol>
   <div class="howto">
     <h3>How to read the prompts</h3>
     <p>Crossed-out text is my first draft. In the revised prompt, each part has its own highlighter color:</p>
     <div class="legend">${Object.keys(tagNames).map((t) => `<mark class="hl-${t}">${tagNames[t]}</mark>`).join("")}</div>
   </div>`
);

// ---------- Chapters: 4 pages each, so every chapter opens on a left page ----------
chapters.forEach((c, i) => {
  chapterStart[i] = pages.length;

  page(
    `<p class="chapter-no" style="background:${c.color}">Chapter ${i + 1}</p>
     <h2>${c.title}</h2>
     <p class="small">${c.type} · ${c.tools.join(", ")}</p>
     ${c.team ? `<p class="small">Team: ${c.team}</p>` : ""}
     <div class="sticky"><b>Mission</b><p>${c.mission}</p></div>
     <div class="stats">${c.stats.map(([l, v]) => `<div><b>${v}</b><small>${l}</small></div>`).join("")}</div>
     ${c.draft ? `<h3>${c.draftTitle || "First Draft"}</h3><p class="draft">${c.draft}</p>` : ""}`
  );

  page(
    `${c.revised && c.revised.length
        ? `<h3>${c.revisedTitle || "Revised Prompt"}</h3>
           <p class="revised">${highlight(c.revised)}</p>
           <div class="legend">${legend(c.revised)}</div>`
        : ""}
     ${c.showcase ? `<h3>${c.showcase.heading}</h3><p class="showcase">${c.showcase.text}</p>` : ""}
     ${c.before
        ? `<h3>Before</h3><p>${c.before}</p><h3>After</h3>`
        : `<h3>Reflection</h3>`}
     <p>${c.after}</p>
     <h3>Lessons</h3>
     <div class="lessons">${c.lessons.map((l) => `<span>${l}</span>`).join("")}</div>`
  );

  const allNotes = c.notes || [];
  const linkBtn = c.link
    ? `<a class="btn" href="${c.link}" target="_blank" rel="noopener">${c.linkLabel || "Open full report"}</a>`
    : "";

  if (c.evidence.length) {
    // Screenshots added: notes on one page, screenshots on the next
    page(`<h3>Notes</h3>${notes(allNotes)}`, "evidence");
    page(`<h3>Evidence</h3>${shots(c.evidence)}${linkBtn}`, "evidence");
  } else {
    // No screenshots yet: spread the notes over both pages so neither is empty
    const cut = Math.ceil(allNotes.length / 2);
    page(`<h3>Notes</h3>${notes(allNotes.slice(0, cut))}`, "evidence");
    page(
      `<h3>Notes, continued</h3>${notes(allNotes.slice(cut))}
       <div class="recap" style="border-color:${c.color}">
         <b>Chapter ${i + 1} in one line</b>
         <p>${c.lessons[0]}</p>
       </div>
       ${linkBtn}`,
      "evidence"
    );
  }
});

// ---------- Ending ----------
const firstCh = chapters[profile.firstPromptFrom - 1];
const bestCh = chapters[profile.bestPromptFrom - 1];

page(
  `<h2>My First Prompt vs My Best Prompt</h2>
   <h3>Chapter ${profile.firstPromptFrom}: first draft</h3>
   <p class="draft">${firstCh.draft}</p>
   <h3>Chapter ${profile.bestPromptFrom}: revised</h3>
   <p class="revised">${highlight(bestCh.revised)}</p>
   <div class="legend">${legend(bestCh.revised)}</div>`
);
page(
  `<h2>Closing Reflection</h2><p>${profile.closing}</p>
   <h3>PDC10 at a glance</h3>
   <div class="glance">${chapters
     .map((c, i) => `<div style="background:${c.color}"><small>${i + 1}. ${c.short}</small><b>${c.stats[0][1]}</b><small>${c.stats[0][0]}</small></div>`)
     .join("")}</div>`
);
if (pages.length % 2 === 0) page(""); // keeps the back cover on its own side

page(
  `<h1>Thank you<br>for reading!</h1>
   <p>${profile.name}</p>
   <a class="btn btn--light" href="${profile.linkedin}" target="_blank" rel="noopener">Connect on LinkedIn</a>`,
  "cover",
  true
);

// ---------- Render and start the flipbook ----------
const book = document.getElementById("book");
book.innerHTML = pages.join("");

// Fit the book to the screen height (room left for the tabs and buttons)
const maxH = Math.max(420, Math.min(800, window.innerHeight - 190));
const flip = new St.PageFlip(book, {
  width: 480,
  height: 680,
  size: "stretch",
  minWidth: 300,
  maxWidth: Math.round(maxH * 0.72),
  minHeight: 420,
  maxHeight: maxH,
  showCover: true,
  maxShadowOpacity: 0.4,
  mobileScrollSupport: false
});
flip.loadFromHTML(book.querySelectorAll(".page"));

// ---------- Side cards: fill the empty half beside the front and back covers ----------
const sideFront = document.getElementById("sideFront");
const sideBack = document.getElementById("sideBack");

sideFront.innerHTML = `
  <p class="side-card__eyebrow">Welcome</p>
  <h2>Hi, I'm ${profile.nickname}!</h2>
  <p>${profile.intro}</p>
  <h3>What's inside</h3>
  <ol class="side-list">${chapters
    .map((c, i) => `<li><button data-ch="${i}"><span class="dot" style="background:${c.color}"></span>${c.short}</button></li>`)
    .join("")}</ol>
  <p class="side-card__cta">Click the cover or press → to open the journal</p>`;

sideBack.innerHTML = `
  <p class="side-card__eyebrow">The end</p>
  <h2>Thanks for flipping through!</h2>
  <p>${chapters.length} activities, one goal: clearer prompts and careful checking.</p>
  <div class="glance">${chapters
    .map((c, i) => `<div style="background:${c.color}"><small>${i + 1}. ${c.short}</small><b>${c.stats[0][1]}</b></div>`)
    .join("")}</div>
  <div class="side-card__actions">
    <button class="btn" id="readAgain">↺ Read again</button>
    <a class="btn btn--light" href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
  </div>`;
document.getElementById("readAgain").addEventListener("click", () => flip.flip(0));

const placeSideCards = () => {
  const p = flip.getCurrentPageIndex();
  const landscape = flip.getOrientation() === "landscape";
  const r = flip.getRender().getRect();
  const box = (el, left) => {
    el.style.left = book.offsetLeft + left + "px";
    el.style.top = book.offsetTop + r.top + "px";
    el.style.width = r.pageWidth + "px";
    el.style.height = r.height + "px";
  };
  sideFront.hidden = !(landscape && p === 0);
  sideBack.hidden = !(landscape && p === flip.getPageCount() - 1);
  if (!sideFront.hidden) box(sideFront, r.left);
  if (!sideBack.hidden) box(sideBack, r.left + r.pageWidth);
};
flip.on("changeState", (e) => {
  if (e.data !== "read") { sideFront.hidden = true; sideBack.hidden = true; }
  else placeSideCards();
});
window.addEventListener("resize", () => setTimeout(placeSideCards, 50));

// ---------- Chapter tabs, buttons, keyboard, page number ----------
const tabs = document.getElementById("tabs");
tabs.innerHTML = chapters
  .map((c, i) => `<button class="tab" style="background:${c.color}" data-ch="${i}">${i + 1}. ${c.short}</button>`)
  .join("");

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-ch]");
  if (el) flip.flip(chapterStart[Number(el.dataset.ch)]);
});

document.getElementById("prev").addEventListener("click", () => flip.flipPrev());
document.getElementById("next").addEventListener("click", () => flip.flipNext());
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") flip.flipNext();
  if (e.key === "ArrowLeft") flip.flipPrev();
});

const num = document.getElementById("pageNum");
const update = () => {
  const p = flip.getCurrentPageIndex();
  num.textContent = `Page ${p + 1} of ${flip.getPageCount()}`;
  let active = -1;
  chapterStart.forEach((start, i) => { if (p >= start - 1) active = i; });
  if (p >= chapterStart[chapterStart.length - 1] + 4) active = -1;
  tabs.querySelectorAll(".tab").forEach((t, i) => t.classList.toggle("is-active", i === active));
};
flip.on("flip", () => { update(); placeSideCards(); });
flip.on("changeOrientation", () => { update(); placeSideCards(); });
update();
placeSideCards();
