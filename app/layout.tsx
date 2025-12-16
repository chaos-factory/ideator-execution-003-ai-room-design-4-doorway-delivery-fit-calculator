import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
