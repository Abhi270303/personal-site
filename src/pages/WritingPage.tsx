import type { ReactNode } from "react";

type Size = "feature" | "wide" | "tall" | "small";

type Card = {
  href: string;
  size: Size;
  kind: "essay" | "thread" | "note" | "experiment" | "blog";
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
  blog: "blog",
};

// ───────── QuickNode blog covers ─────────

function XstocksCover() {
  return (
    <img
      src="/xstocks.png"
      alt="xstocks"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function RestakeCover() {
  return (
    <img
      src="/restaking.png"
      alt="restaking"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function EtfCover() {
  return (
    <img
      src="/ibit.png"
      alt="ibit"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function GeniusCover() {
  return (
    <img
      src="/genius-act.png"
      alt="genius act"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function MegaethCover() {
  return (
    <img
      src="/megaeth.png"
      alt="megaeth"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

// ───────── other writing covers ─────────

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
        idea was <span className="text-rust">wrong.</span>
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-paper/60">
        14 jun 2025 · 8 min read
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
        &ldquo;{excerpt}&rdquo;
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

// ───────── data ─────────

const QUICKNODE_BLOGS: Card[] = [
  {
    href: "https://blog.quicknode.com/xstocks-solana-tokenized-stocks-2025/",
    size: "wide",
    kind: "blog",
    date: "02 sep 2025",
    title: "xstocks: tokenized stocks on solana",
    cover: <XstocksCover />,
  },
  {
    href: "https://blog.quicknode.com/restaking-revolution-eigenlayer-defi-yields-2025/",
    size: "wide",
    kind: "blog",
    date: "02 sep 2025",
    title: "the restaking revolution: eigenlayer & defi yields",
    cover: <RestakeCover />,
  },
  {
    href: "https://blog.quicknode.com/ibit-blackrock-bitcoin-etf-guide-2025/",
    size: "tall",
    kind: "blog",
    date: "02 sep 2025",
    title: "the blackrock bitcoin etf guide",
    cover: <EtfCover />,
  },
  {
    href: "https://blog.quicknode.com/genius-act-stablecoin-regulation-2025/",
    size: "small",
    kind: "blog",
    date: "02 sep 2025",
    title: "the genius act: stablecoin regulation in 2025",
    cover: <GeniusCover />,
  },
  {
    href: "https://blog.quicknode.com/megaeth-ultra-fast-l2-ethereum-defi-gaming-2025/",
    size: "small",
    kind: "blog",
    date: "02 sep 2025",
    title: "megaeth: ultra-fast L2 for ethereum defi & gaming",
    cover: <MegaethCover />,
  },
];

const OTHER_CARDS: Card[] = [
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
    size: "small",
    kind: "thread",
    date: "02 apr 2026",
    title: "0→500 users at attenomics: the playbook",
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

function QuickNodeSection() {
  const featured = QUICKNODE_BLOGS[3]; // genius act
  const sideBlogs = QUICKNODE_BLOGS.filter((_, i) => i !== 3);

  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-5">
      {/* Featured — left */}
      <a
        href={featured.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full md:w-[52%]"
      >
        <div className="overflow-hidden rounded-md">
          <img
            src="/genius-act.png"
            alt={featured.title}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-rust md:text-[28px]">
            {featured.title}
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted">
            {KIND_LABEL[featured.kind]} · {featured.date}
          </p>
        </div>
      </a>

      {/* Side blogs — right */}
      <div className="flex w-full flex-col gap-4 md:w-[48%]">
        {sideBlogs.map((blog) => (
          <a
            key={blog.title}
            href={blog.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-3 md:flex-col md:gap-2"
          >
            <div className="aspect-[2/1] w-28 shrink-0 overflow-hidden rounded-md md:w-full">
              <img
                src={
                  blog.title.includes("xstocks")
                    ? "/xstocks.png"
                    : blog.title.includes("restaking")
                      ? "/restaking.png"
                      : blog.title.includes("etf")
                        ? "/ibit.png"
                        : "/megaeth.png"
                }
                alt={blog.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center md:mt-1">
              <h4 className="font-serif text-base leading-snug text-ink transition-colors group-hover:text-rust md:text-lg">
                {blog.title}
              </h4>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                {KIND_LABEL[blog.kind]} · {blog.date}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div
      className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      style={{
        gridAutoRows: "minmax(170px, auto)",
        gridAutoFlow: "dense",
      }}
    >
      {cards.map((card) => (
        <a
          key={card.title}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
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
  );
}

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
          essays, field notes, and twitter threads. the pinned one is the long
          version of the attenomics story.
        </p>
      </div>

      {/* QuickNode blogs */}
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          wrote some blogs for quicknode
        </p>
        <div className="mt-4">
          <QuickNodeSection />
        </div>
      </div>

      {/* Other writings */}
      <div className="mt-16 md:mt-20">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          other writings
        </p>
        <div className="mt-4">
          <CardGrid cards={OTHER_CARDS} />
        </div>
      </div>

      <p className="mt-12 font-mono text-[11px] uppercase tracking-wider text-muted">
        hover a card to see the title · click to open
      </p>
    </section>
  );
}
