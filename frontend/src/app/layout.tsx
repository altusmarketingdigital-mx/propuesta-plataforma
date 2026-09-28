import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "TribuSport MX | Moda Deportiva Padel",
  description: "Ropa y accesorios premium de pádel para mujer. Diseño, comodidad y estilo en la cancha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-brand-white text-brand-carbon`}>
        {children}
      </body>
    </html>
  );
}
