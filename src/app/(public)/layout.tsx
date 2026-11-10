import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import { FloatingWhatsApp } from "../_components/floating-whatsapp";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
