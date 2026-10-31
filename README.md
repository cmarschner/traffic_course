# Welfare-Centred Transport Planning — an open course

A static website (plain HTML/CSS, no build step) teaching traffic and transport planning around one explicit
welfare objective function, with the US, Germany, Japan, Singapore, the Netherlands, Sweden and France as main
role models and translated digests of key non-English sources.

## Structure

```
index.html            intro and the objective function
syllabus.html         15 modules, schedules, assessment
explorer.html         interactive ranking of corridor plans under national readings of W (assets/explorer.js)
modules/m01…m15       course notes
countries/            role-model country pages (+ more.html for further countries)
sources/              translated source digests
assets/               style.css, site.js (KaTeX rendering + auto table of contents), explorer.js
```

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Publish on GitHub Pages

1. Push this directory to a GitHub repository (the `.nojekyll` file disables Jekyll processing).
2. Settings → Pages → "Deploy from a branch" → branch `main`, folder `/ (root)`.

## Licence

Course text: CC BY 4.0. Linked, quoted and translated third-party materials remain the property of their owners.
