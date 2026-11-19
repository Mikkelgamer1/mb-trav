// Al HTML til sitet. Tekster rettes her; tal, heste og resultater kommer fra data/travinfo.json.
// Kilder til hver påstand står i README.md (offentlig) og LANCERING.md (intern).

export const SITE = {
  // ← Sæt det rigtige domæne (eller miljøvariablen SITE_URL). På Vercel bruges projektets adresse. Marc ejer mbtrav.dk (One.com).
  url: (process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL) || 'https://www.mbtrav.dk').replace(/\/$/, ''),
  navn: 'MB Trav',
  person: 'Marc Bæk Nielsen',
  fornavn: 'Marc',
  licens: 502909,
  firma: 'MB Trav', // CVR-registret (datacvr.virk.dk, tjekket 19.11.2026) – skal stå på siden efter e-handelsloven § 7
  cvr: '37983934',
  start: '2016-09-01', // virksomhedens startdato i CVR-registret
  telefon: '+45 26 17 55 15', // licensregistret og mbtrav.dk
  email: 'info@mbtrav.dk', // mbtrav.dk/kontakt
  gade: 'Holtetvej 73',
  postnr: '9362',
  by: 'Gandrup',
  sted: 'Øster Hassing', // "vores gård i Øster Hassing" (mbtrav.dk/faciliteter)
  facebook: 'https://www.facebook.com/mbtrav', // staldens side "MB TRAV"
  instagram: 'https://www.instagram.com/mb.trav/',
  travinfo: 'https://travinfo.dk/licenseholder-tabs/502909',
  kort: 'https://www.google.com/maps/search/?api=1&query=Holtetvej+73%2C+9362+Gandrup',
};

// Billeder: navn → [forhold, bredder…]. Alle er staldens egne fotos fra mbtrav.dk – kun skaleret ned, aldrig op.
const BILLEDER = {
  strand: [1.873, 800, 1400, 2200],
  soe: [1.5, 700, 1200, 1800],
  sne: [1.5, 700, 1200, 1600, 2200],
  fold: [1.5, 700, 1200, 1600, 2200],
  hoe: [1.5, 600, 1000, 1600, 2200],
  skov: [1.5, 600, 1000, 1600, 2200],
  solarie: [0.863, 500, 900],
  solopgang: [1, 500, 900],
  ryttere: [1.205, 600, 1000, 1600, 2200],
  staende: [0.926, 500, 900],
  vand: [1.5, 700, 1200],
  stald: [1.905, 600, 960],
  vinter: [0.667, 500, 900],
  bokse: [0.915, 600, 878],
  skovtur: [0.75, 500, 960],
  rytter: [0.75, 500, 900],
  pleje: [0.83, 500, 900],
  udebokse: [0.749, 500, 750],
  ligeud: [1, 500, 960],
  sandbane: [0.75, 500, 720],
};

const BANER = { Sk: 'Skive', 'Ål': 'Aalborg', 'År': 'Aarhus', Od: 'Odense', Ch: 'Charlottenlund', Bi: 'Billund', Bh: 'Bornholm', Ny: 'Nykøbing F.', Bs: 'Skovbo', Kl: 'Klampenborg', 'Åb': 'Åby', 'Jæ': 'Jägersro', Ax: 'Axevalla' };
// Banernes omtrentlige placering [længdegrad, breddegrad] til det skematiske Danmarkskort (svenske baner og Bornholm vises ikke).
const BANE_POS = { Sk: [9.06, 56.56], 'Ål': [9.87, 57.05], 'År': [10.2, 56.14], Od: [10.36, 55.4], Ch: [12.58, 55.75], Bi: [9.12, 55.73], Ny: [11.87, 54.77], Bs: [12.03, 55.46], Kl: [12.59, 55.77] };
const HJEM = 'Ål';
const NAV = [['om-marc/', 'Om Marc'], ['stalden/', 'Stalden'], ['heste/', 'Heste'], ['resultater/', 'Resultater']];

// Gården og unghestestalden (mbtrav.dk/faciliteter, 19.11.2026).
const FACILITETER = [
  ['1.250 m', 'travbane med 600 m dobbeltsporet ligeudbane'],
  ['400 m', 'galopbane med strandsand'],
  ['20 × 40 m', 'ridebane'],
  ['16 + 4', 'bokse i stalden og udebokse'],
  ['9', 'bokse i laden – med solarieplads'],
  ['2', 'løsdrifte og store folde'],
];
// Priser (mbtrav.dk/priser, 19.11.2026). Ekskl. moms.
const PRISER = [
  ['Løbsheste', '200 kr. pr. dag', 'inkl. sko'],
  ['Ungheste', '200 kr. pr. dag', 'inkl. sko'],
  ['Heste i pension', '100 kr. pr. dag', ''],
];
// Meritlisten fra mbtrav.dk/mb-trav (19.11.2026), gengivet som den står der.
const MERITTER = [
  ['2016', 'Jydsk 3-årings Hoppe Grand Prix, Aarhus', 'Blowmywhistle'],
  ['2016', '3. plads i Dansk Trav Derby, Charlottenlund', 'Albatros'],
  ['2016', 'Sigter Mod Stjernerne, finale, Odense', 'Gentleman'],
  ['2016', 'Vinder af løbsserien Sigter Mod Stjernerne', ''],
  ['2016', 'Årets travkomet', ''],
  ['2016', 'Årets 4-åring, Aalborg Væddeløbsbane', 'Albatros'],
  ['2017', "DTC's 3-års Serie, finale, Billund", 'Captain Morgan'],
  ['2017', 'Liga 2, finale, Aarhus', "Good's Of Norway"],
  ['2017', 'Quinté-løb, Cabourg', "Good's Of Norway"],
  ['2017', 'Skive Amatørserie, finale', 'Need For Speed'],
  ['2017', 'Årets Hest på Skive Trav', 'Gentleman'],
  ['2017', 'Årets 3-åring, Aalborg Væddeløbsbane', 'Captain Morgan'],
  ['2018', 'Champion Tempo-løpet, Bjerke', 'Boris'],
  ['2018', 'DM i Monté, Consolation, Skive', 'Albatros'],
  ['2018', '3. plads i DM i Monté, Skive', 'Need For Speed'],
  ['2019', 'V75-løb, Forus', 'Boris'],
  ['2019', 'Vinder af Grand Prix-prøven, Aarhus', 'Dortmund'],
  ['2019', 'Vinder af Derby-prøven, Charlottenlund', 'Dortmund'],
  ['2019', '3. plads i Dansk Trav Derby, Charlottenlund', 'Dortmund'],
  ['2019', '3. plads i Hoppe Derby, Consolation, Charlottenlund', 'Diva Sisa'],
  ['2019', 'DM i Monté, Odense', 'Albatros'],
  ['2019', '4-års Grand Circle Championat, Billund', 'Dortmund'],
  ['2020', 'Vinder af DM for 5-årige hopper, Billund', 'Diva Sisa'],
  ['2020', 'V75-løb, Jägersro', 'Dortmund'],
  ['2021', 'Vinder af Stayerpokalen, Nykøbing F.', 'Dortmund'],
  ['2021', 'Liga 4, finale, Billund', 'Honor'],
  ['2021', 'DM i Monté, Consolation, Aarhus', 'Albatros'],
];

// ---------- små hjælpere ----------

let R = ''; // sti tilbage til roden fra den side, der bygges
let V = ''; // versionsmærke til css/js
let KORT;   // Danmarks omrids og projektionstal fra data/danmark.json

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nf = (n) => Number(n).toLocaleString('da-DK');
const kr = (n) => `${nf(n)}&nbsp;kr.`;
const d = (iso) => new Date(`${String(iso).slice(0, 10)}T12:00:00Z`);
const langDato = (iso) => new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d(iso));
const kortDato = (iso) => new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(d(iso));
const ugedag = (iso) => new Intl.DateTimeFormat('da-DK', { weekday: 'long', timeZone: 'UTC' }).format(d(iso));
const dkListe = (a) => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} og ${a.at(-1)}`);
// API'et giver kun en kode. Ukendte koder er udenlandske baner (alle danske står i BANER), så de vises som Udlandet.
const bane = (kode) => BANER[kode] ?? 'Udlandet';
const tlfLink = SITE.telefon.replace(/\s/g, '');
const tlfKort = SITE.telefon.replace('+45 ', '');

/** "16,0a" → "1.16,0a". Tomt, hvis der ikke er en tid (fx galop uden tid). */
export const tid = (t) => (/^\d\d,\d/.test(t ?? '') ? `1.${t}` : '');

/** Hurtigste tid i en rekordstreng som "18,7k 14,3m *12,2am" → "1.12,2am". */
export const bedsteRekord = (mark) => {
  const tider = String(mark ?? '').replace(/\*/g, '').split(/\s+/).filter((x) => /^\d\d,\d/.test(x));
  tider.sort((a, b) => parseFloat(a.replace(',', '.')) - parseFloat(b.replace(',', '.')));
  return tider.length ? `1.${tider[0]}` : '';
};

/** Placering som den vises: 1, 2, 3 … "–" for uplaceret, "disk." for diskvalificeret. */
export const plac = (p) => (/^[1-9]\d*$/.test(p) ? p : p === 'd' ? 'disk.' : '–');

/** Kusken ved en kommende start: kun fornavn, når det er Marc selv. */
export const kuskVist = (navn) => (navn === SITE.person ? SITE.fornavn : navn ?? '');

/** De (op til) fem seneste sæsoner med præmier: den første af dem og den bedste. */
export const vaekst = (stat) => {
  const aar = stat.filter((s) => s.praemier > 0).sort((a, b) => a.aar - b.aar).slice(-5);
  return { fra: aar[0], top: aar.reduce((m, s) => (s.praemier > m.praemier ? s : m), aar[0]) };
};

const pil = '<svg class="pil" viewBox="0 0 22 10" width="22" height="10" aria-hidden="true"><path d="M0 5h20M16 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
const ud = '<svg class="ud" viewBox="0 0 10 10" width="10" height="10" aria-hidden="true"><path d="M1 9 9 1M3 1h6v6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
const nyFane = '<span class="sr"> (åbner i ny fane)</span>';
const ekstern = (href, tekst, cls = 'link') => `<a class="${cls}" href="${href}" target="_blank" rel="noopener">${tekst} ${ud}${nyFane}</a>`;
const knap = (href, tekst, cls = '') => `<a class="knap ${cls}" href="${R}${href}">${tekst} ${pil}</a>`;
const link = (href, tekst, cls = '') => `<a class="link ${cls}" href="${R}${href}">${tekst} ${pil}</a>`;

const billede = (navn, alt, { sizes = '100vw', lazy = true, cls = '', pos = '' } = {}) => {
  const [forhold, ...bredder] = BILLEDER[navn];
  const max = bredder.at(-1);
  return `<img${cls ? ` class="${cls}"` : ''} src="${R}assets/img/${navn}-${bredder[0]}.webp" srcset="${bredder.map((w) => `${R}assets/img/${navn}-${w}.webp ${w}w`).join(', ')}" sizes="${sizes}" width="${max}" height="${Math.round(max / forhold)}" alt="${esc(alt)}"${pos ? ` style="object-position:${pos}"` : ''}${lazy ? ' loading="lazy" decoding="async"' : ' fetchpriority="high"'}>`;
};
const etiket = (tekst, attr = '') => `<p class="etiket"${attr}>${tekst}</p>`;

const FB_IKON = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M13.4 21v-7.5h2.5l.4-2.9h-2.9V8.8c0-.8.2-1.4 1.4-1.4h1.6V4.8a20 20 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v2H7.8v2.9h2.5V21z" fill="currentColor"/></svg>';
const IG_IKON = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="7" r="1.2" fill="currentColor"/></svg>';
const sociale = (cls = '') => `<ul class="sociale ${cls}">
      <li><a href="${SITE.facebook}" target="_blank" rel="noopener">${FB_IKON}<span><b>Facebook</b><small>MB TRAV</small></span>${ud}${nyFane}</a></li>
      <li><a href="${SITE.instagram}" target="_blank" rel="noopener">${IG_IKON}<span><b>Instagram</b><small>@mb.trav</small></span>${ud}${nyFane}</a></li>
    </ul>`;


// ---------- afledte tal ----------

function afled(data, idag) {
  const heste = [...data.heste].sort((a, b) => b.praemier - a.praemier || a.navn.localeCompare(b.navn, 'da'));
  const navne = new Map(heste.map((h) => [h.id, h.navn]));
  const medNavn = (r) => ({ ...r, hest: navne.get(r.hestId) ?? r.hest });
  const saeson = data.traenerStatistik.find((s) => s.sejre > 0) ?? data.traenerStatistik.find((s) => s.starter > 0) ?? data.traenerStatistik[0];
  const kusk = data.kuskStatistik.find((s) => s.aar === saeson.aar) ?? data.kuskStatistik[0];
  const iAar = data.resultater.filter((r) => r.dato.startsWith(String(saeson.aar)));
  const prNavn = {};
  for (const r of iAar) {
    const b = (prNavn[bane(r.bane)] ??= { kode: r.bane, navn: bane(r.bane), antal: 0, sejre: 0 });
    b.antal++;
    if (r.placering === '1') b.sejre++;
  }
  const banetal = Object.values(prNavn).sort((a, b) => b.sejre - a.sejre || b.antal - a.antal);
  const traenerAar = data.traenerStatistik.filter((s) => s.starter > 0);
  return {
    heste,
    saeson,
    kusk,
    opdateret: langDato(data.opdateret),
    seneste: data.resultater.slice(0, 10).map(medNavn),
    kommende: data.kommende.filter((k) => k.dato >= idag).map(medNavn),
    banetal,
    sejrsbaner: banetal.filter((b) => b.sejre > 0 || b.kode === HJEM),
    banerIAar: [...banetal.filter((b) => b.navn !== 'Udlandet').map((b) => b.navn), ...(prNavn.Udlandet ? ['udenlandske baner'] : [])],
    ungheste: heste.filter((h) => h.alder <= 2),
    vaekst: vaekst(data.traenerStatistik),
    praemieAar: data.traenerStatistik.filter((s) => s.praemier > 0).sort((a, b) => a.aar - b.aar).slice(-5),
    traenerAar: [...traenerAar].reverse(), // ældste først til søjlerne
    kuskAar: data.kuskStatistik.filter((s) => s.starter > 0).reverse(),
    albatros: heste.find((h) => h.navn.toLowerCase() === 'albatros'),
    sejreIAar: iAar.filter((x) => x.placering === '1').map(medNavn),
    opdraet: heste.filter((h) => h.egetOpdraet).sort((a, b) => a.alder - b.alder || a.navn.localeCompare(b.navn, 'da')),
    maaneder: Array.from({ length: 12 }, (_, m) => {
      const her = iAar.filter((x) => Number(x.dato.slice(5, 7)) === m + 1);
      return { m, starter: her.length, sejre: her.filter((x) => x.placering === '1').length };
    }),
    fb: (data.facebook ?? []).slice(0, 5),
  };
}

// ---------- fælles dele ----------

const ordmaerke = (cls = '') => `<span class="ordmaerke ${cls}">MB <b>Trav</b></span>`;

const top = (sti) => `
<header class="top">
  <div class="top__inner">
    <a class="top__logo" href="${R || './'}" aria-label="${SITE.navn} – til forsiden">${ordmaerke()}</a>
    <nav class="top__nav" aria-label="Primær navigation">
      ${[...NAV, ['kontakt/', 'Kontakt']].map(([href, navn]) => `<a href="${R}${href}"${sti.startsWith(href) ? ' aria-current="page"' : ''}>${navn}</a>`).join('\n      ')}
    </nav>
    <a class="top__tlf" href="tel:${tlfLink}"><span class="sr">Ring til ${SITE.fornavn}: </span>${tlfKort}</a>
    <button class="burger" type="button" aria-haspopup="dialog" aria-controls="menu" commandfor="menu" command="show-modal"><span>Menu</span><i aria-hidden="true"></i></button>
  </div>
</header>
<dialog class="menu" id="menu" aria-label="Menu">
  <div class="menu__top">
    ${ordmaerke()}
    <button class="burger burger--luk" type="button" data-luk commandfor="menu" command="close"><span>Luk</span><i aria-hidden="true"></i></button>
  </div>
  <nav class="menu__nav" aria-label="Menu">
    <ul>
      ${[['', 'Forside'], ...NAV, ['kontakt/', 'Kontakt']].map(([href, navn], i) => `<li style="--i:${i}"><a href="${R}${href || (R ? '' : './')}"${(href ? sti.startsWith(href) : sti === '') ? ' aria-current="page"' : ''}>${navn}</a></li>`).join('\n      ')}
    </ul>
  </nav>
  <div class="menu__bund">
    <a href="tel:${tlfLink}">${SITE.telefon}</a>
    <a href="mailto:${SITE.email}">${SITE.email}</a>
    <a href="${SITE.facebook}" target="_blank" rel="noopener">Facebook${nyFane}</a>
    <a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram${nyFane}</a>
  </div>
</dialog>`;

const kontaktbaand = () => `
<section class="cta">
  <div class="wrap">
    ${etiket('Kontakt', ' data-vis')}
    <h2 data-vis style="--i:1">Har du en hest, der skal i træning?</h2>
    <p class="cta__tekst" data-vis style="--i:2">Ring til ${SITE.fornavn} eller skriv en mail – så tager I en snak om hesten, planen og prisen.</p>
    <p class="cta__valg" data-vis style="--i:3"><a href="tel:${tlfLink}"><span class="sr">Ring til ${SITE.fornavn}: </span>${SITE.telefon}</a><a href="mailto:${SITE.email}">${SITE.email}</a></p>
  </div>
</section>`;

const bund = (o) => `
<footer class="bund">
  <div class="wrap bund__gitter">
    <div class="bund__brand">
      ${ordmaerke('ordmaerke--stor')}
      <p>Travtræner og kusk ${SITE.person} med A1-licens – fra gården i ${SITE.sted} med Aalborg som hjemmebane.</p>
    </div>
    <nav aria-label="Sider">
      <h2>Sider</h2>
      <ul>
        ${[...NAV, ['kontakt/', 'Kontakt']].map(([href, navn]) => `<li><a href="${R}${href}">${navn}</a></li>`).join('')}
      </ul>
    </nav>
    <div>
      <h2>Kontakt</h2>
      <ul>
        <li><a href="tel:${tlfLink}">${SITE.telefon}</a></li>
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li><address>${SITE.gade}<br>${SITE.postnr} ${SITE.by}</address></li>
      </ul>
    </div>
    <div>
      <h2>Følg med</h2>
      <ul>
        <li>${ekstern(SITE.facebook, 'Facebook', '')}</li>
        <li>${ekstern(SITE.instagram, 'Instagram', '')}</li>
        <li>${ekstern(SITE.travinfo, 'Travinfo', '')}</li>
      </ul>
    </div>
  </div>
  <div class="wrap bund__linje">
    <p>Resultater og statistik: Dansk Hestevæddeløb · opdateret ${o.opdateret}</p>
    <p>© ${new Date().getFullYear()} ${SITE.firma} · CVR ${SITE.cvr}</p>
  </div>
</footer>`;

const organisation = () => ({
  '@type': ['LocalBusiness', 'SportsOrganization'],
  '@id': `${SITE.url}/#stald`,
  name: SITE.navn,
  description: `Travtræning af løbsheste og ungheste fra gården i ${SITE.sted} ved Aalborg – med egen travbane, galopbane med strandsand og folde.`,
  url: `${SITE.url}/`,
  telephone: tlfLink,
  email: SITE.email,
  image: `${SITE.url}/assets/img/delebillede.jpg`,
  sport: 'Travsport',
  foundingDate: SITE.start,
  address: { '@type': 'PostalAddress', streetAddress: SITE.gade, postalCode: SITE.postnr, addressLocality: SITE.by, addressCountry: 'DK' },
  founder: { '@id': `${SITE.url}/#person` },
  sameAs: [SITE.travinfo, SITE.facebook, SITE.instagram],
});
const person = () => ({
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.person,
  jobTitle: 'Professionel travtræner og kusk',
  url: `${SITE.url}/om-marc/`,
  worksFor: { '@id': `${SITE.url}/#stald` },
  sameAs: [SITE.travinfo],
});

function layout({ sti, titel, beskrivelse, indhold, o, klasse = '', noindex = false }) {
  const kanonisk = `${SITE.url}/${sti}`;
  const sideNavn = [...NAV, ['kontakt/', 'Kontakt']].find(([href]) => href === sti)?.[1];
  const graf = [
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.navn, inLanguage: 'da-DK' },
    organisation(),
    person(),
    ...(sideNavn ? [{ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Forside', item: `${SITE.url}/` }, { '@type': 'ListItem', position: 2, name: sideNavn, item: kanonisk }] }] : []),
  ];
  return `<!doctype html>
<html lang="da">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titel)}</title>
<meta name="description" content="${esc(beskrivelse)}">
${noindex ? '<meta name="robots" content="noindex">' : '<link rel="canonical" href="' + kanonisk + '">'}
<meta name="theme-color" content="#f1ebe0">
<meta property="og:type" content="website">
<meta property="og:locale" content="da_DK">
<meta property="og:site_name" content="${SITE.navn}">
<meta property="og:title" content="${esc(titel)}">
<meta property="og:description" content="${esc(beskrivelse)}">
<meta property="og:url" content="${kanonisk}">
<meta property="og:image" content="${SITE.url}/assets/img/delebillede.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Tre travheste i træning på stranden – MB Trav">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="48x48" href="${R}assets/img/ikon-48.png">
<link rel="apple-touch-icon" href="${R}assets/img/ikon-180.png">
<link rel="preload" href="${R}assets/fonts/archivo.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${R}assets/css/site.css?v=${V}">
<script>document.documentElement.classList.add('js');setTimeout(function(){window.__klar||document.documentElement.classList.remove('js')},2500)</script>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graf }).replace(/</g, '\\u003c')}</script>
</head>
<body class="${klasse}">
<a class="skip" href="#indhold">Spring til indhold</a>
${top(sti)}
<main id="indhold">
${indhold}
</main>
${bund(o)}
<script src="${R}assets/js/site.js?v=${V}" defer></script>
</body>
</html>
`;
}

// Sidehoved på undersider: foto i fuld bredde med overskriften nederst (som forsiden) og nøgletal i en stribe under.
const sidehoved = ({ sti, h1, tekst, figur, pos = '50% 50%', chips = [] }) => `
<section class="sidehoved">
  ${billede(figur[0], figur[1], { sizes: '100vw', lazy: false, cls: 'sidehoved__foto', pos })}
  <div class="sidehoved__tekst">
    <nav class="sti" aria-label="Brødkrumme"><a href="${R}">Forside</a><span aria-hidden="true">/</span><span aria-current="page">${sti}</span></nav>
    <h1>${h1}</h1>
    <p class="indled">${tekst}</p>
  </div>
</section>${chips.length ? `
<div class="stribe"><dl class="wrap stribe__tal">${chips.map(([tal, tekst]) => `<div><dt>${tekst}</dt><dd>${tal}</dd></div>`).join('')}</dl></div>` : ''}`;

/**
 * Skematisk Danmarkskort. `punkter` er [{ kode, navn, antal?, sejre? }]: med antal tegnes en boble, hvis størrelse følger
 * antal starter, med antal sejre i; uden antal en lille prik. Hjemmebanen får en ring.
 */
function danmarkskort(punkter, beskrivelse) {
  const { bredde, hoejde, lon0, lat1, kx, ky, sti } = KORT;
  const max = Math.max(1, ...punkter.map((p) => p.antal ?? 0));
  const vist = punkter.filter((p) => BANE_POS[p.kode]).map((p) => {
    const [lon, lat] = BANE_POS[p.kode];
    const r = p.antal ? +(8 + 6 * Math.sqrt(p.antal / max)).toFixed(1) : 7;
    return { ...p, x: +((lon - lon0) * kx).toFixed(1), y: +((lat1 - lat) * ky).toFixed(1), r, ydre: p.kode === HJEM ? r + (p.antal ? 4 : 6) : r };
  });
  const hjem = vist.find((p) => p.kode === HJEM);
  const navn = (p) => {
    const w = p.navn.length * 6.4, m = p.ydre + 6;
    const steder = [['start', p.x + m, p.y + 3.7], ['middle', p.x, p.y + m + 9], ['end', p.x - m, p.y + 3.7], ['end', Math.min(p.x + p.ydre, bredde - 4), p.y + m + 9], ['middle', p.x, p.y - m - 2]];
    const straf = ([anker, x, y]) => {
      const x0 = (anker === 'start' ? x : anker === 'end' ? x - w : x - w / 2) - 3, x1 = x0 + w + 6, y0 = y - 12, y1 = y + 4;
      const inde = (px, py, luft = 0) => px > x0 - luft && px < x1 + luft && py > y0 - luft && py < y1 + luft;
      const udenfor = x0 < 0 || x1 > bredde || y0 < 0 || y1 > hoejde;
      const rammer = vist.some((q) => q !== p && inde(q.x, q.y, q.ydre));
      return (udenfor ? 100 : 0) + (rammer ? 10 : 0);
    };
    const [anker, x, y] = steder.map((sted, i) => [straf(sted) + i / 100, sted]).sort((a, b) => a[0] - b[0])[0][1];
    return `<text class="kort__navn" x="${+x.toFixed(1)}" y="${+y.toFixed(1)}" text-anchor="${anker}">${esc(p.navn)}</text>`;
  };
  return `<svg class="kort__svg" viewBox="0 0 ${bredde} ${hoejde}" role="img" aria-label="${esc(beskrivelse)}">
        <path class="kort__land" d="${sti}"/>${vist.map((p, i) => `
        <g class="kort__bane" style="--n:${i}">${p === hjem ? `<circle class="kort__ring" cx="${p.x}" cy="${p.y}" r="${p.ydre}"/>` : ''}<circle class="kort__prik" cx="${p.x}" cy="${p.y}" r="${p.r}"/>${p.antal ? `<text class="kort__tal" x="${p.x}" y="${+(p.y + 3.3).toFixed(1)}" text-anchor="middle">${p.sejre ?? p.antal}</text>` : ''}${navn(p)}</g>`).join('')}
      </svg>`;
}

// ---------- genbrugte blokke ----------

const plKlasse = (p) => (p === '1' ? ' pl--1' : /^[23]$/.test(p) ? ' pl--23' : p === 'd' ? ' pl--tekst' : '');

const resultatRaekke = (r) => `
      <li class="res__r">
        <span class="pl${plKlasse(r.placering)}"><span class="sr">Placering: </span>${plac(r.placering)}</span>
        <span class="res__hest">${esc(r.hest)}</span>
        <span class="res__info"><time datetime="${r.dato}">${kortDato(r.dato)}</time> · ${esc(bane(r.bane))} · ${r.loeb}. løb · ${nf(r.distance)}&nbsp;m</span>
        <span class="res__tid">${tid(r.tid) || '<span aria-hidden="true">–</span><span class="sr">ingen tid</span>'}</span>
        <span class="res__kr">${r.praemie ? kr(r.praemie) : '<span aria-hidden="true">–</span><span class="sr">ingen præmie</span>'}</span>
      </li>`;
const resultatliste = (liste) => `<ol class="res">${liste.map(resultatRaekke).join('')}
    </ol>`;

const kommendeListe = (liste) => `<ul class="kom">${liste.map((k) => `
      <li>
        <time datetime="${k.dato}"><b>${d(k.dato).getUTCDate()}</b>${kortDato(k.dato).replace(/^\d+\.\s*/, '')}</time>
        <span class="kom__hest">${esc(k.hest)}</span>
        <span class="kom__bane">${ugedag(k.dato)} · ${esc(bane(k.bane))} · ${k.loeb}. løb</span>
        ${k.kusk ? `<span class="kom__kusk"><span class="sr">Kusk: </span>${esc(kuskVist(k.kusk))}</span>` : ''}
      </li>`).join('')}
    </ul>`;
const ingenStarter = () => `<p class="tom">Ingen af staldens heste er startmeldt lige nu. Nye startlister kommer på ${ekstern(SITE.travinfo, 'Travinfo')}.</p>`;

const omHest = (h) => `${h.alder}-årig ${esc(h.koen.toLowerCase())}`;
const afstamning = (h) => (h.far ? `e. ${esc(h.far)} – ${esc(h.mor)}` : '');
const sejre = (h) => Number(h.placeringer.split('-')[0]) || 0;
const sejreTekst = (n) => `${n} ${n === 1 ? 'sejr' : 'sejre'}`;

// Profilkort for de mest vindende heste.
const profilkort = (h, i) => `
      <a class="profil" href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener" data-vis style="--i:${i % 3}">
        <span class="profil__nr" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3>${esc(h.navn)}</h3>
        <p>${omHest(h)}${afstamning(h) ? `<br>${afstamning(h)}` : ''}</p>
        <dl>
          <div><dt>Sejre</dt><dd>${sejre(h)}</dd></div>
          <div><dt>Starter</dt><dd>${h.starter}</dd></div>
          <div><dt>Rekord</dt><dd>${bedsteRekord(h.rekord) || '–'}</dd></div>
        </dl>
        <p class="profil__kr">${kr(h.praemier)} <small>indkørt</small></p>
        <span class="profil__ud">Travinfo ${ud}${nyFane}</span>
      </a>`;

// Hesterække til den fulde træningsliste.
const hesteraekke = (h, i) => `
      <li class="hest" data-vis style="--i:${i % 6}">
        <div class="hest__navn">
          <h3><a href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener">${esc(h.navn)}${nyFane}</a></h3>
          <p>${omHest(h)}${afstamning(h) ? ` · ${afstamning(h)}` : ''}</p>
        </div>
        ${h.starter ? `<dl class="hest__tal">
          <div><dt>Starter</dt><dd>${h.starter} <small>${esc(h.placeringer)}</small></dd></div>
          <div><dt>Indkørt</dt><dd>${kr(h.praemier)}</dd></div>
          <div><dt>Rekord</dt><dd>${bedsteRekord(h.rekord) || '–'}</dd></div>
        </dl>` : '<p class="hest__tal hest__tal--tom">Ustartet</p>'}
      </li>`;
const hestegruppe = (titel, heste) => (heste.length ? `
    <div class="gruppe">
      <h2 class="gruppe__titel" data-vis>${titel} <span>${heste.length}</span></h2>
      <ul class="hesteliste">${heste.map(hesteraekke).join('')}
      </ul>
    </div>` : '');

// Præmier pr. sæson som søjler i 1.000 kr. (ældste til venstre, indeværende sæson i havblå).
const praemiegraf = (aar, nu) => {
  const max = Math.max(1, ...aar.map((s) => s.praemier));
  const b = 500 / aar.length;
  return `<figure class="graf" data-vis>
      <svg viewBox="0 0 500 230" role="img" aria-label="Indkørte præmier pr. sæson: ${aar.map((s) => `${s.aar}: ${nf(s.praemier)} kr.`).join(', ')}">${aar.map((s, i) => {
        const h = Math.max(4, Math.round((s.praemier / max) * 170)), x = Math.round(i * b + b * 0.16), w = Math.round(b * 0.68);
        return `
        <g${s.aar === nu ? ' class="graf__nu"' : ''}><rect x="${x}" y="${196 - h}" width="${w}" height="${h}" style="--i:${i}"/><text x="${x + w / 2}" y="${186 - h}" text-anchor="middle">${nf(Math.round(s.praemier / 1000))}</text><text class="graf__aar" x="${x + w / 2}" y="${222}" text-anchor="middle">${s.aar}</text></g>`;
      }).join('')}
      </svg>
      <figcaption>Indkørte præmier for staldens heste pr. sæson, i 1.000 kr.${aar.some((s) => s.aar === nu) ? ` ${nu} er til og med i dag.` : ''}</figcaption>
    </figure>`;
};

// Sejre pr. sæson som søjler
const soejler = (titel, aar) => {
  const max = Math.max(1, ...aar.map((s) => s.sejre));
  return `<figure class="soejler" data-vis>
        <figcaption>${titel}</figcaption>
        <ol aria-label="${titel}: ${aar.map((s) => `${s.aar}: ${s.sejre}`).join(', ')}">${aar.map((s) => `<li style="--h:${Math.max(4, Math.round((s.sejre / max) * 100))}%"><b>${s.sejre}</b><i aria-hidden="true"></i><span>${s.aar}</span></li>`).join('')}</ol>
      </figure>`;
};

const statTabel = (titel, raekker) => `
      <div class="tabelboks" role="region" aria-label="${titel}" tabindex="0">
        <table class="tabel">
          <caption>${titel}</caption>
          <thead><tr><th scope="col">År</th><th scope="col">Starter</th><th scope="col">1.–2.–3.</th><th scope="col">Sejrs&shy;procent</th><th scope="col">Præmie&shy;sum, kr.</th></tr></thead>
          <tbody>${raekker.filter((s) => s.starter > 0).map((s) => `
            <tr><th scope="row">${s.aar}</th><td>${s.starter}</td><td>${s.sejre}–${s.toer}–${s.treer}</td><td>${s.procent}&nbsp;%</td><td>${nf(s.praemier)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>`;

const formkurve = (liste) => `<ol class="form" aria-label="Placeringer i de seneste ${liste.length} starter, nyeste først">${liste.map((r) => `<li class="pl${plKlasse(r.placering)}"><span class="sr">${esc(r.hest)}: </span>${plac(r.placering)}</li>`).join('')}</ol>`;

const faciliteter = () => `<ul class="facil">${FACILITETER.map(([tal, tekst], i) => `
      <li data-vis style="--i:${i % 3}"><b>${tal}</b>${tekst}</li>`).join('')}
    </ul>`;

const banebjaelker = (banetal) => {
  const max = Math.max(1, ...banetal.map((b) => b.sejre));
  return `<ul class="baner">${banetal.map((b) => `
        <li style="--w:${Math.round((b.sejre / max) * 100)}%"><span>${esc(b.navn)}</span><em>${b.antal} starter · ${Math.round((b.sejre / b.antal) * 100)} %</em><b>${sejreTekst(b.sejre)}</b></li>`).join('')}
      </ul>`;
};

/** Hjemmebanen og – hvis det er en anden – banen med flest sejre i år. */
const baneTekst = (o) => {
  const hjem = o.banetal.find((b) => b.kode === HJEM), top = o.banetal[0];
  if (!hjem) return 'Aalborg er hjemmebanen.';
  return top !== hjem && top.sejre > hjem.sejre
    ? `Aalborg er hjemmebanen med ${hjem.antal} starter i ${o.saeson.aar} – men flest sejre kommer i ${top.navn}: ${sejreTekst(top.sejre)} på ${top.antal} starter.`
    : `Aalborg er hjemmebanen – og her kommer også flest sejre: ${sejreTekst(hjem.sejre)} på ${hjem.antal} starter i ${o.saeson.aar}.`;
};

const banekort = (o) => `
    <figure class="kort" data-vis style="--i:2">
      ${danmarkskort(o.sejrsbaner, `Danmarkskort med staldens sejre og starter pr. bane i ${o.saeson.aar}: ${o.sejrsbaner.map((b) => `${b.navn} ${sejreTekst(b.sejre)} på ${b.antal} starter`).join(', ')}.`)}
      <figcaption>Sejre pr. dansk bane i ${o.saeson.aar}. Boblens størrelse viser antal starter, og ringen markerer hjemmebanen.</figcaption>
    </figure>`;

// Billeder fra hverdagen – alle fra mbtrav.dk.
const GALLERI = [
  ['strand', 'Tre heste i træning på stranden'],
  ['solopgang', 'Ryttere på banen i solopgang'],
  ['skov', 'Træningsvej gennem skoven'],
  ['solarie', 'Hest under solariet i laden'],
  ['hoe', 'To heste ved høet i stalden'],
  ['ryttere', 'To ryttere på banen i sne'],
  ['vand', 'Hest i vandet ved søen'],
  ['skovtur', 'Ridetur ad en skovsti set mellem hestens ører'],
  ['vinter', 'To heste med dækken i sneen'],
  ['bokse', 'Staldgangen med boksene'],
  ['pleje', 'En af staldens heste bliver striglet'],
  ['rytter', 'Hest og rytter i løbsdragt på gårdspladsen'],
];
const galleri = (fotos = GALLERI, cls = '') => `<ul class="galleri${cls}">${fotos.map(([navn, alt], i) => `
      <li data-vis style="--i:${i % 4}">${billede(navn, alt, { sizes: '(min-width: 1000px) 30vw, 50vw' })}</li>`).join('')}
    </ul>`;

const sekhoved = (etik, h2, tekst = '') => `
    <div class="sekhoved">
      <div>
        ${etiket(etik, ' data-vis')}
        <h2 data-vis style="--i:1">${h2}</h2>
      </div>
      ${tekst ? `<p data-vis style="--i:2">${tekst}</p>` : ''}
    </div>`;

// Staldens eget opdræt (Team Bakkelygaard & MB Trav i registret) – alle med fodboldnavne (Travservice 5.6.2023).
const opdraet = (o) => (o.opdraet.length ? `
<section class="sek opdraet">
  <div class="wrap">
    ${sekhoved('Eget opdræt', 'Holdet med fodboldnavne', `Sammen med Team Bakkelygaard opdrætter ${SITE.fornavn} selv heste – og de får navne efter fodboldklubber. Fra opdrættet er bl.a. kommet Dortmund, Celtic og Benfica. Lige nu står ${o.opdraet.length} på træningslisten.`)}
    <ol class="klubber">${o.opdraet.map((h, i) => `
      <li data-vis style="--i:${i % 3}">
        <span class="klubber__nr" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3>${esc(h.navn)}</h3>
        <p>${omHest(h)}${h.foedt ? ` · årgang ${h.foedt.slice(0, 4)}` : ''}</p>
        <b>${h.starter ? `${sejreTekst(sejre(h))} · ${kr(h.praemier)}` : 'Ustartet'}</b>
      </li>`).join('')}
    </ol>${o.opdraet.some((h) => h.navn === 'Mainz') ? `
    <p class="opdraet__note" data-vis>Mainz er lillebror til Dortmund, der blev nummer tre i Dansk Trav Derby 2019.</p>` : ''}
  </div>
</section>` : '');

const MAANED = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
// Starter og sejre pr. måned i sæsonen som dobbeltsøjler.
const maanedsgraf = (o) => {
  const max = Math.max(1, ...o.maaneder.map((m) => m.starter));
  return `<figure class="maaned" data-vis>
      <ol aria-label="Starter og sejre pr. måned i ${o.saeson.aar}: ${o.maaneder.filter((m) => m.starter).map((m) => `${MAANED[m.m]} ${m.starter} starter, ${m.sejre} sejre`).join('; ')}">${o.maaneder.map((m) => `
        <li style="--s:${Math.round((m.starter / max) * 100)}%;--v:${Math.round((m.sejre / max) * 100)}%"><i class="maaned__s" aria-hidden="true"></i><i class="maaned__v" aria-hidden="true"></i>${m.sejre ? `<b>${m.sejre}</b>` : ''}<span>${MAANED[m.m]}</span></li>`).join('')}
      </ol>
      <figcaption><span class="maaned__tegn maaned__tegn--s"></span>Starter <span class="maaned__tegn maaned__tegn--v"></span>Sejre – tallet over søjlen er sejre</figcaption>
    </figure>`;
};

// Hele træningslisten i én liste, der kan filtreres og sorteres (site.js). Uden JavaScript vises alle.
const hesteliste = (o) => `
    <div class="liste" data-liste>
      <div class="liste__styr">
        <div class="liste__filtre" role="group" aria-label="Vis">
          <button type="button" data-filter="alle" aria-pressed="true">Alle <span>${o.heste.length}</span></button>
          <button type="button" data-filter="loeb" aria-pressed="false">Løbsheste <span>${o.heste.filter((h) => h.alder >= 3).length}</span></button>
          <button type="button" data-filter="ung" aria-pressed="false">Ungheste <span>${o.ungheste.length}</span></button>
          ${o.opdraet.length ? `<button type="button" data-filter="opdraet" aria-pressed="false">Eget opdræt <span>${o.opdraet.length}</span></button>` : ''}
        </div>
        <label class="liste__sorter">Sortér <select data-sorter>
          <option value="praemier">Mest indkørt</option>
          <option value="sejre">Flest sejre</option>
          <option value="navn">Navn</option>
          <option value="alder">Alder</option>
        </select></label>
      </div>
      <ul class="hesteliste">${o.heste.map((h, i) => hesteraekke(h, i).replace('<li class="hest"', `<li class="hest" data-navn="${esc(h.navn)}" data-praemier="${h.praemier}" data-sejre="${sejre(h)}" data-alder="${h.alder}" data-type="${h.alder >= 3 ? 'loeb' : 'ung'}${h.egetOpdraet ? ' opdraet' : ''}"`).replace('</h3>', `</h3>${h.egetOpdraet ? '<span class="maerke">Eget opdræt</span>' : ''}`)).join('')}
      </ul>
    </div>`;

// ---------- sider ----------

const forside = (o) => `
<section class="hero">
  ${billede('strand', 'Tre travheste i træning på stranden', { sizes: '100vw', lazy: false, cls: 'hero__foto' })}
  <div class="hero__tekst">
    ${etiket('Travtræner og kusk · A1-licens · Aalborg')}
    <h1>${SITE.person}</h1>
    <div class="hero__under">
      <p>${o.heste.length} heste i træning på gården i ${SITE.sted} – med egen travbane, galopbane med strandsand og Aalborg som hjemmebane.</p>
      <p class="valg">${knap('kontakt/', `Kontakt ${SITE.fornavn}`, 'knap--lys')} ${knap('heste/', 'Se hestene', 'knap--kant')}</p>
    </div>${o.kommende[0] ? `
    <p class="naeste"><span>Næste start</span><b>${esc(o.kommende[0].hest)}</b>${ugedag(o.kommende[0].dato)} ${kortDato(o.kommende[0].dato)} · ${esc(bane(o.kommende[0].bane))}${o.kommende[0].kusk ? ` · ${esc(kuskVist(o.kommende[0].kusk))}` : ''}</p>` : ''}
  </div>
</section>

<section class="sek">
  <div class="wrap">
    ${etiket(`Sæsonen ${o.saeson.aar}`, ' data-vis')}
    <h2 data-vis style="--i:1">Stalden i tal</h2>
    <dl class="tal" data-vis style="--i:2">
      <div><dt>heste i træning</dt><dd data-tael="${o.heste.length}">${o.heste.length}</dd></div>
      <div><dt>sejre i ${o.saeson.aar}</dt><dd data-tael="${o.saeson.sejre}">${o.saeson.sejre}</dd></div>
      <div><dt>sejrsprocent</dt><dd>${o.saeson.procent}&nbsp;%</dd></div>
      <div><dt>kr. indkørt i ${o.saeson.aar}</dt><dd data-tael="${o.saeson.praemier}">${nf(o.saeson.praemier)}</dd></div>
    </dl>
    <div class="duo duo--graf">
      <div>
        ${etiket(`${o.praemieAar.length} sæsoner`, ' data-vis')}
        <h2 data-vis style="--i:1">Fra ${nf(Math.round(o.vaekst.fra.praemier / 1000))}.000 til ${nf(Math.round(o.vaekst.top.praemier / 1000))}.000 kr.</h2>
        <p data-vis style="--i:2">I ${o.vaekst.fra.aar} kørte staldens heste ${kr(o.vaekst.fra.praemier)} ind. I ${o.vaekst.top.aar} blev det til ${kr(o.vaekst.top.praemier)} – på ${o.praemieAar.find((s) => s.aar === o.vaekst.top.aar).starter} starter.</p>
      </div>
      ${praemiegraf(o.praemieAar, o.saeson.aar)}
    </div>
  </div>
</section>

<section class="fotopar" aria-label="Fra hverdagen">
  <figure data-vis>${billede('soe', 'Hest og hjælper svømmer i søen', { sizes: '(min-width: 760px) 58vw, 100vw' })}</figure>
  <figure data-vis style="--i:1">${billede('sne', 'Træning i sulky på gårdens bane i sne', { sizes: '(min-width: 760px) 42vw, 100vw' })}</figure>
</section>

<section class="sek">
  <div class="wrap">
    ${sekhoved('Resultater', 'Fra banen', `Staldens næste starter og seneste resultater – hentet fra Dansk Hestevæddeløb hver dag, senest ${o.opdateret}.`)}
    <div class="resgitter">
      <div class="panel" data-vis>
        <h3 class="mini">Kommende starter</h3>
        ${o.kommende.length ? kommendeListe(o.kommende.slice(0, 5)) : ingenStarter()}
        <h3 class="mini mini--luft">Formkurve</h3>
        ${formkurve(o.seneste)}
      </div>
      <div class="panel" data-vis style="--i:1">
        <h3 class="mini">Seneste starter</h3>
        ${resultatliste(o.seneste.slice(0, 6))}
        <p class="valg">${link('resultater/', 'Alle resultater og statistik')}</p>
      </div>
    </div>
  </div>
</section>

<section class="sek sek--sand2">
  <div class="wrap">
    ${sekhoved('Hestene', 'Holdet lige nu', `${o.heste.length} heste står på træningslisten${o.ungheste.length ? ` – heraf ${o.ungheste.length} ungheste på vej` : ''}. Her er de mest vindende.`)}
    <div class="profiler">${[...o.heste].sort((a, b) => sejre(b) - sejre(a) || b.praemier - a.praemier).slice(0, 6).map(profilkort).join('')}
    </div>
    <p class="midt" data-vis>${knap('heste/', `Hele træningslisten (${o.heste.length})`)}</p>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    ${sekhoved(`Gården i ${SITE.sted}`, 'Faciliteterne', 'Træningen tager udgangspunkt i gården: egen travbane, galopbane med strandsand, ridebane og folde – og 30 minutters kørsel til Aalborg Væddeløbsbane.')}
    ${faciliteter()}
    <p class="valg" data-vis>${link('stalden/', 'Mere om stalden og priserne')}</p>
  </div>
</section>

<section class="sek sek--blaek">
  <div class="wrap">
    ${sekhoved('Hverdagen', 'Bane, strand, sø og skov')}
    ${galleri(GALLERI.slice(0, 6), ' galleri--forside')}
  </div>
</section>

<section class="sek">
  <div class="wrap duo">
    <div>
      ${etiket('Banerne', ' data-vis')}
      <h2 data-vis style="--i:1">Hjemme i Aalborg – ude i hele landet</h2>
      <p class="indled" data-vis style="--i:2">${baneTekst(o)}</p>
      <div data-vis style="--i:3">${banebjaelker(o.sejrsbaner)}</div>
    </div>
    ${banekort(o)}
  </div>
</section>
${kontaktbaand()}`;

// Karrieren i årstal. Kilder: mbtrav.dk/mb-trav (jockeytid og meritter), CVR-registret (MB Trav fra 1.9.2016) og Dansk Hestevæddeløb (præmier).
const karriere = (o) => [
  { aar: '12 år', titel: 'Vang Hovedgaard', tekst: 'Marc kommer i stalden hos Bo Westergaard og Peter Jensen på Vang Hovedgaard.' },
  { aar: '16 år', titel: 'Amatørlicens', tekst: 'Senere følger også et ophold hos Flemming Jensen.' },
  { aar: '2012 · 2015', titel: 'DM for jockeyer', tekst: 'Marc vinder DM for jockeyer – to gange.', stor: true },
  { aar: '2016', titel: 'Egen stald', tekst: 'MB Trav starter 1. september, og 1. oktober bliver Marc træner. Samme år: Jydsk 3-årings Hoppe Grand Prix med Blowmywhistle, sejr i løbsserien Sigter Mod Stjernerne og 3. plads i Dansk Trav Derby med Albatros.', stor: true },
  { aar: '2019', titel: 'Derbyet igen', tekst: 'Dortmund vinder Grand Prix-prøven og Derby-prøven, bliver nummer tre i Dansk Trav Derby og vinder siden Grand Circle 4-års Championat.', stor: true },
  { aar: '2020', titel: 'DM for 5-årige hopper', tekst: 'Diva Sisa vinder i Billund.' },
  { aar: '2021', titel: 'Stayerpokalen', tekst: 'Dortmund vinder i Nykøbing F.' },
  ...(o.vaekst.top.praemier >= 1e6 ? [{ aar: String(o.vaekst.top.aar), titel: 'Over en million', tekst: `Staldens heste kører ${kr(o.vaekst.top.praemier)} ind på ${o.praemieAar.find((s) => s.aar === o.vaekst.top.aar).starter} starter.`, stor: true }] : []),
];

const tidslinje = (o) => `
    <ol class="tidslinje">${karriere(o).map((p, i) => `
      <li class="tidslinje__punkt${p.stor ? ' tidslinje__punkt--stor' : ''}" data-vis style="--i:${i % 3}">
        <b>${p.aar}</b>
        <h3>${p.titel}</h3>
        <p>${p.tekst}</p>
      </li>`).join('')}
    </ol>`;

// Meritlisten samlet pr. år som kort.
const aarskort = () => {
  const aar = [...new Set(MERITTER.map(([a]) => a))];
  return `<div class="aarskort">${aar.map((a, i) => `
      <section class="aarskort__aar" data-vis style="--i:${i % 3}">
        <h3>${a}</h3>
        <ul>${MERITTER.filter(([x]) => x === a).map(([, titel, hest]) => `<li><span>${titel}</span>${hest ? `<b>${hest}</b>` : ''}</li>`).join('')}</ul>
      </section>`).join('')}
    </div>`;
};

const fotostribe = (fotos) => `
<section class="fotostribe" aria-label="Billeder fra stalden">${fotos.map(([navn, alt], i) => `
  <figure data-vis style="--i:${i}">${billede(navn, alt, { sizes: `(min-width: 760px) ${Math.round(100 / fotos.length)}vw, 100vw` })}</figure>`).join('')}
</section>`;

const omMarc = (o, data) => `
${sidehoved({
  sti: 'Om Marc',
  h1: SITE.person,
  tekst: `Travtræner og kusk med ${esc(data.traener.licens)}-licens. Tidligere jockey – og siden 2016 med egen stald.`,
  figur: ['fold', 'Travhest på folden'],
  pos: '50% 24%',
  chips: [[o.heste.length, 'heste i træning'], [o.saeson.sejre, `sejre i ${o.saeson.aar}`], ['2016', 'egen stald siden']],
})}

<section class="sek">
  <div class="wrap intro">
    <div>
      ${etiket('Historien', ' data-vis')}
      <h2 data-vis style="--i:1">Fra jockey til træner</h2>
      <p class="indled" data-vis style="--i:2">${SITE.fornavn} kom som 12-årig i stalden hos Bo Westergaard og Peter Jensen på Vang Hovedgaard og fik amatørlicens som 16-årig. Som jockey vandt han DM for jockeyer i 2012 og 2015 – og i september 2016 startede han ${SITE.navn}.</p>
      <p data-vis style="--i:3">Hestene trænes fra gården i ${SITE.sted} med egen travbane, galopbane med strandsand og folde, mens unghestene står på Bakkelygård i Stae. ${SITE.fornavn} kører også selv – i ${o.kusk.aar} er det blevet til ${o.kusk.starter} starter og ${sejreTekst(o.kusk.sejre)} i sulkyen. Han er medlem af Dansk Travtrænerforening af 1909.</p>
      <p class="valg" data-vis style="--i:4">${ekstern(SITE.travinfo, `${SITE.fornavn}s profil på Travinfo`)}</p>
    </div>
    <dl class="faktagitter" data-vis style="--i:2">
      <div><dt>Født</dt><dd>${data.traener.foedt}</dd></div>
      <div><dt>Licens</dt><dd>${esc(data.traener.licens)}</dd><dd class="lille">professionel træner og kusk</dd></div>
      <div><dt>Hjemmebane</dt><dd>Aalborg</dd><dd class="lille">${esc(data.traener.hjemmebane)}</dd></div>
      <div><dt>Træner siden</dt><dd>2016</dd><dd class="lille">${SITE.navn} fra ${langDato(SITE.start)}</dd></div>
      <div><dt>Løbsfarver</dt><dd class="farver"><i style="--f:#1c2c55"></i><i style="--f:#9aa1ab"></i></dd><dd class="lille">${esc(data.traener.farver)}</dd></div>
      <div><dt>Heste i træning</dt><dd data-tael="${o.heste.length}">${o.heste.length}</dd><dd class="lille">${o.ungheste.length} af dem ungheste</dd></div>
    </dl>
  </div>
</section>

<section class="sek sek--sand2">
  <div class="wrap">
    ${sekhoved('Karrieren', 'Årene, der tæller', 'Udvalgte højdepunkter fra meritlisten – og sæsonen, hvor stalden rundede en million.')}
    ${tidslinje(o)}
  </div>
</section>
${fotostribe([['soe', 'Hest og hjælper svømmer i søen'], ['ryttere', 'To ryttere på banen i sne'], ['solopgang', 'Ryttere på banen i solopgang']])}
${o.albatros ? `
<section class="sek sek--blaek">
  <div class="wrap albatros">
    <div class="albatros__tal" data-vis>
      <b>${o.albatros.alder}</b>
      <span>år – og stadig i stalden</span>
    </div>
    <div>
      ${etiket('Stadig i stalden', ' data-vis')}
      <h2 data-vis style="--i:1">Albatros</h2>
      <p class="indled" data-vis style="--i:2">Nummer tre i Dansk Trav Derby 2016, Årets 4-åring i Aalborg samme år – og siden flere gange med i DM i Monté.</p>
      <ol class="albatros__linje" data-vis style="--i:3">
        <li><b>2016</b>3. plads i Dansk Trav Derby</li>
        <li><b>2016</b>Årets 4-åring, Aalborg</li>
        <li><b>2018</b>DM i Monté, Consolation</li>
        <li><b>2019</b>DM i Monté, Odense</li>
        <li><b>2021</b>DM i Monté, Consolation</li>
      </ol>
      <dl class="mini-tal" data-vis style="--i:4">
        <div><dt>Starter</dt><dd>${o.albatros.starter}</dd></div>
        <div><dt>Sejre</dt><dd>${sejre(o.albatros)}</dd></div>
        <div><dt>Indkørt i karrieren</dt><dd>${kr(o.albatros.praemier)}</dd></div>
        ${bedsteRekord(o.albatros.rekord) ? `<div><dt>Rekord</dt><dd>${bedsteRekord(o.albatros.rekord)}</dd></div>` : ''}
      </dl>${o.kommende.find((k) => k.hestId === o.albatros.id) ? `
      <p class="naeste naeste--moerk" data-vis style="--i:5"><span>Næste start</span>${(({ dato, bane: b }) => `${ugedag(dato)} ${kortDato(dato)} · ${esc(bane(b))}`)(o.kommende.find((k) => k.hestId === o.albatros.id))}</p>` : ''}
    </div>
  </div>
</section>` : ''}

${opdraet(o)}
<section class="sek">
  <div class="wrap">
    ${sekhoved('Meritter', 'Udvalgte resultater 2016–2021', `Fra ${SITE.fornavn}s egen meritliste – ${MERITTER.length} resultater på seks sæsoner.`)}
    ${aarskort()}
  </div>
</section>

<section class="sek sek--sand2">
  <div class="wrap">
    ${sekhoved('Statistik', 'Sæson for sæson', `Officielle tal fra Dansk Hestevæddeløb, opdateret ${o.opdateret}.`)}
    <div class="duo duo--top">${praemiegraf(o.praemieAar, o.saeson.aar)}
      <div class="soejlepar">
        ${soejler('Sejre som træner', o.traenerAar)}
        ${soejler('Sejre som kusk', o.kuskAar)}
      </div>
    </div>
    <div class="tabeller" data-vis>
      ${statTabel('Som træner', data.traenerStatistik)}
      ${statTabel('Som kusk', data.kuskStatistik)}
    </div>
  </div>
</section>
${kontaktbaand()}`;

// Gårdens faciliteter som fotokort. Billederne viser stalden og banerne på gården (mbtrav.dk/faciliteter).
const FACILKORT = [
  ['sandbane', 'To spor side om side på gårdens bane', '1.250 m', 'Travbane', 'med 600 m dobbeltsporet ligeudbane'],
  ['ligeud', 'Lang, lige sandbane langs markerne', '400 m', 'Galopbane', 'med strandsand'],
  ['bokse', 'Staldgangen med boksene', '16', 'Bokse i stalden', 'i staldbygningen'],
  ['solarie', 'Hest under solariet', '9', 'Bokse i laden', 'samt solarieplads'],
  ['udebokse', 'Udebokse på gårdspladsen', '4', 'Udebokse', 'og 2 løsdrifte'],
  ['fold', 'Travhest på folden', '20 × 40 m', 'Ridebane', 'og store folde'],
];

const stalden = (o) => `
${sidehoved({
  sti: 'Stalden',
  h1: 'Stalden',
  tekst: `${o.heste.length} heste i træning fra gården i ${SITE.sted} – med egne baner, stald, lade og folde.`,
  figur: ['sne', 'Træning i sulky på gårdens bane i sne'],
  pos: '50% 40%',
  chips: [['1.250 m', 'travbane'], ['400 m', 'galopbane'], ['16 + 9', 'bokse']],
})}

<section class="sek">
  <div class="wrap">
    ${sekhoved(`Gården i ${SITE.sted}`, 'Faciliteterne', 'Egen travbane med dobbeltsporet ligeudbane, galopbane med strandsand, ridebane, stald, lade og store folde.')}
    <ul class="facilkort">${FACILKORT.map(([navn, alt, tal, titel, tekst], i) => `
      <li data-vis style="--i:${i % 3}">
        <figure>${billede(navn, alt, { sizes: '(min-width: 900px) 30vw, (min-width: 560px) 46vw, 92vw' })}</figure>
        <b>${tal}</b>
        <h3>${titel}</h3>
        <p>${tekst}</p>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sek sek--blaek">
  <div class="wrap">
    ${sekhoved('Ud af stalden', 'Strand, sø og skov', 'Ud over gårdens egne baner trænes hestene også på stranden, i søen og ad skovvejene.')}
    <div class="trio">
      <figure data-vis>${billede('strand', 'Tre heste i træning på stranden', { sizes: '(min-width: 900px) 50vw, 92vw' })}<figcaption>Stranden</figcaption></figure>
      <figure data-vis style="--i:1">${billede('vand', 'Hest i vandet ved søen', { sizes: '(min-width: 900px) 25vw, 92vw' })}<figcaption>Søen</figcaption></figure>
      <figure data-vis style="--i:2">${billede('skovtur', 'Ridetur ad en skovsti set mellem hestens ører', { sizes: '(min-width: 900px) 25vw, 92vw' })}<figcaption>Skoven</figcaption></figure>
    </div>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    ${sekhoved('Beliggenhed', 'Tæt på det hele', `Gården ligger i ${SITE.sted} i Nordjylland.`)}
    <ol class="rute" data-vis>
      <li><b>20 min.</b><span>Happy Horse Spa &amp; Rehab</span><small>spa og vandbånd</small></li>
      <li><b>30 min.</b><span>Aalborg Væddeløbsbane</span><small>hjemmebanen</small></li>
      <li><b>1 time</b><span>Frederikshavn og Hirtshals</span><small>færgerne</small></li>
    </ol>
  </div>
</section>

<section class="sek sek--sand2">
  <div class="wrap duo">
    <figure class="duo__foto" data-vis>${billede('fold', 'Travhest på folden', { sizes: '(min-width: 901px) 46vw, 92vw' })}</figure>
    <div>
      ${etiket('Unghestene', ' data-vis')}
      <h2 data-vis style="--i:1">Bakkelygård i Stae</h2>
      <p class="indled" data-vis style="--i:2">Unghestene står på Bakkelygård i Stae, ca. 5 km fra gården i ${SITE.sted}. Her er fine stalde, folde og træningsfaciliteter.</p>
      <dl class="chips chips--lille" data-vis style="--i:3">
        <div><dt>bane</dt><dd>2.200 m</dd></div>
        <div><dt>ligeudbane</dt><dd>600 m</dd></div>
        <div><dt>fra gården</dt><dd>ca. 5 km</dd></div>
      </dl>${o.ungheste.length ? `
      <p class="mini mini--luft" data-vis style="--i:4">Ungheste på træningslisten lige nu</p>
      <ul class="navnechips" data-vis style="--i:4">${o.ungheste.map((h) => `<li>${esc(h.navn)} <small>${h.alder} år</small></li>`).join('')}</ul>` : ''}
    </div>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    ${sekhoved('Priser', 'Hvad koster det?', `Alle priser er ekskl. moms. Ring til ${SITE.fornavn} for en snak om netop din hest.`)}
    <ul class="priser" data-vis>${PRISER.map(([hvad, pris, note]) => `
      <li><span>${hvad}</span><b>${pris}</b>${note ? `<small>${note}</small>` : ''}</li>`).join('')}
    </ul>
  </div>
</section>

<section class="sek sek--blaek">
  <div class="wrap">
    ${sekhoved('Hverdagen', 'Billeder fra stalden')}
    ${galleri()}
  </div>
</section>

<section class="sek">
  <div class="wrap duo">
    <div>
      ${etiket('Hjemmebanen', ' data-vis')}
      <h2 data-vis style="--i:1">Aalborg</h2>
      <p class="indled" data-vis style="--i:2">${baneTekst(o)}</p>
      <div data-vis style="--i:3">${banebjaelker(o.sejrsbaner)}</div>
    </div>
    ${banekort(o)}
  </div>
  <div class="wrap">
    <div class="adresse" data-vis>
      <div>
        ${etiket('Adresse')}
        <address class="adresse__stor">${SITE.navn}<br>${SITE.gade}<br>${SITE.postnr} ${SITE.by}</address>
      </div>
      <p>${ekstern(SITE.kort, 'Åbn i Google Maps', 'knap')}</p>
    </div>
  </div>
</section>
${kontaktbaand()}`;

// Antal heste pr. alder som vandrette søjler.
const aldersgraf = (heste) => {
  const alle = [...new Set(heste.map((h) => h.alder))].sort((a, b) => a - b);
  const max = Math.max(...alle.map((a) => heste.filter((h) => h.alder === a).length));
  return `<figure class="alder" data-vis>
      <figcaption class="mini">Holdet efter alder</figcaption>
      <ol aria-label="Antal heste pr. alder: ${alle.map((a) => `${a} år: ${heste.filter((h) => h.alder === a).length}`).join(', ')}">${alle.map((a) => {
        const n = heste.filter((h) => h.alder === a).length;
        return `<li style="--h:${Math.round((n / max) * 100)}%"><b>${n}</b><i aria-hidden="true"></i><span>${a} år</span></li>`;
      }).join('')}</ol>
    </figure>`;
};

const heste = (o) => `
${sidehoved({
  sti: 'Heste',
  h1: 'Heste i træning',
  tekst: 'Træningslisten kommer direkte fra Dansk Hestevæddeløb og følger automatisk med, når heste kommer til eller rejser videre.',
  figur: ['hoe', 'To heste ved høet i stalden'],
  pos: '50% 40%',
  chips: [[o.heste.length - o.ungheste.length, 'løbsheste'], [o.ungheste.length, 'ungheste'], [`${(o.heste.reduce((s, h) => s + h.praemier, 0) / 1e6).toLocaleString('da-DK', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mio.`, 'kr. indkørt i alt']],
})}

<section class="sek">
  <div class="wrap duo duo--top">
    <div>
      ${etiket('Holdet', ' data-vis')}
      <h2 data-vis style="--i:1">${o.heste.length} heste fra ${Math.min(...o.heste.map((h) => h.alder))} til ${Math.max(...o.heste.map((h) => h.alder))} år</h2>
      <p class="indled" data-vis style="--i:2">Tilsammen har hestene på træningslisten kørt ${kr(o.heste.reduce((s, h) => s + h.praemier, 0))} ind i deres karrierer. ${o.ungheste.length ? `${o.ungheste.length} af dem er åringer og 2-årige på vej mod de første starter.` : ''}</p>
    </div>
    ${aldersgraf(o.heste)}
  </div>
</section>

<section class="sek sek--sand2">
  <div class="wrap">
    ${sekhoved('Mest vindende', 'Staldens profiler', 'De heste på træningslisten, der har vundet flest løb i karrieren.')}
    <div class="profiler">${[...o.heste].sort((a, b) => sejre(b) - sejre(a) || b.praemier - a.praemier).slice(0, 3).map(profilkort).join('')}
    </div>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    <h2 class="gruppe__titel" data-vis>Træningslisten</h2>
    ${hesteliste(o)}
    <p class="note" data-vis>Starter, placeringer (1.–2.–3.), præmiesum og rekord er livstal. Rekorden er hestens hurtigste kilometertid; a = autostart, k/m/l = kort, mellem og lang distance. Klik på en hest for at se den på Travinfo. Kilde: Dansk Hestevæddeløb, opdateret ${o.opdateret}.</p>
  </div>
</section>
${opdraet(o)}
${kontaktbaand()}`;

const sejrskort = (r, i) => `
      <li data-vis style="--i:${i % 4}">
        <time datetime="${r.dato}">${kortDato(r.dato)}</time>
        <b>${esc(r.hest)}</b>
        <span>${esc(bane(r.bane))} · ${r.loeb}. løb${tid(r.tid) ? ` · ${tid(r.tid)}` : ''}</span>
        ${r.praemie ? `<em>${kr(r.praemie)}</em>` : ''}
      </li>`;

const resultater = (o, data) => `
${sidehoved({
  sti: 'Resultater',
  h1: 'Resultater',
  tekst: `Staldens seneste starter, kommende løb og sæsonens tal – fra Dansk Hestevæddeløb, opdateret ${o.opdateret}.`,
  figur: ['ryttere', 'To ryttere på gårdens bane i sne'],
  pos: '50% 55%',
  chips: [[o.saeson.sejre, `sejre i ${o.saeson.aar}`], [`${o.saeson.procent} %`, 'sejrsprocent'], [`${nf(Math.round(o.saeson.praemier / 1000))}.000`, 'kr. indkørt']],
})}

<section class="sek">
  <div class="wrap">
    ${etiket(`Sæson ${o.saeson.aar} som træner`, ' data-vis')}
    <dl class="kpi" data-vis>
      <div><dt>Starter</dt><dd data-tael="${o.saeson.starter}">${o.saeson.starter}</dd></div>
      <div><dt>Sejre</dt><dd data-tael="${o.saeson.sejre}">${o.saeson.sejre}</dd></div>
      <div><dt>2.-pladser</dt><dd data-tael="${o.saeson.toer}">${o.saeson.toer}</dd></div>
      <div><dt>3.-pladser</dt><dd data-tael="${o.saeson.treer}">${o.saeson.treer}</dd></div>
      <div><dt>Sejrsprocent</dt><dd>${o.saeson.procent}<small>%</small></dd></div>
      <div><dt>Indkørt</dt><dd><span data-tael="${o.saeson.praemier}">${nf(o.saeson.praemier)}</span><small>kr.</small></dd></div>
    </dl>
    <div class="duo duo--top duo--luft">
      <div class="formboks" data-vis style="--i:1">
        <h2 class="mini">Formkurve – de seneste ${o.seneste.length} starter</h2>
        ${formkurve(o.seneste)}
      </div>
      <div data-vis style="--i:2">
        <h2 class="mini">Måned for måned i ${o.saeson.aar}</h2>
        ${maanedsgraf(o)}
      </div>
    </div>
  </div>
</section>

<section class="sek sek--sand2">
  <div class="wrap resgitter">
    <div class="panel" data-vis>
      <h2 class="mini">Kommende starter</h2>
      ${o.kommende.length ? kommendeListe(o.kommende) : ingenStarter()}
    </div>
    <div class="panel" data-vis style="--i:1">
      <h2 class="mini">De seneste ${o.seneste.length} starter</h2>
      ${resultatliste(o.seneste)}
      <p class="note">Tider er kilometertider. a = autostart, g = galop undervejs. – = uplaceret, disk. = diskvalificeret.</p>
    </div>
  </div>
</section>
${o.sejreIAar.length ? `
<section class="sek sek--blaek">
  <div class="wrap">
    ${sekhoved(`Vindere i ${o.saeson.aar}`, `${o.sejreIAar.length} sejre – ${o.sejreIAar.length === 1 ? 'én' : 'alle'} på én side`, `Hver sejr i sæsonen ${o.saeson.aar}, nyeste først.`)}
    <ol class="sejrskort">${o.sejreIAar.map(sejrskort).join('')}
    </ol>
  </div>
</section>` : ''}

<section class="sek">
  <div class="wrap duo">
    <div>
      ${etiket('Banerne', ' data-vis')}
      <h2 data-vis style="--i:1">Sejre pr. bane i ${o.saeson.aar}</h2>
      <p class="indled" data-vis style="--i:2">${baneTekst(o)}</p>
      <div data-vis style="--i:3">${banebjaelker(o.sejrsbaner)}</div>
    </div>
    ${banekort(o)}
  </div>
</section>

<section class="sek sek--sand2">
  <div class="wrap">
    ${sekhoved('Statistik', 'Sæson for sæson', `Alle resultater og detaljer findes hos Dansk Hestevæddeløb. ${ekstern(SITE.travinfo, 'Åbn Travinfo')}`)}
    <div class="duo duo--top">${praemiegraf(o.praemieAar, o.saeson.aar)}${soejler('Sejre som træner', o.traenerAar)}</div>
    <div class="tabeller" data-vis>
      ${statTabel(`${SITE.fornavn} som træner`, data.traenerStatistik)}
      ${statTabel(`${SITE.fornavn} som kusk`, data.kuskStatistik)}
    </div>
  </div>
</section>
${kontaktbaand()}`;

const kontakt = (o) => `
${sidehoved({
  sti: 'Kontakt',
  h1: 'Kontakt',
  tekst: `Har du en hest, der skal i træning, eller et spørgsmål til stalden? Ring til ${SITE.fornavn} eller skriv en mail.`,
  figur: ['skov', 'Træningsvej gennem skoven'],
  pos: '50% 60%',
})}

<section class="sek">
  <div class="wrap kontakt">
    <div class="kontakt__felt kontakt__felt--moerk" data-vis>
      <h2 class="mini">Telefon</h2>
      <p class="kontakt__stor"><a href="tel:${tlfLink}">${SITE.telefon}</a></p>
      <p class="valg"><a class="knap knap--lys" href="tel:${tlfLink}">Ring op ${pil}</a> <a class="link link--lys" href="sms:${tlfLink}">Send en sms ${pil}</a></p>
    </div>
    <div class="kontakt__felt" data-vis style="--i:1">
      <h2 class="mini">Mail</h2>
      <p class="kontakt__stor kontakt__stor--mail"><a href="mailto:${SITE.email}">${SITE.email}</a></p>
      <p class="valg"><a class="knap" href="mailto:${SITE.email}">Skriv til ${SITE.fornavn} ${pil}</a></p>
    </div>
    <div class="kontakt__felt kontakt__felt--fuld" data-vis style="--i:2">
      <div>
        <h2 class="mini">Følg med</h2>
        <p>Startdage, sejre og hverdagen i stalden deles på Facebook og Instagram.</p>
      </div>
      ${sociale()}
    </div>
  </div>
</section>

<section class="sek sek--sand2">
  <div class="wrap duo">
    <div>
      ${etiket('Besøg gården', ' data-vis')}
      <h2 data-vis style="--i:1">${SITE.sted}</h2>
      <address class="adresse__stor" data-vis style="--i:2">${SITE.navn}<br>${SITE.gade}<br>${SITE.postnr} ${SITE.by}</address>
      <p class="valg" data-vis style="--i:3">${ekstern(SITE.kort, 'Find vej i Google Maps', 'knap')}</p>
      <ol class="rute rute--lille" data-vis style="--i:4">
        <li><b>30 min.</b><span>Aalborg Væddeløbsbane</span></li>
        <li><b>5 km</b><span>Bakkelygård i Stae</span></li>
        <li><b>1 time</b><span>Frederikshavn og Hirtshals</span></li>
      </ol>
    </div>
    <figure class="kort" data-vis style="--i:2">${danmarkskort([{ kode: HJEM, navn: 'Aalborg' }], 'Danmarkskort, hvor Aalborg er markeret')}<figcaption>Aalborg er hjemmebanen – 30 minutter fra gården.</figcaption></figure>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    ${sekhoved('Priser', 'Træning pr. dag', 'Alle priser er ekskl. moms.')}
    <ul class="priser" data-vis>${PRISER.map(([hvad, pris, note]) => `
      <li><span>${hvad}</span><b>${pris}</b>${note ? `<small>${note}</small>` : ''}</li>`).join('')}
    </ul>
    <p class="note">${SITE.firma} · CVR ${SITE.cvr} · ${SITE.gade}, ${SITE.postnr} ${SITE.by}</p>
  </div>
</section>
${fotostribe([['strand', 'Tre heste i træning på stranden'], ['solarie', 'Hest under solariet i laden'], ['hoe', 'To heste ved høet i stalden'], ['skovtur', 'Ridetur ad en skovsti set mellem hestens ører']])}`;

const ikkeFundet = () => `
<section class="sidehoved sidehoved--enkel">
  <div class="wrap">
    ${etiket('Fejl 404')}
    <h1>Siden findes ikke</h1>
    <p class="indled">Adressen er forkert, eller siden er flyttet.</p>
    <p class="valg">${knap('', 'Til forsiden')}</p>
  </div>
</section>`;

/** Alle sider som [{ sti, html }]. `idag` er YYYY-MM-DD, `v` et versionsmærke til css/js. */
export function sider(data, { v, idag, kort }) {
  V = v;
  KORT = kort;
  const o = afled(data, idag);
  const side = (sti, def) => {
    R = sti === '404.html' ? new URL(SITE.url + '/').pathname : sti ? '../' : '';
    return { sti: sti.endsWith('.html') ? sti : `${sti}index.html`, url: sti, html: layout({ sti, o, ...def() }) };
  };
  return [
    side('', () => ({
      titel: `${SITE.navn} – travtræner og kusk ${SITE.person}, Aalborg`,
      beskrivelse: `${SITE.person}: travtræner og kusk med A1-licens. ${o.heste.length} heste i træning på gården i ${SITE.sted} – med egen travbane og Aalborg som hjemmebane.`,
      klasse: 'forside',
      indhold: forside(o),
    })),
    side('om-marc/', () => ({
      titel: `Om ${SITE.person} – travtræner og kusk | ${SITE.navn}`,
      beskrivelse: `${SITE.person}: tidligere jockey hos Bo Westergaard, Flemming Jensen og Peter Jensen – og siden 2016 travtræner med egen stald, ${SITE.navn}.`,
      indhold: omMarc(o, data),
    })),
    side('stalden/', () => ({
      titel: `Stalden i ${SITE.sted} – faciliteter og priser | ${SITE.navn}`,
      beskrivelse: `${SITE.navn} træner ${o.heste.length} heste fra gården i ${SITE.sted}: 1.250 m travbane, galopbane med strandsand, ridebane og folde. Se faciliteter og priser.`,
      indhold: stalden(o),
    })),
    side('heste/', () => ({
      titel: `Heste i træning | ${SITE.navn}`,
      beskrivelse: `Se de ${o.heste.length} travheste, der lige nu er i træning hos ${SITE.person} – med afstamning, starter, præmiesum og rekord.`,
      indhold: heste(o),
    })),
    side('resultater/', () => ({
      titel: `Resultater og statistik | ${SITE.navn}`,
      beskrivelse: `Seneste resultater, kommende starter og sæsonstatistik for travtræner ${SITE.person}: ${o.saeson.sejre} sejre på ${o.saeson.starter} starter i ${o.saeson.aar}.`,
      indhold: resultater(o, data),
    })),
    side('kontakt/', () => ({
      titel: `Kontakt ${SITE.person} – ${SITE.navn}`,
      beskrivelse: `Kontakt ${SITE.navn}: telefon ${SITE.telefon} eller ${SITE.email}. Gården ligger på ${SITE.gade}, ${SITE.postnr} ${SITE.by}.`,
      indhold: kontakt(o),
    })),
    side('404.html', () => ({
      titel: `Siden findes ikke | ${SITE.navn}`,
      beskrivelse: `Siden findes ikke. Gå til forsiden for ${SITE.navn} – travtræner ${SITE.person}.`,
      noindex: true,
      indhold: ikkeFundet(),
    })),
  ];
}
