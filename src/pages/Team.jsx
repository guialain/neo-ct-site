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
    <div className="fixed inset-0 z-50 animate-fadeIn">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md" 
        onClick={onClose} 
      />
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
        <div className="w-full max-w-2xl max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col transform transition-all">
          {/* Header avec gradient */}
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 px-4 sm:px-6 py-4 sm:py-5 shrink-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-orange-50 mt-1">
                  {member.role}
                </p>
              </div>
              <button
                onClick={onClose}
                className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all shrink-0 group"
                aria-label="Fermer"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 bg-gradient-to-b from-white to-slate-50">
            <div className="prose prose-slate max-w-none">
              {hasText ? (
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                  {member.resumeText}
                </p>
              ) : hasBullets ? (
                <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                  {member.resume.map((b, i) => (
                    <li key={i} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{member.summary}</p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white active:scale-95 transition-all shadow-sm hover:shadow-lg text-sm sm:text-base font-semibold"
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
      <section className="mx-auto max-w-7xl px-3 sm:px-4 py-6 sm:py-8 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">Notre Équipe</h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600">Des professionnels engagés pour vos projets</p>
      </section>

      {/* Grille */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, index) => (
            <article
              key={m.id}
              className="group h-full rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/4] overflow-hidden rounded-t-xl sm:rounded-t-2xl bg-slate-100 relative">
                <img
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {m.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-700 font-medium mt-0.5">{m.role}</p>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3">{m.summary}</p>

                {/* Bouton: En savoir plus */}
                <div className="mt-3 sm:mt-4">
                  <button
                    onClick={() => setOpenId(m.id)}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white active:scale-95 transition-all shadow-sm hover:shadow-lg"
                  >
                    <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
