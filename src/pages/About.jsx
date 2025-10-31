// src/pages/About.jsx
import React from "react";
import PartnersCarousel from "../components/PartnersCarousel";

export default function About() {
  return (
    <main className="bg-white">
      {/* En-tête */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 py-6 sm:py-8 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">À Propos</h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600">Bâtir avec exigence, livrer avec fierté, réussir ensemble.</p>
      </section>

      {/* Mot du Directeur Général */}
<section className="mx-auto max-w-7xl px-3 sm:px-4 py-6 sm:py-8 md:py-10">
  <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-12 items-start">
   
    <div className="md:col-span-3">
      <div className="mx-auto md:mx-0 w-full max-w-[280px] md:max-w-full">
        <img
          src="/Gui%20Alain%20BAHIBO.jpg"
          alt="Gui Alain BAHIBO — Directeur Général"
          className="w-full h-auto rounded-xl sm:rounded-2xl border border-slate-200 shadow-md object-cover aspect-[3/4]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

<div className="md:col-span-9">
      <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Mot du Directeur Général</h2>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
        Nous avons créé NEO CONSTRUCTION ET TRAVAUX (NEO CT) avec une conviction simple : apporter une approche exigeante et transparente de la construction, au service de projets durables, exécutés dans les règles de l'art. Depuis 2019, nous accompagnons nos clients – particuliers, entreprises et institutions – de l'étude à la livraison, avec un interlocuteur unique et des engagements tenus sur le coût, les délais et la qualité.
      </p>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
        Notre croissance s'appuie sur une équipe de professionnels dévoués, des méthodes rigoureuses et des partenariats solides. Chaque chantier est préparé avec soin : planification claire, coordination des corps d'État, contrôles qualité à chaque étape et reporting régulier. Cette discipline opérationnelle, alliée à notre sens du détail, fait la différence sur le terrain.
      </p>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
        Nos valeurs sont constantes : intégrité, professionnalisme, engagement. Elles guident nos décisions et nourrissent la confiance de nos clients. Notre ambition est claire : devenir une référence nationale dans la construction et les travaux publics, en livrant des ouvrages qui créent de la valeur dans le temps.
      </p>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
        Merci à nos clients et partenaires pour leur confiance. Nous sommes prêts à bâtir, avec vous, les prochaines réalisations.
      </p>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
        <strong>Gui Alain BAHIBO</strong><br />
        Directeur Général — NEO CONSTRUCTION ET TRAVAUX (NEO CT)
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
