// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PartnersCarousel from "../components/PartnersCarousel";

export default function Home() {
  // 7 médias (images/vidéos) — adapte les chemins à ce que tu as dans /public/media/hero/
  const MEDIA = [
    { type: "image", src: "/media/hero/equipe-neoct.jpg", alt: "Équipe NEO CT" },
    { type: "video", src: "/media/hero/chantier-1_720p.mp4", poster: "/media/hero/chantier-1.jpg", alt: "Coulage sur chantier" },
    { type: "image", src: "/media/hero/facade-perles-1.jpg", alt: "Façade Villa Perles" },
    { type: "image", src: "/media/hero/site-equipement.jpg", alt: "Équipements de chantier" },
    { type: "video", src: "/media/hero/inspection_720p.mp4", poster: "/media/hero/inspection.jpg", alt: "Inspection" },
    { type: "image", src: "/media/hero/equipe-chantier-2.jpg", alt: "Équipe sur site" },
    { type: "image", src: "/media/hero/finition-interieur.jpg", alt: "Finitions intérieures" },
  ];

  return (
    <main className="bg-white">
      {/* Héros : texte + carousel */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14 grid gap-8 md:grid-cols-12 items-center">
        {/* Colonne texte */}
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
            <a href="/contact" className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
              Demander un devis
            </a>
            <a href="/realisations" className="px-4 py-2 rounded-lg border border-slate-300 font-medium hover:bg-slate-100">
              Voir nos réalisations
            </a>
          </div>
        </div>

        {/* Colonne carousel */}
        <div className="md:col-span-7 lg:col-span-8">
          <HeroCarousel items={MEDIA} autoPlay={true} interval={5000} />
        </div>
      </section>

      {/* Bande de confiance */}
      <section className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-8 grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-slate-900 font-semibold">Sécurité & conformité</h3>
            <p className="text-sm text-slate-600 mt-1">Procédures HSE intégrées, contrôle qualité et réception sans surprise.</p>
          </div>
          <div>
            <h3 className="text-slate-900 font-semibold">Maîtrise des coûts</h3>
            <p className="text-sm text-slate-600 mt-1">Chiffrages transparents, suivi budgétaire et optimisation des achats.</p>
          </div>
          <div>
            <h3 className="text-slate-900 font-semibold">Respect des délais</h3>
            <p className="text-sm text-slate-600 mt-1">Planning réaliste, coordination multi-lots et pilotage terrain.</p>
          </div>
        </div>
      </section>

      {/* Partenaires (carrousel auto depuis src/components/PartnersCarousel.jsx) */}
      <PartnersCarousel
        title="Ils nous font confiance"
        subtitle="Un aperçu de nos partenaires — défilement automatique."
      />

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Parlons de votre projet</h3>
            <p className="text-sm/6 text-white/80 mt-1">Envoyez vos plans ou votre idée : nous vous répondons rapidement.</p>
          </div>
          <a href="/contact" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100">
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
