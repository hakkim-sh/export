"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin, PackageCheck } from "lucide-react";
import type { Product } from "@/types/product";

interface ProductCatalogProps {
  products: Product[];
  searchQuery: string;
  onRequestQuote: (product?: string) => void;
}

const categories = ["All products", "Agricultural", "Food ingredients", "Raw materials", "Manufactured"] as const;

export function ProductCatalog({ products, searchQuery, onRequestQuote }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All products");
  const filteredProducts = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === "All products" || product.category === activeCategory;
      const matchesSearch = !term || [product.name, product.category, product.hsCode, product.origin].some((value) => value.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, products, searchQuery]);

  return (
    <section id="products" className="section-pad bg-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our catalog</p>
            <h2 className="serif mt-3 text-[40px] leading-tight text-ink sm:text-[48px]">The right goods.<br className="hidden sm:block" /> The right way.</h2>
            <p className="mt-4 max-w-[475px] text-sm leading-6 text-slate-500">Carefully selected products, clear specifications, and flexible order terms to fit your operation.</p>
          </div>
          <p className="text-xs text-slate-400">{filteredProducts.length} products shown <span aria-hidden="true">↗</span></p>
        </div>
        <div className="mt-9 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter products by category">
          {categories.map((category) => (
            <button key={category} role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-[11px] font-semibold transition ${activeCategory === category ? "border-forest bg-forest text-white" : "border-slate-200 bg-white text-slate-500 hover:border-forest hover:text-forest"}`}>
              {category}
            </button>
          ))}
        </div>
        {filteredProducts.length ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group flex flex-col overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_14px_36px_rgba(23,43,59,.08)]">
                <div className="product-image relative h-[180px] bg-[#e8ece7]" role="img" aria-label={product.imageAlt} style={{ backgroundImage: `url("${product.image}")` }}>
                  <span className="absolute left-3 top-3 rounded-sm bg-white/95 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[.09em] text-forest">{product.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400"><MapPin size={12} /> {product.origin}</div>
                  <h3 className="mt-2 min-h-[42px] text-[16px] font-semibold leading-[1.35] text-ink">{product.name}</h3>
                  <p className="mt-1 text-[10px] text-slate-400">HS code {product.hsCode} <span className="px-1">·</span> {product.note}</p>
                  <div className="my-4 border-t border-slate-100 pt-3">
                    <div className="mb-2 flex items-start gap-2 text-[11px] leading-[1.5] text-slate-600">
                      <PackageCheck size={14} className="mt-0.5 shrink-0 text-forest" /><span><b className="font-semibold text-ink">MOQ:</b> {product.moq}</span>
                    </div>
                    <div className="min-h-[32px] pl-[22px] text-[10px] leading-[1.55] text-slate-500">{product.packaging}</div>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
                    <div className="flex gap-1.5" aria-label={`Incoterms: ${product.incoterms.join(", ")}`}>
                      {product.incoterms.map((term) => <span key={term} className="rounded border border-slate-200 px-1.5 py-1 text-[9px] font-semibold text-slate-500">{term}</span>)}
                    </div>
                    <button aria-label={`Request specifications or quote for ${product.name}`} onClick={() => onRequestQuote(product.name)} className="grid h-8 w-8 place-items-center rounded-full bg-[#eff4ef] text-forest transition hover:bg-forest hover:text-white">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-dashed border-slate-300 py-14 text-center">
            <p className="text-sm font-semibold text-ink">No products match your search.</p>
            <p className="mt-1 text-xs text-slate-500">Try another product name, HS code, origin, or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
