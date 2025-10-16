import { Link } from "react-router-dom";
import { PartnersCarousel } from "../components/Partners";

const COMPANY = {
  whatsapp: "225XXXXXXXXX",
};

export default function Home() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      {/* HERO */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 grid gap-10 md:grid-cols-12 items-center">
        {/* Texte court */}
        <div className="md:col-span-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-slate-900">
            Vos projets méritent l’excellence. Construisons ensemble vos ambitions.
          </h1>
          <p className="mt-4 text-slate-600">
            Chez NEO CONSTRUCTION ET TRAVAUX, chaque projet est une histoire de passion, de précision et d’engagement.
            De la villa moderne au bâtiment industriel, nous transformons vos idées en réalisations solides, élégantes et durables.
            Innovation, Qualité et Confiance sont les fondations de notre savoir-faire.
            Avec NEO CT, votre vision prend forme, brique après brique, avec exigence et fierté. 
            <br />
            Cocody II-Plateaux, 7ᵉ Tranche – Les Oscars
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Bonjour%20NEO%20CT%2C%20je%20souhaite%20un%20devis`}
              className="inline-flex items-center rounded-xl bg-green-600 px-4 py-2 text-white shadow-md hover:bg-green-700"
            >
              Demander un devis WhatsApp
            </a>
            <Link
              to="/realisations"
              className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Voir nos réalisations
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
          <div className="mt-3 rounded-xl bg-white/80 px-4 py-2 text-sm text-slate-700 shadow w-fit">
            Qualité • Délais • Sécurité
          </div>
        </div>
      </div>

      {/* 3 cartes d’accès rapide — version compacte */}
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-8">
        <div className="grid gap-3 sm:grid-cols-3">
          <HomeCard title="À propos" to="/apropos" desc="Vision, valeurs & direction." />
          <HomeCard title="Services" to="/services" desc="Études, exécution, finitions." />
          <HomeCard title="Contact" to="/contact" desc="Parlons de votre chantier." />
        </div>
      </div>

      {/* Partenaires — carrousel auto */}
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-slate-900">
          Ils nous font confiance
        </h2>
        <p className="mt-1 text-center text-slate-600">
          Un aperçu de nos partenaires — défilement automatique.
        </p>

        <div className="mt-6">
          <PartnersCarousel speed={45} />
        </div>
      </div>
    </section>
  );
}

function HomeCard({ title, to, desc }) {
  return (
    <Link
      to={to}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition"
    >
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <div className="mt-1.5 text-slate-600">{desc}</div>
      <div className="mt-2 text-blue-600 text-sm">Découvrir →</div>
    </Link>
  );
}
