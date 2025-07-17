import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loja Top Modas",
  description: "Criado por Gabriel Henrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
