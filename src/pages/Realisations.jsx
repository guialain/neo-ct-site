import { useState, useEffect, useRef } from "react";
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

const projects = [
  
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

export default function Realisations() {
  const [headerRef, headerInView] = useInView();
  const [cardsRef, cardsInView] = useInView();

  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      {/* en-tête */}
      <div 
        ref={headerRef}
        className={`mx-auto max-w-7xl px-3 sm:px-4 pt-6 sm:pt-8 pb-4 sm:pb-6 border-b border-slate-200 transition-all duration-1000 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">Nos Réalisations</h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          Une sélection de chantiers livrés : logements, tertiaire et réhabilitations.
          <span className="hidden sm:inline"> Chaque carte ci-dessous contient un diaporama photos/vidéos.</span>
        </p>
      </div>

      {/* cartes */}
      <div 
        ref={cardsRef}
        className="mx-auto max-w-7xl px-3 sm:px-4 pt-8 sm:pt-10 pb-10 sm:pb-12 grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2"
      >
        {projects.map((p, index) => (
          <article 
            key={p.id} 
            className={`rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
              cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* carousel dans la carte */}
            <InlineCarousel items={p.media} aspect="video" />

            <div className="px-3 py-2 sm:px-4 sm:py-2.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <h2 className="font-bold text-slate-900 truncate">{p.title}</h2>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 truncate">{p.subtitle}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 whitespace-nowrap">{p.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
