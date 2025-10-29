// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Fermer le menu mobile lors d'un changement de page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const linkBase =
    "relative px-2 py-1 text-[15px] md:text-base lg:text-lg font-medium text-slate-700 hover:text-orange-600 transition-colors";
  const linkActive =
    "after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-orange-600";

  return (
    <>
      {/* sticky (pas fixed) pour éviter d'ajouter du padding-top au main */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-orange-200/60 shadow-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 py-2 md:py-2.5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/logo-neoct.jpg"
              alt="NEO Construction & Travaux"
              className="h-10 sm:h-12 md:h-14 lg:h-20 w-auto"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>
              Accueil
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>
              À propos
            </NavLink>
            <NavLink to="/realisations" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>
              Réalisations
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>
              Services
            </NavLink>
            <NavLink to="/team" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>
              Équipe
            </NavLink>

            <NavLink
              to="/contact"
              className="ml-2 md:ml-3 rounded-xl bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 text-sm md:text-base lg:text-lg font-semibold active:scale-95 transition-all shadow-sm hover:shadow-lg"
            >
              Contact
            </NavLink>
          </nav>

          {/* Bouton burger mobile */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-slate-700">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-slate-700">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar glass */}
          <nav className="fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 md:hidden overflow-y-auto">
            <div className="p-5 border-b border-orange-200/50 flex items-center justify-between bg-gradient-to-r from-orange-600/10 to-orange-500/10">
              <span className="font-bold text-lg text-slate-900">Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100/80 hover:bg-orange-200 active:scale-95 transition-all duration-200"
                aria-label="Fermer le menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-orange-700">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="p-5 space-y-2">
              {[
                { to: "/", label: "Accueil" },
                { to: "/about", label: "À propos" },
                { to: "/realisations", label: "Réalisations" },
                { to: "/services", label: "Services" },
                { to: "/team", label: "Équipe" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                      isActive
                        ? "bg-orange-100 border border-orange-300 text-orange-700 shadow-sm"
                        : "text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-4 mt-4">
                <NavLink
                  to="/contact"
                  className="block w-full px-4 py-3.5 text-center rounded-xl bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-400 hover:border-orange-700 hover:text-white font-bold shadow-sm hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  Contact
                </NavLink>
              </div>

              {/* Contact rapide */}
              <div className="pt-5 mt-5 border-t border-slate-200/60">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Contact direct</p>
                <div className="space-y-2">
                  <a
                    href="tel:+2250576428643"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 bg-slate-50/80 hover:bg-slate-100 rounded-xl transition-all duration-200 active:scale-95"
                  >
                    <span className="text-lg">📞</span>
                    <span>+225 05 76 42 86 43</span>
                  </a>
                  <a
                    href="https://wa.me/2250576428643"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100 rounded-xl transition-all duration-200 active:scale-95"
                  >
                    <span className="text-lg">💬</span>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:marketing@neoct.ci"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 bg-slate-50/80 hover:bg-slate-100 rounded-xl transition-all duration-200 active:scale-95"
                  >
                    <span className="text-lg">✉️</span>
                    <span className="truncate">marketing@neoct.ci</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
