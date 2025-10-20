// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-neoct.jpg" alt="NEO CT" className="h-8 w-auto" />
        </Link>

        <nav className="flex gap-2 text-sm">
          <NavLink to="/" end className={({isActive})=>`px-3 py-2 rounded ${isActive?"bg-slate-900 text-white":"hover:bg-slate-100"}`}>Accueil</NavLink>
          {/* Utilise /apropos (sans accent) partout */}
          <NavLink to="/apropos" className={({isActive})=>`px-3 py-2 rounded ${isActive?"bg-slate-900 text-white":"hover:bg-slate-100"}`}>À propos</NavLink>
          <NavLink to="/realisations" className={({isActive})=>`px-3 py-2 rounded ${isActive?"bg-slate-900 text-white":"hover:bg-slate-100"}`}>Réalisations</NavLink>
          <NavLink to="/services" className={({isActive})=>`px-3 py-2 rounded ${isActive?"bg-slate-900 text-white":"hover:bg-slate-100"}`}>Services</NavLink>
          <NavLink to="/team" className={({isActive})=>`px-3 py-2 rounded ${isActive?"bg-slate-900 text-white":"hover:bg-slate-100"}`}>Équipe</NavLink>
          <NavLink to="/contact" className={({isActive})=>`px-3 py-2 rounded ${isActive?"bg-slate-900 text-white":"hover:bg-slate-100"}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
