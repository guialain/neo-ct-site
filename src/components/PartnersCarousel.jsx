// src/components/PartnersCarousel.jsx
import React from "react";
import { partnersList } from "./Partners";

const Item = ({ name, logo, initials }) => (
  <div className="flex items-center justify-center min-w-[160px] h-[72px] rounded-xl border border-slate-200 bg-white px-4 mx-3 shadow-sm">
    {logo ? (
      <img src={logo} alt={name} className="h-10 w-auto object-contain" />
    ) : (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-700 font-semibold">
        {initials || name[0]}
      </span>
    )}
  </div>
);

export default function PartnersCarousel() {
  // On duplique la liste pour l’animation “infinie”
  const strip = [...partnersList.slice(0, 12), ...partnersList.slice(0, 12)];

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Ils nous font confiance
      </h2>
      <p className="text-center text-slate-500 mt-2 mb-6">
        Un aperçu de nos partenaires — défilement automatique.
      </p>

      <div className="relative overflow-hidden">
        <div className="partners-marquee flex items-center">
          {strip.map((p, i) => (
            <Item key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
