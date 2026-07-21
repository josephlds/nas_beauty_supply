import type { Metadata } from "next";
import { Newsreader, Outfit } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NAS Beauty Supply | Our Brands",
  description:
    "NAS Beauty Supply is the parent company behind C Care Beauty, Felix Professional, and Vocks — a portfolio of beauty and wellness brands built on quality and craft.",
  keywords: [
    "NAS Beauty Supply",
    "C Care Beauty",
    "Felix Professional",
    "Vocks",
    "beauty brands",
    "parent company",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  verification: {
    google: "xiKWzB0udNidgnj7JzYn_B_4DTyTAj2j3wYlamI8Dzo",
  },
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
    <html
      lang="en"
      className={`${newsreader.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
