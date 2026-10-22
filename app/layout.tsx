import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian Trade Co. | Sourcing made dependable",
  description:
    "A trusted export partner for quality agricultural, food, and industrial products. Built for buyers who value consistency.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
