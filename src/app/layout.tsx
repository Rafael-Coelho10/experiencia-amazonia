import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: "Experiência Amazônica: Rio Arapiuns",
  description: "Cultura e Natureza em uma imersão de 2 dias no coração da Amazônia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}