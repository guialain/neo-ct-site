// src/pages/Team.jsx
import React, { useState } from "react";
import { FileText, X } from "lucide-react"; // si non installé: npm i lucide-react

/**
 * Photos dans /public (URL encodées si espaces).
 * Chaque membre peut avoir:
 * - summary: 1-2 phrases courtes
 * - resume: tableau de puces (bref parcours)
 * - resumeText: texte littéraire (paragraphe)
 */
const TEAM = [
  {
    id: "bahibo",
    name: "Gui Alain BAHIBO",
    role: "Directeur Général – Fondateur",
    photo: "/Gui%20Alain%20BAHIBO.jpg",
    summary:
      "Leadership, stratégie & vision : pilote la croissance de l’entreprise et veille à la réalisation des objectifs.",
    resumeText:
      "Diplômé d’un Master en Management (SKEMA) et Ingénieur en statistiques et économie appliquée (ENSEA), Gui Alain BAHIBO a construit une solide connaissance de l’entreprise au fil de 17 années en corporate banking entre la Côte d’Ivoire, Londres et la région africaine. Chez Standard Chartered, Société Générale, Ecobank puis BACB, il a progressivement relié l’analyse du risque, la relation client et la structuration de financements pour des acteurs publics et privés. Cette trajectoire lui a appris à clarifier les besoins, orchestrer des équipes et transformer des contraintes complexes en solutions exécutables. NEO CT est né de cette exigence et d’une inspiration puisée chez de grands bâtisseurs du secteur privé : donner une forme durable à l’ambition des clients en conciliant qualité, délais et maîtrise des coûts, avec la même rigueur que dans la banque."
  },

  {
    id: "guiro",
    name: "Ben Alvine GUIRO",
    role: "Directeur Projets, DG BAHIBO & CO",
    photo: "/Ben%20Alvine%20GUIRO.jpg",
    summary:
      "Direction de projets : études d’exécution, coordination de chantier ; veille au respect de la qualité, des coûts et des délais.",
    resumeText:
      "Sur plan comme sur chantier, Ben Alvine GUIRO parle la langue des détails. Il aime quand un croquis devient un calendrier, puis un ouvrage livré, propre et sécurisé. De la préparation d’exécution à la coordination multi-lots, il aligne bureaux d’études, entreprises et contrôle technique avec une exigence constante : zéro surprise à la réception. Sa marque de fabrique : anticiper les risques, fluidifier la communication et tenir le triptyque qualité–coûts–délais. Résultat : des chantiers qui avancent, des clients rassurés et des clés remises avec fierté."
  },

  {
    id: "guilahou",
    name: "Marcel Olivier GUILAHOU",
    role: "Directeur Développement Commercial",
    photo: "/Marcel%20Olivier%20GUILAHOU.jpg",
    summary:
      "Développement commercial : prospection, appels d’offres, partenariats & croissance.",
    resumeText:
      "GUILAHOU GBEHE Marcel Olivier bénéficie de plus de dix années d’expérience en développement commercial entre la Côte d’Ivoire et le Ghana. En Côte d’Ivoire, il débute dans la distribution de matériaux de construction chez ABC Services, où il apprend le terrain : cycle commande–livraison, gestion des marges, qualité de service. À Accra, il poursuit chez GREYTONE Construction Ltd comme chargé de portefeuille pendant trois ans, reliant plus étroitement besoin client, proposition technique et exécution. Il prend ensuite la gérance d’Ezo Building Construction Company pendant cinq ans, structurant l’activité et renforçant les relations avec les maîtres d’ouvrage. En 2020, il rejoint SDTS, aujourd’hui au service du développement de NEO CT, avec une approche constante : comprendre précisément, calibrer justement et accompagner jusqu’à la réception. Diplômé en 2009 d’Ingénieur en Finance et Marketing (spécialisation gestion de projets, analyse financière, stratégies de marché), il met sa connaissance des cycles BTP et sa culture client au profit de partenariats durables."
  },

  {
    id: "zouho",
    name: "Mea Armond ZOUHO",
    role: "Responsable comptable & financier",
    photo: "/Mea%20Armond%20ZOUHO.jpg",
    summary:
      "Comptabilité, finance & trésorerie : paie, fiscalité, trésorerie, immobilisations et états financiers.",
    resumeText:
      "Titulaire d’un BTS Finances–Comptabilité (ESAM Plateau, 2009–2010), Mea Armond ZOUHO a construit son expérience au croisement de la comptabilité opérationnelle et des exigences de conformité. D’abord comptable transit chez Athena Shipping SA (2012–2017), il y a assuré la tenue des journaux, les rapprochements bancaires et la préparation des contrôles, en maîtrisant les spécificités du SYSCOA/OHADA et du cycle trésorerie. Depuis 2018, il est comptable chez NEO Construction & Travaux, où il pilote la paie, les déclarations fiscales et sociales, la gestion de la liquidité (encaissements/paiements), le suivi des immobilisations (inventaire, fiches individuelles, amortissements) et la production des états financiers jusqu’à la préparation des audits et contrôles fiscaux. Cette trajectoire l’a conduit à relier rigueur comptable et visibilité opérationnelle, pour offrir aux chantiers des chiffres fiables, lisibles et actionnables."
  }
];

function ResumeModal({ open, onClose, member }) {
  if (!open || !member) return null;

  const hasBullets = Array.isArray(member.resume) && member.resume.length > 0;
  const hasText = typeof member.resumeText === "string" && member.resumeText.trim().length > 0;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
            <h3 className="font-semibold text-slate-900">
              {member.name} — En savoir plus
            </h3>
            <button
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-5">
            {hasText ? (
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {member.resumeText}
              </p>
            ) : hasBullets ? (
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                {member.resume.map((b, i) => (
                  <li key={i} className="leading-relaxed">{b}</li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-700 leading-relaxed">{member.summary}</p>
            )}
          </div>

          <div className="px-5 pb-5 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [openId, setOpenId] = useState(null);
  const current = TEAM.find((m) => m.id === openId) || null;

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
              complémentaire au service de la qualité, de la sécurité et des délais.
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
                <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                <p className="text-sm text-blue-700 font-medium">{m.role}</p>
                <p className="mt-3 text-sm text-slate-600">{m.summary}</p>

                {/* Bouton: En savoir plus */}
                <div className="mt-4">
                  <button
                    onClick={() => setOpenId(m.id)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    <FileText className="h-4 w-4" />
                    En savoir plus
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}
      <ResumeModal
        open={Boolean(openId)}
        onClose={() => setOpenId(null)}
        member={current}
      />
    </main>
  );
}
