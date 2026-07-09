import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          <span className="text-[11px] font-medium tracking-[0.25em] text-foreground uppercase">
            NAS Beauty Supply
          </span>
        </Link>
        <nav className="flex items-center gap-10">
          <a
            href="#brands"
            className="text-[13px] text-muted transition-colors hover:text-accent"
          >
            Brands
          </a>
          <a
            href="#about"
            className="text-[13px] text-muted transition-colors hover:text-accent"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
