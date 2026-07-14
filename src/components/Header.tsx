"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { companies } from "@/data/companies";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setBrandsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-surface/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.25rem]">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-ink sm:text-xl"
          onClick={closeMenu}
        >
          NAS Beauty Supply
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#about"
            className="text-[13px] font-medium tracking-[0.08em] text-foreground/80 uppercase transition-colors hover:text-accent"
          >
            About
          </a>

          <div
            className="relative"
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
          >
            <a
              href="#brands"
              className="text-[13px] font-medium tracking-[0.08em] text-foreground/80 uppercase transition-colors hover:text-accent"
            >
              Brands
            </a>
            <div
              className={`absolute top-full left-1/2 w-52 -translate-x-1/2 pt-3 transition-all duration-200 ${
                brandsOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <ul className="border border-border bg-surface py-2 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.25)]">
                {companies.map((company) => (
                  <li key={company.domain}>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-[13px] text-muted transition-colors hover:bg-stone hover:text-foreground"
                    >
                      {company.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#contact"
            className="text-[13px] font-medium tracking-[0.08em] text-foreground/80 uppercase transition-colors hover:text-accent"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 top-16 bg-surface transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          <a
            href="#about"
            onClick={closeMenu}
            className="border-b border-border py-4 text-sm font-medium tracking-[0.12em] text-foreground uppercase"
          >
            About
          </a>
          <a
            href="#brands"
            onClick={closeMenu}
            className="border-b border-border py-4 text-sm font-medium tracking-[0.12em] text-foreground uppercase"
          >
            Brands
          </a>
          <div className="flex flex-col gap-1 border-b border-border py-3 pl-3">
            {companies.map((company) => (
              <a
                key={company.domain}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="py-2 text-[14px] text-muted"
              >
                {company.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={closeMenu}
            className="py-4 text-sm font-medium tracking-[0.12em] text-foreground uppercase"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
