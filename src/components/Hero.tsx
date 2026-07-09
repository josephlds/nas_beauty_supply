export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-rose-50/40 to-amber-50/30" />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-rose-200/20 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
          Parent Company
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
          NAS Beauty
          <br />
          <span className="text-stone-500">Supply</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 sm:text-xl">
          A family of beauty and lifestyle brands united by quality, innovation,
          and a passion for helping people look and feel their best.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#brands"
            className="inline-flex items-center rounded-full bg-stone-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            Explore Our Brands
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-stone-300 px-8 py-3.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-white/60"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
