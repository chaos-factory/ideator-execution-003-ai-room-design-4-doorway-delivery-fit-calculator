import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/content/fit-pass-landing";

export const metadata: Metadata = {
  title: "Delivery Fit Calculator — Measure Doors, Stairs, Landings | Fit Pass",
  description: "Map your delivery path and know exactly where a box will get stuck. Generate a shareable, time‑stamped Fit Pass PDF for movers. $3/report. No address stored.",
  keywords: ["sofa won't fit through door", "measure for furniture delivery", "stair landing diagonal", "elevator fit", "couch fit calculator", "hallway turn clearance"],
  openGraph: {
    title: "Delivery Fit Calculator — Measure Doors, Stairs, Landings | Fit Pass",
    description: "Map your delivery path and know exactly where a box will get stuck. Generate a shareable, time‑stamped Fit Pass PDF for movers. $3/report. No address stored.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivery Fit Calculator — Measure Doors, Stairs, Landings | Fit Pass",
    description: "Map your delivery path and know exactly where a box will get stuck. Generate a shareable, time‑stamped Fit Pass PDF for movers. $3/report. No address stored.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fit Pass",
    "description": "Doorway and delivery fit calculator that maps your delivery path and generates a time-stamped Fit Pass PDF with pass/warn/fail status for each checkpoint.",
    "offers": {
      "@type": "Offer",
      "price": "3.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to measure for furniture delivery",
    "description": "Complete guide to measuring doorways, hallways, stairs, and elevators for furniture delivery",
    "step": content.eduGuide.topics.map((topic, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": topic.title,
      "text": topic.content
    }))
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
