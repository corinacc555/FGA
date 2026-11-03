# Ce filosof antic ești? / Which ancient philosopher are you?

Test de personalitate pentru cursul de filosofie: 12 întrebări, 6 filosofi greci
(Socrate, Platon, Aristotel, Diogene, Epicur, Zenon din Kition), în română și engleză.
Site static, fără instalări: doar HTML, CSS și JavaScript.

## Structura proiectului

```
filosof-antic/
├── index.html        pagina principală (testul)
├── qr.html           pagina care generează codul QR
├── css/style.css     designul (tema Grecia antică, mod luminos și întunecat)
├── js/data.js        întrebările, profilurile filosofilor și textele RO/EN
├── js/app.js         logica testului (ecrane, punctaj, departajare)
├── js/qr.js          logica paginii QR
├── assets/favicon.svg
└── .nojekyll         necesar pentru GitHub Pages
```

## Cum rulezi local

Varianta simplă: deschide `index.html` cu dublu-click în browser.

Varianta cu server local (recomandată):

```bash
cd filosof-antic
python -m http.server 8000
```

Apoi deschide http://localhost:8000

## Cum urci pe GitHub

```bash
cd filosof-antic
git init
git add .
git commit -m "Test: Ce filosof antic ești?"
git branch -M main
git remote add origin https://github.com/UTILIZATOR/NUME-REPO.git
git push -u origin main
```

## Cum publici gratuit (GitHub Pages)

1. Pe GitHub, intră în repository → **Settings** → **Pages**.
2. La **Source** alege **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. După 1–2 minute site-ul e disponibil la:
   `https://UTILIZATOR.github.io/NUME-REPO/`

Repository-ul trebuie să fie **public** (pe contul gratuit).

## Codul QR

1. Deschide `https://UTILIZATOR.github.io/NUME-REPO/qr.html`
   (sau linkul „Cod QR pentru acces” din subsolul site-ului).
2. Linkul site-ului se completează singur. Codul apare imediat.
3. Apasă **Descarcă imaginea** (PNG) sau **Tipărește**.

Atenție: dacă generezi codul de pe `localhost` sau dintr-un fișier deschis local,
el nu va funcționa pe telefoanele altora. Generează-l după publicarea pe GitHub Pages.
Pagina QR are nevoie de internet (biblioteca qrcodejs se încarcă de pe cdnjs).

## Cum modifici conținutul

Totul se schimbă din `js/data.js`:

- `QUESTIONS`: cele 12 întrebări; fiecare are câte un răspuns pentru fiecare filosof.
- `PROFILES`: numele, anii, descrierea, ideile, citatul și curiozitatea fiecărui filosof.
- `TIEBREAKER`: întrebarea afișată doar la egalitate.
- `UI`: textele butoanelor și ale paginilor, în `ro` și `en`.

## Cum funcționează punctajul

- Fiecare răspuns adaugă 1 punct filosofului de care ține.
- Ordinea răspunsurilor e amestecată la fiecare întrebare, ca tiparul să nu fie evident.
- Procentul = punctele filosofului / 12.
- La egalitate apare o întrebare de departajare doar cu filosofii la egalitate.
- Rezultatul arată filosoful principal, al doilea cel mai apropiat și toate procentele.
