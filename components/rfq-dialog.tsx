"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import type { Incoterm, Product, QuoteRequest } from "@/types/product";

interface RfqDialogProps {
  products: Product[];
  selectedProduct: string;
  open: boolean;
  onClose: () => void;
}

const incoterms: Incoterm[] = ["FOB", "CIF", "CFR", "DDP"];

export function RfqDialog({ products, selectedProduct, open, onClose }: RfqDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setSubmitted(false);
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const formData = new FormData(event.currentTarget);
    const request: QuoteRequest = {
      buyerName: String(formData.get("buyerName")),
      companyName: String(formData.get("companyName")),
      country: String(formData.get("country")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
      product: String(formData.get("product")),
      quantity: String(formData.get("quantity")),
      unit: String(formData.get("unit")),
      incoterm: String(formData.get("incoterm")) as Incoterm,
      destinationPort: String(formData.get("destinationPort")),
      requirements: String(formData.get("requirements"))
    };
    console.info("Quote request captured for demo:", request);
    setSubmitted(true);
  }

  return (
    <dialog ref={dialogRef} aria-labelledby="rfq-title" onClose={handleClose} onClick={(event) => { if (event.target === dialogRef.current) handleClose(); }} className="m-auto max-h-[92vh] w-[min(660px,calc(100%-24px))] overflow-y-auto border-0 bg-white p-0 text-ink shadow-2xl backdrop:bg-slate-950/50">
      <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
        <div><p className="eyebrow">Trade desk · 1 business day response</p><h2 id="rfq-title" className="serif mt-1 text-[30px]">Let&apos;s talk business.</h2></div>
        <button type="button" aria-label="Close quote request" onClick={handleClose} className="rounded-full p-2 text-slate-500 hover:bg-slate-100"><X size={20} /></button>
      </div>
      {submitted ? (
        <div className="px-7 py-14 text-center sm:px-12">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-50 text-forest"><Check size={24} /></span>
          <h3 className="serif mt-5 text-3xl">Thank you for your inquiry.</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">Your request is ready for our trade desk. This demo form does not transmit information; connect it to your CRM or email service to receive live inquiries.</p>
          <button onClick={handleClose} className="mt-7 rounded-sm bg-forest px-6 py-3 text-sm font-semibold text-white">Done</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8">
          <p className="mb-5 text-xs leading-5 text-slate-500">Tell us a little about what you need. Our trade desk will follow up with specifications and a tailored offer.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Buyer name" name="buyerName" required autoComplete="name" />
            <Field label="Company name" name="companyName" required autoComplete="organization" />
            <Field label="Country of destination" name="country" required autoComplete="country-name" />
            <Field label="Work email" name="email" type="email" required autoComplete="email" />
            <Field label="Phone / WhatsApp" name="phone" type="tel" required autoComplete="tel" />
            <label className="block text-[11px] font-semibold text-slate-600">Product
              <select name="product" required defaultValue={selectedProduct} className="mt-1.5 block w-full border border-slate-200 bg-white px-3 py-2.5 text-sm font-normal text-ink outline-none focus:border-forest">
                <option value="" disabled>Select a product</option>
                {products.map((product) => <option key={product.id} value={product.name}>{product.name}</option>)}
              </select>
            </label>
            <div className="sm:col-span-2">
              <span className="block text-[11px] font-semibold text-slate-600">Target quantity</span>
              <div className="mt-1.5 grid grid-cols-[1fr_130px] gap-2">
                <input name="quantity" type="number" min="1" step="any" placeholder="e.g. 20" required className="min-w-0 border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-forest" />
                <select name="unit" aria-label="Quantity unit" className="border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-forest"><option>Tons</option><option>Containers</option><option>Units</option></select>
              </div>
            </div>
            <label className="block text-[11px] font-semibold text-slate-600">Preferred Incoterm
              <select name="incoterm" className="mt-1.5 block w-full border border-slate-200 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-forest">{incoterms.map((term) => <option key={term}>{term}</option>)}</select>
            </label>
            <Field label="Destination port" name="destinationPort" placeholder="e.g. Rotterdam, NL" required />
            <label className="block text-[11px] font-semibold text-slate-600 sm:col-span-2">Packaging / private label requirements
              <textarea name="requirements" rows={3} placeholder="Share any packaging, labeling, or quality requirements..." className="mt-1.5 block w-full resize-y border border-slate-200 px-3 py-2.5 text-sm font-normal outline-none focus:border-forest" />
            </label>
          </div>
          <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] leading-4 text-slate-400">By submitting, you agree to our terms of trade and privacy policy.</p>
            <button type="submit" className="shrink-0 rounded-sm bg-forest px-6 py-3 text-xs font-bold text-white transition hover:bg-[#125843]">Send RFQ <span aria-hidden="true">↗</span></button>
          </div>
        </form>
      )}
    </dialog>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

function Field({ label, name, type = "text", required = false, autoComplete, placeholder }: FieldProps) {
  return (
    <label className="block text-[11px] font-semibold text-slate-600">{label}
      <input name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className="mt-1.5 block w-full border border-slate-200 px-3 py-2.5 text-sm font-normal text-ink outline-none placeholder:text-slate-400 focus:border-forest" />
    </label>
  );
}
