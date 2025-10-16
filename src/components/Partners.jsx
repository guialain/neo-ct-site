import React from "react";

const PARTNERS = [
  { name: "ARTEMIS CT (GROUPE KAYDAN)", logo: "/Partners/artemis-ct-kaydan.png" },
  { name: "IPS-CGRAE", logo: "/Partners/ips-cgrae.png" },
  { name: "SOCIETE GENERALE", logo: "/Partners/societe-generale.png" },
  { name: "BANQUE ATLANTIQUE", logo: null },
  { name: "PIVOT INGENIERIE", logo: null },
  { name: "SOTACI", logo: null },
  { name: "BERNABE", logo: null },
  { name: "SEIGNEURIE", logo: null },
  { name: "DELUXE MARBRE", logo: null },
  { name: "ABEILLE BETON", logo: null },
  { name: "SIBM", logo: null },
  { name: "PSTACI", logo: null },
  { name: "BIG CIM", logo: null },
];

function initialsOf(label) {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Partners() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ils nous font confiance
          </h2>
          <p className="mt-2 text-slate-600">
            Partenaires, clients et institutions qui soutiennent nos projets.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {PARTNERS.map((p) => (
            <figure
              key={p.name}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-16 w-full items-center justify-center">
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    loading="lazy"
                    width="160"
                    height="64"
                    className="max-h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded bg-slate-100 text-slate-700 font-semibold">
                    {initialsOf(p.name)}
                  </span>
                )}
              </div>
              <figcaption className="mt-3 text-xs font-medium text-slate-700">
                {p.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
