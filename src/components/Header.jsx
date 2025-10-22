// src/components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/apropos", label: "À propos" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/services", label: "Services" },
  { to: "/equipe", label: "Équipe" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "relative inline-flex items-center px-2 py-1 text-sm md:text-[15px] transition-colors";
  const linkActive =
    "text-slate-900 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-slate-900 after:rounded";
  const linkIdle = "text-slate-600 hover:text-slate-900";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Aller à l’accueil">
          {/* Wrapper contrôle la hauteur → logo s'adapte */}
          <div className="h-12 sm:h-14 lg:h-16 flex-shrink-0">
            <img
              src="/logo-neoct.jpg" // ou .png / .svg
              alt="NEO Construction & Travaux"
              className="block h-full w-auto"
              loading="eager"
              decoding="sync"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {NAV.slice(0, -1).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          {/* CTA Contact (desktop) */}
          <NavLink
            to="/contact"
            className="ml-2 inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-2 text-sm md:text-[15px] font-medium hover:bg-slate-800"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-100"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
        >
          {/* Icon burger */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85%] bg-white shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="h-10">
                <img
                  src="/logo-neoct.jpg"
                  alt="NEO Construction & Travaux"
                  className="h-full w-auto"
                />
              </div>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
              >
                {/* Icon close */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="mt-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-[15px] ${isActive ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
