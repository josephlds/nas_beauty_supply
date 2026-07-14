import { contactEmail } from "@/data/companies";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-medium tracking-[0.3em] text-accent uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-muted">
            For partnerships, brand inquiries, or general questions about NAS
            Beauty Supply, we would love to hear from you.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="group mt-10 inline-flex items-center gap-3 border-b border-ink/30 pb-1 text-[13px] font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {contactEmail}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
