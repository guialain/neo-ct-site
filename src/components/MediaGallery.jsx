// src/components/MediaGallery.jsx
// Grille responsive images + vidéos, avec visionneuse (lightbox) intégrée
// - Aucune dépendance externe
// - Navigation clavier (← → Esc), swipe mobile
// - Légendes optionnelles
// - Performances: lazy images, preload metadata vidéos

import React, { useEffect, useRef, useState } from "react";

function classNames(...xs) { return xs.filter(Boolean).join(" "); }

export default function MediaGallery({ items = [], columns = { base: 1, sm: 2, md: 3, lg: 4 } }) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const gridCols = classNames(
    "grid gap-4",
    columns?.base ? `grid-cols-${columns.base}` : "grid-cols-1",
    columns?.sm && `sm:grid-cols-${columns.sm}`,
    columns?.md && `md:grid-cols-${columns.md}`,
    columns?.lg && `lg:grid-cols-${columns.lg}`
  );

  const openAt = (idx) => { setI(idx); setOpen(true); };
  const close = () => setOpen(false);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Touch in modal
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { deltaX.current = e.touches[0].clientX - startX.current; };
  const onTouchEnd   = () => {
    if (Math.abs(deltaX.current) > 40) (deltaX.current < 0 ? next() : prev());
    deltaX.current = 0;
  };

  if (!items.length) return null;

  return (
    <section>
      {/* Grille */}
      <div className={gridCols}>
        {items.map((m, idx) => (
          <button
            key={idx}
            onClick={() => openAt(idx)}
            className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <div className="aspect-[4/3] bg-slate-100">
              {m.type === "image" ? (
                <img
                  src={m.thumb || m.src}
                  alt={m.alt || `Media ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="h-full w-full grid place-items-center bg-black text-white text-xs">
                  <span className="opacity-80">▶︎ Vidéo</span>
                </div>
              )}
            </div>
            {m.caption && (
              <div className="p-3 text-left text-sm text-slate-700 line-clamp-2">{m.caption}</div>
            )}
          </button>
        ))}
      </div>

      {/* Visionneuse */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
          <div className="absolute inset-0 flex items-center justify-center p-4" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className="relative w-full max-w-5xl">
              <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-slate-200">
                <div className="aspect-video w-full">
                  {items[i].type === "image" ? (
                    <img src={items[i].src} alt={items[i].alt || "Media"} className="h-full w-full object-contain bg-black" />
                  ) : (
                    <video
                      src={items[i].src}
                      controls
                      preload="metadata"
                      playsInline
                      poster={items[i].poster}
                      className="h-full w-full object-contain bg-black"
                    />
                  )}
                </div>
                {items[i].caption && (
                  <div className="p-3 text-sm text-white/90 border-t border-white/10">{items[i].caption}</div>
                )}
              </div>

              {/* Controls */}
              <div className="mt-3 flex items-center justify-between">
                <button onClick={prev} className="px-3 py-2 rounded-lg bg-white text-slate-900 shadow hover:bg-slate-100">← Précédent</button>
                <div className="text-white/80 text-sm">{i + 1} / {items.length}</div>
                <button onClick={next} className="px-3 py-2 rounded-lg bg-white text-slate-900 shadow hover:bg-slate-100">Suivant →</button>
              </div>

              <button
                onClick={close}
                aria-label="Fermer"
                className="absolute -top-2 -right-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* === Exemple d'utilisation ===
import MediaGallery from "../components/MediaGallery";

const GALLERY = [
  { type: "image", src: "/media/gal/1.jpg", caption: "Chantier — gros œuvre" },
  { type: "video", src: "/media/gal/visite1_720p.mp4", poster: "/media/gal/visite1.jpg", caption: "Visite vidéo" },
  ...
];

<MediaGallery items={GALLERY} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} />
*/
