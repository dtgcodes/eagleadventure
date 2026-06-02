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

const siteUrl = "https://eagleadventuretourism.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eagle Adventure & Tourism | Paragliding in Chitral, Pakistan",
    template: "%s | Eagle Adventure & Tourism",
  },
  description:
    "Eagle Adventure and Tourism — Chitral's #1 paragliding company. Tandem flights, training courses, mountain trekking & tours in the Hindukush mountains, Booni, Pakistan.",
  keywords: [
    "paragliding Chitral",
    "Eagle Flying Club Booni",
    "adventure tourism Pakistan",
    "Hindukush paragliding",
    "tandem paragliding Pakistan",
    "Chitral tourism",
    "paragliding Booni",
    "Eagle Adventure Tourism",
    "Pakistan adventure sports",
    "Chitral trekking",
    "KPK adventure tourism",
    "paragliding training Pakistan",
  ],
  authors: [{ name: "Eagle Adventure and Tourism" }],
  creator: "Eagle Adventure and Tourism (SMC-Private) Limited",
  publisher: "Eagle Adventure and Tourism",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Eagle Adventure & Tourism",
    title: "Eagle Adventure & Tourism | Paragliding in Chitral, Pakistan",
    description:
      "Pakistan's #1 paragliding club in Chitral — soaring above the Hindukush since 2014. Tandem flights, training & adventure tours.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Eagle Adventure and Tourism — Paragliding in Chitral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle Adventure & Tourism | Paragliding in Chitral, Pakistan",
    description:
      "Pakistan's #1 paragliding club in Chitral — soaring above the Hindukush since 2014. Tandem flights, training & adventure tours.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Adventure Tourism",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              name: "Eagle Adventure and Tourism",
              alternateName: "Eagle Flying Club Booni",
              description:
                "Chitral's premier paragliding company offering tandem flights, training courses, trekking and cultural tours in the Hindukush mountains.",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              image: `${siteUrl}/logo.png`,
              telephone: "+923038989750",
              email: "eagleflyingclubbooni@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Booni",
                addressLocality: "Chitral",
                addressRegion: "Khyber Pakhtunkhwa",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.2544,
                longitude: 72.3339,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.facebook.com/eagleadventureandtourism/",
                "https://efcbooni.com",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Adventure Activities",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tandem Paragliding" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paragliding Training Course" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mountain Trekking" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chitral Cultural Tours" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Altitude Camping" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-montserrat)]">{children}</body>
    </html>
  );
}
