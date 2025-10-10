import React, { useState } from "react";

/**
 * NEO CONSTRUCTION ET TRAVAUX — Site vitrine (One‑Page)
 * Framework: React + Tailwind (v4 ok)
 * Sections: Accueil, À propos, Réalisations, Services, Équipe, Contact
 * NOTE: Pas de section "Projets en cours & à venir".
 */

// ----------------------- Données du site -----------------------
const NAV = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "realisations", label: "Réalisations" },
  { id: "services", label: "Services" },
  { id: "equipe", label: "Équipe" },
  { id: "contact", label: "Contact" },
];

const COMPANY = {
  name: "NEO Construction & Travaux",
  address: "Cocody 7e Tranche, Les Oscars — Abidjan, Côte d’Ivoire",
  phone: "+225 XX XX XX XX",
  email: "contact@neo-ct.ci",
  whatsapp: "225XXXXXXXXX", // ex: 2250707070707 (optionnel)
  hours: "Lun–Ven 08h–18h",
};

const STAT_ITEMS = [
  { label: "Année de création", value: "2016" },
  { label: "Chiffre d'affaires", value: "489 M FCFA" },
  { label: "Chantiers livrés", value: "30+" },
  { label: "Équipe", value: "12 permanents + 50 saisonniers" },
];

const REALISATIONS = [
  { title: "Villa Duplex - R+1", desc: "Villa Duplex - 2Plateux Les perles", tag: "Résidentiel", img: "/realisations/villa-perles.jpg" },
  { title: "École des talents — Ahoué", desc: "Ouvrage public éducatif.", tag: "Institutionnel", img: "/realisations/ecole-talents.jpg" },
  { title: "Pont bascule & plateforme d'agglos", desc: "Ouvrages techniques et industriels.", tag: "Industriel", img: "/realisations/pont-bascule-plateforme.jpg" },
  { title: "Borea 1", desc: "Carrelage 15 villas duplex 5 pièces + guérite d’entrée.", tag: "Finition", img: "/realisations/borea1.jpg" },
  { title: "Siège BNI (Plateau)", desc: "Carrelage zone B — chantier tertiaire.", tag: "Tertiaire", img: "/realisations/bni-siege.jpg" },
  { title: "Borefle", desc: "11 villas duplex 5 pièces.", tag: "Résidentiel", img: "/realisations/borefle.jpg" },
  { title: "Athessa 1", desc: "Immeuble R+3.", tag: "Résidentiel collectif", img: "/realisations/athessa1.jpg" },
  { title: "Saint Viateur", desc: "Immeuble R+2 (11 pièces + garage).", tag: "Résidentiel collectif", img: "/realisations/saint-viateur.jpg" },
];

const SERVICES = [
  { title: "Construction clé en main", desc: "De l’étude à la livraison : gros œuvre, second œuvre, coordination et contrôle qualité." },
  { title: "Fourniture & Pose", desc: "Carrelage, menuiserie, plomberie, électricité et finitions haut de gamme." },
  { title: "Travaux de main‑d’œuvre", desc: "Équipes qualifiées et encadrement pour interventions ciblées ou renforts de chantier." },
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

const Stat = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
    <div className="text-2xl font-bold text-slate-900">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
  </div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {kicker && <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">{kicker}</div>}
    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#accueil" className="flex items-center gap-2">
          <img src="/logo-neoct.jpg" alt="NEO Construction & Travaux" className="h-24 md:h-28 w-auto object-contain" />
          <span className="sr-only">NEO Construction & Travaux</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-blue-600">{n.label}</a>
          ))}
          <a href="#contact" className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Devis</a>
        </nav>
        <button aria-label="Ouvrir le menu" className="md:hidden rounded-lg border px-3 py-2 text-slate-700" onClick={() => setOpen(!open)}>
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm text-slate-700">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="py-1" onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <a href="#contact" className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white w-max" onClick={() => setOpen(false)}>Demander un devis</a>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-white">
    <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div className="grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">NEO Construction & Travaux</div>
          <h1 className="mt-2 text-xl sm:text-2xl md:text-4xl font-extrabold leading-snug text-slate-900">
            Des professionnels pour transformer vos projets en réalisations durables
          </h1>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Entreprise basée à Cocody 7e Tranche (Les Oscars), NEO CT conçoit et
            realise des ouvrages résidentiels, tertiaires et industriels dans les regles de l'art.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/30">
              Demander un devis
            </a>
            <a href="#realisations" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 font-semibold shadow-sm hover:bg-slate-50">
              Voir nos réalisations
            </a>
          </div>
        </div>
        <div className="relative md:col-span-7">
          <div
            className="aspect-[16/10] w-full rounded-3xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url('/hero-neoct.jpg')` }}
          />
          <div className="absolute -right-6 -bottom-6 hidden sm:block rounded-2xl border border-slate-200 bg-white/90 p-4 backdrop-blur shadow">
            <div className="text-xs text-slate-500">Qualité • Délais • Sécurité</div>
            <div className="text-sm font-semibold text-slate-800">Engagement chantier</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Apropos = () => (
  <section id="apropos" className="bg-white">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle
        kicker="À propos"
        title="Bâtir durablement, servir avec exigence"
        subtitle="NEO CT est une SARL ivoirienne spécialisée en BTP depuis 2016. Nous intervenons sur des villas, immeubles, bureaux et ouvrages techniques, avec une chaîne de valeur complète : études, gros œuvre, second œuvre et finitions."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STAT_ITEMS.map((s) => (
          <Stat key={s.label} label={s.label} value={s.value} />
        ))}
      </div>
    </div>
  </section>
);

const Realisations = () => (
  <section id="realisations" className="bg-slate-50">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle
        kicker="Réalisations"
        title="Des chantiers livrés avec soin"
        subtitle="Une sélection de projets représentatifs. Photos et détails pourront être ajoutés au fur et à mesure."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REALISATIONS.map((r) => (
          <article key={r.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div
              className="aspect-[4/3] w-full bg-slate-100 group-hover:opacity-95 transition bg-cover bg-center"
              style={{ backgroundImage: `url(${r.img})` }}
            />
            <div className="p-5">
              <div className="text-xs font-medium text-blue-600">{r.tag}</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{r.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="bg-white">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle kicker="Services" title="Nos domaines d’intervention" subtitle="Des offres adaptées à la nature de votre projet et à vos délais." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 font-bold">✓</div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-blue-900">
        <p className="text-sm">
          Besoin d’un devis détaillé (plans, quantitatifs, délais) ? Contactez‑nous via le formulaire ci‑dessous ou par WhatsApp.
        </p>
      </div>
    </div>
  </section>
);

const Equipe = () => (
  <section id="equipe" className="bg-slate-50">
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

const Contact = () => (
  <section id="contact" className="bg-white">
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
            Écrire un e‑mail
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
