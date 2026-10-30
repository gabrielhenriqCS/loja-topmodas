import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loja Top Modas • Aqui é Luxo!",
  description:
    "Moda feminina, masculina, infantil e acessórios com elegância, qualidade e atendimento exclusivo via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-gray-800 bg-white selection:bg-rose-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
