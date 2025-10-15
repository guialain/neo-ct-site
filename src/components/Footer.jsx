import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} NEO Construction & Travaux — Tous droits réservés.</div>
        <div className="flex items-center gap-4">
          <Link to="/apropos" className="hover:text-blue-600">À propos</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
