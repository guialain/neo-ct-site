// src/pages/Services.jsx
import React, { useCallback } from "react";
import { Helmet } from "react-helmet-async";

export default function Services() {
  // — Identité / URLs (cohérents avec Home & Contact)
  const brand = "NEO Construction & Travaux";
  const site = "https://www.neoct.ci";
  const canonical = `${site}/services`;
  const ogImage = `${site}/og/services-1200x630.jpg`; // (mets l’image dans /public/og/ si tu veux)

  // — WhatsApp (même logique que Home/Contact)
  const phoneWhats = "2250576428643";
  const openWhatsApp = useCallback((e) => {
    e.preventDefault();
    const msg =
      "Bonjour NEO CT 👋, j’aimerais en savoir plus sur vos services (clé en main, rénovation, fourniture & pose).";
    const appUrl = `whatsapp://send?phone=${phoneWhats}&text=${encodeURIComponent(msg)}`;
    const webUrl = `https://wa.me/${phoneWhats}?text=${encodeURIComponent(msg)}`;
    const t0 = Date.now();
    window.location.href = appUrl;
    setTimeout(() => {
      if (Date.now() - t0 < 1200) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
    }, 800);
  }, []);

  // — JSON-LD : 3 services + ItemList (Google)
  const services = [
    {
      name: "Construction clé en main",
      description:
        "Études d’exécution, gros œuvre, second œuvre, étanchéité & couverture, VRD, coordination et réception.",
    },
    {
      name: "Fourniture & Pose",
      description:
        "Carrelage, menuiseries, sanitaires/plomberie, électricité, peinture et finitions.",
    },
    {
      name: "Rénovation | Réhabilitation",
      description:
        "Remise à niveau structurelle et technique, réaménagement, mises aux normes, finitions complètes.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services de construction",
    itemListElement: services.map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.name,
      description: s.description,
      provider: {
        "@type": "Organization",
        name: brand,
        url: site,
      },
      areaServed: "CI",
    })),
  };

  return (
    <section id="services" className="bg-white">
      {/* SEO / Partage */}
      <Helmet prioritizeSeoTags>
        <html lang="fr" />
        <title>Services — {brand}</title>
        <meta
          name="description"
          content="Études, exécution, finitions, rénovation, fourniture & pose — NEO CT pilote vos chantiers de A à Z."
        />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={brand} />
        <meta property="og:title" content={`Services — ${brand}`} />
        <meta
          property="og:description"
          content="Un interlocuteur unique, du plan à la livraison. Clé en main, rénovation, fourniture & pose."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Services — ${brand}`} />
        <meta
          name="twitter:description"
          content="Études, exécution, finitions, rénovation, fourniture & pose."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-10 sm:py-14 md:py-16 lg:py-20">
        {/* Header avec H1 pour le SEO */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-700">
            Nos services
          </p>
          <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            Un interlocuteur unique, du plan à la livraison
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Nous pilotons votre chantier de A à Z : études, exécution, finitions,
            coordination des corps d'état et réception.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 1) Construction clé en main */}
          <article className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-3 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-semibold text-sm sm:text-base">
              1
            </div>
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">
              Construction clé en main
            </h2>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-700">
              <li>Études d’exécution, implantation et terrassement</li>
              <li>
                <span className="font-medium">Gros œuvre</span> : fondations,
                voiles/dalles BA, murs porteurs
              </li>
              <li>
                <span className="font-medium">Second œuvre</span> : maçonnerie,
                cloisons, chapes, escaliers
              </li>
              <li>
                <span className="font-medium">Étanchéité & couverture</span> :
                toitures, terrasses, évacuations
              </li>
              <li>
                <span className="font-medium">VRD</span> : réseaux, drainage,
                voiries/parkings
              </li>
              <li>Coordination des corps d’état, réception de chantier</li>
            </ul>
          </article>

          {/* 2) Fourniture & Pose */}
          <article className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-3 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-semibold text-sm sm:text-base">
              2
            </div>
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">
              Fourniture &amp; Pose
            </h2>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-700">
              <li>Carrelage/sols (intérieur/extérieur), faïence, pierres</li>
              <li>Menuiseries (bois, alu, PVC), portes, baies, verrières</li>
              <li>
                Sanitaires &amp; plomberie (distribution, évacuation,
                chauffe-eau)
              </li>
              <li>Électricité (tableaux, câblage, luminaires, conformité)</li>
              <li>Peinture, enduits décoratifs, plafonds, staff</li>
            </ul>
          </article>

          {/* 3) Rénovation | Réhabilitation */}
          <article className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-3 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-semibold text-sm sm:text-base">
              3
            </div>
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">
              Rénovation | Réhabilitation
            </h2>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-700">
              <li>Remise à niveau structurelle et technique</li>
              <li>Réaménagement intérieur, isolation, confort thermique</li>
              <li>Mises aux normes, diagnostics, finitions complètes</li>
            </ul>
          </article>
        </div>

{/* Options — Responsive grid */}
<div className="mt-8 sm:mt-10 md:mt-12">
  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">
    Besoins Optionnels
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
    {/* Case 1 */}
    <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 flex items-center hover:shadow-sm transition-shadow">
      <p className="text-sm sm:text-base text-slate-700 m-0">Design &amp; plans (APS/APD) en partenariat BE/architectes</p>
    </div>

    {/* Case 2 */}
    <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 flex items-center hover:shadow-sm transition-shadow">
      <p className="text-sm sm:text-base text-slate-700 m-0">Charpente métallique et structures spécifiques</p>
    </div>

    {/* Case 3 */}
    <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 flex items-center hover:shadow-sm transition-shadow">
      <p className="text-sm sm:text-base text-slate-700 m-0">Clôtures / Portails – réalisation et automatisme</p>
    </div>
  </div>
</div>

        {/* Process (timeline simple) */}
<div className="mt-8 sm:mt-10 md:mt-12">
  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
    Process en 5 étapes
  </h3>

  {/* Grille responsive */}
  <ol className="mt-4 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5 items-start">
    {[
      { t: "Prise de brief & visite", d: "Compréhension du besoin" },
      { t: "Avant-Projet & chiffrage", d: "Devis clair et délais associés" },
      { t: "Lancement & préparation", d: "Planning détaillé, approvisionnement" },
      { t: "Exécution & contrôle", d: "Suivi qualité, comptes-rendus" },
      { t: "Réception & garanties", d: "Mise en service, levée de réserves" },
    ].map((step, i) => (
      <li
        key={i}
        className="h-full rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex items-start gap-2 sm:gap-3"
      >
        <span className="mt-0.5 inline-flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold">
          {i + 1}
        </span>
        <div>
          <div className="font-medium text-slate-900 text-sm sm:text-base">{step.t}</div>
          <div className="text-slate-600 text-xs sm:text-sm mt-0.5">{step.d}</div>
        </div>
      </li>
    ))}
  </ol>
</div>


        {/* CTA final */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2 sm:gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 sm:py-2 text-sm sm:text-base font-medium text-slate-800 hover:bg-slate-50 transition"
            aria-label="Aller à la page Contact pour demander un devis"
          >
            📄 Demander un devis
          </a>
          <a
            href={`https://wa.me/${phoneWhats}`}
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 sm:py-2 text-sm sm:text-base font-semibold text-white hover:bg-emerald-700 transition"
            aria-label="Discuter sur WhatsApp"
          >
            💬 Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
