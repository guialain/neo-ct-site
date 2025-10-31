
import { Link } from "react-router-dom";

export default function Footer({ showBackground = false }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-slate-800 overflow-hidden">
      {/* Image de fond - sur desktop toujours, sur mobile uniquement page Home */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${showBackground ? '' : 'hidden md:block'}`}
        style={{ backgroundImage: 'url(/footer-bg.jpg)' }}
      >
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85"></div>
      </div>
      
      {/* Fond orange sur mobile pour les pages autres que Home */}
      {!showBackground && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-700 md:hidden"></div>
      )}

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:py-10 md:py-12">
        {/* Layout mobile: stack vertical, desktop: horizontal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          
          {/* Copyright */}
          <div className="text-sm text-slate-200 order-2 md:order-1">
            © {currentYear} <span className="font-bold text-white">NEO Construction & Travaux</span>
            <span className="hidden sm:inline"> — Tous droits réservés.</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 text-sm order-1 md:order-2">
            <Link to="/apropos" className="text-white hover:text-orange-500 font-medium transition-colors">
              À propos
            </Link>
            <span className="text-slate-400">•</span>
            <Link to="/services" className="text-white hover:text-orange-500 font-medium transition-colors">
              Services
            </Link>
            <span className="text-slate-400">•</span>
            <Link to="/realisations" className="text-white hover:text-orange-500 font-medium transition-colors">
              Réalisations
            </Link>
            <span className="text-slate-400">•</span>
            <Link to="/contact" className="text-white hover:text-orange-500 font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact info - uniquement sur la page Home */}
        {showBackground && (
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
              <span className="text-slate-200 font-bold">Abidjan, Côte d'Ivoire</span>
            </div>

            {/* Tagline */}
            <div className="mt-6 text-center">
              <p className="text-xs sm:text-sm md:text-base text-slate-200 italic font-bold">
                Qualité • Délais • Sécurité — Votre partenaire construction de confiance
              </p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
