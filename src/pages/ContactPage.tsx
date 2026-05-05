const SOCIALS = [
  { platform: "email", handle: "abhi@abhishekyadav.dev", href: "mailto:abhi@abhishekyadav.dev" },
  { platform: "twitter / x", handle: "@abhishekyadav", href: "#" },
  { platform: "linkedin", handle: "/in/abhishekyadav", href: "#" },
  { platform: "github", handle: "/abhishekyadav", href: "#" },
  { platform: "telegram", handle: "@abhishekyadav", href: "#" },
  { platform: "farcaster", handle: "@abhishek", href: "#" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[820px] px-6 py-16 md:px-10 md:py-24">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">
        ~ contact
      </p>
      <h2 className="mt-4 font-serif text-5xl italic leading-tight text-ink md:text-7xl">
        say <span className="text-rust">hi.</span>
      </h2>

      <p className="mt-8 max-w-[50ch] font-serif text-xl font-light leading-[1.5] text-ink md:text-2xl">
        tell me what you're working on. send something half-finished. i'll
        write back.
      </p>
      <p className="mt-3 font-mono text-sm text-muted">— abhi, mumbai</p>

      <ul className="mt-14">
        {SOCIALS.map((s, i) => (
          <li
            key={s.platform}
            className={`group rule py-4 ${i === 0 ? "border-t" : ""}`}
            style={{ borderTopColor: "rgba(26,24,20,0.15)" }}
          >
            <a
              href={s.href}
              className="flex flex-col gap-1 hover:text-rust md:flex-row md:items-baseline md:gap-6"
            >
              <span className="font-mono text-[12px] uppercase tracking-wider text-muted md:w-32 md:shrink-0 group-hover:text-rust">
                {s.platform}
              </span>
              <span className="font-serif text-lg text-ink group-hover:text-rust md:text-xl">
                {s.handle}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-14 inline-block border border-dashed border-ink/40 px-6 py-4 hover:border-rust hover:text-rust"
      >
        <div className="font-mono text-sm">↓ download resume</div>
        <div className="mt-1 font-mono text-[11px] text-muted">
          abhishek-yadav.pdf · april 2026
        </div>
      </a>
    </section>
  );
}
