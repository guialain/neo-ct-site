// src/pages/About.jsx
import React from "react";
import PartnersCarousel from "../components/PartnersCarousel";

export default function About() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      {/* En-tête */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 py-8 sm:py-10 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">À propos</h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600">Bâtir avec exigence, livrer avec fierté, réussir ensemble.</p>
      </section>

      {/* Mot du Directeur Général */}
<section className="mx-auto max-w-7xl px-3 sm:px-4 py-6 sm:py-8 md:py-10">
  <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-12 items-start">
   
    <div className="md:col-span-3">
      <div className="mx-auto md:mx-0 w-32 xs:w-36 sm:w-44 md:w-full max-w-[240px]">
        <img
          src="/Gui%20Alain%20BAHIBO.jpg"
          alt="Gui Alain BAHIBO — Directeur Général"
          className="w-full h-auto rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm
                     object-cover aspect-[3/4]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

<div className="md:col-span-9">
      <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Mot du Directeur Général</h2>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
        Nous avons créé <strong>NEO CONSTRUCTION ET TRAVAUX (NEO CT)</strong> avec une
        conviction simple : offrir une approche nouvelle de la construction, fondée sur
        la rigueur, la transparence et la passion du travail bien fait. Depuis 2019, nous
        accompagnons nos clients dans la réalisation de projets ambitieux, en alliant
        innovation, exigence et respect des engagements.
      </p>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
        Notre croissance repose sur des <strong>professionnels dévoués</strong>, unis par une
        même exigence du travail bien fait et le respect des valeurs : <em>intégrité,
        professionnalisme et engagement</em>. Notre ambition est claire : devenir une
        <strong> référence nationale</strong> dans la construction et les travaux publics.
      </p>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-900 font-medium">
        Gui Alain BAHIBO — Directeur Général
      </p>
    </div>
  </div>
</section>


      {/* Partenaires (défilement en bas) */}
      <PartnersCarousel
        title="Ils nous font confiance"
        subtitle="Un aperçu de nos partenaires — défilement automatique."
      />
    </main>
  );
}
