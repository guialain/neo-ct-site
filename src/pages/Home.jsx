// src/pages/Home.jsx
import React, { useRef, useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import PartnersCarousel from "../components/PartnersCarousel";

// Mini-carousel local pour une carte (aucune dépendance)
function MiniCarousel({ items = [] }) {
  const trackRef = useRef(null);
  const [i, setI] = useState(0);
  const count = items.length;

  const go = (idx) => {
    if (!trackRef.current || !count) return;
    const n = ((idx % count) + count) % count;
    setI(n);
    trackRef.current.children[n]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };
  const prev = () => go(i - 1);
  const next = () => go(i + 1);

  // clavier (← →)
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  if (!count) return null;

  return (
    <div
      className="group relative"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="Galerie"
    >
      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-8
                   [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{ scrollbarWidth: "none" }}
      >
        {/* masque scrollbar WebKit */}
        <style>{`.group div::-webkit-scrollbar{ display:none; }`}</style>

        {items.map((m, idx) => (
          <div key={idx} className="snap-center shrink-0 w-full">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
              {m.type === "image" ? (
                <img
                  src={m.src}
                  alt={m.alt || `Media ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <video
                  src={m.src}
                  poster={m.poster}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Précédent"
            className="opacity-0 group-hover:opacity-100 transition-opacity
                       absolute left-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center
                       rounded-full bg-white shadow ring-1 ring-slate-200"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Suivant"
            className="opacity-0 group-hover:opacity-100 transition-opacity
                       absolute right-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center
                       rounded-full bg-white shadow ring-1 ring-slate-200"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}


export default function Home() {
  // Médias du héros (dans /public/media/hero/)
  const MEDIA = [
    { type: "image", src: "/media/hero/equipe-neoct.jpg", alt: "Équipe NEO CT" },
    { type: "video", src: "/media/hero/coulage-dalle-perles.mp4", poster: "/media/hero/coulage-dalle-perles.jpg", alt: "Dalle Villa Perles" },
    { type: "image", src: "/media/hero/facade-perles.jpg", alt: "Facade Villa Perles" },
    { type: "video", src: "/media/hero/carrelage-perles.mp4", poster: "/media/hero/carrelage-perles.jpg", alt: "Carrelage Villa Perles" },
    { type: "video", src: "/media/hero/peinture-pantigre-perles.mp4", poster: "/media/hero/peinture-pantigre-perles.jpg", alt: "Peinture Villa Perles" },
{ type: "video",  src: "/media/hero/chantier-villas-boreffet.mp4", poster: "/media/hero/chantier-villas-borefflet.jpg", alt: "Villas Boreffet"},
    { type: "image", src: "/media/hero/dalle-boreflet.jpg", alt: "Dalle R+3 Boreflet" },
  ];

// 4 catégories avec plusieurs médias chacune (mets tes fichiers dans /public/media/sections/...)
const CATEGORIES = [
  {
    key: "conception",
    title: "Conception",
    items: [
      { type: "image", src: "/media/sections/conception/plan-1.jpg", alt: "Plan d'exécution" },
      { type: "image", src: "/media/sections/conception/maquette-1.jpg", alt: "Maquette" },
      { type: "video", src: "/media/sections/conception/reunion_720p.mp4", poster: "/media/sections/conception/reunion.jpg", alt: "Réunion de conception" },
    ],
  },
  {
    key: "gros-oeuvre",
    title: "Gros œuvre",
    items: [
      { type: "image", src: "/media/sections/gros-oeuvre/terrassement.jpg", alt: "Terrassement" },
      { type: "image", src: "/media/sections/gros-oeuvre/banches.jpg", alt: "Banches" },
      { type: "video", src: "/media/sections/gros-oeuvre/coulage_720p.mp4", poster: "/media/sections/gros-oeuvre/coulage.jpg", alt: "Coulage" },
    ],
  },
  {
    key: "second-oeuvre",
    title: "Second œuvre",
    items: [
      { type: "image", src: "/media/sections/second-oeuvre/cloisons.jpg", alt: "Cloisons" },
      { type: "image", src: "/media/sections/second-oeuvre/electricite.jpg", alt: "Électricité" },
      { type: "video", src: "/media/sections/second-oeuvre/plomberie_720p.mp4", poster: "/media/sections/second-oeuvre/plomberie.jpg", alt: "Plomberie" },
    ],
  },
  {
    key: "finitions",
    title: "Finitions",
    items: [
      { type: "image", src: "/media/sections/finitions/peinture.jpg", alt: "Peinture" },
      { type: "image", src: "/media/sections/finitions/sols.jpg", alt: "Revêtements de sols" },
      { type: "video", src: "/media/sections/finitions/livraison_720p.mp4", poster: "/media/sections/finitions/livraison.jpg", alt: "Livraison" },
    ],
  },
];



    return (
    <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      {/* Héro */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14 grid gap-8 md:grid-cols-12 items-center">
        {/* Texte gauche */}
        <div className="md:col-span-5 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Neo Construction & Travaux
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Exigence, sécurité, résultat.
          </h1>
          <p className="mt-3 text-slate-600">
            Du plan à la remise des clés : résidentiel, tertiaire et industriel, réalisés dans les règles de l’art.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Qualité</span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Délais</span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Sécurité</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800"
            >
              Demander un devis
            </a>
            <a
              href="/realisations"
              className="px-4 py-2 rounded-lg border border-slate-300 font-medium hover:bg-slate-100"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>

        {/* Carousel droite */}
        <div className="md:col-span-7 lg:col-span-8">
          <HeroCarousel items={MEDIA} autoPlay={true} interval={5000} />
        </div>
      </section>

      {/* Bande de confiance */}
      <section className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-8 grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-slate-900 font-semibold">Sécurité & conformité</h3>
            <p className="text-sm text-slate-600 mt-1">
              Procédures HSE intégrées, contrôle qualité et réception sans surprise.
            </p>
          </div>
          <div>
            <h3 className="text-slate-900 font-semibold">Maîtrise des coûts</h3>
            <p className="text-sm text-slate-600 mt-1">
              Chiffrages transparents, suivi budgétaire et optimisation des achats.
            </p>
          </div>
          <div>
            <h3 className="text-slate-900 font-semibold">Respect des délais</h3>
            <p className="text-sm text-slate-600 mt-1">
              Planning réaliste, coordination multi-lots et pilotage terrain.
            </p>
          </div>
        </div>
      </section>


{/* 4 cases en carrousel (Conception, Gros œuvre, Second œuvre, Finitions) */}
<section className="mx-auto max-w-7xl px-4 py-10">
  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">En images</h2>
  <p className="mt-2 text-slate-600">Quelques vues de nos chantiers et finitions.</p>

  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {CATEGORIES.map((cat) => (
      <article key={cat.key} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold text-slate-900">{cat.title}</h3>
        <MiniCarousel items={cat.items} />
      </article>
    ))}
  </div>
</section>


      {/* Partenaires (carrousel auto) */}
      <PartnersCarousel
        title="Ils nous font confiance"
        subtitle="Un aperçu de nos partenaires — défilement automatique."
      />

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Parlons de votre projet</h3>
            <p className="text-sm/6 text-white/80 mt-1">
              Envoyez vos plans ou votre idée : nous vous répondons rapidement.
            </p>
          </div>
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
