// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Fermer le menu mobile lors du changement de page
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
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-orange-200/60 shadow-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 py-2 md:py-2.5 flex items-center justify-between">
          {/* Logo responsive */}
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Accueil
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              À propos
            </NavLink>

            <NavLink
              to="/realisations"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Réalisations
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/team"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-slate-700">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-slate-700">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Menu mobile - Sidebar overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar avec glassmorphism */}
          <nav className="fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 md:hidden overflow-y-auto animate-slide-in-right">
            <div className="p-5 border-b border-orange-200/50 flex items-center justify-between backdrop-blur-sm bg-gradient-to-r from-orange-600/10 to-orange-500/10">
              <span className="font-bold text-lg text-slate-900">Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100/80 hover:bg-orange-200 active:scale-95 transition-all duration-200"
                aria-label="Fermer le menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-orange-700">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="p-5 space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isActive 
                      ? "bg-orange-100 border border-orange-300 text-orange-700 shadow-sm" 
                      : "text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                  }`
                }
              >
                Accueil
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isActive 
                      ? "bg-orange-100 border border-orange-300 text-orange-700 shadow-sm" 
                      : "text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                  }`
                }
              >
                À propos
              </NavLink>

              <NavLink
                to="/realisations"
                className={({ isActive }) =>
                  `block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isActive 
                      ? "bg-orange-100 border border-orange-300 text-orange-700 shadow-sm" 
                      : "text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                  }`
                }
              >
                Réalisations
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isActive 
                      ? "bg-orange-100 border border-orange-300 text-orange-700 shadow-sm" 
                      : "text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                  }`
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isActive 
                      ? "bg-orange-100 border border-orange-300 text-orange-700 shadow-sm" 
                      : "text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                  }`
                }
              >
                Équipe
              </NavLink>

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

              {/* Réseaux sociaux */}
              <div className="pt-5 mt-5 border-t border-slate-200/60">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">Suivez-nous</p>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://www.facebook.com/neoct.ci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 active:scale-95"
                    aria-label="Suivez-nous sur Facebook"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/neoct.ci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 transition-all duration-300 transform hover:scale-110 active:scale-95"
                    aria-label="Suivez-nous sur Instagram"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.tiktok.com/@neoct.ci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 active:scale-95"
                    aria-label="Suivez-nous sur TikTok"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
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
