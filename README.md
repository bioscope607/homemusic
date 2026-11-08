# Home Music Tuition — Next.js site (all pages)

    npm install
    cp .env.example .env.local
    npm run dev          # http://localhost:3000
    npm run build        # static site in ./out -> Cloudflare Pages or Nginx

## Colours
Top of `app/globals.css` ("THEME KNOBS"): `--p-l` = primary lightness, `--s-l` = off-white lightness (also `--p-h`, `--s-h` for hue).

## Data & API
All content = separate variables in `lib/content.js`. `lib/api.js` swaps each for API data when `API_URL` is set
(build time); if unset or the call fails, the built-in value shows. Express endpoints (same JSON shape as the variable):

| Endpoint | Variable | Used by |
|---|---|---|
| GET /home | home {hero, courses, leaders, gallery, events, posts, testimonials} | `/` |
| GET /courses, /courses/:slug | courses | /courses, /courses/[slug] |
| GET /posts, /posts/:slug | posts | /blog, /blog/[slug] |
| GET /events, /gallery, /leaders | events, gallery, leaders | /events, /gallery, /about |
| GET /achievements, /about, /exams, /home-tuition | achievements, aboutPage, examsPage, homeTuitionPage | matching pages |
| POST /enquiries | form | name, phone, email, course, mode, message |

Static export = content is read at build. Have your admin trigger a rebuild (Cloudflare Pages deploy hook) after edits.
Photos: any `photo` URL replaces the placeholder (WebP, ~1600px hero / ~800px elsewhere).
