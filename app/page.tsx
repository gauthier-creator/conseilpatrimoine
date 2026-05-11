import { AudioPlayer } from "@/components/AudioPlayer";
import { EmailForm } from "@/components/EmailForm";
import { BRIEFS, DEEP_DIVE, DIFFERENCIATEURS, META, TRUST_LOGOS } from "@/lib/data";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ─────────── TOP BAR ─────────── */}
      <div className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-2.5 flex items-center justify-between text-[11px] font-mono text-[var(--color-ink-mute)]">
          <span className="pulse-dot">Édition {META.edition} envoyée ce matin</span>
          <span className="hidden md:inline">{META.subscribers.toLocaleString("fr-FR")} CGP inscrits · open rate {META.openRate}%</span>
          <span className="hidden sm:inline">Lun → Ven · 7h00</span>
        </div>
      </div>

      {/* ─────────── MASTHEAD ─────────── */}
      <header className="border-b border-[var(--color-rule)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-5 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2.5">
            <span className="display-md text-2xl tracking-tight">Conseil</span>
            <span className="display-md text-2xl text-[var(--color-accent)] tracking-tight">Patrimoine</span>
            <span className="hidden md:inline label ml-2 normal-case tracking-wide text-[10px]">.media</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#exemple" className="hover:text-[var(--color-accent)] transition-colors">L'édition d'aujourd'hui</a>
            <a href="#pourquoi" className="hover:text-[var(--color-accent)] transition-colors">Pourquoi nous</a>
            <a href="#methodo" className="hover:text-[var(--color-accent)] transition-colors">Méthodo</a>
          </nav>
          <a href="#cta" className="btn-primary text-sm py-2.5 px-4">S'inscrire</a>
        </div>
      </header>

      {/* ─────────── HERO ─────────── */}
      <section className="border-b border-[var(--color-rule)] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-24 relative">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="chip">Newsletter quotidienne</span>
                <span className="chip chip-blue">Pour CGP & Family Offices</span>
              </div>
              <h1 className="display-xxl text-[2.6rem] sm:text-6xl md:text-[5rem]">
                5 minutes pour <span className="underline-accent">comprendre</span> ce qui bouge en patrimoine,
                <span className="text-[var(--color-ink-mute)]"> chaque matin.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--color-ink-2)] max-w-2xl leading-relaxed">
                3 brèves chiffrées + 1 deep dive éditorial. Lu par <strong>{META.subscribers.toLocaleString("fr-FR")} conseillers</strong>{" "}
                à 7h précises, du lundi au vendredi. Aucun publi-rédactionnel. Aucun lien affilié. Juste l'info qui sert votre prochain rendez-vous.
              </p>

              <div id="cta" className="mt-9 max-w-xl">
                <EmailForm />
              </div>

              <div className="mt-8 flex items-center gap-5 text-sm text-[var(--color-ink-mute)]">
                <div className="flex -space-x-2">
                  {["#ff5b26", "#0f4c81", "#6fcf97", "#ffd84d"].map((c, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <span>
                  <strong className="text-[var(--color-ink)]">Open rate {META.openRate}%</strong>{" "}
                  vs 24% moyenne sectorielle — les CGP nous lisent vraiment.
                </span>
              </div>
            </div>

            {/* Side card — newsletter mockup peek */}
            <aside className="md:col-span-5">
              <div className="card p-5 sm:p-6 relative">
                <div className="absolute -top-3 -right-3 stamp">Édition zéro</div>
                <div className="flex items-center justify-between mb-4">
                  <p className="label">À : vous@cabinet.fr</p>
                  <p className="label">7:02</p>
                </div>
                <p className="display-md text-xl mb-2">
                  Le PER fait sa mue, evergreen sous tension, et un deal à 380 M€
                </p>
                <p className="text-sm text-[var(--color-ink-mute)] leading-relaxed mb-5">
                  Bonjour, c'est Emilie. Vendredi matin, on vous résume les 3 mouvements à connaître avant 9h, plus une analyse sur le grand divorce des Family Offices avec les fonds evergreen…
                </p>
                <div className="flex items-center justify-between border-t border-[var(--color-rule)] pt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-display text-xs font-bold">E</span>
                    <span className="text-sm font-medium">Emilie · Rédactrice en chef</span>
                  </div>
                  <span className="label">5 min</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─────────── MARQUEE / SOCIAL PROOF ─────────── */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-ink)] text-[var(--color-bg)] overflow-hidden">
        <div className="py-6 flex items-center gap-4">
          <span className="label text-[var(--color-accent)] pl-5 md:pl-8 shrink-0">Lu chez ↘</span>
          <div className="overflow-hidden flex-1">
            <div className="marquee-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
                <span key={i} className="display-md text-xl text-[var(--color-bg)]/70">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── DEMO NEWSLETTER ─────────── */}
      <section id="exemple" className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="label">L'édition d'aujourd'hui</span>
              <h2 className="display-xl text-3xl md:text-5xl mt-3 max-w-2xl">
                Voici ce que vous auriez lu <span className="marker-yellow">ce matin à 7h</span>.
              </h2>
            </div>
            <p className="md:max-w-sm text-sm text-[var(--color-ink-mute)] leading-relaxed">
              Format identique chaque jour ouvré : 3 brèves verticales (réglementaire, marchés, mouvement) puis un deep dive de 400 mots sur un angle qu'on n'a vu nulle part ailleurs.
            </p>
          </div>

          {/* Newsletter card */}
          <article className="card overflow-hidden">
            {/* Email header */}
            <div className="border-b border-[var(--color-rule)] bg-white px-6 md:px-10 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
              <div>
                <p className="font-display font-semibold">Conseil Patrimoine — Édition {META.edition}</p>
                <p className="text-[var(--color-ink-mute)]">{META.publishedAt}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="label">Lecture</span>
                <span className="font-mono text-xs">{META.readTime}</span>
              </div>
            </div>

            {/* Briefs */}
            <div className="px-6 md:px-10 py-10 md:py-14">
              <div className="mb-10 max-w-3xl">
                <p className="label mb-3 text-[var(--color-accent-deep)]">L'intro d'Emilie</p>
                <p className="text-base md:text-lg leading-relaxed text-[var(--color-ink-2)]">
                  Bonjour, c'est Emilie. Vendredi matin, on vous résume les 3 mouvements à connaître avant 9h, plus une analyse sur le grand divorce entre les Family Offices et les fonds evergreen — un sujet qu'on prépare depuis trois semaines en off avec une vingtaine de FO.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-14">
                {BRIEFS.map((b, i) => {
                  const chipClass =
                    b.tagTone === "blue" ? "chip chip-blue" :
                    b.tagTone === "mint" ? "chip chip-mint" :
                    b.tagTone === "dark" ? "chip chip-dark" :
                    "chip";
                  return (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className={chipClass}>{b.tag}</span>
                        <span className="font-mono text-xs text-[var(--color-ink-mute)]">0{i + 1}</span>
                      </div>
                      <h3 className="display-md text-xl mb-3 leading-snug">{b.title}</h3>
                      <p className="text-sm text-[var(--color-ink-2)] leading-relaxed mb-4 flex-1">{b.body}</p>
                      <p className="label text-[10px] border-t border-[var(--color-rule)] pt-3">↳ {b.source}</p>
                    </div>
                  );
                })}
              </div>

              {/* Deep dive */}
              <div className="border-t border-[var(--color-rule-strong)] pt-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="chip chip-dark">Deep Dive</span>
                  <span className="label">400 mots · 2 min</span>
                </div>
                <p className="label mb-2">{DEEP_DIVE.hook}</p>
                <h3 className="display-xl text-2xl md:text-4xl max-w-3xl mb-6 leading-tight">{DEEP_DIVE.title}</h3>
                <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                  <div className="md:col-span-7 space-y-4 text-[var(--color-ink-2)] leading-relaxed">
                    {DEEP_DIVE.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <aside className="md:col-span-5">
                    <div className="bg-[var(--color-bg)] border-l-2 border-[var(--color-accent)] p-5 rounded-r-md">
                      <p className="label mb-2 text-[var(--color-accent-deep)]">À utiliser en RDV</p>
                      <p className="text-base leading-relaxed">{DEEP_DIVE.takeaway}</p>
                    </div>
                    <div className="mt-6">
                      <AudioPlayer />
                    </div>
                  </aside>
                </div>
              </div>
            </div>

            {/* Email footer */}
            <div className="border-t border-[var(--color-rule)] bg-[var(--color-bg)] px-6 md:px-10 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono text-[var(--color-ink-mute)]">
              <span>Vous recevez cet email parce que vous êtes inscrit·e à Conseil Patrimoine</span>
              <span>Désinscription · Préférences · Contact</span>
            </div>
          </article>
        </div>
      </section>

      {/* ─────────── POURQUOI PAS UN AUTRE MEDIA ─────────── */}
      <section id="pourquoi" className="border-b border-[var(--color-rule)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-5">
              <span className="label">Pourquoi pas un autre média ?</span>
              <h2 className="display-xl text-3xl md:text-5xl mt-3">
                Trois choses qu'aucun autre média patrimoine ne fait.
              </h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 text-base md:text-lg text-[var(--color-ink-2)] leading-relaxed">
              On a regardé tout ce que vous lisez déjà — Profession CGP, Agefi Actifs, H24, Newsmanagers, les newsletters maison des sociétés de gestion. Voici notre angle, sans détour.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {DIFFERENCIATEURS.map((d) => (
              <div key={d.eyebrow} className="card p-7 md:p-8 hover:border-[var(--color-ink)] transition-colors">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="num text-5xl text-[var(--color-accent)]">{d.eyebrow}</span>
                  <span className="w-10 h-px bg-[var(--color-ink)] mt-3" />
                </div>
                <h3 className="display-md text-2xl mb-3">{d.title}</h3>
                <p className="text-[var(--color-ink-2)] leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA INTERMÉDIAIRE ─────────── */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-accent)] text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="label text-white/80 mb-4">Demain matin · 7h00</p>
            <h2 className="display-xl text-3xl md:text-5xl">
              Inscrivez-vous ce soir,<br />lisez votre première édition demain.
            </h2>
            <p className="mt-5 text-white/80 max-w-xl">
              Aucun engagement. Si l'édition n°2 ne vous parle pas, vous vous désinscrivez en un clic depuis le bas de l'email.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl p-2">
              <EmailForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── METHODO + EQUIPE ─────────── */}
      <section id="methodo" className="border-b border-[var(--color-rule)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="label">Méthodologie & équipe</span>
            <h2 className="display-xl text-3xl md:text-5xl mt-3">
              Comment on fabrique le brief.
            </h2>
            <div className="mt-8 card p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-display text-xl font-bold">E</div>
                <div>
                  <p className="display-md text-lg">Emilie</p>
                  <p className="text-sm text-[var(--color-ink-mute)]">Rédactrice en chef</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[var(--color-ink-2)]">
                Ex-banquière privée passée par deux maisons de la Place, devenue journaliste indépendante. Elle pilote la rédaction, signe l'édito quotidien et le bonus audio du vendredi.
              </p>
              <div className="mt-5 pt-5 border-t border-[var(--color-rule)]">
                <p className="label mb-2">Comité éditorial</p>
                <p className="text-sm text-[var(--color-ink-mute)] leading-relaxed">
                  Sept contributeurs anonymes — CGP en exercice, family officers, juristes patrimoniaux — qui briefent la rédaction off-the-record et valident les angles. L'anonymat protège leur droit de nous parler franchement.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-7">
            <Method
              num="01"
              title="Sourcing"
              body="Veille quotidienne croisée sur 14 sources : AMF, ACPR, Bercy, ASPIM, France Invest, registres pro (CNCGP / ANACOFI / CNCEF), presse spécialisée FR & CH, déclarations AT1, dépôts FCPR. On cite toujours la source primaire."
            />
            <Method
              num="02"
              title="Filtrage"
              body="On garde uniquement ce qui change votre prochain RDV client. Les communiqués de gestion d'AM partent à la corbeille. Les launches de produit aussi. Si un sujet ne se traduit pas en conseil concret, on l'écarte."
            />
            <Method
              num="03"
              title="Écriture"
              body="Format imposé : titre = action, brief = 80 mots, deep dive = 400 mots avec un takeaway utilisable verbatim en RDV. Tout passe par une relecture comité avant 6h30."
            />
            <Method
              num="04"
              title="Indépendance"
              body="Aucune société de gestion au capital. Aucun lien d'affiliation. Aucun publi-rédactionnel — jamais. Le modèle se construit sur l'inscription, pas sur la pub. Si un jour ça change, vous serez les premiers prévenus."
            />
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <div className="max-w-[900px] mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <span className="label">Plus rien à lire ?</span>
          <h2 className="display-xxl text-4xl md:text-7xl mt-4">
            <span className="marker-yellow">Inscrivez-vous.</span>
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-2)] max-w-xl mx-auto">
            Une newsletter par jour ouvré. 5 minutes. C'est tout.
          </p>
          <div className="mt-9 max-w-lg mx-auto">
            <EmailForm />
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-2">
                <span className="display-md text-2xl">Conseil</span>
                <span className="display-md text-2xl text-[var(--color-accent)]">Patrimoine</span>
              </div>
              <p className="mt-3 text-sm text-[var(--color-bg)]/60 max-w-sm leading-relaxed">
                La newsletter quotidienne lue par {META.subscribers.toLocaleString("fr-FR")} conseillers en patrimoine. Indépendante, dense, mobile-first.
              </p>
              <div className="mt-6 max-w-sm">
                <EmailForm variant="footer" />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="label text-[var(--color-bg)]/50 mb-3">Le brief</p>
                <ul className="space-y-2">
                  <li><a href="#exemple" className="hover:text-[var(--color-accent)]">Édition d'aujourd'hui</a></li>
                  <li><a href="#methodo" className="hover:text-[var(--color-accent)]">Méthodologie</a></li>
                  <li><a href="#" className="hover:text-[var(--color-accent)]">Archives</a></li>
                </ul>
              </div>
              <div>
                <p className="label text-[var(--color-bg)]/50 mb-3">Contact</p>
                <ul className="space-y-2">
                  <li><a href="mailto:emilie@conseilpatrimoine.media" className="hover:text-[var(--color-accent)]">Écrire à la rédaction</a></li>
                  <li><a href="mailto:tip@conseilpatrimoine.media" className="hover:text-[var(--color-accent)]">Donner un tuyau (off)</a></li>
                </ul>
              </div>
              <div>
                <p className="label text-[var(--color-bg)]/50 mb-3">Légal</p>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-[var(--color-accent)]">Mentions légales</a></li>
                  <li><a href="#" className="hover:text-[var(--color-accent)]">Confidentialité</a></li>
                  <li><a href="#" className="hover:text-[var(--color-accent)]">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:justify-between gap-2 text-xs font-mono text-[var(--color-bg)]/40">
            <span>© {new Date().getFullYear()} Conseil Patrimoine · Édition quotidienne lundi-vendredi 7h</span>
            <span>Made in Paris · Lu en France, Belgique, Suisse, Luxembourg</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Method({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="grid grid-cols-12 gap-5 items-start border-t border-[var(--color-rule)] pt-7">
      <span className="col-span-2 num text-3xl text-[var(--color-ink-mute)]">{num}</span>
      <div className="col-span-10">
        <h3 className="display-md text-xl mb-2">{title}</h3>
        <p className="text-[var(--color-ink-2)] leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
