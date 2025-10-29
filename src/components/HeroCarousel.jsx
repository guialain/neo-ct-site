// src/components/HeroCarousel.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";

export default function HeroCarousel({
  items = [],
  autoPlay = true,
  interval = 5000,
  pauseOnHover = true,
  pauseOnFocus = true,
  showArrows = true,
  showThumbs = true,
  aspect = "16/9", // ex. "16/9", "4/3"
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const wrapRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const count = items.length;

  const go = useCallback(
    (n) => {
      if (!count) return;
      setI(((n % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => go(i + 1), [go, i]);
  const prev = useCallback(() => go(i - 1), [go, i]);

  // --- Autoplay (pause si onglet masqué / hover / focus / RRM)
  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const shouldRun = autoPlay && !paused && count > 1 && !prefersReduced && document.visibilityState === "visible";
    clearInterval(timerRef.current);
    if (shouldRun) {
      timerRef.current = setInterval(next, Math.max(2000, interval));
    }
    return () => clearInterval(timerRef.current);
  }, [autoPlay, paused, count, interval, next, i]);

  // Pause quand l’onglet est masqué
  useEffect(() => {
    const onVis = () => {
      // relance/arrête via l’effet ci-dessus
      setPaused((p) => p); 
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Précharge la vignette suivante (image/poster) pour réduire le “flash”
  useEffect(() => {
    if (count < 2) return;
    const nxt = items[(i + 1) % count];
    const preloadSrc = nxt?.type === "video" ? nxt?.poster : nxt?.src;
    if (preloadSrc) {
      const img = new Image();
      img.src = preloadSrc;
    }
  }, [i, count, items]);

  // Gestion hover/focus
  const onMouseEnter = () => pauseOnHover && setPaused(true);
  const onMouseLeave = () => pauseOnHover && setPaused(false);
  const onFocus = () => pauseOnFocus && setPaused(true);
  const onBlur = () => pauseOnFocus && setPaused(false);

  // Navigation clavier (← →)
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Swipe tactile
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const dx = touchDeltaX.current;
    const TH = 40; // seuil px
    if (Math.abs(dx) > TH) {
      dx > 0 ? prev() : next();
    }
    touchStartX.current = 0;
    touchDeltaX.current = 0;
  };

  if (!count) return null;

  const aspectClass = aspect === "4/3" ? "aspect-[4/3]" : aspect === "1/1" ? "aspect-square" : "aspect-[16/9]";

  return (
    <div
      ref={wrapRef}
      className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white"
      role="region"
      aria-roledescription="carousel"
      aria-label="Médias en vedette"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {items.map((m, idx) => {
            const active = idx === i;
            return (
              <div
                key={`${m.src || idx}-${idx}`}
                className={`min-w-full ${aspectClass} bg-slate-100`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} sur ${count}`}
                aria-hidden={!active}
              >
                {m.type === "image" ? (
                  <img
                    src={m.src}
                    alt={m.alt || "media"}
                    className="h-full w-full object-cover"
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ) : active ? (
                  <video
                    key={m.src} // force le reload à chaque activation
                    className="h-full w-full object-cover"
                    poster={m.poster}
                    preload="metadata"
                    playsInline
                    muted
                    autoPlay
                    loop
                    controls={false}
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

        {/* Flèches */}
        {showArrows && count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Précédent"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 flex items-center justify-center group border border-slate-200"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-orange-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 flex items-center justify-center group border border-slate-200"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-orange-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbs && count > 1 && (
        <div className="flex gap-2 sm:gap-3 p-2 sm:p-3 overflow-x-auto scrollbar-thin" role="tablist" aria-label="Sélection des médias">
          {items.map((m, idx) => {
            const active = idx === i;
            const isVideo = m.type === "video";
            const thumbSrc = isVideo ? m.poster : m.src;

            return (
              <button
                key={`thumb-${idx}`}
                role="tab"
                aria-selected={active}
                aria-controls={`slide-${idx}`}
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
                  <span className="absolute inset-0 grid place-items-center pointer-events-none">
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
