// src/components/HeroCarousel.jsx
import React, { useEffect, useRef, useState } from "react";

export default function HeroCarousel({
  items = [],
  autoPlay = true,
  interval = 5000,
}) {
  const [i, setI] = useState(0);
  const timerRef = useRef(null);
  const count = items.length;

  const go = (n) => setI(((n % count) + count) % count);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  // autoplay
  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => next(), interval);
    return () => clearInterval(timerRef.current);
  }, [i, autoPlay, interval, count]);

  if (!count) return null;

  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      {/* Slides */}
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {items.map((m, idx) => {
            const active = idx === i;
            return (
              <div key={idx} className="min-w-full aspect-[16/9] bg-slate-100">
                {m.type === "image" ? (
                  <img
                    src={m.src}
                    alt={m.alt || "media"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : active ? (
                  <video
                    key={m.src}
                    className="h-full w-full object-cover"
                    poster={m.poster}
                    preload="auto"
                    controls
                    playsInline
                    disablePictureInPicture
                  >
                    <source src={m.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={m.poster || ""}
                    alt={m.alt || "aperçu vidéo"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Arrows - responsive */}
        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Précédent"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-slate-200 text-sm sm:text-base transition"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-slate-200 text-sm sm:text-base transition"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Thumbnails / mini-carousel - responsive */}
      {count > 1 && (
        <div className="flex gap-2 sm:gap-3 p-2 sm:p-3 overflow-x-auto scrollbar-thin">
          {items.map((m, idx) => {
            const active = idx === i;
            const isVideo = m.type === "video";
            const thumbSrc = isVideo ? m.poster : m.src;

            return (
              <button
                key={`thumb-${idx}`}
                onClick={() => go(idx)}
                className={`relative shrink-0 rounded-lg sm:rounded-xl border ${
                  active
                    ? "border-slate-900 ring-2 ring-slate-900"
                    : "border-slate-200 hover:border-slate-300"
                } transition`}
                style={{ width: 72, height: 48 }}
                aria-label={`Aller au média ${idx + 1}`}
              >
                <img
                  src={thumbSrc}
                  alt={m.alt || `Media ${idx + 1}`}
                  className="h-full w-full object-cover rounded-lg sm:rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
                {isVideo && (
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="inline-grid h-4 w-4 sm:h-5 sm:w-5 place-items-center rounded-full bg-black/60 text-white text-[9px] sm:text-[10px]">
                      ▶
                    </span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
