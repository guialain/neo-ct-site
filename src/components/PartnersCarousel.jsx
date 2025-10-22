// src/components/PartnersCarousel.jsx
import React from "react";

const PARTNERS = [
  { name: "AFRIK BETON",                logo: "/Partners/afrik-beton.png" },
  { name: "ARTEMIS CT (KAYDAN)",        logo: "/Partners/artemis-ct-kaydan.png" },
  { name: "BANQUE ATLANTIQUE",          logo: "/Partners/banque-atlantique.png" },
  { name: "BERNABE",                    logo: "/Partners/bernabe.png" },
  { name: "DELUXE MARBRE",              logo: "/Partners/deluxe-marbre.png" },
  { name: "IPS-CGRAE",                  logo: "/Partners/ips-cgrae.png" },
  { name: "PIVOT INGENIERIE",           logo: "/Partners/pivot-ingenierie.png" },
  { name: "PSTACI",                     logo: "/Partners/pstaci.png" },
  { name: "SOCIETE GENERALE",           logo: "/Partners/societe-generale.png" },
  { name: "BIG CIM",                    logo: "/Partners/big-cim.png" },
];

// ——— Cartes plus “minces” ———
function PartnerCard({ name, logo }) {
  return (
    <div className="w-[164px] shrink-0">
      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
        <div className="flex h-10 items-center justify-center">
          <img
            src={logo}
            alt={name}
            className="max-h-8 md:max-h-9 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Texte plus petit */}
        <div className="mt-1 text-center text-[9px] leading-tight font-medium text-slate-700 line-clamp-2">
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
  const track = [...PARTNERS, ...PARTNERS]; // défilement continu

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <div className="text-center mb-1">
        {/* Titre plus petit */}
        <h2 className="text-lg md:text-xl font-bold text-slate-900">{title}</h2>
        {/* pas de sous-titre */}
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex gap-3 will-change-transform"
          style={{
            animation: "partners-scroll 35s linear infinite",
            width: `${track.length * 176}px`, // ~164 + 12px de gap
          }}
        >
          {track.map((p, idx) => (
            <PartnerCard key={`${p.name}-${idx}`} name={p.name} logo={p.logo} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
      </div>

      <style>{`
        @keyframes partners-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
