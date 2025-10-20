// src/pages/About.jsx
import React from "react";
import PartnersCarousel from "../components/PartnersCarousel";

export default function About() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      {/* En-tête */}
      <section className="mx-auto max-w-7xl px-4 py-10 border-b border-slate-200">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">À propos</h1>
        <p className="mt-2 text-slate-600">Bâtir avec exigence, livrer avec fierté, réussir ensemble.</p>
      </section>

      {/* Mot du Directeur Général */}
      <section className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-12 items-start">
        <div className="md:col-span-4">
          <img
            src="/Gui Alain BAHIBO.jpg"
            alt="Gui Alain BAHIBO — Directeur Général"
            className="w-full max-w-sm rounded-2xl border border-slate-200 shadow-sm object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="md:col-span-8">
          <h2 className="text-xl font-bold text-slate-900">Mot du Directeur Général</h2>
          <div className="mt-3 space-y-3 text-slate-700">
            <p>
              Nous avons créé <strong>NEO CONSTRUCTION ET TRAVAUX (NEO CT)</strong> avec une conviction simple :
              offrir une approche nouvelle de la construction, fondée sur la rigueur, la transparence et la passion
              du travail bien fait. Depuis 2019, nous accompagnons nos clients dans la réalisation de projets ambitieux,
              en alliant innovation, exigence et respect des engagements.
            </p>
            <p>
              Notre croissance repose sur des <strong>professionnels dévoués</strong>, unis par la même exigence du travail
              bien fait et le respect des valeurs : <em>intégrité, professionnalisme et engagement</em> envers nos clients.
              Notre ambition est claire : devenir une <strong>référence nationale</strong> dans la construction et les travaux publics.
            </p>
            <p className="font-medium">Gui Alain BAHIBO — Directeur Général</p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="mx-auto max-w-7xl px-4 pb-12 grid gap-6 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold text-slate-900">Sécurité</h3>
          <p className="text-sm text-slate-600 mt-1">
            Culture HSE, prévention et contrôle à chaque étape.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Qualité</h3>
          <p className="text-sm text-slate-600 mt-1">
            Exécution soignée, matériaux certifiés, réception sans surprise.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Délais</h3>
          <p className="text-sm text-slate-600 mt-1">
            Planification réaliste et pilotage rigoureux des opérations.
          </p>
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
