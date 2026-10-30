"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.link/qwls2e";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Banner Informativo */}
      <div className="bg-gradient-to-r from-pink-700 via-rose-600 to-pink-700 text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <span>✨ Moda que valoriza você • Atendimento personalizado via WhatsApp!</span>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
            <div className="relative h-11 w-36 sm:w-40">
              <Image
                src="/logo-topmodas.png"
                alt="Logo da Loja Top Modas"
                fill
                priority
                className="object-contain object-left"
                sizes="160px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <Link
              href="/"
              className="transition-colors hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-md py-1"
            >
              Início
            </Link>
            <Link
              href="/#collections"
              className="transition-colors hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-md py-1"
            >
              Coleções
            </Link>
            <Link
              href="/contatos"
              className="transition-colors hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-md py-1"
            >
              Contatos
            </Link>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gray-200 text-gray-700 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50/50"
            >
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram"
                className="flex items-center gap-1.5"
              >
                <InstagramLogo size={18} />
                <span>Instagram</span>
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs font-medium"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Falar no WhatsApp"
                className="flex items-center gap-1.5"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Hamburger Mobile Button */}
          <div className="md:hidden flex items-center">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={22}
              color="#be185d"
              label="Abrir menu de navegação"
            />
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-rose-100 bg-white/98 backdrop-blur-lg px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4 font-semibold text-gray-800 text-base">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-gray-100 hover:text-rose-600 transition-colors"
              >
                Início
              </Link>
              <Link
                href="/#collections"
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-gray-100 hover:text-rose-600 transition-colors"
              >
                Coleções & Catálogo
              </Link>
              <Link
                href="/contatos"
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-gray-100 hover:text-rose-600 transition-colors"
              >
                Fale Conosco / Contatos
              </Link>
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Button
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 font-semibold text-base"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Atendimento WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-rose-200 text-rose-700 hover:bg-rose-50 py-5 font-semibold text-base"
              >
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <InstagramLogo size={20} />
                  Siga no Instagram
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
