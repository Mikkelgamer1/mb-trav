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
| 12 år i stalden hos Bo Westergaard og Peter Jensen på Vang Hovedgaard, amatørlicens som 16-årig, ophold hos Flemming Jensen, vinder af DM for jockeyer 2012 og 2015, Sigter Mod Stjernerne og Jydsk 3-årings Grand Prix 2016, Dortmund vinder af Grand Circle 4-års Championat 2019 | travet.dk, "Ung dansk travtræner fylder år" (2020) |
| Træner siden 1. oktober 2016, medlem af Dansk Travtrænerforening af 1909 | tf1909.dk/medlemmer/marc-baek-nielsen (19.11.2026) |
| Eget opdræt (Team Bakkelygaard & MB Trav) | Dansk Hestevæddeløb, opdrætter pr. hest – opdateres automatisk |
| Opdræt med fodboldnavne, fx Dortmund, Celtic og Benfica | travservice.dk, "Det kører for Marc Bæk" (5.6.2023) |
| Mainz er lillebror til Dortmund | travservice.dk, "Marc Bæk atter i fokus" (19.9.2026) |
| Facebook og Instagram | facebook.com/mbtrav, instagram.com/mb.trav |
| Fotos | Staldens egne billeder fra mbtrav.dk, kun skaleret ned |
| Portrættet af Marc (Om Marc) | mbtrav.dk/hestepassere – billedet står under hans navn (uploadet 2017) |
