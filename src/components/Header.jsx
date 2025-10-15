import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo à gauche */}
          <Link to="/" className="flex items-start gap-3">
            <img
              src="/logo-neoct.jpg"
              alt="NEO Construction & Travaux"
              className="h-16 md:h-20 w-auto select-none"
              draggable="false"
            />
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-7 text-[15px]">
            <NavLink to="/" end className="font-medium text-slate-700 hover:text-slate-900">
              Accueil
            </NavLink>
            <NavLink to="/apropos" className="font-medium text-slate-700 hover:text-slate-900">
              À propos
            </NavLink>
            <NavLink to="/realisations" className="font-medium text-slate-700 hover:text-slate-900">
              Réalisations
            </NavLink>
            <NavLink to="/services" className="font-medium text-slate-700 hover:text-slate-900">
              Services
            </NavLink>
            <NavLink to="/equipe" className="font-medium text-slate-700 hover:text-slate-900">
              Équipe
            </NavLink>
            <NavLink to="/contact" className="font-medium text-slate-700 hover:text-slate-900">
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
