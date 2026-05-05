const SOCIALS = [
  { platform: "email", handle: "0xabhishekyadav@gmail.com", href: "mailto:0xabhishekyadav@gmail.com" },
  { platform: "twitter / x", handle: "@0xabhii", href: "https://x.com/0xabhii" },
  { platform: "linkedin", handle: "0xabhii", href: "https://www.linkedin.com/in/0xabhii/" },
  { platform: "github", handle: "Abhi270303", href: "https://github.com/Abhi270303" },
  { platform: "portfolio", handle: "0xabhii.xyz", href: "https://0xabhii.xyz" },
  { platform: "telegram", handle: "@oxabhii", href: "https://t.me/oxabhii" },
  // { platform: "farcaster", handle: "@abhishek", href: "#" },
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
      <p className="mt-3 font-mono text-sm text-muted">abhi, mumbai</p>

      <ul className="mt-14">
        {SOCIALS.map((s, i) => (
          <li
            key={s.platform}
            className={`group rule py-4 ${i === 0 ? "border-t" : ""}`}
            style={{ borderTopColor: "rgba(26,24,20,0.15)" }}
          >
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
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
        href="/abhishek-yadav.pdf"
        download
        className="mt-14 inline-block border border-dashed border-ink/40 px-6 py-4 hover:border-rust hover:text-rust"
      >
        <div className="font-mono text-sm">↓ download resume</div>
        <div className="mt-1 font-mono text-[11px] text-muted">
          abhishek-yadav.pdf
        </div>
      </a>
    </section>
  );
}
