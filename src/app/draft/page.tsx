import type { Metadata } from "next";

// Internal draft/scratch page. Not linked anywhere in the site navigation.
// Used as a staging area for future content — safe to ignore in production.
export const metadata: Metadata = {
  title: "Draft | NAS Beauty Supply",
  robots: { index: false, follow: false },
};

export default function DraftPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-[11px] font-medium tracking-[0.3em] text-accent uppercase">
        Internal Draft
      </p>
      <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Work in progress
      </h1>
      <p className="mt-6 text-[15px] leading-7 text-muted">
        This is a private staging page for upcoming NAS Beauty Supply content.
        It is intentionally not linked from the main site.
      </p>
    </main>
  );
}
