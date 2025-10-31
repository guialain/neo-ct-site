// src/App.jsx
import React from "react";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";

// Layout
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Realisations from "./pages/Realisations.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";

function SiteLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-dvh flex flex-col bg-white overflow-x-hidden w-full">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden pt-14 sm:pt-16 md:pt-[88px] lg:pt-[100px]">
        <Outlet />
      </main>
      <Footer showBackground={true} />
    </div>
  );
}

function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold text-slate-900">Page introuvable</h1>
      <p className="mt-2 text-slate-600">Vérifiez l'URL ou revenez à l'accueil.</p>
      <p className="mt-4">
        <Link className="text-orange-600 hover:text-orange-700 underline" to="/">← Retour</Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        {/* Choix officiel : /apropos */}
        <Route path="/apropos" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />

        {/* Alias pratiques (optionnels) */}
        <Route path="/about" element={<About />} />
        <Route path="/a-propos" element={<About />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
