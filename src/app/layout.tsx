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
    "NAS Beauty Supply is the parent company behind CCare Beauty, Felix Professional, and My Vocks — a family of beauty and lifestyle brands.",
  keywords: [
    "NAS Beauty Supply",
    "CCare Beauty",
    "Felix Professional",
    "My Vocks",
    "beauty brands",
  ],
  openGraph: {
    title: "NAS Beauty Supply | Our Brands",
    description:
      "Discover the brands under NAS Beauty Supply — CCare Beauty, Felix Professional, and My Vocks.",
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
      <body className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
