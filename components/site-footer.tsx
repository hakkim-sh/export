import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

interface SiteFooterProps {
  onRequestQuote: () => void;
}

export function SiteFooter({ onRequestQuote }: SiteFooterProps) {
  return (
    <footer id="contact" className="bg-[#142a38] text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-16 sm:px-8">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_.8fr_.9fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-white"><span className="serif text-2xl">M</span></span>
              <span><span className="block text-sm font-bold tracking-[.1em]">MERIDIAN</span><span className="block text-[9px] tracking-[.24em] text-slate-400">TRADE CO.</span></span>
            </a>
            <p className="mt-5 max-w-[330px] text-xs leading-6 text-slate-300">A considered approach to global sourcing. Building lasting partnerships, one well-managed shipment at a time.</p>
            <button onClick={onRequestQuote} className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-200 hover:text-white">Talk to our trade desk <ArrowUpRight size={14} /></button>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.15em] text-emerald-200">Trade desk</h3>
            <ul className="mt-5 space-y-4 text-xs text-slate-300">
              <li className="flex items-center gap-3"><Mail size={14} className="text-emerald-200" /><a href="mailto:trade@meridian.example" className="hover:text-white">trade@meridian.example</a></li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-emerald-200" /><a href="tel:+912240001800" className="hover:text-white">+91 22 4000 1800</a></li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-emerald-200" /><a href="https://wa.me/912240001800" className="hover:text-white">WhatsApp trade desk</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.15em] text-emerald-200">Registered office</h3>
            <p className="mt-5 flex items-start gap-3 text-xs leading-6 text-slate-300"><MapPin size={14} className="mt-1 shrink-0 text-emerald-200" /> 4th Floor, Trade Centre<br />Bandra Kurla Complex<br />Mumbai, Maharashtra 400051<br />India</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-b border-white/15 py-5 text-[10px] text-slate-400 sm:flex-row sm:items-center">
          <p>IEC: AABCM1234X <span className="px-2 text-slate-600">·</span> GSTIN: 27AABCM1234X1Z5 <span className="px-2 text-slate-600">·</span> CIN: U51909MH2014PTC000000</p>
          <div className="flex gap-5"><a href="#terms" className="hover:text-white">Terms of trade</a><a href="#privacy" className="hover:text-white">Privacy</a></div>
        </div>
        <div id="about" className="flex flex-col justify-between gap-2 pt-5 text-[9px] text-slate-500 sm:flex-row">
          <p>© 2025 Meridian Trade Co. All rights reserved.</p>
          <p>Demo website · Company details, registrations & contact information are illustrative.</p>
        </div>
        <span id="terms" className="sr-only">Terms of trade</span><span id="privacy" className="sr-only">Privacy policy</span>
      </div>
    </footer>
  );
}
