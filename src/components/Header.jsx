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
    "relative px-2 py-1 text-[15px] md:text-base lg:text-lg font-medium text-slate-700 hover:text-slate-900 transition-colors";
  const linkActive =
    "after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-slate-900";

  const mobileLinkBase =
    "block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors";
  const mobileLinkActive = "bg-slate-100 text-slate-900";

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-200/60 shadow-sm">
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
              className="ml-2 md:ml-3 rounded-xl bg-slate-900 text-white px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 text-sm md:text-base lg:text-lg font-semibold hover:bg-slate-800 transition"
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <nav className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 md:hidden overflow-y-auto">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <span className="font-semibold text-slate-900">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100"
                aria-label="Fermer le menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-slate-700">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${mobileLinkBase} ${isActive ? mobileLinkActive : ""}`
                }
              >
                🏠 Accueil
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${mobileLinkBase} ${isActive ? mobileLinkActive : ""}`
                }
              >
                ℹ️ À propos
              </NavLink>

              <NavLink
                to="/realisations"
                className={({ isActive }) =>
                  `${mobileLinkBase} ${isActive ? mobileLinkActive : ""}`
                }
              >
                🏗️ Réalisations
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${mobileLinkBase} ${isActive ? mobileLinkActive : ""}`
                }
              >
                🔧 Services
              </NavLink>

              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `${mobileLinkBase} ${isActive ? mobileLinkActive : ""}`
                }
              >
                👥 Équipe
              </NavLink>

              <div className="pt-4 border-t border-slate-200 mt-4">
                <NavLink
                  to="/contact"
                  className="block w-full px-4 py-3 text-center rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
                >
                  📞 Contact
                </NavLink>
              </div>

              {/* Contact rapide */}
              <div className="pt-4 mt-4 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Contact rapide</p>
                <div className="space-y-2">
                  <a
                    href="tel:+2250576428643"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    📞 +225 05 76 42 86 43
                  </a>
                  <a
                    href="https://wa.me/2250576428643"
                    className="block px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50 rounded-lg"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="mailto:marketing@neoct.ci"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    ✉️ marketing@neoct.ci
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
