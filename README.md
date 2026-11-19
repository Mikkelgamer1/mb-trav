# MB Trav – Marc Bæk Nielsen

Statisk site (HTML, CSS, lidt JavaScript) for travtræner og kusk Marc Bæk Nielsen. Ingen afhængigheder, ingen database og ingen cookies. Kræver kun Node 20+ for at bygge.

```
node build.mjs            # byg med de gemte data i data/travinfo.json
node build.mjs --hent     # hent friske data fra Dansk Hestevæddeløb først
node build.mjs --serve    # byg og vis på http://localhost:4173
node build.mjs --test     # selvtjek
```

Træningsliste, resultater, kommende starter og statistik hentes hver morgen fra Dansk Hestevæddeløbs åbne data (samme data som travinfo.dk) af GitHub Actions (`.github/workflows/opdater.yml`). Vercel bygger og udgiver ved hvert push.

Tekster rettes i `templates.mjs`, designet i `assets/css/site.css`.

## Kilder

| Påstand på sitet | Kilde |
| --- | --- |
| Licens A1, født 1993, hjemmebane Spar Nord Arena Aalborg, løbsfarver, telefon | Dansk Hestevæddeløb, licensregistret (api.danskhv.dk, 19.11.2026) |
| Træningsliste, resultater, kommende starter, statistik | Dansk Hestevæddeløb – opdateres automatisk hver dag |
| MB Trav, CVR 37983934, Holtetvej 73, 9362 Gandrup, startdato 1. september 2016 | CVR-registret, datacvr.virk.dk/enhed/virksomhed/37983934 (19.11.2026) |
| Gården i Øster Hassing, faciliteter, afstande, Bakkelygård i Stae | mbtrav.dk/faciliteter (19.11.2026) |
| Priser | mbtrav.dk/priser (19.11.2026) |
| Jockey hos Bo Westergaard, Flemming Jensen og Peter Jensen; Jockey-DM 2012 og 2015; meritlisten 2016–2021 | mbtrav.dk/mb-trav (19.11.2026) |
| E-mail info@mbtrav.dk | mbtrav.dk/kontakt (19.11.2026) |
| Fotos | Staldens egne billeder fra mbtrav.dk, kun skaleret ned |
