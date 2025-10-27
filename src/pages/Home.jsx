// src/pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import HeroCarousel from "../components/HeroCarousel";
import PartnersCarousel from "../components/PartnersCarousel";

// Médias du héros
const MEDIA = [
  { type: "image", src: "/media/hero/equipe-neoct.jpg", alt: "Équipe NEO CT" },
  { type: "image", src: "/media/hero/villas-boreflet.jpg", alt: "villas boreflet" },
  { type: "image", src: "/media/hero/facade3D-perles.jpg", alt: "facade3D Perles" },
  { type: "video", src: "/media/hero/coulage-dalle-perles.mp4", poster: "/media/hero/coulage-dalle-perles.jpg", alt: "Dalle Villa Perles" },
  { type: "image", src: "/media/hero/facade-perles.jpg", alt: "Facade Villa Perles" },
  { type: "image", src: "/media/hero/engin-chantier.jpg", alt: "Pompe Beton" },
  { type: "image", src: "/media/hero/dalle-boreflet.jpg", alt: "Dalle R+3 Boreflet" },
];

export default function Home() {
  // --- SEO (URL / images OG) ---
  const site = "https://www.neoct.ci"; // choisis www OU apex, pas les deux
  const url = `${site}/`;
  const og = `${site}/og/home-1200x630.jpg`; // image 1200x630

  // --- WhatsApp ---
  const phone = "2250576428643";
  const msgMobile =
    "Bonjour NEO CT 👋, je souhaite échanger à propos de mon projet (budget, délais, localisation).";
  const appUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(msgMobile)}`;
  const webUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msgMobile)}`;

  const openWhatsApp = (e) => {
    e.preventDefault();
    const t0 = Date.now();
    window.location.href = appUrl; // tente d'ouvrir l'app
    setTimeout(() => {
      if (Date.now() - t0 < 1200) {
        window.open(webUrl, "_blank", "noopener,noreferrer"); // fallback web
      }
    }, 800);
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="fr" />
        <title>NEO Construction & Travaux — Entreprise BTP à Abidjan</title>
        <meta
          name="description"
          content="NEO CT conçoit et réalise des ouvrages résidentiels, tertiaires et industriels en Côte d’Ivoire. Qualité, délais, sécurité — engagement chantier."
        />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="NEO Construction & Travaux" />
        <meta property="og:title" content="NEO Construction & Travaux — Entreprise BTP à Abidjan" />
        <meta property="og:description" content="Études, exécution, finitions — clé en main en Côte d’Ivoire." />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={og} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NEO Construction & Travaux — BTP" />
        <meta name="twitter:description" content="Qualité, délais, sécurité — engagement chantier." />
        <meta name="twitter:image" content={og} />

        {/* JSON-LD (Organization + Website) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ConstructionCompany",
            name: "NEO Construction & Travaux",
            url: site,
            logo: `${site}/logo-neoct.jpg`,
            image: `${site}/hero-neoct.jpg`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Cocody, 7e Tranche - Les Oscars",
              addressLocality: "Abidjan",
              addressCountry: "CI",
            },
            telephone: "+225",
            areaServed: "CI",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: site,
            name: "NEO Construction & Travaux",
            potentialAction: {
              "@type": "SearchAction",
              target: `${site}/realisations?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>

      <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-white overflow-x-hidden">
        {/* ===== HÉRO ENCADRÉ ===== */}
        <section className="mx-auto max-w-7xl px-3 sm:px-4 pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-12 w-full">
          {/* Carte */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/70 w-full">
            <div className="grid items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 md:grid-cols-12 p-3 sm:p-4 md:p-6 lg:p-8 w-full">
              {/* TEXTE (6/12) */}
              <div className="order-2 md:order-1 md:col-span-6 w-full min-w-0">
                <p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide text-blue-700 break-words">
                  NEO CONSTRUCTION & TRAVAUX
                </p>

                <h1 className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight break-words">
                  Vos projets méritent le meilleur.
                  <br className="hidden sm:block" />
                  <span className="block mt-1">Construisons ensemble vos projets</span>
                </h1>

                <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-[0.95rem] md:text-base text-slate-700 leading-relaxed break-words">
                  Chez <strong>NEO CONSTRUCTION ET TRAVAUX</strong>, chaque projet est une histoire de passion,
                  de précision et d'engagement. De la villa moderne au bâtiment industriel,
                  nous transformons vos idées en réalisations solides, élégantes et durables.
                  <span className="hidden sm:inline"> Innovation, Qualité et Confiance sont les fondations de notre savoir-faire.</span>
                  <br className="hidden md:block" />
                  <span className="text-xs sm:text-sm text-slate-600 mt-2 block break-words">
                    📍 Cocody II-Plateaux, 7ᵉ Tranche – Les Oscars
                  </span>
                </p>

                <div className="mt-3 sm:mt-4 md:mt-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm w-full">
                  {["Qualité", "Délais", "Sécurité"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-white px-2.5 sm:px-3 py-1 shadow-sm ring-1 ring-slate-200 font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-3 sm:mt-4 md:mt-5 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 w-full">
                  <a
                    href={webUrl}
                    onClick={openWhatsApp}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 sm:py-2 text-sm sm:text-base text-white font-semibold
                               hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40
                               active:translate-y-[1px] transition whitespace-nowrap"
                  >
                    <span aria-hidden="true">💬</span>
                    <span>Devis WhatsApp</span>
                  </a>

                  <a
                    href="/realisations"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-4 py-2.5 sm:py-2 text-sm sm:text-base text-white font-semibold
                               hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/40
                               active:translate-y-[1px] transition whitespace-nowrap"
                  >
                    <span>Nos Réalisations</span>
                  </a>
                </div>
              </div>

              {/* MEDIA (6/12) */}
              <div className="order-1 md:order-2 md:col-span-6 w-full min-w-0">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200/60 h-[35vh] sm:h-[44vh] md:h-auto w-full">
                  <div className="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_video]:h-full [&_video]:w-full [&_video]:object-cover">
                    <HeroCarousel items={MEDIA} autoPlay interval={5000} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARTENAIRES ===== */}
        <section className="mx-auto max-w-7xl px-3 sm:px-4 pt-2 pb-1 w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 text-center mb-2 sm:mb-4 break-words">
            Ils nous font confiance
          </h2>
        </section>
        <div className="w-full overflow-hidden">
          <PartnersCarousel title=" " />
        </div>
      </main>
    </>
  );
}
