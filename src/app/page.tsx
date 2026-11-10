"use client";

import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { FeaturesBar } from "./_components/features-bar";
import { Collections } from "./_components/collections";
import { Footer } from "./_components/footer";
import { FloatingWhatsApp } from "./_components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesBar />
        <Collections />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
