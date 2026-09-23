import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto flex max-w-shell flex-col gap-4 px-6 py-9 font-mono text-[10px] tracking-[0.22em] text-paper-dim md:flex-row md:items-center md:justify-between md:px-10">
        <span>© 2026 MOYINOLUWA OSO OGOOLUWA</span>
        <span>DATA · AI · TECHNOLOGY</span>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-brass"
        >
          BACK TO TOP <ArrowUp size={12} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  );
}
