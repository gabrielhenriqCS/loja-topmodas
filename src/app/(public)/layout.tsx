import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
          {children}
        <Footer />
    </div>
  );
}
