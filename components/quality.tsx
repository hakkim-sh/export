import { BadgeCheck, FileCheck2, FlaskConical, Leaf, ShieldCheck } from "lucide-react";

const standards = [
  { icon: ShieldCheck, title: "Quality systems", detail: "Supplier audits & batch traceability" },
  { icon: FlaskConical, title: "Lab-tested goods", detail: "Independent testing where required" },
  { icon: Leaf, title: "Plant health", detail: "Phytosanitary documentation support" },
  { icon: FileCheck2, title: "Export documents", detail: "Origin, inspection & shipping paperwork" }
];

export function Quality() {
  return (
    <section id="quality" className="section-pad bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Quality, with proof</p>
          <h2 className="serif mt-3 text-[40px] leading-tight text-ink sm:text-[48px]">Confidence in<br />every consignment.</h2>
          <p className="mt-5 max-w-[430px] text-sm leading-6 text-slate-500">Quality isn&apos;t a badge on a page. It&apos;s the checks, records, and product-specific documentation behind every order.</p>
          <div className="mt-7 flex items-center gap-3 border-l-2 border-forest bg-[#f4f7f5] px-4 py-3">
            <BadgeCheck size={21} className="shrink-0 text-forest" />
            <p className="text-[11px] leading-5 text-slate-600">Certificates and compliance documentation are verified and shared for the relevant product and destination market.</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {standards.map(({ icon: Icon, title, detail }, index) => (
            <div key={title} className="flex min-h-[126px] items-start gap-4 border border-slate-200 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eff5ef] text-forest"><Icon size={19} /></span>
              <div><span className="text-[9px] font-bold uppercase tracking-[.14em] text-slate-400">0{index + 1} / trade standard</span><h3 className="mt-2 text-sm font-bold text-ink">{title}</h3><p className="mt-1 text-[10px] leading-4 text-slate-500">{detail}</p></div>
            </div>
          ))}
          <div className="flex items-center justify-between bg-ink px-5 py-4 text-white sm:col-span-2">
            <div><p className="text-[9px] font-bold uppercase tracking-[.15em] text-emerald-200">Made for your market</p><p className="mt-1 text-sm font-semibold">ISO · HACCP · CE · FDA requirements supported*</p></div>
            <ShieldCheck className="shrink-0 text-emerald-200" size={24} />
          </div>
          <p className="text-[9px] leading-4 text-slate-400 sm:col-span-2">*Certification and registration apply to specific products, producers, and destination markets; documentation is supplied where applicable.</p>
        </div>
      </div>
    </section>
  );
}
