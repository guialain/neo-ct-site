import { useEffect, useRef, useState } from "react";

/**
 * items: [{ type: "image" | "video", src: string, alt?: string }]
 * className: classes supplémentaires
 * aspect: "video" => 16/9 ; "square" ; "photo" => 4/3
 */
export default function InlineCarousel({ items = [], className = "", aspect = "video" }) {
  const [index, setIndex] = useState(0);
  const wrapRef = useRef(null);
  const videoRefs = useRef([]);

  // ratio
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "photo"
      ? "aspect-[4/3]"
      : "aspect-video";

  // lecture/pause vidéo quand on change de slide
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        // auto play si visible
        v.play?.().catch(() => {});
      } else {
        v.pause?.();
        v.currentTime = 0;
      }
    });
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  // swipe mobile
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let startX = 0;
    let delta = 0;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      delta = 0;
    };
    const onTouchMove = (e) => {
      delta = e.touches[0].clientX - startX;
    };
    const onTouchEnd = () => {
      if (Math.abs(delta) > 40) {
        delta < 0 ? next() : prev();
      }
    };

    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchmove", onTouchMove);
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className={`relative select-none ${className}`}>
      <div ref={wrapRef} className={`overflow-hidden rounded-xl border border-slate-200 bg-black/5 ${aspectClass}`}>
        {/* track */}
        <div
          className="flex h-full w-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((m, i) => (
            <div key={i} className="w-full shrink-0">
              {m.type === "image" ? (
                <img
                  src={m.src}
                  alt={m.alt || ""}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={m.src}
                  className="h-full w-full object-cover"
                  playsInline
                  muted
                  controls
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* boutons */}
      {items.length > 1 && (
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

          {/* points */}
          <div className="pointer-events-none absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full bg-white/60 shadow ${i === index ? "bg-white" : ""}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
