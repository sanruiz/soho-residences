import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soho Residences Los Cabos | Luxury Beachfront Living",
  description:
    "Exclusive luxury beachfront condos in Cabo San Lucas. Premium amenities, ocean views & world-class design.",
  keywords: [
    "Soho Residences",
    "Los Cabos",
    "Cabo San Lucas",
    "luxury condos",
    "beachfront property",
    "Mexico real estate",
    "oceanfront living",
    "pre-sale",
    "investment property",
  ],
  authors: [{ name: "Soho Residences Los Cabos" }],
  creator: "Soho Residences Los Cabos",
  metadataBase: new URL("https://sohoresidencesloscabos.com"),
  alternates: {
    canonical: "https://sohoresidencesloscabos.com",
  },
  openGraph: {
    title: "Soho Residences Los Cabos | Luxury Beachfront Living",
    description:
      "Exclusive luxury beachfront condos in Cabo San Lucas. Premium amenities, ocean views & world-class design.",
    url: "https://sohoresidencesloscabos.com",
    siteName: "Soho Residences Los Cabos",
    images: [
      {
        url: "/images/Scene2.png",
        width: 1200,
        height: 630,
        alt: "Soho Residences Los Cabos - Luxury Beachfront Property",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soho Residences Los Cabos | Luxury Beachfront Living",
    description:
      "Exclusive luxury beachfront condos in Cabo San Lucas. Premium amenities, ocean views & world-class design.",
    images: ["/images/Scene2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-CVK50DS673" />
    </html>
  );
}
