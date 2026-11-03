/* =========================================================
   Logica aplicației: ecrane, punctaj, departajare, limbă.
   ========================================================= */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const toast = document.getElementById("toast");

  const state = {
    lang: getLang(),
    screen: "home",      // home | quiz | tiebreak | result | gallery
    index: 0,            // întrebarea curentă
    answers: [],         // cheia filosofului ales la fiecare întrebare
    orders: [],          // ordinea amestecată a răspunsurilor
    tied: [],            // filosofii la egalitate
    winner: null,
    locked: false
  };

  const t = (key, ...args) => {
    const v = UI[state.lang][key];
    return typeof v === "function" ? v(...args) : v;
  };
  const L = (obj) => obj[state.lang];
  const quote = (txt) => (state.lang === "ro" ? `„${txt}”` : `“${txt}”`);

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function scores() {
    const s = Object.fromEntries(KEYS.map((k) => [k, 0]));
    state.answers.forEach((k) => { if (k) s[k]++; });
    return s;
  }

  /* ---------- Ecrane ---------- */

  function viewHome() {
    return `
      <section class="hero">
        <div class="meander" aria-hidden="true"></div>
        <h1 tabindex="-1">${t("title")}</h1>
        <p class="lead">${t("intro")}</p>
        <button class="btn primary" data-action="start">${t("start")}</button>
        <p class="note">${t("duration")}</p>
        <ul class="frieze">
          ${KEYS.map((k) => `
            <li>
              <span class="icon">${ICONS[k]}</span>
              <span class="frieze-name">${L(PROFILES[k].name)}</span>
            </li>`).join("")}
        </ul>
        <div class="meander" aria-hidden="true"></div>
      </section>`;
  }

  function viewQuiz() {
    const i = state.index;
    const n = QUESTIONS.length;
    const q = QUESTIONS[i];
    return `
      <section class="quiz">
        <div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="${n}" aria-valuenow="${i + 1}" aria-label="${t("questionOf", i + 1, n)}">
          <span style="width:${((i + 1) / n) * 100}%"></span>
        </div>
        <p class="counter">${t("questionOf", i + 1, n)}</p>
        <h2 class="question" tabindex="-1">${L(q.q)}</h2>
        <div class="answers">
          ${state.orders[i].map((k) => `
            <button class="answer${state.answers[i] === k ? " selected" : ""}" data-answer="${k}">${L(q.a[k])}</button>`).join("")}
        </div>
        ${i > 0 ? `<button class="btn link" data-action="back">${t("back")}</button>` : ""}
      </section>`;
  }

  function viewTiebreak() {
    return `
      <section class="quiz">
        <div class="progress"><span style="width:100%"></span></div>
        <h2 class="question" tabindex="-1">${L(TIEBREAKER.q)}</h2>
        <div class="answers">
          ${shuffle(state.tied).map((k) => `
            <button class="answer with-icon" data-tie="${k}">
              <span class="icon small">${ICONS[k]}</span>
              <span>${L(TIEBREAKER.a[k])}</span>
            </button>`).join("")}
        </div>
      </section>`;
  }

  function viewResult() {
    const w = state.winner;
    const p = PROFILES[w];
    const s = scores();
    const total = QUESTIONS.length;
    const pct = (k) => Math.round((s[k] / total) * 100);
    const ranked = KEYS.slice().sort((a, b) => (b === w) - (a === w) || s[b] - s[a]);
    const second = ranked.find((k) => k !== w && s[k] > 0);

    return `
      <article class="stele">
        <div class="meander" aria-hidden="true"></div>
        <header class="stele-head">
          <span class="icon big">${ICONS[w]}</span>
          <p class="you-are">${t("youAre")}</p>
          <h1 tabindex="-1">${L(p.name)}</h1>
          <p class="years">${L(p.years)}</p>
          <p class="tagline">${L(p.tagline)}</p>
        </header>

        <p class="desc">${L(p.description)}</p>

        <blockquote>
          <p>${quote(L(p.quote))}</p>
          <cite>${L(p.name)}</cite>
        </blockquote>

        <h2>${t("keyIdeas")}</h2>
        <ul class="ideas">${L(p.ideas).map((x) => `<li>${x}</li>`).join("")}</ul>

        <h2>${t("didYouKnow")}</h2>
        <p>${L(p.fact)}</p>

        <h2>${t("scores")}</h2>
        <ul class="scores">
          ${ranked.map((k) => `
            <li class="${k === w ? "winner" : ""}">
              <span class="score-name">${L(PROFILES[k].name)}</span>
              <span class="bar"><span style="width:${pct(k)}%"></span></span>
              <span class="score-pct">${pct(k)}%</span>
            </li>`).join("")}
        </ul>
        ${second ? `<p class="also">${t("alsoSome", L(PROFILES[second].name), pct(second))}</p>` : ""}

        <div class="actions">
          <button class="btn primary" data-action="share">${t("share")}</button>
          <button class="btn" data-action="start">${t("restart")}</button>
          <button class="btn link" data-action="gallery">${t("seeAll")}</button>
        </div>
        <div class="meander" aria-hidden="true"></div>
      </article>`;
  }

  function viewGallery() {
    return `
      <section class="gallery-page">
        <h1 tabindex="-1">${t("galleryTitle")}</h1>
        <p class="lead">${t("galleryIntro")}</p>
        <div class="gallery">
          ${KEYS.map((k) => {
            const p = PROFILES[k];
            return `
              <article class="figure">
                <span class="icon">${ICONS[k]}</span>
                <h2>${L(p.name)}</h2>
                <p class="years">${L(p.years)}</p>
                <p class="tagline">${L(p.tagline)}</p>
                <p class="figure-quote">${quote(L(p.quote))}</p>
                <ul class="ideas">${L(p.ideas).map((x) => `<li>${x}</li>`).join("")}</ul>
              </article>`;
          }).join("")}
        </div>
        <div class="actions center">
          <button class="btn primary" data-action="start">${t("takeTest")}</button>
        </div>
      </section>`;
  }

  /* ---------- Randare ---------- */

  function renderChrome() {
    document.documentElement.lang = state.lang;
    document.title = t("pageTitle");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang));
    });
  }

  function render(focus = true) {
    renderChrome();
    const views = { home: viewHome, quiz: viewQuiz, tiebreak: viewTiebreak, result: viewResult, gallery: viewGallery };
    app.innerHTML = views[state.screen]();
    if (focus) {
      window.scrollTo(0, 0);
      const h = app.querySelector("[tabindex='-1']");
      if (h) h.focus({ preventScroll: true });
    }
  }

  /* ---------- Acțiuni ---------- */

  function start() {
    state.index = 0;
    state.answers = [];
    state.orders = QUESTIONS.map(() => shuffle(KEYS));
    state.winner = null;
    state.tied = [];
    state.screen = "quiz";
    render();
  }

  function finish() {
    const s = scores();
    const max = Math.max(...Object.values(s));
    state.tied = KEYS.filter((k) => s[k] === max);
    if (state.tied.length > 1) {
      state.screen = "tiebreak";
    } else {
      state.winner = state.tied[0];
      state.screen = "result";
    }
    render();
  }

  function answer(btn) {
    if (state.locked) return;
    state.locked = true;
    state.answers[state.index] = btn.dataset.answer;
    app.querySelectorAll(".answer").forEach((b) => b.classList.toggle("selected", b === btn));
    setTimeout(() => {
      state.locked = false;
      if (state.index < QUESTIONS.length - 1) {
        state.index++;
        render();
      } else {
        finish();
      }
    }, 260);
  }

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  async function share() {
    const url = location.href.split("#")[0].split("?")[0];
    const text = t("shareText", L(PROFILES[state.winner].name));
    if (navigator.share) {
      try { await navigator.share({ title: t("pageTitle"), text, url }); } catch (e) { /* anulat */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      showToast(t("copied"));
    } catch (e) {
      prompt("", `${text} ${url}`);
    }
  }

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action], [data-answer], [data-tie], [data-lang]");
    if (!el) return;

    if (el.dataset.lang) {
      state.lang = el.dataset.lang;
      saveLang(state.lang);
      render(false);
      return;
    }
    if (el.dataset.answer) { answer(el); return; }
    if (el.dataset.tie) {
      state.winner = el.dataset.tie;
      state.screen = "result";
      render();
      return;
    }

    e.preventDefault();
    switch (el.dataset.action) {
      case "home": state.screen = "home"; render(); break;
      case "start": start(); break;
      case "back":
        if (state.index > 0) { state.index--; render(); }
        break;
      case "gallery": state.screen = "gallery"; render(); break;
      case "share": share(); break;
    }
  });

  render(false);
})();
