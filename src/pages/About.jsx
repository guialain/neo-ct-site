// src/pages/About.jsx
import React from "react";
import Partners from "../components/Partners";

export default function About() {
  return (
    <main className="bg-white">
      {/* En-tête de page */}
      <section className="border-b bg-white/90">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">À propos</h1>
          <p className="mt-2 text-slate-600">
            Bâtir avec exigence, livrer avec fierté, réussir ensemble.
          </p>
        </div>
      </section>

      {/* Mot du Directeur Général */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
          <div className="grid gap-8 md:grid-cols-12 items-start">
            {/* Photo DG – réduite à 70% */}
            <div className="md:col-span-4 flex md:block">
              <img
                src="/Gui Alain BAHIBO.jpg"
                alt="Gui Alain BAHIBO — Directeur Général"
                className="w-[70%] md:w-[70%] mx-auto md:mx-0 rounded-2xl object-cover shadow"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Texte */}
            <div className="md:col-span-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Mot du Directeur Général
              </h2>

              <div className="prose prose-slate mt-4 max-w-none">
                <p>
                  Nous avons créé <strong>NEO CONSTRUCTION ET TRAVAUX (NEO CT)</strong> avec une
                  conviction simple&nbsp;: offrir une approche nouvelle de la construction, fondée
                  sur la rigueur, la transparence et la passion du travail bien fait. Depuis 2019,
                  nous accompagnons nos clients dans la réalisation de projets ambitieux, en
                  alliant innovation, exigence et respect des engagements.
                </p>

                <p>
                  Notre croissance repose sur des <strong>professionnels dévoués</strong>, unis par
                  la même exigence du travail bien fait et le respect des valeurs&nbsp;:{" "}
                  <em>intégrité, professionnalisme et engagement</em> envers nos clients. Notre
                  ambition est claire&nbsp;: devenir une <strong>référence nationale</strong> dans
                  la construction et les travaux publics.
                </p>
              </div>

              <p className="mt-6 font-medium text-slate-900">
                Gui Alain BAHIBO — Directeur Général
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <Partners />

      {/* Bandeau valeurs / baseline (option) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
            <p className="text-sm tracking-wide text-slate-600">
              <span className="font-semibold text-slate-900">Valeurs&nbsp;:</span>{" "}
              Intégrité • Professionnalisme • Sécurité • Qualité • Respect des délais
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
