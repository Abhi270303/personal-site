import { Link, useLocation } from "wouter";

const NAV = [
  { href: "/", label: "about" },
  { href: "/work", label: "work" },
  { href: "/writing", label: "writing" },
  { href: "/contact", label: "contact" },
];

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-30 border-b border-ink/15 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-ink hover:text-rust md:text-xl"
        >
          abhishek <span className="italic text-rust">yadav</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-5 md:gap-7">
            {NAV.map((item) => {
              const active = location === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-mono text-[12px] uppercase tracking-wider transition-colors hover:text-rust md:text-[13px] ${
                      active
                        ? "text-rust hand-underline [border-color:#B85C38]"
                        : "text-ink/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
