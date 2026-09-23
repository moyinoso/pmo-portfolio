"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/links";

const items = [
  { label: "Work", href: "#work" },
  { label: "Exploring", href: "#exploring" },
  { label: "Field Notes", href: "#notebook" },
  { label: "About", href: "#about" },
  // { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-shell items-center justify-between px-6 md:px-10"
      >
        <a href="/#top" className="flex items-baseline gap-3">
          <span className="font-serif text-xl italic leading-none text-brass">
            PMO
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.22em] text-paper-dim lg:inline">
            MOYINOLUWA OSO OGOOLUWA
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="font-mono text-[11px] tracking-[0.18em] text-paper-dim transition-colors duration-300 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/#contact"
          className="inline-flex items-center gap-1.5 border border-ink-line px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-paper transition-colors duration-300 hover:border-brass hover:text-brass"
        >
          LET&rsquo;S TALK <ArrowUpRight size={13} strokeWidth={1.5} />
        </a>
      </nav>
    </header>
  );
}
