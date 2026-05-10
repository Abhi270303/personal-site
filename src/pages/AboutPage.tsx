import { Link } from "wouter";

const NUMBERS = [
  { num: "20+", label: "Indian cities travelled" },
  { num: "2,000+", label: "devs onboarded" },
  { num: "10+", label: "hackathon wins" },
  { num: "30+", label: "workshops hosted" },
];

const RIGHT_NOW = [
  { label: "building", text: "something around gamified infra for financial markets." },
  { label: "thinking", text: "what a founder mentality actually means in a bear market." },
  { label: "listening", text: "Dhurandhar album on loop." },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-24">
      {/* Hero */}
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-12">
        <div className="col-span-12 md:col-span-8">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            i am
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-[0.95] tracking-tight text-ink md:text-8xl">
            <span className="block">abhishek</span>
            <span className="block tilt-tiny italic text-rust">yadav.</span>
          </h1>
          <p className="mt-6 font-mono text-[12px] uppercase tracking-wider text-muted md:text-[13px]">
            [ growth · partnerships · devrel · web3 · mumbai ]
          </p>

          <p className="mt-8 max-w-[55ch] font-serif text-lg font-light leading-[1.5] text-ink md:text-2xl">
            I work at the seam between crypto protocols and the people who
            build on them.
          </p>
          <p className="mt-4 max-w-[55ch] font-serif text-base italic leading-relaxed text-ink/70 md:text-lg">
            Previously BD at <span className="text-rust">Rheolly</span>,
            Attenomics, Qoneqt, and The Graph.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="border border-ink px-5 py-3 font-mono text-[12px] uppercase tracking-wider text-ink hover:border-rust hover:text-rust"
            >
              see the work →
            </Link>
            <Link
              href="/writing"
              className="border border-dashed border-ink/40 px-5 py-3 font-mono text-[12px] uppercase tracking-wider text-ink/80 hover:border-rust hover:text-rust"
            >
              read the notes
            </Link>
          </div>
        </div>

        {/* Right column by the numbers */}
        <aside className="col-span-12 md:col-span-4">
          <div className="md:border-l md:border-ink/15 md:pl-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              ~ by the numbers
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-1 md:gap-y-7">
              {NUMBERS.map((s) => (
                <li key={s.label}>
                  <div className="font-serif text-4xl leading-none text-ink md:text-5xl">
                    {s.num}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted md:text-[11px]">
                    {s.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Right now strip */}
      <div className="mt-20 border-t border-ink/15 pt-10 md:mt-28">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          right now
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-8">
          {RIGHT_NOW.map((item) => (
            <li
              key={item.label}
              className="font-serif text-base leading-relaxed text-ink/85 md:text-[17px]"
            >
              <span className="select-none text-rust">• </span>
              <span className="italic text-ink/60">{item.label}: </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
