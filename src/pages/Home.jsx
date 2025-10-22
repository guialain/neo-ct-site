// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PartnersCarousel from "../components/PartnersCarousel";

// Médias du héros
const MEDIA = [
  { type: "image", src: "/media/hero/equipe-neoct.jpg", alt: "Équipe NEO CT" },
  { type: "image", src: "/media/hero/villas-boreflet.jpg", alt: "villas boreflet" },
  { type: "image", src: "/media/hero/facade3D-perles.jpg", alt: "facade3D Perles" },
  { type: "video", src: "/media/hero/coulage-dalle-perles.mp4", poster: "/media/hero/coulage-dalle-perles.jpg", alt: "Dalle Villa Perles" },
  { type: "image", src: "/media/hero/facade-perles.jpg", alt: "Facade Villa Perles" },
  { type: "image", src: "/media/hero/engin-chantier.jpg", alt: "Pompe Beton" },
  { type: "image", src: "/media/hero/dalle-boreflet.jpg", alt: "Dalle R+3 Boreflet" },
];

export default function Home() {
  // --- Logique WhatsApp: ouvre l'app si possible, sinon fallback web ---
  const phone = "2250576428643";
  const msgMobile =
    "Bonjour NEO CT 👋, je souhaite échanger à propos de mon projet (budget, délais, localisation).";

  const appUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(msgMobile)}`;
  const webUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msgMobile)}`;

  const openWhatsApp = (e) => {
    e.preventDefault();
    const t0 = Date.now();
    window.location.href = appUrl; // tente d'ouvrir l'app
    setTimeout(() => {
      // si rien ne s'est passé (app non installée), ouvre le fallback web
      if (Date.now() - t0 < 1200) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
    }, 800);
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      {/* ===== HÉRO ===== */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:py-8 lg:py-12 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="grid items-center gap-5 md:gap-8 lg:gap-10 md:grid-cols-12">
          {/* Texte */}
          <div className="order-2 md:order-1 md:col-span-5 lg:col-span-5">
            <p className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-blue-700">
              NEO CONSTRUCTION & TRAVAUX
            </p>

            <h1 className="mt-2 sm:mt-2 text-[22px] sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Vos projets méritent l’excellence. Construisons ensemble vos projets
              <br className="hidden sm:block" />
              </h1>

            <p className="mt-3 sm:mt-4 text-[0.95rem] sm:text-base text-slate-700 leading-relaxed">
              Chez NEO CONSTRUCTION ET TRAVAUX, chaque projet est une histoire de
              passion, de précision et d’engagement. De la villa moderne au bâtiment
              industriel, nous transformons vos idées en réalisations solides, élégantes
              et durables. Innovation, Qualité et Confiance sont les fondations de notre
              savoir-faire. Avec NEO CT, votre vision prend forme, brique après brique,
              avec exigence et fierté.
              <br />
              Cocody II-Plateaux, 7ᵉ Tranche – Les Oscars
            </p>

            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              {["Qualité", "Délais", "Sécurité"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              <a
                href={webUrl}                // fallback si ouverture classique
                onClick={openWhatsApp}       // tente d’ouvrir l’app
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white font-semibold
                           hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40
                           active:translate-y-[1px] transition"
              >
                <span aria-hidden="true">💬</span>
                Devis WhatsApp
              </a>

              {/* Nos Réalisations */}
              <a
                href="/realisations"
                className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-4 py-2 text-white font-semibold
                           hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/40
                           active:translate-y-[1px] transition"
              >
                Nos Réalisations
              </a>
            </div>
          </div>

          {/* Media */}
          <div className="order-1 md:order-2 md:col-span-7 lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200/60">
              <HeroCarousel items={MEDIA} autoPlay interval={5000} />
            </div>
          </div>
        </div>
      </section>

      
      {/* ===== PARTENAIRES ===== */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 pt-2 pb-1">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 text-center mb-2 sm:mb-4">
          Ils nous font confiance
        </h2>
      </section>
      <PartnersCarousel title=" " />
    </main>
  );
}
