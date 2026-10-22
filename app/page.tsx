"use client";

import { useState } from "react";
import { ArrowRight, Check, PackageCheck, Ship } from "lucide-react";
import { Hero } from "@/components/hero";
import { Logistics } from "@/components/logistics";
import { ProductCatalog } from "@/components/product-catalog";
import { Quality } from "@/components/quality";
import { RfqDialog } from "@/components/rfq-dialog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/data/products";

const facts = [
  { icon: PackageCheck, value: "12+ yrs", label: "trade experience" },
  { icon: Ship, value: "40+", label: "markets reached" },
  { icon: Check, value: "Every order", label: "quality checked" },
  { icon: ArrowRight, value: "One partner", label: "source to shipment" }
];

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function openQuote(product = "") {
    setSelectedProduct(product);
    setQuoteOpen(true);
  }

  return (
    <>
      <SiteHeader onRequestQuote={() => openQuote()} />
      <main>
        <Hero onRequestQuote={openQuote} onSearch={setSearchQuery} />
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 py-7 sm:px-8 md:grid-cols-4">
            {facts.map(({ icon: Icon, value, label }, index) => (
              <div key={label} className={`flex items-center justify-center gap-3 py-3 ${index !== 0 ? "border-l border-slate-200" : ""}`}>
                <Icon size={18} className="hidden text-forest sm:block" />
                <div><p className="text-sm font-bold text-ink">{value}</p><p className="mt-0.5 text-[9px] uppercase tracking-[.1em] text-slate-400 sm:text-[10px]">{label}</p></div>
              </div>
            ))}
          </div>
        </section>
        <ProductCatalog products={products} searchQuery={searchQuery} onRequestQuote={openQuote} />
        <Logistics />
        <Quality />
        <section className="bg-[#eaf0e9] px-5 py-14 text-center sm:px-8">
          <p className="eyebrow">Start a conversation</p>
          <h2 className="serif mt-3 text-[34px] text-ink sm:text-[42px]">A better supply chain starts here.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">Share your requirements. We&apos;ll help you find the right product, specifications, and shipping terms.</p>
          <button onClick={() => openQuote()} className="mt-6 rounded-sm bg-forest px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#125843]">Request a tailored quote <span aria-hidden="true">↗</span></button>
        </section>
      </main>
      <SiteFooter onRequestQuote={() => openQuote()} />
      <RfqDialog products={products} selectedProduct={selectedProduct} open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
