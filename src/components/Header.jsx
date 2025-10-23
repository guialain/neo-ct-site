// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const linkBase =
    "relative px-2 py-1 text-[15px] md:text-base lg:text-lg font-medium text-slate-700 hover:text-slate-900 transition-colors";
  const linkActive =
    "after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-slate-900";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200/60">
	 <div className="mx-auto max-w-7xl px-4 py-2 md:py-2.5 flex items-center justify-between">
        {/* Logo plus grand */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo-neoct.jpg"        // vérifie le nom si besoin
            alt="NEO Construction & Travaux"
            className="h-12 md:h-14 lg:h-[100px] w-auto"   // <-- tailles
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

          {/* Bouton Contact plus grand */}
          <NavLink
            to="/contact"
            className="ml-2 md:ml-3 rounded-xl bg-slate-900 text-white px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base lg:text-lg font-semibold hover:bg-slate-800 transition"
          >
            Contact
          </NavLink>

        </nav>

        {/* (Optionnel) bouton burger si tu as un menu mobile */}
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100">
          <span className="sr-only">Ouvrir le menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-slate-700">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
