// src/components/Partners.jsx
import React from "react";

/** Liste centralisée – à réutiliser partout (carousel, grilles, etc.) */
export const partnersList = [
  // Logos disponibles (dossier /public/Partners)
  { name: "ARTEMIS CT (GROUPE KAYDAN)", logo: "/Partners/artemis-ct-kaydan.png" },
  { name: "IPS-CGRAE",                     logo: "/Partners/ips-cgrae.png" },
  { name: "SOCIETE GENERALE",              logo: "/Partners/societe-generale.png" },

  // Noms normalisés (tu pourras ajouter les logos plus tard)
  { name: "BANQUE ATLANTIQUE",             logo: null, initials: "BA" },
  { name: "PIVOT INGENIERIE",              logo: "/Partners/pivot-ingenierie.png" },
  { name: "SOTACI",                        logo: null, initials: "S" },
  { name: "BERNABE",                       logo: null, initials: "B" },
  { name: "SEIGNEURIE",                    logo: null, initials: "S" },
  { name: "DELUXE MARBRE",                 logo: "/Partners/deluxe-marbre.png" },
  { name: "AFRIK BETON",                 logo:  "/Partners/afrik-beton.png" },
  { name: "SIBM",                          logo: null, initials: "S" },
  { name: "PSTACI",                        logo: "/Partners/pstaci.png" },
  { name: "BIG CIM",                       logo: null, initials: "BC" },
];

const Badge = ({ text }) => (
  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-700 font-semibold">
    {text}
  </div>
);

/** Grille (utilisée sur la page À propos) */
export default function Partners() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Ils nous font confiance
      </h2>
      <p className="text-center text-slate-500 mb-8">
        Partenaires, clients et institutions qui soutiennent nos projets.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {partnersList.slice(0, 12).map((p, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
          >
            {p.logo ? (
              <img
                src={p.logo}
                alt={p.name}
                className="mx-auto h-12 w-auto object-contain"
              />
            ) : (
              <Badge text={p.initials || p.name[0]} />
            )}
            <div className="mt-3 text-xs font-medium text-slate-700">
              {p.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
