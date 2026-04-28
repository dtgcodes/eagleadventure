import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Eagle Adventure & Tourism | Paragliding in Chitral, Pakistan",
  description:
    "Eagle Adventure and Tourism — Chitral's premier paragliding company. Tandem flights, training, trekking & tours in the Hindukush mountains.",
  keywords: "paragliding Chitral, Eagle Flying Club Booni, adventure tourism Pakistan, Hindukush paragliding",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-[family-name:var(--font-montserrat)]">{children}</body>
    </html>
  );
}
