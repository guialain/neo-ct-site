// src/components/PartnersCarousel.jsx
import React from "react";

const PARTNERS = [
  { name: "AFRIK BETON",           logo: "/Partners/afrik-beton.png" },
  { name: "ARTEMIS CT (KAYDAN)",   logo: "/Partners/artemis-ct-kaydan.png" },
  { name: "BANQUE ATLANTIQUE",     logo: "/Partners/banque-atlantique.png" },
  { name: "BERNABE",               logo: "/Partners/bernabe.png" },
  { name: "DELUXE MARBRE",         logo: "/Partners/deluxe-marbre.png" },
  { name: "IPS-CGRAE",             logo: "/Partners/ips-cgrae.png" },
  { name: "PIVOT INGENIERIE",      logo: "/Partners/pivot-ingenierie.png" },
  { name: "PSTACI",                logo: "/Partners/pstaci.png" },
  { name: "SOCIETE GENERALE",      logo: "/Partners/societe-generale.png" },
  { name: "BIG CIM",               logo: "/Partners/big-cim.png" },
];

const CARD_W = 172;   // largeur compacte (évite d’être trop large)
const GAP = 12;       // espace entre cartes

function PartnerCard({ name, logo }) {
  return (
    <div className="shrink-0" style={{ width: CARD_W }}>
      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
        {/* ↑ hauteur légèrement augmentée, largeur stable */}
        <div className="flex h-12 md:h-14 items-center justify-center">
          <img
            src={logo}
            alt={name}
            className="max-h-10 md:max-h-12 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mt-1 text-center text-[10px] sm:text-xs font-medium text-slate-700 line-clamp-2">
          {name}
        </div>
      </div>
    </div>
  );
}

export default function PartnersCarousel({
  title = "Ils nous font confiance",
  subtitle = "",
}) {
  // défilement continu (dupliqué)
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 pb-10 w-full overflow-hidden">
      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 break-words">{title}</h2>
        {/* Pas de sous-titre pour gagner de l'espace */}
      </div>

      <div className="relative overflow-hidden rounded-2xl w-full">
        <div
          className="flex will-change-transform"
          style={{
            gap: `${GAP}px`,
            animation: "partners-scroll 35s linear infinite",
            width: `${track.length * (CARD_W + GAP)}px`,
          }}
        >
          {track.map((p, idx) => (
            <PartnerCard key={`${p.name}-${idx}`} name={p.name} logo={p.logo} />
          ))}
        </div>

        {/* Fades aux bords */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-8 bg-gradient-to-l from-white to-transparent" />
      </div>

      <style>{`
        @keyframes partners-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
