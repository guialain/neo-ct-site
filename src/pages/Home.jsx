// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PartnersCarousel from "../components/PartnersCarousel";

export default function Home() {
  // Médias du héros (dans /public/media/hero/)
  const MEDIA = [
    { type: "image", src: "/media/hero/equipe-neoct.jpg", alt: "Équipe NEO CT" },
    { type: "video", src: "/media/hero/coulage-dalle-perles.mp4", poster: "/media/hero/coulage-dalle-perles.jpg", alt: "Dalle Villa Perles" },
    { type: "image", src: "/media/hero/facade-perles.jpg", alt: "Facade Villa Perles" },
    { type: "video", src: "/media/hero/carrelage-perles.mp4", poster: "/media/hero/carrelage-perles.jpg", alt: "Carrelage Villa Perles" },
    { type: "video", src: "/media/hero/peinture-pantigre-perles.mp4", poster: "/media/hero/peinture-pantigre-perles.jpg", alt: "Peinture Villa Perles" },
    { type: "video", src: "/media/hero/chantier-villas-boreffet.mp4", poster: "/media/hero/chantier-villas-borefflet.jpg", alt: "Villas Boreffet" },
    { type: "image", src: "/media/hero/dalle-boreflet.jpg", alt: "Dalle R+3 Boreflet" },
  ];

  return (
    <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      {/* Héro */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14 grid gap-8 md:grid-cols-12 items-center">
        {/* Texte gauche */}
        <div className="md:col-span-5 lg:col-span-4">
          <p className="text-xl font-extrabold uppercase tracking-wide text-blue-700">
            Neo Construction & Travaux
          </p>
          <h1 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
            Vos projets méritent l’excellence. Construisons ensemble vos ambitions
          </h1>
          <p className="mt-3 text-slate-600">
            Chez NEO CONSTRUCTION ET TRAVAUX, chaque projet est une histoire de passion, de précision et d’engagement.
            De la villa moderne au bâtiment industriel, nous transformons vos idées en réalisations solides, élégantes et
            durables. Innovation, Qualité et Confiance sont les fondations de notre savoir-faire. Avec NEO CT, votre vision
            prend forme, brique après brique, avec exigence et fierté.
            <br />
            Cocody II-Plateaux, 7ᵉ Tranche – Les Oscars
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Qualité</span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Délais</span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Sécurité</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
              Demander un devis
            </a>
            <a href="/realisations" className="px-4 py-2 rounded-lg border border-slate-300 font-medium hover:bg-slate-100">
              Voir nos réalisations
            </a>
          </div>
        </div>

        {/* Carousel droite */}
        <div className="md:col-span-6 lg:col-span-7">
          <HeroCarousel items={MEDIA} autoPlay interval={5000} />
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

      {/* Partenaires (carrousel auto, sans sous-titre) */}
      <PartnersCarousel title="Ils nous font confiance" />

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Parlons de votre projet</h3>
            <p className="text-sm/6 text-white/80 mt-1">
              Envoyez vos plans ou votre idée : nous vous répondons rapidement.
            </p>
          </div>
          <a href="/contact" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100">
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
