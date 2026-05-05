import type { ReactNode } from "react";

type Size = "feature" | "wide" | "tall" | "small";

type Card = {
  href: string;
  size: Size;
  kind: "essay" | "thread" | "note" | "experiment";
  date: string;
  title: string;
  cover: ReactNode;
};

const SIZE_CLASSES: Record<Size, string> = {
  feature: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  small: "col-span-1 row-span-1",
};

const KIND_LABEL: Record<Card["kind"], string> = {
  essay: "essay",
  thread: "𝕏 thread",
  note: "notes",
  experiment: "experiment",
};

// ───────── cover compositions (typographic, no images) ─────────

function FeatureCover() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-ink p-6 text-paper md:p-8">
      <p className="font-mono text-[10px] uppercase tracking-wider text-paper/60">
        ★ pinned · post-mortem
      </p>
      <p className="font-serif text-3xl italic leading-[1.05] text-paper md:text-5xl">
        attenomics
        <br />
        didn't fail
        <br />
        because the
        <br />
        idea was{" "}
        <span className="text-rust">wrong.</span>
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-paper/60">
        14 jun 2025 · 8 min read
      </p>
    </div>
  );
}

function ArrowCover() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-rust p-5 text-paper md:p-6">
      <p className="font-mono text-[10px] uppercase tracking-wider text-paper/70">
        essay
      </p>
      <p className="font-serif text-5xl leading-none text-paper md:text-7xl">
        → → →
      </p>
      <p className="font-serif text-base italic leading-tight text-paper md:text-lg">
        agentic payments —<br />
        what nobody is saying.
      </p>
    </div>
  );
}

function ThreadCover({
  count,
  excerpt,
  bg = "bg-paper",
  text = "text-ink",
}: {
  count: string;
  excerpt: string;
  bg?: string;
  text?: string;
}) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between border border-ink/15 p-4 md:p-5 ${bg} ${text}`}
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-wider opacity-70">
          𝕏 thread
        </p>
        <p className="font-mono text-[10px] uppercase tracking-wider opacity-50">
          {count}
        </p>
      </div>
      <p className="font-serif text-lg italic leading-snug md:text-xl">
        "{excerpt}"
      </p>
      <div className="flex gap-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 rounded-full bg-current opacity-30"
          />
        ))}
      </div>
    </div>
  );
}

function NumberCover({
  num,
  label,
  tone = "sage",
}: {
  num: string;
  label: string;
  tone?: "sage" | "rust" | "ink";
}) {
  const bg =
    tone === "sage" ? "bg-sage" : tone === "rust" ? "bg-rust" : "bg-ink";
  return (
    <div className={`absolute inset-0 flex flex-col justify-between p-5 text-paper ${bg} md:p-6`}>
      <p className="font-mono text-[10px] uppercase tracking-wider text-paper/70">
        field notes
      </p>
      <p className="font-serif text-7xl leading-none text-paper md:text-9xl">
        {num}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-paper/80">
        {label}
      </p>
    </div>
  );
}

function GridPatternCover({ word, sub }: { word: string; sub: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-5 text-ink md:p-6"
      style={{
        backgroundImage:
          "radial-gradient(rgba(26,24,20,0.18) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
        backgroundColor: "#F5F0E8",
      }}
    >
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
        notes
      </p>
      <p className="font-serif text-6xl italic leading-none text-rust md:text-8xl">
        {word}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
        {sub}
      </p>
    </div>
  );
}

function PathCover() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-paper p-5 text-ink md:p-6">
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
        essay
      </p>
      <p className="font-serif text-2xl leading-tight text-ink md:text-3xl">
        <span className="text-muted">devrel</span> →{" "}
        <span className="text-muted">bd</span> →{" "}
        <span className="text-rust italic">founder</span> →{" "}
        <span className="text-muted">bd</span>
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
        the route i didn't plan
      </p>
    </div>
  );
}

function HalfBakedCover() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between border-2 border-dashed border-ink/40 bg-paper p-4 text-ink md:p-5">
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
        experiment
      </p>
      <p className="font-serif text-2xl italic leading-tight text-ink">
        half-baked.
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted/80">
        a partner-tracker on a single sheet
      </p>
    </div>
  );
}

function DocsCover() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-ink p-4 text-paper md:p-5">
      <p className="font-mono text-[10px] uppercase tracking-wider text-paper/60">
        notes
      </p>
      <p className="font-serif text-xl italic leading-tight text-paper md:text-2xl">
        writing developer docs that don't lie.
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-paper/60">
        from the graph, 2024
      </p>
    </div>
  );
}

// ───────── data ─────────

const CARDS: Card[] = [
  {
    href: "#",
    size: "feature",
    kind: "essay",
    date: "14 jun 2025",
    title: "attenomics didn't fail because the idea was wrong",
    cover: <FeatureCover />,
  },
  {
    href: "#",
    size: "wide",
    kind: "essay",
    date: "09 apr 2026",
    title: "agentic payments — what nobody is saying",
    cover: <ArrowCover />,
  },
  {
    href: "#",
    size: "small",
    kind: "thread",
    date: "02 apr 2026",
    title: "0→500 users at attenomics — the playbook",
    cover: (
      <ThreadCover
        count="18 tweets"
        excerpt="we shipped a working demo in 72 hours. then nothing happened for two weeks."
      />
    ),
  },
  {
    href: "#",
    size: "small",
    kind: "thread",
    date: "20 mar 2026",
    title: "the wallet is the agent now",
    cover: (
      <ThreadCover
        count="11 tweets"
        excerpt="every wallet ux assumption breaks when an agent is signing."
        bg="bg-sage"
        text="text-paper"
      />
    ),
  },
  {
    href: "#",
    size: "tall",
    kind: "note",
    date: "14 mar 2026",
    title: "fhe is the abstraction layer i didn't expect to love",
    cover: <GridPatternCover word="FHE." sub="encrypted compute, plain words" />,
  },
  {
    href: "#",
    size: "wide",
    kind: "essay",
    date: "27 mar 2026",
    title: "the unreasonable effectiveness of in-person workshops",
    cover: <NumberCover num="10" label="cities · 30+ workshops · 2,000+ devs" tone="sage" />,
  },
  {
    href: "#",
    size: "small",
    kind: "thread",
    date: "11 mar 2026",
    title: "10 lessons from 30 workshops in 10 cities",
    cover: (
      <ThreadCover
        count="14 tweets"
        excerpt="the room teaches you what discord cannot."
        bg="bg-rust"
        text="text-paper"
      />
    ),
  },
  {
    href: "#",
    size: "wide",
    kind: "essay",
    date: "28 feb 2026",
    title: "from devrel to bd to founder — the route i didn't plan",
    cover: <PathCover />,
  },
  {
    href: "#",
    size: "small",
    kind: "note",
    date: "11 feb 2026",
    title: "writing developer docs that don't lie",
    cover: <DocsCover />,
  },
  {
    href: "#",
    size: "small",
    kind: "experiment",
    date: "30 jan 2026",
    title: "half-baked: partner-tracker on a google sheet",
    cover: <HalfBakedCover />,
  },
];

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
      <div className="mb-12 md:mb-14">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          ~ writing & threads
        </p>
        <h2 className="mt-3 font-serif text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
          the <span className="italic text-rust">notebook.</span>
        </h2>
        <p className="mt-5 max-w-[55ch] font-serif text-base font-light italic leading-relaxed text-ink/70 md:text-lg">
          essays, field notes, and twitter threads. the pinned one (top-left)
          is the long version of the attenomics story.
        </p>
      </div>

      {/* Card grid */}
      <div
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        style={{
          gridAutoRows: "minmax(170px, auto)",
          gridAutoFlow: "dense",
        }}
      >
        {CARDS.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className={`group relative block overflow-hidden rounded-md transition-transform hover:-translate-y-1 hover:shadow-lg ${SIZE_CLASSES[card.size]}`}
          >
            {card.cover}
            {/* Hover caption strip */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-paper/95 px-3 py-2 text-ink backdrop-blur transition-transform group-hover:translate-y-0 md:px-4 md:py-3">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate font-serif text-[13px] leading-tight text-ink md:text-sm">
                  {card.title}
                </p>
                <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-rust md:text-[10px]">
                  {KIND_LABEL[card.kind]} →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-12 font-mono text-[11px] uppercase tracking-wider text-muted">
        hover a card to see the title · click to open
      </p>
    </section>
  );
}
