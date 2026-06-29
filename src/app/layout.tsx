import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CLUB UNDEFINED — Calm focus for high-pressure lives.",
  description:
    "Low-caffeine freeze-dried coffee with L-theanine and Lion's Mane. Designed for those who want clarity without the chaos.",
  openGraph: {
    title: "CLUB UNDEFINED",
    description: "Calm focus for high-pressure lives.",
    siteName: "CLUB UNDEFINED",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-text-primary antialiased min-h-screen">
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
