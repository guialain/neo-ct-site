// src/pages/Services.jsx
import React from "react";

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Un interlocuteur unique, du plan à la livraison
          </h2>
          <p className="mt-3 text-slate-600">
            Nous pilotons votre chantier de A à Z : études, exécution, finitions,
            coordination des corps d’état et réception.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 1) Construction clé en main */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-semibold">
              1
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Construction clé en main
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
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
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-semibold">
              2
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Fourniture &amp; Pose
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
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
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-semibold">
              3
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Rénovation | Réhabilitation
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Remise à niveau structurelle et technique</li>
              <li>Réaménagement intérieur, isolation, confort thermique</li>
              <li>Mises aux normes, diagnostics, finitions complètes</li>
            </ul>
          </article>
        </div>

        {/* Options */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h4 className="text-base font-semibold text-slate-900">
            Options (selon besoins)
          </h4>
          <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
            <li>Design &amp; plans (APS/APD) en partenariat BE/architectes</li>
            <li>Charpente métallique et structures spécifiques</li>
            <li>Clôtures / Portails – réalisation et automatisme</li>
          </ul>
        </div>

        {/* Process (timeline simple) */}
        <div className="mt-12">
          <h4 className="text-base font-semibold text-slate-900">
            Process en 5 étapes
          </h4>
          <ol className="mt-4 space-y-4">
            {[
              {
                t: "Prise de brief & visite",
                d: "Compréhension du besoin",
              },
              {
                t: "Avant-Projet & chiffrage",
                d: "Devis clair et délais associés",
              },
              {
                t: "Lancement & préparation",
                d: "Planning détaillé, approvisionnement",
              },
              {
                t: "Exécution & contrôle",
                d: "Suivi qualité, comptes-rendus",
              },
              {
                t: "Réception & garanties",
                d: "Mise en service, levée de réserves",
              },
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <div className="font-medium text-slate-900">{step.t}</div>
                  <div className="text-slate-600">{step.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
