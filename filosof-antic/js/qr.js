/* =========================================================
   Pagina pentru codul QR: generează, descarcă și tipărește.
   ========================================================= */
(function () {
  "use strict";

  let lang = getLang();
  const input = document.getElementById("url");
  const box = document.getElementById("qrcode");
  const urlText = document.getElementById("qr-url");
  const warning = document.getElementById("qr-warning");
  const error = document.getElementById("qr-error");
  let qr = null;

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = UI[lang].qrTitle;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = UI[lang][el.dataset.i18n];
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  // Linkul implicit: adresa site-ului, fără „qr.html”
  function defaultUrl() {
    return location.href.split("#")[0].split("?")[0].replace(/qr\.html$/, "");
  }

  function isLocal(url) {
    return /^file:|localhost|127\.0\.0\.1|^http:\/\/192\.168\./.test(url);
  }

  function update() {
    const url = input.value.trim();
    urlText.textContent = url;
    warning.hidden = !isLocal(url);
    if (typeof QRCode === "undefined") { error.hidden = false; return; }
    if (!url) { box.innerHTML = ""; qr = null; return; }
    if (!qr) {
      qr = new QRCode(box, {
        text: url, width: 512, height: 512,
        colorDark: "#15253B", colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.M
      });
    } else {
      qr.clear();
      qr.makeCode(url);
    }
  }

  document.getElementById("download").addEventListener("click", () => {
    const canvas = box.querySelector("canvas");
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "qr-filosof-antic.png";
    a.click();
  });

  document.getElementById("print").addEventListener("click", () => window.print());

  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      saveLang(lang);
      applyLang();
    });
  });

  input.addEventListener("input", update);
  input.value = defaultUrl();
  applyLang();
  update();
})();
