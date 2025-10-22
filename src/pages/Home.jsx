// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PartnersCarousel from "../components/PartnersCarousel";

// Médias du héros (dans /public/media/hero/) — gardés hors du composant
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
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-10 lg:py-12">
        <div className="grid items-center gap-6 md:gap-8 lg:gap-10 md:grid-cols-12">
          {/* TEXTE À GAUCHE (desktop) */}
          <div className="order-2 md:order-1 md:col-span-5 lg:col-span-5">
            <p className="text-base md:text-lg font-extrabold uppercase tracking-wide text-blue-700">
              NEO CONSTRUCTION & TRAVAUX
            </p>

            <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Vos projets méritent l’excellence.
              <br className="hidden sm:block" />
              <span className="block">Construisons ensemble vos ambitions</span>
            </h1>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Chez NEO CONSTRUCTION ET TRAVAUX, chaque projet est une histoire de
              passion, de précision et d’engagement. De la villa moderne au bâtiment
              industriel, nous transformons vos idées en réalisations solides, élégantes
              et durables. Innovation, Qualité et Confiance sont les fondations de notre
              savoir-faire. Avec NEO CT, votre vision prend forme, brique après brique,
              avec exigence et fierté.
              <br />
              Cocody II-Plateaux, 7ᵉ Tranche – Les Oscars
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
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
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Devis WhatsApp : ouvre l’app en priorité */}
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

          {/* MEDIA À DROITE (desktop) */}
          <div className="order-1 md:order-2 md:col-span-7 lg:col-span-7">
            <HeroCarousel items={MEDIA} autoPlay interval={5000} />
          </div>
        </div>
      </section>

      {/* ===== BANDE VALEURS ===== */}
      <section className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60">
              <h3 className="text-slate-900 font-semibold">Sécurité & conformité</h3>
              <p className="text-sm text-slate-600 mt-1">
                Procédures HSE intégrées, contrôle qualité et réception sans surprise.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60">
              <h3 className="text-slate-900 font-semibold">Maîtrise des coûts</h3>
              <p className="text-sm text-slate-600 mt-1">
                Chiffrages transparents, suivi budgétaire et optimisation des achats.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60">
              <h3 className="text-slate-900 font-semibold">Respect des délais</h3>
              <p className="text-sm text-slate-600 mt-1">
                Planning réaliste, coordination multi-lots et pilotage terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTENAIRES ===== */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-2">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 text-center mb-4">
          Ils nous font confiance
        </h2>
      </section>
      <PartnersCarousel title=" " />

      {/* ===== CTA FINAL ===== */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Parlons de votre projet</h3>
            <p className="text-sm/6 text-white/80 mt-1">
              Envoyez vos plans ou votre idée : nous vous répondons rapidement.
            </p>
          </div>
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
