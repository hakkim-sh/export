export type ProductCategory = "Agricultural" | "Food ingredients" | "Raw materials" | "Manufactured";
export type Incoterm = "FOB" | "CIF" | "CFR" | "EXW" | "DDP";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  origin: string;
  moq: string;
  packaging: string;
  incoterms: Incoterm[];
  hsCode: string;
  image: string;
  imageAlt: string;
  note: string;
}

export interface QuoteRequest {
  buyerName: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  unit: string;
  incoterm: Incoterm;
  destinationPort: string;
  requirements: string;
}
