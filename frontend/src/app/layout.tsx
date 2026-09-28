import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: {
    template: '%s | TribuSport MX',
    default: 'TribuSport MX | Moda Deportiva Padel',
  },
  description: 'Ropa y accesorios premium de pádel para mujer. Diseño, comodidad y estilo en la cancha. Envío gratis a todo México.',
  keywords: ['padel', 'ropa deportiva mujer', 'faldas padel', 'tops deportivos', 'mexico'],
  openGraph: {
    title: 'TribuSport MX | Moda Deportiva Padel',
    description: 'Comodidad y estilo en la cancha. Colección diseñada exclusivamente para jugadoras de pádel.',
    url: 'https://tribusport.mx',
    siteName: 'TribuSport',
    images: [
      {
        url: 'https://tribusport.mx/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TribuSport Padel',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TribuSport MX | Ropa de Pádel',
    description: 'Ropa y accesorios premium de pádel para mujer.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-brand-white text-brand-carbon`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
