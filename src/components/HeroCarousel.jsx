// src/components/HeroCarousel.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";

/* --- Icônes SVG inline (aucune lib externe) --- */
const IconPrev = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
    <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
  </svg>
);
const IconNext = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
    <path fill="currentColor" d="m10 6 1.41 1.41L7.83 11H20v2H7.83l3.58 3.59L10 18l-6-6z"/>
  </svg>
);
const IconPlay = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...props}>
    <path fill="currentColor" d="M8 5v14l11-7z"/>
  </svg>
);
const IconPause = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...props}>
    <path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z"/>
  </svg>
);

/**
 * items: [
 *  { type: "image", src: "/media/hero/pic.jpg", alt: "..." },
 *  { type: "video", src: "/media/hero/vid.mp4", poster: "/media/hero/vid.jpg", alt: "..." }
 * ]
 */
export default function HeroCarousel({ items = [], autoPlay = true, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const timerRef = useRef(null);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const count = items.length;

  const go = useCallback(
    (i) => {
      if (!count) return;
      setIndex(((i % count) + count) % count);
    },
    [count]
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying || count <= 1) return;
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, interval);
    return () => clearTimeout(timerRef.current);
  }, [isPlaying, index, interval, next, count]);

  // Clavier
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") setIsPlaying((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Swipe
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { deltaX.current = e.touches[0].clientX - startX.current; };
  const onTouchEnd   = () => {
    if (Math.abs(deltaX.current) > 40) (deltaX.current < 0 ? next() : prev());
    deltaX.current = 0;
  };

  // Pause au survol
  const onMouseEnter = () => setIsPlaying(false);
  const onMouseLeave = () => setIsPlaying(autoPlay);

  if (!count) return null;
  const current = items[index];

  return (
    <div className="relative w-full">
      {/* Viewport */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200 bg-black"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
        aria-label="Galerie d'images et vidéos"
      >
        <div className="aspect-video w-full">
          {current.type === "image" ? (
            <img
              key={index + "-img"}
              src={current.src}
              alt={current.alt || "Media"}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          ) : (
            <video
              key={index + "-vid"}
              src={current.src}
              controls
              preload="metadata"
              playsInline
              poster={current.poster}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* Flèches + Play/Pause */}
        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Précédent"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow"
            >
              <IconPrev />
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow"
            >
              <IconNext />
            </button>
            <button
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Mettre en pause" : "Lecture automatique"}
              className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/90 hover:bg-white px-3 py-1.5 text-sm shadow"
            >
              {isPlaying ? <IconPause /> : <IconPlay />}
              {isPlaying ? "Pause" : "Lecture"}
            </button>
          </>
        )}
      </div>

      {/* Miniatures */}
      {count > 1 && (
        <div className="mt-3 grid grid-flow-col auto-cols-[minmax(80px,1fr)] gap-2 overflow-x-auto">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`relative aspect-video overflow-hidden rounded-lg ring-2 ${i === index ? "ring-blue-600" : "ring-transparent"}`}
              aria-label={`Aller au média ${i + 1}`}
            >
              {it.type === "image" ? (
                <img
                  src={it.thumb || it.src}
                  alt={it.alt || `Media ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="h-full w-full grid place-items-center bg-black text-white text-xs">
                  <IconPlay />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
