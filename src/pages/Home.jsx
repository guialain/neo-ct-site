// src/pages/Home.jsx
import React, { useState, useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FileText, X, ChevronUp } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import PartnersCarousel from "../components/PartnersCarousel";
import InlineCarousel from "../components/InlineCarousel";

// Hook pour détecter l'entrée dans le viewport
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// Image fixe du héros (retirée du carousel)
const HERO_STATIC_IMAGE = { type: "image", src: "/media/hero/equipe-neoct.jpg", alt: "Équipe NEO CT" };

// Médias du héros (carousel)
const MEDIA = [
  { type: "image", src: "/media/hero/villas-boreflet.jpg", alt: "villas boreflet" },
  { type: "image", src: "/media/hero/facade3D-perles.jpg", alt: "facade3D Perles" },
  { type: "video", src: "/media/hero/coulage-dalle-perles.mp4", poster: "/media/hero/coulage-dalle-perles.jpg", alt: "Dalle Villa Perles" },
  { type: "image", src: "/media/hero/facade-perles.jpg", alt: "Facade Villa Perles" },
  { type: "image", src: "/media/hero/engin-chantier.jpg", alt: "Pompe Beton" },
  { type: "image", src: "/media/hero/dalle-boreflet.jpg", alt: "Dalle R+3 Boreflet" },
];

// Projets réalisés
const PROJECTS = [
  {
    id: "villa-perles",
    title: "VILLA PERLES",
    subtitle: "Villa haut standing – clé en main",
    location: "Riviera • 2022",
    media: [
      { type: "image", src: "/real/villa-perles/IMG_8143.JPEG" },
      { type: "image", src: "/real/villa-perles/IMG_8152.JPEG" },
      { type: "image", src: "/real/villa-perles/perles-photo1.jpg" },
      { type: "video", src: "/real/villa-perles/perles-video1.mp4" },
      { type: "video", src: "/real/villa-perles/perles-video2.mp4" },
      { type: "video", src: "/real/villa-perles/perles-video3.mp4" },
    ],
  },
  {
    id: "ahoue",
    title: "AHOUE",
    subtitle: "Ensemble résidentiel – gros œuvre & finitions",
    location: "Cocody • 2024",
    media: [
      { type: "image", src: "/real/ahoue/1.jpg" },
      { type: "image", src: "/real/ahoue/2.JPEG" },
      { type: "image", src: "/real/ahoue/3.jpg" },
      { type: "image", src: "/real/ahoue/4.JPEG" },
    ],
  },
  {
    id: "bo-reflets",
    title: "BO REFLETS",
    subtitle: "Construction Gros Oeuvre de 24 Villas",
    location: "Cocody • Angre",
    media: [
      { type: "image", src: "/real/bo-reflets/1.JPEG" },
      { type: "image", src: "/real/bo-reflets/2.JPEG" },
      { type: "image", src: "/real/bo-reflets/3.jpg" },
      { type: "image", src: "/real/bo-reflets/4.JPEG" },
      { type: "image", src: "/real/bo-reflets/5.jpeg" },
    ],
  },
  {
    id: "bo-real",
    title: "BO REAL",
    subtitle: "Bâtiment tertiaire – R+2",
    location: "Marcory • 2023",
    media: [
      { type: "image", src: "/real/bo-real/1.JPEG" },
      { type: "image", src: "/real/bo-real/2.JPEG" },
      { type: "image", src: "/real/bo-real/3.JPEG" },
    ],
  },
  {
    id: "r1-attoban",
    title: "R+1 ATTOBAN",
    subtitle: "Extension & réhabilitation",
    location: "Attoban • 2022",
    media: [
      { type: "image", src: "/real/r1-attoban/1.JPEG" },
      { type: "image", src: "/real/r1-attoban/2.JPEG" },
      { type: "image", src: "/real/r1-attoban/3.JPEG" },
      { type: "image", src: "/real/r1-attoban/4.JPEG" },
    ],
  },
  {
    id: "r3-attessa",
    title: "R+3 ATTESSA",
    subtitle: "Immeuble d'habitation – travaux TCE",
    location: "Angré • 2021",
    media: [
      { type: "image", src: "/real/r3-attessa/1.JPEG" },
      { type: "image", src: "/real/r3-attessa/2.JPEG" },
      { type: "image", src: "/real/r3-attessa/3.JPEG" },
      { type: "video", src: "/real/r3-attessa/r3-attessa-coulage.mp4" },
    ],
  },
];

// Équipe
const TEAM = [
  {
    id: "bahibo",
    name: "Gui Alain BAHIBO",
    role: "Directeur Général – Fondateur",
    photo: "/Gui%20Alain%20BAHIBO.jpg",
    summary:
      "Leadership, stratégie & vision : pilote la croissance de l'entreprise et veille à la réalisation des objectifs.",
    resumeText:
      "Diplômé d'un Master en Management (SKEMA) et Ingénieur en statistiques et économie appliquée (ENSEA), Gui Alain BAHIBO a construit une solide connaissance de l'entreprise au fil de 17 années en corporate banking entre la Côte d'Ivoire, Londres et la région africaine. Chez Standard Chartered, Société Générale, Ecobank puis BACB, il a progressivement relié l'analyse du risque, la relation client et la structuration de financements pour des acteurs publics et privés. Cette trajectoire lui a appris à clarifier les besoins, orchestrer des équipes et transformer des contraintes complexes en solutions exécutables. NEO CT est né de cette exigence et d'une inspiration puisée chez de grands bâtisseurs du secteur privé : donner une forme durable à l'ambition des clients en conciliant qualité, délais et maîtrise des coûts, avec la même rigueur que dans la banque."
  },
  {
    id: "guiro",
    name: "Ben Alvine GUIRO",
    role: "Directeur Projets, DG BAHIBO & CO",
    photo: "/Ben%20Alvine%20GUIRO.jpg",
    summary:
      "Direction de projets : études d'exécution, coordination de chantier ; veille au respect de la qualité, des coûts et des délais.",
    resumeText:
      "Il bénéficie de 15+ ans d'expérience en France, au Togo et au Ghana dans les métiers des travaux, de la logistique et de la cybersécurité. Il a notamment évolué au sein du Groupe La Poste (France) et piloté, en tant que chef de projet, la rénovation de l'Université de Lomé. Fondateur de BAHIBO & CO, entreprise sœur de NEO CT, qu'il dirige en qualité de Gérant, il assure chez NEO CT la direction des projets de l'étude à la livraison. Manager de terrain, il encadre 15 collaborateurs permanents (ingénieurs & techniciens) et 55+ ouvriers contractuels. Habitué des environnements multi-acteurs (MOA, MOE, BET, entreprises, contrôle technique), il sécurise qualité, coûts et délais grâce à une planification rigoureuse et une gestion proactive des risques."
  },
  {
    id: "guilahou",
    name: "Marcel Olivier GUILAHOU",
    role: "Directeur Développement Commercial",
    photo: "/Marcel%20Olivier%20GUILAHOU.jpg",
    summary:
      "Développement commercial : prospection, appels d'offres, partenariats & croissance.",
    resumeText:
      "GUILAHOU GBEHE Marcel Olivier bénéficie de plus de dix années d'expérience en développement commercial entre la Côte d'Ivoire et le Ghana. En Côte d'Ivoire, il débute dans la distribution de matériaux de construction chez ABC Services, où il apprend le terrain : cycle commande–livraison, gestion des marges, qualité de service. À Accra, il poursuit chez GREYTONE Construction Ltd comme chargé de portefeuille pendant trois ans, reliant plus étroitement besoin client, proposition technique et exécution. Il prend ensuite la gérance d'Ezo Building Construction Company pendant cinq ans, structurant l'activité et renforçant les relations avec les maîtres d'ouvrage. En 2020, il rejoint SDTS, aujourd'hui au service du développement de NEO CT, avec une approche constante : comprendre précisément, calibrer justement et accompagner jusqu'à la réception. Diplômé en 2009 d'Ingénieur en Finance et Marketing (spécialisation gestion de projets, analyse financière, stratégies de marché), il met sa connaissance des cycles BTP et sa culture client au profit de partenariats durables."
  },
  {
    id: "zouho",
    name: "Mea Armond ZOUHO",
    role: "Responsable comptable & financier",
    photo: "/Mea%20Armond%20ZOUHO.jpg",
    summary:
      "Comptabilité, finance & trésorerie : paie, fiscalité, trésorerie, immobilisations et états financiers.",
    resumeText:
      "Titulaire d'un BTS Finances–Comptabilité (ESAM Plateau, 2009–2010), Mea Armond ZOUHO a construit son expérience au croisement de la comptabilité opérationnelle et des exigences de conformité. D'abord comptable transit chez Athena Shipping SA (2012–2017), il y a assuré la tenue des journaux, les rapprochements bancaires et la préparation des contrôles, en maîtrisant les spécificités du SYSCOA/OHADA et du cycle trésorerie. Depuis 2018, il est comptable chez NEO Construction & Travaux, où il pilote la paie, les déclarations fiscales et sociales, la gestion de la liquidité (encaissements/paiements), le suivi des immobilisations (inventaire, fiches individuelles, amortissements) et la production des états financiers jusqu'à la préparation des audits et contrôles fiscaux. Cette trajectoire l'a conduit à relier rigueur comptable et visibilité opérationnelle, pour offrir aux chantiers des chiffres fiables, lisibles et actionnables."
  }
];

// Modal équipe
function ResumeModal({ open, onClose, member }) {
  if (!open || !member) return null;

  return (
    <div className="fixed inset-0 z-50 animate-fadeIn">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md" 
        onClick={onClose} 
      />
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
        <div className="w-full max-w-2xl max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col transform transition-all">
          {/* Header avec gradient */}
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 px-4 sm:px-6 py-4 sm:py-5 shrink-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-orange-50 mt-1">
                  {member.role}
                </p>
              </div>
              <button
                onClick={onClose}
                className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all shrink-0 group"
                aria-label="Fermer"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 bg-gradient-to-b from-white to-slate-50">
            <div className="prose prose-slate max-w-none">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                {member.resumeText}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white active:scale-95 transition-all shadow-sm hover:shadow-lg text-sm sm:text-base font-semibold"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openTeamId, setOpenTeamId] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentTeamMember = TEAM.find((m) => m.id === openTeamId) || null;

  // Animations au scroll
  const [heroRef, heroInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [realisationsRef, realisationsInView] = useInView();
  const [teamRef, teamInView] = useInView();
  const [contactRef, contactInView] = useInView();

  // Gérer l'affichage du bouton "Retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- SEO (URL / images OG) ---
  const site = "https://www.neoct.ci";
  const url = `${site}/`;
  const og = `${site}/og/home-1200x630.jpg`;
  const brand = "NEO CONSTRUCTION ET TRAVAUX";
  const email = "marketing@neoct.ci";
  const phoneCall = "+2250576428643";
  const phoneWhats = "2250576428643";

  // URLs des réseaux sociaux
  const socialLinks = {
    facebook: "https://www.facebook.com/neoct.ci",
    instagram: "https://www.instagram.com/neoctci",
    tiktok: "https://www.tiktok.com/@neoctci",
  };

  const address = {
    street: "Cocody 7ᵉ Tranche – Les Oscars",
    city: "Abidjan",
    country: "CI",
    lat: 5.39413,
    lng: -3.98997,
    label: "NEO CONSTRUCTION ET TRAVAUX",
  };

  // --- WhatsApp ---
  const msgMobile =
    "Bonjour NEO CT 👋, je souhaite échanger à propos de mon projet (budget, délais, localisation).";
  const appUrl = `whatsapp://send?phone=${phoneWhats}&text=${encodeURIComponent(msgMobile)}`;
  const webUrl = `https://wa.me/${phoneWhats}?text=${encodeURIComponent(msgMobile)}`;

  const openWhatsApp = useCallback((e) => {
    e.preventDefault();
    const t0 = Date.now();
    window.location.href = appUrl;
    setTimeout(() => {
      if (Date.now() - t0 < 1200) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
    }, 800);
  }, []);

  // --- Formulaire Contact (mailto) ---
  const onSubmitMailto = useCallback(
    (e) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const nom = (fd.get("name") || "").toString().trim();
      const tel = (fd.get("tel") || "").toString().trim();
      const sujet = (fd.get("subject") || "Demande d'information").toString();
      const message = (fd.get("message") || "").toString();

      const body =
        `Nom: ${nom}\n` +
        (tel ? `Téléphone: ${tel}\n` : "") +
        `\nMessage:\n${message}\n`;

      const mailto = `mailto:${email}?subject=${encodeURIComponent(
        sujet
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    },
    [email]
  );

  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="fr" />
        <title>NEO Construction & Travaux — Entreprise BTP à Abidjan</title>
        <meta
          name="description"
          content="NEO CT conçoit et réalise des ouvrages résidentiels, tertiaires et industriels en Côte d’Ivoire. Qualité, délais, sécurité — engagement chantier."
        />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="NEO Construction & Travaux" />
        <meta property="og:title" content="NEO Construction & Travaux — Entreprise BTP à Abidjan" />
        <meta property="og:description" content="Études, exécution, finitions — clé en main en Côte d’Ivoire." />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={og} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NEO Construction & Travaux — BTP" />
        <meta name="twitter:description" content="Qualité, délais, sécurité — engagement chantier." />
        <meta name="twitter:image" content={og} />

        {/* JSON-LD (Organization + Website) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ConstructionCompany",
            name: "NEO Construction & Travaux",
            url: site,
            logo: `${site}/logo-neoct.jpg`,
            image: `${site}/hero-neoct.jpg`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Cocody, 7e Tranche - Les Oscars",
              addressLocality: "Abidjan",
              addressCountry: "CI",
            },
            telephone: "+225",
            areaServed: "CI",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: site,
            name: "NEO Construction & Travaux",
            potentialAction: {
              "@type": "SearchAction",
              target: `${site}/realisations?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>

      <main className="bg-white overflow-x-hidden">
        {/* ===== HÉRO ENCADRÉ ===== */}
        <section 
          ref={heroRef}
          className={`mx-auto max-w-7xl px-3 sm:px-4 pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-12 w-full transition-all duration-1000 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/70 w-full">
            <div className="grid items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 md:grid-cols-12 p-3 sm:p-4 md:p-6 lg:p-8 w-full">
              {/* TEXTE (6/12) */}
              <div className="order-2 md:order-1 md:col-span-6 w-full min-w-0">
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 break-words">
                  NEO CONSTRUCTION & TRAVAUX
                </p>

                <h1 className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight break-words">
                  Vos projets méritent le meilleur.
                </h1>

                <div className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-[0.95rem] md:text-base text-slate-700 leading-relaxed break-words text-justify space-y-3 sm:space-y-4">
                  <p>
                    NEO CT conçoit, coordonne et réalise des ouvrages pour particuliers, entreprises et maîtres d'ouvrage publics. Villas modernes, immeubles R+, plateaux de bureaux, écoles, locaux commerciaux, carrelage de grandes surfaces : nous mobilisons des équipes expérimentées (ingénieur, techniciens supérieurs, architectes) et un réseau d'ateliers/fabricants pour des réalisations durables.
                  </p>

                  <div>
                    <p className="font-semibold text-slate-900">Nos domaines d'intervention</p>
                    <ul className="mt-1 space-y-1 list-disc list-inside">
                      <li>
                        <span>Gros œuvre</span> : Structure du bâtiment, Fondations, Maçonnerie, Dalles BA, Voiles, Murs porteurs, Charpente.
                      </li>
                      <li>
                        <span>Second œuvre</span> : Isolation, Electricité, Plomberie, Cloisons, Revêtements, Menuiseries.
                      </li>
                      <li>Aménagement intérieur/extérieur, VRD et petits ouvrages techniques.</li>
                      <li>Remise à niveau de bâtiments existants et finitions de plateaux tertiaires.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">Notre manière de faire la différence</p>
                    <ul className="mt-1 space-y-1 list-disc list-inside">
                      <li>Étude et chiffrage rapides avec visite technique.</li>
                      <li>Planning partagé, points d'avancement réguliers, report photo.</li>
                      <li>Contrôles sur site (aplomb/niveaux, calepinage, tests d'étanchéité).</li>
                      <li>Sécurité et propreté du chantier au quotidien.</li>
                      <li>Service après-travaux et accompagnement de mise en service.</li>
                    </ul>
                  </div>

                  <span className="text-xs sm:text-sm text-slate-600 block break-words">
                    📍 Cocody II-Plateaux, 7ᵉ Tranche – Les Oscars
                  </span>
                </div>

                <div className="mt-3 sm:mt-4 md:mt-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm w-full">
                  {["Qualité", "Délais", "Sécurité"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-white px-2.5 sm:px-3 py-1 shadow-sm ring-1 ring-slate-200 font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-3 sm:mt-4 md:mt-5 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 w-full">
                  <a
                    href={webUrl}
                    onClick={openWhatsApp}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 sm:py-2 text-sm sm:text-base text-white font-semibold
                               hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/40
                               active:translate-y-[1px] transition whitespace-nowrap w-full sm:w-auto"
                  >
                    <span aria-hidden="true">💬</span>
                    <span>Devis WhatsApp</span>
                  </a>

                  <a
                    href="#realisations"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white px-4 py-2.5 sm:py-2 text-sm sm:text-base font-semibold active:scale-95 transition-all shadow-sm hover:shadow-lg whitespace-nowrap w-full sm:w-auto"
                  >
                    <span>Nos Réalisations</span>
                  </a>

                  {/* Réseaux sociaux - sur la même ligne sur desktop */}
                  <div className="hidden md:flex items-center gap-2 ml-2">
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 active:scale-95"
                      aria-label="Suivez-nous sur Facebook"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 transition-all duration-300 transform hover:scale-110 active:scale-95"
                      aria-label="Suivez-nous sur Instagram"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    <a
                      href={socialLinks.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 active:scale-95"
                      aria-label="Suivez-nous sur TikTok"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* MEDIA (6/12) */}
              <div className="order-1 md:order-2 md:col-span-6 w-full min-w-0 space-y-4">
                {/* Carousel */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200/60 h-[35vh] sm:h-[44vh] md:h-auto w-full">
                  <div className="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_video]:h-full [&_video]:w-full [&_video]:object-cover">
                    <HeroCarousel items={MEDIA} autoPlay interval={5000} />
                  </div>
                </div>

                {/* Image fixe en dessous (visible uniquement sur desktop) */}
                <div className="hidden md:block rounded-xl sm:rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200/60">
                  <img 
                    src={HERO_STATIC_IMAGE.src} 
                    alt={HERO_STATIC_IMAGE.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION SERVICES ===== */}
        <section 
          id="services" 
          ref={servicesRef}
          className="bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="mx-auto max-w-7xl px-3 sm:px-4 py-6 sm:py-8 md:py-10 lg:py-12">
            <div className={`relative mx-auto max-w-3xl text-center mb-8 sm:mb-10 transition-all duration-1000 ${
              servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Texte géant en arrière-plan */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black text-slate-100 opacity-40 whitespace-nowrap select-none">
                  SERVICES
                </span>
              </div>

              {/* Contenu */}
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight uppercase text-slate-900">
                  Nos services
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-900 font-semibold">
                  Un interlocuteur unique, du plan à la livraison
                </p>
              </div>
            </div>

            {/* Services grid */}
            <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* 1) Construction Bâtiment */}
              <article className={`rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 ${
                servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-700 font-semibold text-sm sm:text-base">
                    1
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-orange-700">
                    Construction Bâtiment
                  </h3>
                </div>
                <div className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-slate-700">
                  <p><strong>Périmètre :</strong> villas & duplex, immeubles R+2 à R+4, bureaux/showrooms, rénovations lourdes.</p>
                  <p><strong>Livrables :</strong> métrés détaillés, plans d'exécution, planning jalonné, fiches de contrôle par lot, DOE.</p>
                  <p><strong>Ce que vous gagnez :</strong> finitions maîtrisées, délais tenus, un interlocuteur unique, livraison sans surprise.</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Résidentiel (neuf & réhabilitation)</li>
                    <li>Tertiaire/industriel (aménagements, carrelage technique, cloisons, second œuvre)</li>
                    <li>Rénovation & mise aux normes</li>
                  </ul>
                </div>
              </article>

              {/* 2) Génie civil & VRD */}
              <article className={`rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 ${
                servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-700 font-semibold text-sm sm:text-base">
                    2
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-orange-700">
                    Génie civil &amp; VRD
                  </h3>
                </div>
                <div className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-slate-700">
                  <p><strong>Périmètre :</strong> dalles & fondations, voiries & parkings, réseaux (EU/EP, électricité), drainage.</p>
                  <p><strong>Livrables :</strong> notes de calcul, plans de ferraillage, coupes VRD, protocoles HSE, essais béton/sols.</p>
                  <p><strong>Ce que vous gagnez :</strong> ouvrages durables, gestion des eaux pluviales, accès sécurisés, conformité.</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Plateformes et ouvrages de structure</li>
                    <li>VRD complets (terrassements, réseaux, finitions de surface)</li>
                    <li>Tests & contrôles (planéité, portance, étanchéité)</li>
                  </ul>
                </div>
              </article>

              {/* 3) Clé en main & Pilotage */}
              <article className={`rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 ${
                servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-700 font-semibold text-sm sm:text-base">
                    3
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-orange-700">
                    Clé en main &amp; Pilotage
                  </h3>
                </div>
                <div className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-slate-700">
                  <p><strong>Périmètre :</strong> contractant général (prix global & forfaitaire), OPC, lots techniques (élec/plomberie/CVC), fourniture & pose, maintenance/SAV.</p>
                  <p><strong>Livrables :</strong> planning Gantt, compte-rendu hebdo, registre des points ouverts, schémas unifilaires & plans réseaux, fiches essais/mesures, garanties fabricants.</p>
                  <p><strong>Ce que vous gagnez :</strong> décision rapide, traçabilité complète, un seul responsable du résultat, continuité d'activité.</p>
                </div>
              </article>
            </div>

            {/* Process en 5 étapes */}
            <div className="hidden md:block mt-8 sm:mt-10 md:mt-12">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">
                Process en 5 étapes
              </h3>

              {/* Grille responsive */}
              <ol className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  { t: "Prise de brief & visite", d: "Compréhension du besoin" },
                  { t: "Avant-Projet & chiffrage", d: "Devis clair et délais associés" },
                  { t: "Lancement & préparation", d: "Planning détaillé, approvisionnement" },
                  { t: "Exécution & contrôle", d: "Suivi qualité, comptes-rendus" },
                  { t: "Réception & garanties", d: "Mise en service, levée de réserves" },
                ].map((step, i) => (
                  <li
                    key={i}
                    className="h-full rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 sm:gap-3"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-1">
                      <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-orange-600 text-white text-xs sm:text-sm font-semibold">
                        {i + 1}
                      </span>
                      <div className="font-medium text-slate-900 text-sm sm:text-base lg:whitespace-nowrap min-h-[1.5rem] flex items-center">{step.t}</div>
                    </div>
                    <div className="text-slate-600 text-xs sm:text-sm pl-[calc(1.75rem+0.5rem)] sm:pl-[calc(2rem+0.75rem)] lg:pl-[calc(2rem+0.25rem)]">{step.d}</div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Besoins Optionnels */}
            <div className="hidden md:block mt-8 sm:mt-10 md:mt-12">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">
                Besoins Optionnels
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {/* Case 1 */}
                <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 hover:shadow-sm transition-shadow">
                  <p className="text-sm sm:text-base text-slate-700 m-0">
                    <strong>Pré-projet :</strong> études géotechniques, faisabilité technico-éco, estimation budgétaire, planning cible, analyse de risques, recommandation du mode contractuel.
                  </p>
                </div>

                {/* Case 2 */}
                <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 hover:shadow-sm transition-shadow">
                  <p className="text-sm sm:text-base text-slate-700 m-0">
                    <strong>Conception :</strong> APS → APD → PRO (architecte + BET structures/VRD/fluide), notices techniques, CCTP, DPGF/BPU, plans d'exécution, dossier d'autorisation/permis.
                  </p>
                </div>

                {/* Case 3 */}
                <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 hover:shadow-sm transition-shadow">
                  <p className="text-sm sm:text-base text-slate-700 m-0">
                    <strong>Consultations :</strong> préparation DCE, lancement AO, visites de site, analyse technique &amp; financière, négociations, recommandations, rédaction/visa des marchés, préparation des OS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION IMAGE DÉCORATIVE ===== */}
        <section className="relative h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden">
          {/* Image de fond - effet parallax désactivé sur mobile, activé sur desktop */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
            style={{
              backgroundImage: 'url(/section-bg.jpg)',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay sombre pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/30"></div>
          </div>
          
          {/* Contenu optionnel */}
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            {/* Vous pouvez ajouter du contenu ici si nécessaire */}
          </div>
        </section>

        {/* ===== SECTION RÉALISATIONS ===== */}
        <section 
          id="realisations" 
          ref={realisationsRef}
          className="bg-white border-y border-slate-200"
        >
          <div className="mx-auto max-w-7xl px-3 sm:px-4 py-10 sm:py-14 md:py-16 lg:py-20">
            <div className={`relative mx-auto max-w-3xl text-center mb-8 sm:mb-10 transition-all duration-1000 ${
              realisationsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Texte géant en arrière-plan */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black text-slate-100 opacity-40 whitespace-nowrap select-none">
                  REALISATIONS
                </span>
              </div>

              {/* Contenu */}
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight uppercase text-slate-900">
                  Nos réalisations
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-900 font-semibold">
                  Une sélection de chantiers livrés
                </p>
              </div>
            </div>

            {/* Version mobile : 3 projets */}
            <div className="grid gap-4 grid-cols-1 sm:hidden">
              {PROJECTS.slice(0, 3).map((p, index) => (
                <article 
                  key={p.id} 
                  className={`rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                    realisationsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <InlineCarousel items={p.media} aspect="video" />

                  <div className="px-3 py-2">
                    <div className="flex items-center gap-2 text-xs">
                      <h3 className="font-bold text-slate-900 truncate">{p.title}</h3>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600 truncate">{p.subtitle}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 whitespace-nowrap">{p.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Version desktop : 4 projets */}
            <div className="hidden sm:grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
              {PROJECTS.slice(0, 4).map((p, index) => (
                <article 
                  key={p.id} 
                  className={`rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                    realisationsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <InlineCarousel items={p.media} aspect="video" />

                  <div className="px-3 py-2 sm:px-4 sm:py-2.5">
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <h3 className="font-bold text-slate-900 truncate">{p.title}</h3>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600 truncate">{p.subtitle}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 whitespace-nowrap">{p.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/realisations"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white px-5 py-2.5 text-sm sm:text-base font-semibold active:scale-95 transition-all shadow-sm hover:shadow-lg"
              >
                Voir tous nos projets
              </a>
            </div>
          </div>
        </section>

        {/* ===== SECTION À PROPOS ===== */}
        <section 
          id="apropos" 
          ref={aboutRef}
          className="bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="mx-auto max-w-7xl px-3 sm:px-4 py-10 sm:py-14 md:py-16 lg:py-20">
            <div className={`relative mx-auto max-w-3xl text-center mb-8 sm:mb-10 transition-all duration-1000 delay-100 ${
              aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Texte géant en arrière-plan */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black text-slate-100 opacity-40 whitespace-nowrap select-none">
                  APROPOS
                </span>
              </div>
 
              {/* Contenu */}
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight uppercase text-slate-900">
                  À propos
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-900 font-semibold">
                  Bâtir avec exigence, livrer avec fierté
                </p>
              </div>
            </div>

            <div className={`grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-12 items-start transition-all duration-1000 delay-300 ${
              aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="md:col-span-3">
                <div className="mx-auto md:mx-0 w-full max-w-[280px] md:max-w-full">
                  <img
                    src="/Gui%20Alain%20BAHIBO.jpg"
                    alt="Gui Alain BAHIBO — Directeur Général"
                    className="w-full h-auto rounded-xl sm:rounded-2xl border border-slate-200 shadow-md object-cover aspect-[3/4]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Mot du Directeur Général</h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  Nous avons créé NEO CONSTRUCTION ET TRAVAUX (NEO CT) avec une conviction simple : apporter une approche exigeante et transparente de la construction, au service de projets durables, exécutés dans les règles de l'art. Depuis 2019, nous accompagnons nos clients – particuliers, entreprises et institutions – de l'étude à la livraison, avec un interlocuteur unique et des engagements tenus sur le coût, les délais et la qualité.
                </p>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  Notre croissance s'appuie sur une équipe de professionnels dévoués, des méthodes rigoureuses et des partenariats solides. Chaque chantier est préparé avec soin : planification claire, coordination des corps d'État, contrôles qualité à chaque étape et reporting régulier. Cette discipline opérationnelle, alliée à notre sens du détail, fait la différence sur le terrain.
                </p>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  Nos valeurs sont constantes : intégrité, professionnalisme, engagement. Elles guident nos décisions et nourrissent la confiance de nos clients. Notre ambition est claire : devenir une référence nationale dans la construction et les travaux publics, en livrant des ouvrages qui créent de la valeur dans le temps.
                </p>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  Merci à nos clients et partenaires pour leur confiance. Nous sommes prêts à bâtir, avec vous, les prochaines réalisations.
                </p>

                <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  <strong>Gui Alain BAHIBO</strong><br />
                  Directeur Général — NEO CONSTRUCTION ET TRAVAUX (NEO CT)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION ÉQUIPE ===== */}
        <section 
          id="equipe" 
          ref={teamRef}
          className="bg-white border-y border-slate-200"
        >
          <div className="mx-auto max-w-7xl px-3 sm:px-4 py-10 sm:py-14 md:py-16 lg:py-20">
            <div className={`relative mx-auto max-w-3xl text-center mb-8 sm:mb-10 transition-all duration-1000 ${
              teamInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              {/* Texte géant en arrière-plan */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black text-slate-100 opacity-40 whitespace-nowrap select-none">
                  EQUIPE
                </span>
              </div>

              {/* Contenu */}
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight uppercase text-slate-900">
                  Notre équipe
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-900 font-semibold">
                  Des professionnels engagés pour vos projets
                </p>
              </div>
            </div>

            {/* Scroll horizontal sur mobile, grille sur desktop */}
            <div className="sm:hidden -mx-3 px-3">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
                {TEAM.map((m, index) => (
                  <article
                    key={m.id}
                    className={`group flex-shrink-0 w-[280px] rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 snap-center ${
                      teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="aspect-[4/4] overflow-hidden rounded-t-xl bg-slate-100 relative">
                      <img
                        src={m.photo}
                        alt={`${m.name} — ${m.role}`}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {m.name}
                      </h3>
                      <p className="text-xs text-blue-700 font-medium mt-0.5">{m.role}</p>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-3">{m.summary}</p>

                      <div className="mt-3">
                        <button
                          onClick={() => setOpenTeamId(m.id)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          En savoir plus
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              {/* Indicateur de scroll */}
              <p className="text-center text-xs text-slate-500 mt-2">
                ← Faites défiler pour voir tous les membres →
              </p>
            </div>

            {/* Grille classique pour tablette et desktop */}
            <div className="hidden sm:grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((m, index) => (
                <article
                  key={m.id}
                  className={`group h-full rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-2 transition-all duration-500 ${
                    teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[4/4] overflow-hidden rounded-t-xl sm:rounded-t-2xl bg-slate-100 relative">
                    <img
                      src={m.photo}
                      alt={`${m.name} — ${m.role}`}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {m.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-700 font-medium mt-0.5">{m.role}</p>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3">{m.summary}</p>

                    <div className="mt-3 sm:mt-4">
                      <button
                        onClick={() => setOpenTeamId(m.id)}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg"
                      >
                        <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION CONTACT ===== */}
        <section 
          id="contact" 
          ref={contactRef}
          className="bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="mx-auto max-w-7xl px-3 sm:px-4 py-10 sm:py-14 md:py-16 lg:py-20">
            <div className={`relative mx-auto max-w-3xl text-center mb-8 sm:mb-10 transition-all duration-1000 ${
              contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Texte géant en arrière-plan */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black text-slate-100 opacity-40 whitespace-nowrap select-none">
                  CONTACT
                </span>
              </div>

              {/* Contenu */}
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight uppercase text-slate-900">
                  Contact
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-900 font-semibold">
                  Parlons de votre projet
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-12">
              {/* Coordonnées */}
              <aside className={`lg:col-span-5 rounded-xl sm:rounded-2xl bg-slate-50 p-4 sm:p-5 md:p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-1000 delay-200 ${
                contactInView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">Coordonnées</h3>

                <dl className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  <div className="grid grid-cols-1 xs:grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-1 xs:gap-3">
                    <dt className="text-xs sm:text-sm font-medium text-slate-500">Adresse</dt>
                    <dd className="text-sm sm:text-base text-slate-700">
                      {address.street}, {address.city}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-1 xs:gap-3">
                    <dt className="text-xs sm:text-sm font-medium text-slate-500">Téléphone</dt>
                    <dd>
                      <a
                        className="text-sm sm:text-base text-blue-700 hover:underline"
                        href={`tel:${phoneCall.replace(/\s+/g, "")}`}
                      >
                        {phoneCall}
                      </a>
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-1 xs:gap-3">
                    <dt className="text-xs sm:text-sm font-medium text-slate-500">Email</dt>
                    <dd>
                      <a className="text-sm sm:text-base text-blue-700 hover:underline break-all" href={`mailto:${email}`}>
                        {email}
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-4 sm:mt-5 flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3">
                  <a
                    href={`tel:${phoneCall.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm sm:text-base font-medium text-slate-800 hover:bg-slate-50 transition"
                  >
                    📞 Appeler
                  </a>
                  <a
                    href={`https://wa.me/${phoneWhats}`}
                    onClick={openWhatsApp}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm sm:text-base font-semibold text-white hover:bg-emerald-700 transition"
                  >
                    💬 WhatsApp
                  </a>
                </div>

                {/* Carte */}
                <div className="mt-4 sm:mt-5 md:mt-6 overflow-hidden rounded-xl ring-1 ring-slate-200">
                  <iframe
                    title="Plan d'accès"
                    className="h-48 sm:h-56 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    src={`https://www.google.com/maps?hl=fr&q=${address.lat},${address.lng}(${encodeURIComponent(
                      address.label
                    )})&z=18&output=embed`}
                  />
                </div>

                <a
                  className="mt-2 inline-block text-xs sm:text-sm text-blue-700 hover:underline"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${address.lat},${address.lng}&travelmode=driving`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Itinéraire vers ${address.label}`}
                >
                  🚗 Itinéraire vers {address.label}
                </a>
              </aside>

              {/* Formulaire */}
              <div className={`lg:col-span-7 rounded-xl sm:rounded-2xl bg-slate-50 p-4 sm:p-5 md:p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-1000 delay-400 ${
                contactInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">Envoyer un message</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Dites-nous quelques mots sur votre besoin — nous revenons vers vous rapidement.
                </p>

                <form className="mt-3 sm:mt-4 grid gap-3 sm:gap-4" onSubmit={onSubmitMailto}>
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="block text-xs sm:text-sm font-medium text-slate-700">Nom complet</span>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base outline-none ring-0 focus:border-slate-400 transition"
                        placeholder="Ex. Gui Alain BAHIBO"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-xs sm:text-sm font-medium text-slate-700">Téléphone</span>
                      <input
                        type="tel"
                        name="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[0-9+\s()-]*"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base outline-none ring-0 focus:border-slate-400 transition"
                        placeholder="+225 …"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="block text-xs sm:text-sm font-medium text-slate-700">Sujet</span>
                    <input
                      type="text"
                      name="subject"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base outline-none ring-0 focus:border-slate-400 transition"
                      placeholder="Devis – Dalle béton R+1, rénovation, etc."
                    />
                  </label>

                  <label className="block">
                    <span className="block text-xs sm:text-sm font-medium text-slate-700">Message</span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base outline-none ring-0 focus:border-slate-400 transition resize-y"
                      placeholder="Décrivez votre projet (type d'ouvrage, surface, localisation, échéance…)"
                    />
                  </label>

                  <div className="mt-1 flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white px-4 py-2.5 sm:py-2 text-sm sm:text-base font-semibold active:scale-95 transition-all shadow-sm hover:shadow-lg"
                    >
                      ✉️ Envoyer par e-mail
                    </button>

                    <a
                      href={`https://wa.me/${phoneWhats}`}
                      onClick={openWhatsApp}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 sm:py-2 text-sm sm:text-base font-semibold text-white hover:bg-emerald-700 transition"
                    >
                      💬 Discuter sur WhatsApp
                    </a>
                  </div>

                  <p className="text-xs text-slate-500">
                    En soumettant ce formulaire, vous acceptez d'être recontacté(e) par {brand}.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARTENAIRES ===== */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 pt-8 pb-4 w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 text-center mb-2 sm:mb-4 break-words">
              Ils nous font confiance
            </h2>
          </div>
          <div className="w-full overflow-hidden pb-10 sm:pb-14 md:pb-16">
            <PartnersCarousel title=" " />
          </div>
        </section>
      </main>

      {/* Modal Équipe */}
      <ResumeModal
        open={Boolean(openTeamId)}
        onClose={() => setOpenTeamId(null)}
        member={currentTeamMember}
      />

      {/* Bouton Retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-100 border-2 border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in"
          aria-label="Retour en haut de la page"
          title="Retour en haut"
        >
          <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}
    </>
  );
}
