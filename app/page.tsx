import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NomNom — Swift delivery",
  description: "Fresh. Fast. Delivered. Order food from your favorite spots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col font-sans'>{children}</body>
    </html>
  );
}
