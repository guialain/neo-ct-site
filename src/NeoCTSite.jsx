import React, { useState } from "react";

/**
 * NEO CONSTRUCTION ET TRAVAUX — Site vitrine (One-Page)
 * React + Tailwind
 * Sections: Accueil, À propos, Réalisations, Services, Équipe, Contact
 * NOTE: Pas de section "Projets en cours & à venir".
 */

// ----------------------- Données du site -----------------------
const COMPANY = {
  name: "NEO Construction & Travaux",
  address: "Cocody 7e Tranche, Les Oscars — Abidjan, Côte d’Ivoire",
  phone: "+225 XX XX XX XX",
  email: "contact@neo-ct.ci",
  whatsapp: "225XXXXXXXXX", // ex: 2250707070707 (optionnel)
  hours: "Lun–Ven 08h–18h",
};

const REALISATIONS = [
  { title: "Villa Duplex - R+1", img: "/realisations/villa-perles.jpg" },
  { title: "École des talents — Ahoué", img: "/realisations/ecole-talents.jpg" },
  { title: "Pont bascule & plateforme d'agglos", img: "/realisations/pont-bascule-plateforme.jpg" },
  { title: "Borea 1", img: "/realisations/borea1.jpg" },
  { title: "Siège BNI (Plateau)", img: "/realisations/bni-siege.jpg" },
  { title: "Borefle", img: "/realisations/borefle.jpg" },
  { title: "Athessa 1", img: "/realisations/athessa1.jpg" },
  { title: "Saint Viateur", img: "/realisations/saint-viateur.jpg" },
];

// ----------------------- Composants UI -----------------------
const TeamCard = ({ name, role, bio }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold">
      {name.split(" ").map((n) => n[0]).join("")}
    </div>
    <h4 className="mt-4 text-lg font-semibold text-slate-800">{name}</h4>
    <p className="text-sm text-slate-500">{role}</p>
    {bio && <p className="mt-3 text-sm text-slate-600 leading-relaxed">{bio}</p>}
  </div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {kicker && <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">{kicker}</div>}
    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
  </div>
);

// ----------------------- Header -----------------------
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo seul, aligné à gauche */}
          <a href="#accueil" className="flex items-center">
            <img
              src="/logo-neoct.jpg"
              alt="NEO Construction & Travaux"
              className="h-16 md:h-20 w-auto select-none"
              draggable="false"
            />
          </a>

          {/* Menu à droite — sans le bouton “Devis” */}
          <nav className="hidden md:flex items-center gap-7 text-base">
            <a href="#accueil"      className="font-semibold text-slate-700 hover:text-slate-900">Accueil</a>
            <a href="#apropos"      className="font-semibold text-slate-700 hover:text-slate-900">À propos</a>
            <a href="#realisations" className="font-semibold text-slate-700 hover:text-slate-900">Réalisations</a>
            <a href="#services"     className="font-semibold text-slate-700 hover:text-slate-900">Services</a>
            <a href="#equipe"       className="font-semibold text-slate-700 hover:text-slate-900">Équipe</a>
            <a href="#contact"      className="font-semibold text-slate-700 hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// ----------------------- Accueil -----------------------
const Hero = () => (
  <section
    id="accueil"
    className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-white scroll-mt-28 mt-3"
  >
    <div className="mx-auto max-w-7xl px-4 pt-3 pb-8">
      <div className="grid items-center gap-6 md:grid-cols-12">
        {/* TEXTE */}
        <div className="md:col-span-5">
          <h1 className="mt-1 text-xl sm:text-2xl font-bold leading-tight text-slate-700">
            Vos projets méritent l’excellence. Construisons ensemble vos ambitions
          </h1>
          <p className="mt-3 text-slate-600">
            Chez NEO CONSTRUCTION ET TRAVAUX, chaque projet est une histoire de passion, de précision et d’engagement.
            De la villa moderne au bâtiment industriel, nous transformons vos idées en réalisations solides, élégantes et durables.
            Innovation, Qualité et Confiance sont les fondations de notre savoir-faire.
            Avec NEO CT, votre vision prend forme, brique après brique, avec exigence et fierté.
            <br />
            Cocody II-Plateaux, 7ᵉ Tranche – Les Oscars
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Bonjour%20NEO%20CT%2C%20je%20souhaite%20un%20devis`}
              className="inline-flex items-center rounded-xl bg-green-600 px-4 py-2 text-white shadow-md hover:bg-green-700"
            >
              Demander un devis WhatsApp
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>

        {/* IMAGE — hauteur limitée + cadrage propre */}
        <div className="md:col-span-7">
          <div className="w-full max-w-[680px] overflow-hidden rounded-3xl shadow-xl">
            {/* Choisis l’une des 2 lignes ci-dessous */}

            {/* Option A: hauteur fixe (compact) */}
            <img
              src="/hero-neoct.jpg"
              alt="Chantier NEO CT"
              className="h-64 sm:h-72 md:h-80 w-full object-cover"
              loading="eager"
              decoding="async"
            />

            {/* Option B: ratio fixe (désactive l’option A si tu prends celle-ci)
            <div className="aspect-[16/9]">
              <img
                src="/hero-neoct.jpg"
                alt="Chantier NEO CT"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            */}
          </div>

          <div className="mt-3 rounded-xl bg-white/70 px-4 py-2 text-sm text-slate-700 shadow">
            Qualité • Délais • Sécurité — Engagement chantier
          </div>
        </div>
      </div>
    </div>
  </section>
);


// ----------------------- À propos -----------------------
// ————— À PROPOS —————
const Apropos = () => (
  <section id="apropos" className="bg-white scroll-mt-28">
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid items-start gap-6 md:gap-8 md:grid-cols-12">

        {/* Photo (colonne gauche) */}
        <div className="md:col-span-4">
          {/* Wrapper pour limiter largeur + hauteur et garder un joli cadrage */}
          <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl shadow">
            <img
              src="/Gui Alain BAHIBO.jpg"
              alt="Gui Alain BAHIBO — Directeur Général de NEO Construction & Travaux"
              className="h-72 sm:h-80 md:h-[22rem] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Texte (colonne droite) */}
        <div className="md:col-span-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Mot du Directeur Général
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            Nous avons créé NEO CONSTRUCTION ET TRAVAUX (NEO CT) avec une conviction simple :
            offrir une approche nouvelle de la construction, fondée sur la rigueur, la transparence
            et la passion du travail bien fait. Depuis 2019, nous accompagnons nos clients dans la
            réalisation de projets ambitieux, en alliant innovation, exigence et respect des
            engagements.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Notre croissance repose sur des professionnels dévoués, unis par la même exigence du
            travail bien fait et le respect des valeurs&nbsp;: intégrité, professionnalisme et
            engagement envers nos clients.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Notre ambition est claire&nbsp;: devenir une référence nationale dans la construction
            et les travaux publics, en plaçant toujours l’humain, la performance et la satisfaction
            client au cœur de nos priorités.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Bâtir avec exigence, livrer avec fierté, réussir ensemble — telle est notre vision.
          </p>

          <div className="mt-6">
            <div className="text-slate-800">Gui Alain BAHIBO – Directeur Général</div>
            <div className="font-semibold text-slate-900">
              NEO CONSTRUCTION ET TRAVAUX
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ----------------------- Réalisations -----------------------
const Realisations = () => (
  <section id="realisations" className="bg-slate-50 scroll-mt-28">
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Réalisations</h2>
      <p className="mt-2 text-slate-600">Quelques chantiers livrés par nos équipes.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Borefle", img: "/realisations/borefle.jpg" },
          { title: "Villa Perles", img: "/realisations/villa-perles.jpg" },
          // ajoute ici tes autres images…
        ].map((r) => (
          <figure key={r.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src={r.img}
              alt={r.title}
              width="1200" height="800"
              className="h-44 w-full object-cover rounded-t-2xl"
              loading="lazy" decoding="async"
            />
            <figcaption className="px-4 py-3 text-slate-800">{r.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

// ----------------------- Services -----------------------
const ServicesSection = () => (
  <section id="services" className="bg-white scroll-mt-28">
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Nos services</h2>
      <p className="mt-2 text-slate-600">Études, exécution, finitions — clé en main.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { t: "Gros œuvre", d: "Fondations, voiles, dalles, structures en béton armé." },
          { t: "Second œuvre", d: "Maçonnerie, cloisonnement, électricité, plomberie." },
          { t: "Finitions", d: "Carrelage, peinture, menuiserie, étanchéité, façades." }
        ].map((s) => (
          <div key={s.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{s.t}</h3>
            <p className="mt-2 text-slate-600">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ----------------------- Équipe -----------------------
const Equipe = () => (
  <section id="equipe" className="bg-slate-50 scroll-mt-28">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle kicker="Équipe" title="Des professionnels engagés" subtitle="Encadrement expérimenté et équipes opérationnelles qualifiées." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <TeamCard name="Armond Zouho" role="Gérant — Direction générale" bio="Supervision des opérations, relation clients et pilotage qualité/coûts/délais." />
        <TeamCard name="Équipe Technique" role="Conducteurs de travaux & Techniciens supérieurs" bio="Planification, suivi de chantier, sécurité, métrés et contrôle d’exécution." />
        <TeamCard name="Support & Logistique" role="Achats • Comptabilité • RH" bio="Approvisionnements, gestion administrative et support aux équipes terrain." />
      </div>
    </div>
  </section>
);

// ----------------------- Contact -----------------------
const Contact = () => (
  <section id="contact" className="bg-white scroll-mt-28">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle kicker="Contact" title="Parlons de votre projet" subtitle="Réponse sous 24–48h ouvrées. Nous pouvons aussi organiser une visite technique sur site." />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-slate-900">Coordonnées</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li><span className="font-medium">Adresse</span>: {COMPANY.address}</li>
            <li><span className="font-medium">Téléphone / WhatsApp</span>: {COMPANY.phone}</li>
            <li><span className="font-medium">Email</span>: {COMPANY.email}</li>
            <li><span className="font-medium">Horaires</span>: {COMPANY.hours}</li>
          </ul>
          <a
            href={`mailto:${COMPANY.email}?subject=Demande%20de%20devis%20NEO%20CT`}
            className="mt-5 inline-flex rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Écrire un e-mail
          </a>
          {COMPANY.whatsapp && (
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Bonjour%20NEO%20CT%2C%20je%20souhaite%20un%20devis.`}
              target="_blank" rel="noreferrer"
              className="ml-3 inline-flex rounded-xl bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
            >
              WhatsApp
            </a>
          )}
        </div>
        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <h4 className="text-lg font-semibold text-slate-900">Formulaire rapide</h4>
          <div className="mt-4 grid gap-4">
            <div>
              <label className="text-sm text-slate-700">Nom complet</label>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Votre nom" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-700">Téléphone</label>
                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Ex: +225…" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" placeholder="exemple@mail.com" />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-700">Objet</label>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Demande de devis" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Décrivez brièvement votre projet (type d’ouvrage, surface, délais)…" />
            </div>
            <button className="inline-flex justify-center rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Envoyer</button>
            <p className="text-xs text-slate-500">*Formulaire démo (sans backend). Utilisez Formspree, EmailJS ou votre API.</p>
          </div>
        </form>
      </div>
    </div>
  </section>
);

// ----------------------- Footer -----------------------
const Footer = () => (
  <footer className="border-t bg-white">
    <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div>© {new Date().getFullYear()} NEO Construction & Travaux — Tous droits réservés.</div>
      <div className="flex items-center gap-4">
        <a href="#apropos" className="hover:text-blue-600">À propos</a>
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </div>
  </footer>
);

// ----------------------- Export page -----------------------
export default function NeoCTSite() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <Hero />
      <Apropos />
      <Realisations />
      <ServicesSection />
      <Equipe />
      <Contact />
      <Footer />
    </div>
  );
}
