import { Anchor, Boxes, CheckCheck, Globe2, SearchCheck } from "lucide-react";

const steps = [
  { icon: SearchCheck, number: "01", title: "Source with care", text: "We work with vetted producers and long-term supply partners." },
  { icon: CheckCheck, number: "02", title: "Inspect & verify", text: "Quality checks and documentation aligned to your requirements." },
  { icon: Boxes, number: "03", title: "Pack to spec", text: "Export-ready packing, custom labels, and private-label options." },
  { icon: Anchor, number: "04", title: "Dispatch on time", text: "Coordinated bookings, export clearance, and clear milestones." },
  { icon: Globe2, number: "05", title: "Deliver globally", text: "End-to-end shipment visibility, from origin to destination." }
];

export function Logistics() {
  return (
    <section id="logistics" className="section-pad bg-[#f4f7f5]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">The Meridian way</p>
            <h2 className="serif mt-3 text-[40px] leading-tight text-ink sm:text-[48px]">Good trade is<br />never one step.</h2>
            <p className="mt-5 max-w-[400px] text-sm leading-6 text-slate-500">One experienced team coordinates every handoff, so you can focus on what comes next.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["JNPT · Nhava Sheva", "Mundra", "Chennai"].map((port) => <span key={port} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold text-slate-600">{port}</span>)}
            </div>
            <p className="mt-3 text-[10px] text-slate-400">Primary departure ports · India</p>
          </div>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ icon: Icon, number, title, text }, index) => (
              <div key={number} className={`border border-[#e0e8e2] bg-white p-5 ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <div className="flex items-center justify-between"><Icon size={20} className="text-forest" /><span className="text-[10px] font-semibold tracking-[.12em] text-slate-300">{number}</span></div>
                <h3 className="mt-6 text-sm font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[11px] leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#dce5de] pt-6 sm:flex-row sm:items-center">
          <p className="text-[10px] font-bold uppercase tracking-[.13em] text-slate-400">Freight network partners</p>
          <div className="flex flex-wrap items-center gap-x-9 gap-y-3 text-[14px] font-bold tracking-tight text-slate-500">
            <span>maersk</span><span>MSC</span><span>CMA CGM</span><span>Hapag-Lloyd</span>
          </div>
        </div>
      </div>
    </section>
  );
}
