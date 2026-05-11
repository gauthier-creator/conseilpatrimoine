// Faux numéro de démo pour Conseil Patrimoine
// Édition zéro affichée sur la home — montre concrètement le format reçu chaque matin.

export const META = {
  edition: "n°127",
  publishedAt: "Vendredi 9 mai 2026 — 7h02",
  readTime: "5 min",
  subscribers: 1247,
  openRate: 52,
};

export type Brief = {
  tag: string;
  tagTone: "blue" | "mint" | "accent" | "dark";
  title: string;
  body: string;
  source: string;
};

export const BRIEFS: Brief[] = [
  {
    tag: "Réglementaire",
    tagTone: "blue",
    title: "Le PER fait sa mue : la sortie en capital sera plafonnée dès janvier 2027",
    body:
      "Bercy a confirmé hier le projet de décret qui plafonne la sortie en capital du PER à 200 000 € par an au-dessus d'un PFU à 30%. Au-delà, fiscalité au barème. Pour vos clients qui ont capitalisé pendant 15 ans, l'arbitrage entrée/sortie devient une vraie ligne de conseil — surtout pour les dirigeants qui visaient 800k+.",
    source: "PLF 2027, projet d'amendement n°II-CF-417",
  },
  {
    tag: "Marchés",
    tagTone: "accent",
    title: "Les SCPI européennes affichent +3,8% YTD pendant que la Pierre Papier France stagne",
    body:
      "Les SCPI à dominante européenne (Corum, Iroko, Remake) gardent leur cap de collecte avec un TDVM moyen de 6,4% sur le T1. Côté France, la décollecte continue : -2,1 Md€ sur le trimestre selon l'ASPIM. Le grand écart se creuse — et certains de vos clients voient leur valeur de part baisser pour la première fois depuis 2019.",
    source: "ASPIM, baromètre T1 2026",
  },
  {
    tag: "Mouvement",
    tagTone: "mint",
    title: "Premium Patrimoine rachète Cap Conseil Lyon — 8e opération du quinquennat",
    body:
      "Annoncé hier soir : Premium Patrimoine met la main sur Cap Conseil (12 conseillers, 380 M€ d'encours). Multiple non communiqué mais on parle d'un closing autour de 2,1× PNB selon une source proche du dossier. La consolidation s'accélère sur l'Auvergne-Rhône-Alpes — 3 deals depuis février.",
    source: "Profession CGP, exclu de la rédaction",
  },
];

export type DeepDive = {
  hook: string;
  title: string;
  paragraphs: string[];
  takeaway: string;
};

export const DEEP_DIVE: DeepDive = {
  hook: "Pourquoi les Family Offices français ne font plus confiance aux fonds evergreen",
  title: "Le grand divorce entre les FO et la promesse evergreen",
  paragraphs: [
    "Pendant trois ans, les fonds evergreen ont été le placement chouchou : liquidité trimestrielle, rendement 8-9%, accès à du private equity sans la lock-up de 10 ans. Les FO français ont collé entre 8 et 18% de leurs allocations dessus. C'était trop beau.",
    "Depuis février, trois véhicules majeurs ont activé leurs gates. La porosité avec les marchés cotés se voit : NAV qui décrochent, frais de structure révélés à 2,8%, et un effet domino sur la collecte qui casse le modèle. Quand 30% des LP veulent sortir et que la jambe illiquide tient 60% du portefeuille, on bloque les rachats. CQFD.",
    "Les FO qu'on a sondés (n=22, en off) annoncent désormais soit un downgrade vers du PE classique fermé, soit un retour à du coté + dette privée court terme. La leçon pour vos clients dirigeants : vérifier la cohérence durée passif / durée actif AVANT de regarder le yield affiché.",
  ],
  takeaway:
    "À retenir : si un client vous demande d'allouer plus de 10% de son AUM en evergreen, exigez le détail du portefeuille sous-jacent et la politique de gating sur les 5 dernières années. Pas de transparence = pas d'allocation.",
};

export const DIFFERENCIATEURS = [
  {
    eyebrow: "01",
    title: "100% indépendant",
    body:
      "Pas de société de gestion actionnaire. Pas d'asset manager au capital. Aucun publi-rédactionnel. La rédaction écrit, point.",
  },
  {
    eyebrow: "02",
    title: "Dense, pas long",
    body:
      "Format 5 minutes chrono, lisible debout dans le métro. 3 brèves verticales + 1 angle data. On coupe ce qui sert pas à votre conseil de demain.",
  },
  {
    eyebrow: "03",
    title: "Bonus audio Emilie",
    body:
      "Chaque vendredi, un épisode audio de 4 min — la rédactrice en chef décrypte un sujet en voiture, en jogging, en attendant un client.",
  },
];

export const TRUST_LOGOS = [
  "BSI Conseil",
  "Atlas Patrimoine",
  "Cèdres Gestion",
  "Family Office du Léman",
  "Verso Wealth",
  "Mistral Conseil",
  "Pyramides Asset",
  "Lacroix & Associés",
];
