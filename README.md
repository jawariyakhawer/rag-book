# Javeria Hassan ki book: AI & Data Science (RAG chatbot ke sath)

Ye Docusaurus book hai jis mein English + Roman Urdu content hai aur har page par neeche corner mein ek **floating chat icon** hai. Icon par click karein to chatbot ki window khulti hai. Chatbot book ke content se jawab deta hai (RAG: Gemini + Qdrant).

Created by Maria Hussain. Syllabus: Miss Javeria Hassan (SMIT).

---

## 0. Pehle ye cheezein chahiye (Dependencies)

| Cheez | Kis liye | Kahan se | Cost |
|---|---|---|---|
| **Node.js 20 ya us se naya** (22 recommended) | Book chalane/build karne ke liye | https://nodejs.org | Free |
| **npm** | Packages install (Node ke sath aata hai) | Node ke sath | Free |
| **Git** | Code GitHub par bhejne ke liye | https://git-scm.com | Free |
| **GitHub account** | Code rakhne ke liye (Vercel yahin se uthata hai) | https://github.com | Free |
| **Vercel account** | Book + chatbot API online chalane ke liye | https://vercel.com (GitHub se sign up) | Free (Hobby) |
| **Gemini API key** | Embeddings aur jawab dene ke liye | https://aistudio.google.com/apikey | Free tier |
| **Qdrant Cloud account** | Vector database (book ke chunks yahan store honge) | https://cloud.qdrant.io | Free cluster |
| VS Code (optional) | Code edit karne ke liye | https://code.visualstudio.com | Free |
| Vercel CLI (optional) | Computer par API test karne ke liye | `npm i -g vercel` | Free |

**Project ke npm packages** (ye `npm install` khud laga deta hai, aapko alag se kuch nahi karna):
`@docusaurus/core`, `@docusaurus/preset-classic`, `@docusaurus/faster` (version 3.10.2), `react`, `react-dom` (19), `@mdx-js/react`, `clsx`, `prism-react-renderer`.
Chatbot ke liye koi extra package nahi hai: backend sirf `fetch` se Gemini aur Qdrant ko call karta hai.

---

## 1. Project computer par chalayein

```bash
cd javeria-book
npm install
npm start
```

Browser mein `http://localhost:3000` khulega. Book aur chat icon nazar aayenge.
Note: `npm start` par chatbot **jawab nahi dega** (kyunke `/api/chat` sirf Vercel par ya `vercel dev` se chalta hai). Ye normal hai. Pehle neeche ke steps 2 se 4 karein.

---

## 2. Gemini API key banayein

1. https://aistudio.google.com/apikey kholein, Google account se login karein.
2. **Create API key** par click karein aur key copy kar lein.
3. Is key ko kisi ko na dikhayein aur GitHub par kabhi upload na karein.

---

## 3. Qdrant cluster banayein

1. https://cloud.qdrant.io par sign up karein.
2. **Create cluster** > Free plan select karein > region chunein > create.
3. Cluster ban jaye to uska **URL** copy karein (aisa hota hai: `https://xxxxx.region.cloud.qdrant.io:6333`, port `:6333` ke sath).
4. **API Keys** mein ja kar ek key banayein aur copy karein.
5. Dono books (Javeria aur Hania) ke liye **ek hi cluster** kafi hai. Har book ki apni **collection** hoti hai (`javeria_book` aur `hania_book`), is liye content mix nahi hota.

---

## 4. `.env` file banayein aur book ko chatbot ka data dein (Ingest)

1. `.env.example` ki copy banayein aur naam rakhein `.env`.
2. Apni values daalein:

```env
GEMINI_API_KEY=aapki-gemini-key
QDRANT_URL=https://xxxxx.region.cloud.qdrant.io:6333
QDRANT_API_KEY=aapki-qdrant-key
QDRANT_COLLECTION=javeria_book
BOT_NAME=Javeria AI Tutor
BOOK_NAME=AI & Data Science (Javeria Hassan Edition)
```

3. Ye command chalayein:

```bash
npm run ingest
```

Ye `docs/` ke saare pages ko chhote chunks mein torta hai, Gemini se embeddings banata hai aur Qdrant mein `javeria_book` collection mein save karta hai. Aakhir mein likha aana chahiye: `Done. Your chatbot now knows the book.`

Test ke bagair check karna ho to: `node scripts/ingest.mjs --dry` (koi internet call nahi karta, sirf chunks dikhata hai).

---

## 5. Computer par chatbot test karein (optional lekin acha hai)

```bash
npm i -g vercel
vercel login
vercel dev
```

Phir jo link aaye (usually `http://localhost:3000`) wahan chat icon se sawal poochein, jaise "What is RAG?" ya "Python loops samjhao".

---

## 6. GitHub par upload karein

```bash
git init
git add .
git commit -m "First version"
git branch -M main
git remote add origin https://github.com/AAPKA-USERNAME/javeria-ai-ds-book.git
git push -u origin main
```

(Pehle GitHub par `javeria-ai-ds-book` naam ki khali repository banayein.) `.env` file `.gitignore` mein hai, is liye upload nahi hogi. Ye theek hai.

---

## 7. Vercel par deploy karein

1. https://vercel.com > **Add New > Project** > apni GitHub repo import karein.
2. Framework **Docusaurus** khud detect ho jata hai (Build: `npm run build`, Output: `build`). Kuch change na karein.
3. **Environment Variables** mein ye add karein (wahi values jo `.env` mein hain):
   - `GEMINI_API_KEY`
   - `QDRANT_URL`
   - `QDRANT_API_KEY`
   - `QDRANT_COLLECTION` = `javeria_book`
   - `BOT_NAME` = `Javeria AI Tutor`
   - `BOOK_NAME` = `AI & Data Science (Javeria Hassan Edition)`
4. **Deploy** dabayein. 1 se 2 minute mein link mil jayega.
5. Link ban jaye to `docusaurus.config.js` mein `url` (ya `book.config.json` mein `siteUrl`) ko apne asal link se badal dein aur dobara push karein.

Agar env variables deploy ke **baad** add kiye hon to **Deployments > Redeploy** karna zaroori hai.

---

## 8. Content badalna ya barhana

- Seedha `docs/` ke `.md` files edit karein, ya naye pages add karein.
- Har content change ke baad: `npm run ingest` dobara chalayein (chatbot ko naya content milega), phir git push karein (site update hogi).
- `scripts/syllabus.mjs` badal kar `npm run generate` chalane se `docs/` **dobara ban jata hai aur apke hath se kiye hue changes mit jate hain**. Agar `docs/` ko hath se edit kar liya hai to `generate` na chalayein.
- Naam, tagline, rang: `book.config.json` aur `src/css/custom.css`.

---

## 9. Agar koi masla aaye (Troubleshooting)

| Masla | Wajah | Hal |
|---|---|---|
| "The AI service is busy right now" | Gemini free tier par load/limit | Backend khud 3 se 4 dafa retry karta hai aur halka model (`GEMINI_FALLBACK_MODEL`) bhi try karta hai. Phir bhi aaye to 1 minute ruk kar "Try again" dabayein. |
| "The tutor is not configured yet" | Vercel par env variables nahi hain | Step 7 ke variables add karein, phir Redeploy. |
| Chat par `404` / jawab nahi (computer par) | `/api/chat` `npm start` mein nahi chalta | `vercel dev` istemal karein ya deploy ke baad test karein. |
| `HTTP 400/404 ... model` error (Vercel logs mein) | Gemini model ka naam purana ho gaya | AI Studio mein current model ka naam dekh kar `GEMINI_MODEL` / `GEMINI_EMBED_MODEL` env variable mein daalein. Embedding model badla to dobara `npm run ingest` karein. |
| Qdrant `401/403` | Galat URL ya API key | URL mein `https://` aur `:6333` check karein, key dobara copy karein. |
| Jawab book se alag aate hain | Ingest nahi hua ya purana hai | `npm run ingest` dobara chalayein. |
| `Missing environment variables` | `.env` nahi bani | Step 4 dekhein. |

---

## 10. Is book ka UI Hania wali book se alag kaise hai

- **Theme:** "Aurora": gehra teal/emerald rang, serif headings (Fraunces), dark hero section.
- **Homepage:** left-aligned hero, animated glow, stats row aur modules ka card grid.
- **Chatbot:** gol (circle) icon jis par ripple animation hai, hover par "Ask AI" likha aata hai. Window chhoti aur seedhi (clean) hai, teal header ke sath.
