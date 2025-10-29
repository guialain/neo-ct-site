// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer({ showBackground = false }) {
  const currentYear = new Date().getFullYear();

  // Styles conditionnels (couleurs texte/liens, bordures, etc.)
  const wrapClass = showBackground
    ? "relative bg-black border-t border-slate-800 overflow-hidden"
    : "border-t bg-white";

  const textMuted = showBackground ? "text-slate-200" : "text-slate-600";
  const textStrong = showBackground ? "text-white font-bold" : "text-slate-900 font-medium";
  const dot = showBackground ? "text-slate-400" : "text-slate-300";
  const linkBase = showBackground
    ? "text-white hover:text-orange-500 font-medium transition-colors"
    : "text-slate-600 hover:text-blue-600 transition-colors";

  return (
    <footer className={wrapClass}>
      {/* Image de fond pour la version sombre */}
      {showBackground && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
            style={{ backgroundImage: "url(/footer-bg.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85 hidden md:block" />
          {/* Sur mobile (Home): dégradé orange */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-700 md:hidden" />
        </>
      )}

      {/* Contenu */}
      <div className={`relative z-10 mx-auto max-w-7xl px-4 ${showBackground ? "py-8 sm:py-10 md:py-12" : "py-6 sm:py-8"}`}>
        {/* Rangée principale */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          {/* Copyright */}
          <div className={`text-sm ${textMuted} order-2 md:order-1`}>
            © {currentYear} <span className={textStrong}>NEO Construction & Travaux</span>
            <span className="hidden sm:inline"> — Tous droits réservés.</span>
          </div>

          {/* Liens */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 text-sm order-1 md:order-2">
            <Link to="/apropos" className={linkBase}>À propos</Link>
            <span className={dot}>•</span>
            <Link to="/services" className={linkBase}>Services</Link>
            <span className={dot}>•</span>
            <Link to="/realisations" className={linkBase}>Réalisations</Link>
            <span className={dot}>•</span>
            <Link to="/contact" className={linkBase}>Contact</Link>
          </div>
        </div>

        {/* Bloc contacts :
            - Version claire (pages internes) : petit bloc après une bordure
            - Version sombre (Home) : bloc + tagline */}
        {showBackground ? (
          <>
            <div className="mt-6 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-slate-200">
              <a href="tel:+2250576428643" className="hover:text-orange-500 transition-colors font-bold">
                📞 +225 05 76 42 86 43
              </a>
              <span className="hidden sm:inline text-slate-400">•</span>
              <a href="mailto:marketing@neoct.ci" className="hover:text-orange-500 transition-colors font-bold">
                ✉️ marketing@neoct.ci
              </a>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="font-bold">Abidjan, Côte d'Ivoire</span>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs sm:text-sm md:text-base text-slate-200 italic font-bold">
                Qualité • Délais • Sécurité — Votre partenaire construction de confiance
              </p>
            </div>
          </>
        ) : (
          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-slate-500">
            <a href="tel:+2250576428643" className="hover:text-blue-600 transition-colors">
              📞 +225 05 76 42 86 43
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a href="mailto:marketing@neoct.ci" className="hover:text-blue-600 transition-colors">
              ✉️ marketing@neoct.ci
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Abidjan, Côte d'Ivoire</span>
          </div>
        )}
      </div>
    </footer>
  );
}
