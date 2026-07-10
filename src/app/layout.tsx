import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NAS Beauty Supply | Our Brands",
  description:
    "NAS Beauty Supply is the parent company behind C Care Beauty, Felix Professional, and Vocks — premium nail care, pro beauty tools, and wellness supplements.",
  keywords: [
    "NAS Beauty Supply",
    "C Care Beauty",
    "Felix Professional",
    "Vocks",
    "beauty brands",
    "nail care",
    "makeup brush cleaner",
    "supplements",
  ],
  openGraph: {
    title: "NAS Beauty Supply | Our Brands",
    description:
      "Discover the brands under NAS Beauty Supply — C Care Beauty, Felix Professional, and Vocks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
