import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Menu } from "./components/menu";
import { Footer } from "./components/Footer";

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
    <html lang='en'>
      <body>
        {children}
        <Header />
        <Menu />
        <Footer />
      </body>
    </html>
  );
}
