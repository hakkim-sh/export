import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "basmati-rice",
    name: "1121 Sella Basmati Rice",
    category: "Agricultural",
    origin: "India · Punjab",
    moq: "1 × 20' FCL",
    packaging: "25 kg / 50 kg PP bags · private label",
    incoterms: ["FOB", "CIF", "CFR"],
    hsCode: "1006.30",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Golden grains of basmati rice",
    note: "Aged 12–18 months"
  },
  {
    id: "whole-cashews",
    name: "Premium Cashew Kernels",
    category: "Agricultural",
    origin: "Vietnam · Binh Phuoc",
    moq: "1 metric ton",
    packaging: "10 kg vacuum tins · carton cases",
    incoterms: ["FOB", "CIF", "EXW"],
    hsCode: "0801.32",
    image: "https://images.unsplash.com/photo-1563412885-139a6d6d9b26?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Fresh raw cashew kernels",
    note: "W320 · W240 grades"
  },
  {
    id: "sesame-seeds",
    name: "Natural Sesame Seeds",
    category: "Agricultural",
    origin: "India · Gujarat",
    moq: "5 metric tons",
    packaging: "25 kg / 50 kg PP or jute bags",
    incoterms: ["FOB", "CIF", "CFR"],
    hsCode: "1207.40",
    image: "https://images.unsplash.com/photo-1599909630966-2a2adfa22e6b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Sesame seeds ready for export",
    note: "Machine cleaned · sortex"
  },
  {
    id: "turmeric",
    name: "Turmeric Finger & Powder",
    category: "Food ingredients",
    origin: "India · Erode",
    moq: "1 metric ton",
    packaging: "25 kg food-grade PP / kraft bags",
    incoterms: ["FOB", "CIF", "EXW"],
    hsCode: "0910.30",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f2?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Bright turmeric spice and powder",
    note: "Curcumin 3%–5%"
  },
  {
    id: "cocoa-powder",
    name: "Natural Cocoa Powder",
    category: "Food ingredients",
    origin: "Ghana · Ashanti",
    moq: "2 metric tons",
    packaging: "25 kg multiwall paper bags",
    incoterms: ["FOB", "CIF", "CFR"],
    hsCode: "1805.00",
    image: "https://images.unsplash.com/photo-1610611424854-5e0703211dd3?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Rich cocoa powder and cocoa beans",
    note: "Natural · alkalized options"
  },
  {
    id: "cotton-yarn",
    name: "Ring-Spun Cotton Yarn",
    category: "Manufactured",
    origin: "India · Tamil Nadu",
    moq: "5 metric tons",
    packaging: "Cone wound · export cartons",
    incoterms: ["FOB", "CIF", "EXW"],
    hsCode: "5205.12",
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7adaa?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Natural cotton yarn wound onto spools",
    note: "Ne 20s–Ne 60s"
  },
  {
    id: "rubber",
    name: "Natural Rubber TSR 20",
    category: "Raw materials",
    origin: "Thailand · Songkhla",
    moq: "1 × 20' FCL",
    packaging: "33.3 kg bales · palletized",
    incoterms: ["FOB", "CIF", "CFR"],
    hsCode: "4001.22",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Natural rubber material for manufacturing",
    note: "Mill-tested · export grade"
  },
  {
    id: "jute-bags",
    name: "Eco Jute Packaging",
    category: "Manufactured",
    origin: "Bangladesh · Dhaka",
    moq: "10,000 units",
    packaging: "Custom dimensions · printed branding",
    incoterms: ["FOB", "CIF", "EXW"],
    hsCode: "6305.10",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Reusable natural-fiber packaging",
    note: "Custom sizes & GSM"
  }
];
