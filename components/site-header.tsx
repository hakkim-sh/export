"use client";

import { useState } from "react";
import { Globe2, Menu, X } from "lucide-react";

interface SiteHeaderProps {
  onRequestQuote: () => void;
}

const links = [
  ["Products", "#products"],
  ["Quality & compliance", "#quality"],
  ["Logistics", "#logistics"],
  ["About us", "#about"],
  ["Contact", "#contact"]
];

export function SiteHeader({ onRequestQuote }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="Meridian Trade home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-white">
            <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M6 21.5C11.2 21.3 15.3 17.9 16 10c.7 7.9 4.8 11.3 10 11.5M7 25c2.7-2.4 5.7-3.3 9-3.3s6.3.9 9 3.3M16 7v16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>
            <span className="block text-[15px] font-bold tracking-[.09em] text-ink">MERIDIAN</span>
            <span className="block text-[9px] font-semibold tracking-[.24em] text-slate-500">TRADE CO.</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[13px] font-medium text-slate-600 transition hover:text-forest">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button type="button" aria-label="Language and currency selector" className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
            <Globe2 size={15} /> EN <span className="text-slate-300">/</span> USD
          </button>
          <button onClick={onRequestQuote} className="rounded-sm bg-forest px-4 py-3 text-xs font-bold text-white transition hover:bg-[#125843]">
            Request a quote <span aria-hidden="true">↗</span>
          </button>
        </div>

        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-ink lg:hidden">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-6 pb-6 pt-2 shadow-lg lg:hidden">
          {links.map(([label, href]) => (
            <a key={href} onClick={() => setMenuOpen(false)} href={href} className="block border-b border-slate-100 py-3 text-sm text-slate-700">
              {label}
            </a>
          ))}
          <button onClick={() => { setMenuOpen(false); onRequestQuote(); }} className="mt-4 w-full rounded-sm bg-forest px-4 py-3 text-sm font-bold text-white">
            Request a quote
          </button>
        </nav>
      )}
    </header>
  );
}
