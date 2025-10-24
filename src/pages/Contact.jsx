// src/pages/Contact.jsx
import React, { useCallback } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  // ——— Données de contact ———
  const brand = "NEO CONSTRUCTION ET TRAVAUX";
  const site = "https://www.neoct.ci";
  const email = "marketing@neoct.ci";
  const phoneCall = "+2250576428643";
  const phoneWhats = "2250576428643";

  const address = {
    street: "Cocody 7ᵉ Tranche – Les Oscars",
    city: "Abidjan",
    country: "CI",
    lat: 5.39413,
    lng: -3.98997,
    label: "NEO CONSTRUCTION ET TRAVAUX",
  };

  // ——— WhatsApp ———
  const openWhatsApp = useCallback(
    (e) => {
      e.preventDefault();
      const msg =
        "Bonjour NEO CT 👋, je souhaite échanger à propos de mon projet (budget, délais, localisation).";
      const appUrl = `whatsapp://send?phone=${phoneWhats}&text=${encodeURIComponent(msg)}`;
      const webUrl = `https://wa.me/${phoneWhats}?text=${encodeURIComponent(msg)}`;

      const t0 = Date.now();
      window.location.href = appUrl;
      setTimeout(() => {
        if (Date.now() - t0 < 1200) {
          window.open(webUrl, "_blank", "noopener,noreferrer");
        }
      }, 800);
    },
    [phoneWhats]
  );

  // ——— Formulaire (mailto) ———
  const onSubmitMailto = useCallback(
    (e) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const nom = (fd.get("name") || "").toString().trim();
      const tel = (fd.get("tel") || "").toString().trim();
      const sujet = (fd.get("subject") || "Demande d'information").toString();
      const message = (fd.get("message") || "").toString();

      const body =
        `Nom: ${nom}\n` +
        (tel ? `Téléphone: ${tel}\n` : "") +
        `\nMessage:\n${message}\n`;

      const mailto = `mailto:${email}?subject=${encodeURIComponent(
        sujet
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    },
    [email]
  );

  // ——— SEO ———
  const canonical = `${site}/contact`;
  const ogImage = `${site}/og/contact-1200x630.jpg`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand,
    url: site,
    image: `${site}/hero-neoct.jpg`,
    logo: `${site}/logo-neoct.jpg`,
    email,
    telephone: phoneCall,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressCountry: address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: address.lat, longitude: address.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    areaServed: "CI",
    sameAs: [],
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      <Helmet prioritizeSeoTags>
        <html lang="fr" />
        <title>Contact — {brand}</title>
        <meta
          name="description"
          content="Contactez NEO Construction & Travaux : devis, appels, WhatsApp, adresse et plan d’accès. Réponse rapide."
        />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={brand} />
        <meta property="og:title" content={`Contact — ${brand}`} />
        <meta property="og:description" content="Devis, appels, WhatsApp, adresse et plan d’accès." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Contact — ${brand}`} />
        <meta name="twitter:description" content="Devis, appels, WhatsApp, adresse et plan d’accès." />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>

      {/* Bandeau */}
      <section className="border-b bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Contact</p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Parlons de votre projet</h1>
          <p className="mt-2 text-slate-600">
            Demandez un devis, planifiez un rendez-vous ou envoyez-nous simplement un message. Réponse rapide.
          </p>
        </div>
      </section>

      {/* Grille: Coordonnées + Formulaire */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Coordonnées */}
          <aside className="lg:col-span-5 rounded-2xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Coordonnées</h2>

           <dl className="mt-4 space-y-2">
  {/* Adresse */}
  <div className="grid grid-cols-[120px_1fr] items-baseline gap-3">
    <dt className="text-sm font-medium text-slate-500">Adresse</dt>
    <dd className="text-slate-700">
      {address.street}, {address.city}
    </dd>
  </div>

  {/* Téléphone */}
  <div className="grid grid-cols-[120px_1fr] items-baseline gap-3">
    <dt className="text-sm font-medium text-slate-500">Téléphone</dt>
    <dd>
      <a
        className="text-blue-700 hover:underline"
        href={`tel:${phoneCall.replace(/\s+/g, "")}`}
      >
        {phoneCall}
      </a>
    </dd>
  </div>

  {/* Email */}
  <div className="grid grid-cols-[120px_1fr] items-baseline gap-3">
    <dt className="text-sm font-medium text-slate-500">Email</dt>
    <dd>
      <a className="text-blue-700 hover:underline" href={`mailto:${email}`}>
        {email}
      </a>
    </dd>
  </div>
</dl>


            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`tel:${phoneCall.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-800 hover:bg-slate-50"
              >
                📞 Appeler
              </a>
              <a
                href={`https://wa.me/${phoneWhats}`}
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Carte */}
            <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-slate-200">
            <iframe
  title="Plan d’accès"
  className="h-56 w-full"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
  src={`https://www.google.com/maps?hl=fr&q=${address.lat},${address.lng}(${encodeURIComponent(
    address.label
  )})&z=18&output=embed`}
/>

            </div>

            {/* Itinéraire */}
            <a
  className="mt-2 inline-block text-sm text-blue-700 hover:underline"
  href={`https://www.google.com/maps/dir/?api=1&destination=${address.lat},${address.lng}&travelmode=driving`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Itinéraire vers ${address.label}`}
>
  🚗 Itinéraire vers {address.label}
</a>

          </aside>

          {/* Formulaire */}
          <div className="lg:col-span-7 rounded-2xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Envoyer un message</h2>
            <p className="mt-1 text-sm text-slate-600">
              Dites-nous quelques mots sur votre besoin — nous revenons vers vous rapidement.
            </p>

            <form className="mt-4 grid gap-4" onSubmit={onSubmitMailto}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700">Nom complet</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-slate-400"
                    placeholder="Ex. Gui Alain BAHIBO"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-slate-700">Téléphone</span>
                  <input
  type="tel"
  name="tel"
  autoComplete="tel"
  inputMode="tel"
  pattern="[0-9+\s()-]*"
  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-slate-400"
  placeholder="+225 …"
/>

                </label>
              </div>

              <label className="block">
                <span className="block text-sm font-medium text-slate-700">Sujet</span>
                <input
                  type="text"
                  name="subject"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-slate-400"
                  placeholder="Devis – Dalle béton R+1, rénovation, etc."
                />
              </label>

              <label className="block">
                <span className="block text-sm font-medium text-slate-700">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-slate-400"
                  placeholder="Décrivez votre projet (type d’ouvrage, surface, localisation, échéance…)"
                />
              </label>

              <div className="mt-1 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
                >
                  ✉️ Envoyer par e-mail
                </button>

                <a
                  href={`https://wa.me/${phoneWhats}`}
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
                >
                  💬 Discuter sur WhatsApp
                </a>
              </div>

              <p className="text-xs text-slate-500">
                En soumettant ce formulaire, vous acceptez d’être recontacté(e) par {brand}.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
