import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        {/* Layout mobile: stack vertical, desktop: horizontal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          
          {/* Copyright */}
          <div className="text-sm text-slate-600 order-2 md:order-1">
            © {currentYear} <span className="font-medium text-slate-900">NEO Construction & Travaux</span>
            <span className="hidden sm:inline"> — Tous droits réservés.</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 text-sm order-1 md:order-2">
            <Link to="/apropos" className="text-slate-600 hover:text-blue-600 transition-colors">
              À propos
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/services" className="text-slate-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/realisations" className="text-slate-600 hover:text-blue-600 transition-colors">
              Réalisations
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact info mobile */}
        <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-slate-500">
          <a href="tel:+2250576428643" className="hover:text-blue-600 transition-colors">
            📞 +225 05 76 42 86 43
          </a>
          <span className="hidden sm:inline text-slate-300">•</span>
          <a href="mailto:marketing@neoct.ci" className="hover:text-blue-600 transition-colors">
            ✉️ marketing@neoct.ci
          </a>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-500">Abidjan, Côte d'Ivoire</span>
        </div>
      </div>
    </footer>
  );
}
