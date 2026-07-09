import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-xs font-semibold tracking-wider text-white">
            N
          </span>
          <span className="text-sm font-medium tracking-[0.2em] text-stone-900 uppercase">
            NAS Beauty Supply
          </span>
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          <a
            href="#brands"
            className="text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            Our Brands
          </a>
          <a
            href="#about"
            className="text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
