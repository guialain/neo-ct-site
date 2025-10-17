// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { PartnersCarousel } from "../components/Partners";

const COMPANY = {
  whatsapp: "225XXXXXXXXX",
};

export default function Home() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      {/* Bandeau héro */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 grid gap-8 md:grid-cols-12 items-center">
        {/* Texte court */}
        <div className="md:col-span-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-slate-900">
            Vos projets méritent l’excellence. Construisons ensemble vos ambitions.
          </h1>
          <p className="mt-3 text-slate-600">
            Chez NEO CONSTRUCTION ET TRAVAUX, chaque projet est une histoire de passion,
            de précision et d’engagement. De la villa moderne au bâtiment industriel, nous
            transformons vos idées en réalisations solides, élégantes et durables. Innovation,
            Qualité et Confiance sont les fondations de notre savoir-faire. Avec NEO CT, votre
            vision prend forme, brique après brique, avec exigence et fierté. <br />
            Cocody II-Plateaux, 7ᵉ Tranche – Les Oscars
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Bonjour%20NEO%20CT%2C%20je%20souhaite%20un%20devis`}
              className="inline-flex items-center rounded-xl bg-green-600 px-4 py-2 text-white shadow-md hover:bg-green-700"
            >
              Devis WhatsApp
            </a>
            <Link
              to="/realisations"
              className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Nos Réalisations
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:col-span-6">
          <img
            src="/hero-neoct.jpg"
            alt="Chantier NEO CT"
            className="w-full rounded-2xl object-cover shadow-xl h-[340px]"
            loading="eager"
            decoding="async"
          />
          <div className="mt-3 rounded-xl bg-white/80 px-3 py-1.5 text-sm text-slate-700 shadow w-fit">
            Qualité • Délais • Sécurité
          </div>
        </div>
      </div>

      {/* 3 cartes d’accès rapide — compactes, sur 1 ligne */}
      <div className="mx-auto max-w-7xl px-4 pb-4">
        <div
          className="flex gap-2 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <style>{`div::-webkit-scrollbar{display:none;}`}</style>

          <HomeCard title="À propos" to="/apropos" desc="Vision, valeurs & direction." />
          <HomeCard title="Services" to="/services" desc="Études, exécution, finitions." />
          <HomeCard title="Contact" to="/contact" desc="Parlons de votre chantier." />
        </div>
      </div>

      {/* Partenaires en carrousel */}
      <PartnersCarousel />
    </section>
  );
}

function HomeCard({ title, to, desc }) {
  return (
    <Link
      to={to}
      className="snap-start shrink-0 min-w-[260px] md:min-w-[300px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition"
    >
      <div className="text-base font-semibold text-slate-900">{title}</div>

      {/* description forcée à 2 lignes */}
      <div
        className="mt-1 text-sm text-slate-600 leading-5"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {desc}
      </div>

      <div className="mt-1.5 text-blue-600 text-sm">Découvrir →</div>
    </Link>
  );
}
