export default function AboutSection() {
  return (
    <section id="about" className="border-t border-stone-200 bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
              About Us
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-stone-900 sm:text-5xl">
              Building beauty brands that matter
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-stone-600">
            <p>
              NAS Beauty Supply is the parent company behind a growing portfolio
              of beauty, professional, and lifestyle brands. We provide the
              infrastructure, vision, and support that allow each brand to thrive
              while staying true to its unique identity.
            </p>
            <p>
              From premium personal care with CCare Beauty, to professional-grade
              products through Felix Professional, and stylish accessories with My
              Vocks — our companies serve diverse audiences with one shared
              standard: quality you can trust.
            </p>
            <p>
              This site serves as the home for NAS Beauty Supply and a gateway to
              all of our brands.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          {[
            { value: "3", label: "Active Brands" },
            { value: "1", label: "Unified Vision" },
            { value: "∞", label: "Passion for Beauty" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-stone-200 bg-white p-8 text-center"
            >
              <p className="font-serif text-4xl text-stone-900">{stat.value}</p>
              <p className="mt-2 text-sm text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
