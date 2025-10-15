import React from "react";

/**
 * Les photos sont à la racine de /public :
 * - Ben Alvine GUIRO.jpg
 * - Gui Alain BAHIBO.jpg
 * - Marcel Olivier GUILAHOU.jpg
 * - (ajoute la photo de ZOUHO si tu l’as)
 * Les espaces sont encodés (%20) pour éviter tout souci d’URL.
 */

const TEAM = [
  {
    id: "bahibo",
    name: "Gui Alain BAHIBO",
    role: "Directeur Général – Fondateur",
    photo: "/Gui%20Alain%20BAHIBO.jpg",
    summary:
      "Vision et gouvernance : stratégie, management des opérations, sécurité, excellence opérationnelle et culture du résultat.",
  },
  {
    id: "guiro",
    name: "Ben Alvine GUIRO",
    role: "Directeur Projets, DG BAHIBO & CO",
    photo: "/Ben%20Alvine%20GUIRO.jpg",
    summary:
      "Direction des projets : études d’exécution, coordination TCE, suivi qualité/coûts/délais, livraisons et satisfaction client.",
  },
  {
    id: "guilahou",
    name: "Marcel Olivier GUILAHOU",
    role: "Directeur Développement Commercial",
    photo: "/Marcel%20Olivier%20GUILAHOU.jpg",
    summary:
      "Pilotage du développement commercial : prospection, relation clients, appels d’offres, partenariats et croissance du portefeuille.",
  },
  {
    id: "zouho",
    name: "Mea Armond ZOUHO",
    role: "Responsable comptable & financier",
    // Mets le bon nom de fichier si tu ajoutes la photo :
    photo: "/Mea%20Armond%20ZOUHO.jpg",
    summary:
      "Supervision comptable et financière : budgets, trésorerie, reporting, conformité et optimisation des coûts sur l’ensemble des chantiers.",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-white">
      {/* En-tête */}
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Notre équipe
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
              Des professionnels engagés pour vos projets
            </h1>
            <p className="mt-3 text-slate-600">
              Direction, projets, commerce et finances — une équipe
              complémentaire au service de la qualité, de la sécurité et des
              délais.
            </p>
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <article
              key={m.id}
              className="group h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/4] overflow-hidden rounded-t-2xl bg-slate-100">
                <img
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {m.name}
                </h3>
                <p className="text-sm text-blue-700 font-medium">{m.role}</p>
                <p className="mt-3 text-sm text-slate-600">{m.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
