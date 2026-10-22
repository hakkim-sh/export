"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, Search } from "lucide-react";

interface HeroProps {
  onRequestQuote: (product?: string) => void;
  onSearch: (query: string) => void;
}

export function Hero({ onRequestQuote, onSearch }: HeroProps) {
  const [query, setQuery] = useState("");

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="relative overflow-hidden bg-[#f3f5f0]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_55%,rgba(221,229,214,.7),transparent_46%)]" />
      <div className="relative mx-auto grid min-h-[590px] max-w-[1200px] items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:py-[72px]">
        <div className="relative z-10 max-w-[580px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d3dfd3] bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[.13em] text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" /> Trade, made dependable
          </div>
          <h1 className="serif max-w-[590px] text-[50px] leading-[1.03] text-ink sm:text-[64px] lg:text-[72px]">
            Good business<br />goes <span className="text-forest">further.</span>
          </h1>
          <p className="mt-6 max-w-[470px] text-[15px] leading-7 text-slate-600">
            Thoughtfully sourced commodities. Thoroughly checked quality. A trade partner who sees every shipment through.
          </p>
          <form onSubmit={submitSearch} className="mt-8 flex max-w-[520px] items-center rounded border border-slate-200 bg-white p-1.5 shadow-[0_8px_30px_rgba(20,45,33,.06)]">
            <Search className="ml-3 shrink-0 text-slate-400" size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search by product, HS code, or category" placeholder="Search products, HS code, category..." className="min-w-0 flex-1 px-3 py-3 text-xs text-ink outline-none placeholder:text-slate-400 sm:text-sm" />
            <button type="submit" className="flex shrink-0 items-center gap-2 rounded bg-forest px-4 py-3 text-xs font-bold text-white transition hover:bg-[#125843]">
              Search <ArrowRight size={14} />
            </button>
          </form>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-medium text-slate-500">
            <span className="flex items-center gap-2"><span className="text-forest">✓</span> Exporting to 40+ countries</span>
            <span className="flex items-center gap-2"><span className="text-forest">✓</span> FOB / CIF fulfillment</span>
            <span className="flex items-center gap-2"><span className="text-forest">✓</span> Strict QA/QC</span>
          </div>
          <a href="#products" className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-ink hover:text-forest">
            Explore our products <ArrowDown size={14} />
          </a>
        </div>

        <div className="relative mx-auto hidden h-[445px] w-full max-w-[485px] lg:block">
          <div className="absolute right-0 top-0 h-[410px] w-[82%] overflow-hidden rounded-[48%_48%_3px_3px] bg-[#d8ded2]">
            <div className="h-full w-full bg-cover bg-center" role="img" aria-label="Sunlit fields ready for harvest" style={{ backgroundImage: "linear-gradient(180deg,rgba(19,43,34,.03),rgba(19,43,34,.18)),url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90')" }} />
          </div>
          <div className="absolute bottom-0 left-0 w-[210px] border border-white/70 bg-white p-5 shadow-[0_16px_50px_rgba(20,45,33,.13)]">
            <p className="eyebrow text-[9px]">A reliable route to market</p>
            <p className="serif mt-2 text-[26px] leading-tight">From source<br />to your shore.</p>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-slate-500"><span className="h-7 w-7 rounded-full bg-[#eaf1ea] p-1.5 text-center text-forest">↗</span> One partner. Every step.</div>
          </div>
          <div className="absolute right-0 top-[292px] rounded-full border-[5px] border-[#f3f5f0] bg-white px-5 py-3 shadow-lg">
            <span className="block text-center text-[19px] font-bold text-ink">40+</span>
            <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-slate-500">markets served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
