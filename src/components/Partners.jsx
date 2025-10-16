// src/components/Partners.jsx
import React from "react";

/** Liste fixe de 10 partenaires (tous avec logo) */
const PARTNERS = [
  { name: "AFRIK BETON",            logo: "/Partners/afrik-beton.png" },
  { name: "ARTEMIS CT (GROUPE KAYDAN)", logo: "/Partners/artemis-ct-kaydan.png" },
  { name: "BANQUE ATLANTIQUE",      logo: "/Partners/banque-atlantique.png" },
  { name: "BERNABE",                logo: "/Partners/bernabe.png" },
  { name: "DELUXE MARBRE",          logo: "/Partners/deluxe-marbre.png" },
  { name: "IPS-CGRAE",              logo: "/Partners/ips-cgrae.png" },
  { name: "PIVOT INGENIERIE",       logo: "/Partners/pivot-ingenierie.png" },
  { name: "PSTACI",                 logo: "/Partners/pstaci.png" },
  { name: "SOCIETE GENERALE",       logo: "/Partners/societe-generale.png" },
  { name: "BIG CIM",                logo: "/Partners/big-cim.png" },
];

function PartnerCard({ name, logo }) {
  return (
    <div className="w-[220px] shrink-0">
      <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
        <div className="flex h-16 items-center justify-center">
          <img
            src={logo}
            alt={name}
            className="max-h-14 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mt-3 text-center text-xs font-medium text-slate-700 line-clamp-2">
          {name}
        </div>
      </div>
    </div>
  );
}

/* -------- Carrousel auto (Accueil) -------- */
function PartnersCarousel({
  title = "Ils nous font confiance",
  subtitle = "Un aperçu de nos partenaires — défilement automatique.",
}) {
  const track = [...PARTNERS, ...PARTNERS]; // duplication simple pour effet infini

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        <p className="mt-2 text-slate-600">{subtitle}</p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-5 will-change-transform"
          style={{
            animation: "partners-scroll 35s linear infinite",
            width: `${track.length * 236}px`,
          }}
        >
          {track.map((p, idx) => (
            <PartnerCard key={`${p.name}-${idx}`} name={p.name} logo={p.logo} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
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

/* -------- Grille statique (À propos) -------- */
function PartnersGrid({
  title = "Ils nous font confiance",
  subtitle = "Partenaires, clients et institutions qui soutiennent nos projets.",
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        <p className="mt-2 text-slate-600">{subtitle}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {PARTNERS.map((p) => (
          <div key={p.name} className="w-full">
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
              <div className="flex h-16 items-center justify-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-14 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-3 text-center text-xs font-medium text-slate-700 line-clamp-2">
                {p.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnersCarousel;
export { PartnersCarousel, PartnersGrid };
