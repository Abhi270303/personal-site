type Project = {
  category: string;
  name: string;
  blurb: string;
  bullets: string[];
  lesson?: string;
  stack: string;
  status: string;
};

const PROJECTS: Project[] = [
  {
    category: "agentic payments · past",
    name: "RHEOLLY",
    blurb:
      "An agent-first wallet and payment infrastructure for the next wave of crypto applications.",
    bullets: [
      "lead BD & partnerships. GTM strategy across agentic DeFi & infra",
      "in conversation with the ethereum foundation, coinbase, metamask",
      "onboarded ZyfAI, Vistara Labs, bond.credit, gigabrain.gg",
    ],
    stack: "account abstraction · agentic payments · ethereum",
    status: "BD & partnerships · jul to dec 2025",
  },
  {
    category: "socialfi · co-founder · paused",
    name: "ATTENOMICS LABS",
    blurb:
      "A verifiable attention layer for tokenized social. Built fast, paused honestly.",
    bullets: [
      "the bet: hacker-house demo on Mantle, asking why no one verified attention",
      "the pull: 0 → 500+ users · first paying customer · partnerships in 6 months",
      "the squeeze: outsourced AI layer slipped; Cookie3 & Wallchain launched same window",
      "the call: paused on purpose. socialfi doesn't work without momentum.",
    ],
    lesson:
      "lessons: small teams airtight · timing brutal · always build in public.",
    stack: "socialfi · attentionfi · mantle",
    status: "co-founder & coo · jan to jun 2025",
  },
  {
    category: "ecosystem growth · the road",
    name: "QONEQT",
    blurb:
      "Fourteen months on the road. Partnerships, workshops, and 2,000+ developers in person.",
    bullets: [
      "30+ workshops across 10 indian cities · 2,000+ devs in person",
      "partnerships with Huddle01, Sandbox, QuillAudits, Okto, Router",
      "refined onboarding flows & tooling integrations with eng + design",
    ],
    stack: "huddle01 · sandbox · quillaudits · okto · router",
    status: "BD & ecosystem growth · nov 2023 to dec 2024",
  },
];

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-24">
      <div className="mb-16 md:mb-20">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          ~ work
        </p>
        <h2 className="mt-3 font-serif text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
          three roles,{" "}
          <span className="italic text-rust">told honestly.</span>
        </h2>
      </div>

      <div className="space-y-20 md:space-y-24">
        {PROJECTS.map((p, i) => (
          <article
            key={p.name}
            className="grid grid-cols-12 gap-y-6 md:gap-x-10"
          >
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                ↘ {p.category}
              </p>
              <p className="mt-4 font-mono text-[12px] text-sage">
                [{p.status}]
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted/80">
                stack: {p.stack}
              </p>
            </div>

            <div className="col-span-12 md:col-span-8">
              <h3
                className={`font-serif text-4xl leading-[0.95] tracking-tight text-ink md:text-6xl ${
                  i % 2 === 0 ? "" : "tilt-tiny"
                }`}
              >
                {p.name}
              </h3>
              <p className="mt-5 max-w-[58ch] font-serif text-lg font-light italic leading-[1.5] text-ink/85 md:text-xl">
                {p.blurb}
              </p>
              <ul className="mt-6 max-w-[62ch] space-y-2.5">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 font-serif text-base leading-snug text-ink/85 md:text-[17px]"
                  >
                    <span className="select-none text-rust">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {p.lesson && (
                <p className="mt-6 max-w-[58ch] border-l-2 border-rust pl-4 font-mono text-[12px] italic leading-relaxed text-ink/70">
                  {p.lesson}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Hackathon wins */}
      <div className="mt-24 border-t border-ink/15 pt-14 md:mt-32 md:pt-20">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          ~ hackathon wins
        </p>
        <h3 className="mt-3 font-serif text-4xl leading-[0.95] tracking-tight text-ink md:text-5xl">
          three builds, <span className="italic text-rust">three wins.</span>
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          <a
            href="https://devfolio.co/projects/proof-of-med-ff76"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-sage">
              winner, DeSci · Feb 2025
            </p>
            <h4 className="mt-2 font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-rust">
              Proof of Med
            </h4>
            <p className="mt-2 font-serif text-base italic leading-snug text-ink/70">
              Privacy-preserving prescription verifier using Zero-Knowledge
              Proofs on Arbitrum.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              ZKPs · Noir · Sindri · zkVerify · Next.js
            </p>
          </a>

          <a
            href="http://stealth-pass.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-sage">
              winner, ETHGlobal Bangkok · Nov 2024
            </p>
            <h4 className="mt-2 font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-rust">
              Encryptix
            </h4>
            <p className="mt-2 font-serif text-base italic leading-snug text-ink/70">
              On-chain ticketing with private + transparent ticket data using FHE
              and cross-chain messaging.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              FHE · Inco · Hyperlane · Base
            </p>
          </a>

          <a
            href="https://ownsound-three.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-sage">
              winner, Hacker House Goa · Aug 2024
            </p>
            <h4 className="mt-2 font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-rust">
              OwnSound
            </h4>
            <p className="mt-2 font-serif text-base italic leading-snug text-ink/70">
              Web3 platform for Non-Fungible Sounds with fair ownership and
              transparent royalty splits.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              AES · IPFS · Inco FHE · Polygon
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
