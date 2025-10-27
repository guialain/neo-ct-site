import InlineCarousel from "../components/InlineCarousel";

const projects = [
  
  {
id: "villa-perles",
    title: "VILLA PERLES",
    subtitle: "Villa haut standing – clé en main",
    location: "Riviera • 2022",
    media: [
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
      { type: "image", src: "/real/ahoue/2.jpg" },
      { type: "image", src: "/real/ahoue/3.jpg" },
      { type: "video", src: "/real/ahoue/chantier.mp4" },
    ],
  },
  {
    id: "bo-reflets",
    title: "BO REFLETS",
    subtitle: "Construction Gros Oeuvre de 24 Villas",
    location: "Cocody • Angre",
    media: [
      { type: "image", src: "/real/bo-reflets/bo-reflets1.jpg" },
      { type: "image", src: "/real/bo-reflets/2.jpg" },
      { type: "video", src: "/real/bo-reflets/visite.mp4" },
    ],
  },
  {
    id: "bo-real",
    title: "BO REAL",
    subtitle: "Bâtiment tertiaire – R+2",
    location: "Marcory • 2023",
    media: [
      { type: "image", src: "/real/bo-real/1.jpg" },
      { type: "image", src: "/real/bo-real/2.jpg" },
      { type: "image", src: "/real/bo-real/3.jpg" },
    ],
  },

  {
    id: "r1-attoban",
    title: "R+1 ATTOBAN",
    subtitle: "Extension & réhabilitation",
    location: "Attoban • 2022",
    media: [
      { type: "image", src: "/real/r1-attoban/1.jpg" },
      { type: "image", src: "/real/r1-attoban/2.jpg" },
      { type: "video", src: "/real/r1-attoban/timelapse.mp4" },
    ],
  },
  {
    id: "r3-attessa",
    title: "R+3 ATTESSA",
    subtitle: "Immeuble d’habitation – travaux TCE",
    location: "Angré • 2021",
    media: [
      { type: "video", src: "/real/r3-attessa/r3-attessa-coulage.mp4" },
      { type: "image", src: "/real/r3-attessa/2.jpg" },
      { type: "image", src: "/real/r3-attessa/3.jpg" },
      { type: "video", src: "/real/r3-attessa/overview.mp4" },
    ],
  },
];

export default function Realisations() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      {/* en-tête */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 pt-8 sm:pt-10 pb-4 sm:pb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">Nos réalisations</h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          Une sélection de chantiers livrés : logements, tertiaire et réhabilitations.
          <span className="hidden sm:inline"> Chaque carte ci-dessous contient un diaporama photos/vidéos.</span>
        </p>
      </div>

      {/* cartes */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 pb-10 sm:pb-12 grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            {/* carousel dans la carte */}
            <InlineCarousel items={p.media} aspect="video" />

            <div className="p-3 sm:p-4 md:p-5">
              <div className="flex flex-col xs:flex-row xs:items-baseline xs:justify-between gap-1 xs:gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">{p.title}</h2>
                <span className="text-xs sm:text-sm text-slate-500">{p.location}</span>
              </div>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600">{p.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
