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
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Nos réalisations</h1>
        <p className="mt-2 text-slate-600">
          Une sélection de chantiers livrés : logements, tertiaire et réhabilitations.
          Chaque carte ci-dessous contient un diaporama photos/vidéos.
        </p>
      </div>

      {/* cartes */}
      <div className="mx-auto max-w-7xl px-4 pb-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {/* carousel dans la carte */}
            <InlineCarousel items={p.media} aspect="video" />

            <div className="p-4 sm:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-bold text-slate-900">{p.title}</h2>
                <span className="text-sm text-slate-500">{p.location}</span>
              </div>
              <p className="mt-1 text-slate-600">{p.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
