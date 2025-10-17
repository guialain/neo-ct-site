import { useMemo, useState, useCallback, useEffect } from "react";

/**
 * items: Array<{ type: "image" | "video", src: string, alt?: string, thumb?: string }>
 * cols: nombre de colonnes sur desktop
 */
export default function MediaGallery({ items = [], cols = 3 }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const gridCols = useMemo(() => {
    const map = {
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
    };
    return map[cols] ?? "md:grid-cols-3";
  }, [cols]);

  const openAt = useCallback((i) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);

  // clavier
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <>
      {/* grille */}
      <div className={`grid grid-cols-2 ${gridCols} gap-3`}>
        {items.map((m, i) => (
          <button
            key={i}
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
          >
            {m.type === "image" ? (
              <img
                src={m.thumb || m.src}
                alt={m.alt || ""}
                className="h-44 w-full object-cover transition group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="relative h-44 w-full bg-black/80">
                <video
                  src={m.src}
                  className="h-full w-full object-cover opacity-80"
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-slate-900 shadow">
                    ▶ Lire
                  </span>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-10 right-0 rounded-full bg-white/90 px-3 py-1 text-slate-900 shadow"
            >
              ✕ Fermer
            </button>

            {/* media affiché */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              {items[index]?.type === "image" ? (
                <img
                  src={items[index]?.src}
                  alt={items[index]?.alt || ""}
                  className="h-full w-full object-contain"
                />
              ) : (
                <video
                  src={items[index]?.src}
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                />
              )}
            </div>

            {/* nav */}
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={prev}
                className="rounded-lg border border-white/40 bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              >
                ← Précédent
              </button>
              <div className="text-white/80 text-sm">
                {index + 1} / {items.length}
              </div>
              <button
                onClick={next}
                className="rounded-lg border border-white/40 bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              >
                Suivant →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
