import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const NAV = [
  { href: "/", label: "about" },
  { href: "/work", label: "work" },
  { href: "/writing", label: "writing" },
  { href: "/contact", label: "contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-1" aria-label="Toggle theme">
        <span className="block h-4 w-4 rounded-full border border-ink/20" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-1 text-ink/70 transition-colors hover:text-rust"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-30 border-b border-ink/15 bg-paper/90 backdrop-blur transition-colors duration-300">
      <div className="mx-auto flex max-w-[1100px] items-center justify-end px-6 py-4 md:px-10 md:py-5">
        <nav>
          <ul className="flex items-center gap-4 md:gap-7">
            {NAV.map((item) => {
              const active = location === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-mono text-[12px] uppercase tracking-wider transition-colors hover:text-rust md:text-[13px] ${
                      active
                        ? "text-rust hand-underline"
                        : "text-ink/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
