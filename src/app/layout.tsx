import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AURA Holding — We Pioneer Breakthroughs",
  description: "Corporate holding website showcasing our diverse sectors and innovative solutions.",
  keywords: ["Corporate Holding", "Medical", "Innovation", "AURA"],
  authors: [{ name: "AURA Holding" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${interTight.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-dark">{children}</body>
    </html>
  );
}
