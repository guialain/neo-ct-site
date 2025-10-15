export default function About() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-12 items-start">
        <div className="md:col-span-4">
          <img
            src="/Gui Alain BAHIBO.jpg"
            alt="Gui Alain BAHIBO"
            className="w-full rounded-2xl object-cover shadow h-[420px]"
          />
        </div>

        <div className="md:col-span-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Mot du Directeur Général</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Nous avons créé NEO CONSTRUCTION ET TRAVAUX (NEO CT) avec une conviction simple :
            offrir une approche nouvelle de la construction, fondée sur la rigueur, la transparence
            et la passion du travail bien fait. Depuis 2019, nous accompagnons nos clients dans la
            réalisation de projets ambitieux, en alliant innovation, exigence et respect des
            engagements.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Notre croissance repose sur des professionnels dévoués, unis par la même exigence du
            travail bien fait et le respect des valeurs : intégrité, professionnalisme et engagement
            envers nos clients. Notre ambition est claire : devenir une référence nationale dans la
            construction et les travaux publics.
          </p>
          <p className="mt-4 font-medium text-slate-900">
            Gui Alain BAHIBO — Directeur Général
          </p>
        </div>
      </div>
    </section>
  );
}
