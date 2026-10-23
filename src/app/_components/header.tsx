"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-pink-200 px-4 py-3 sm:px-6 lg:px-10">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="relative flex items-center space-x-2">
          <button
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            type="button"
            className="cursor-pointer rounded-3xl bg-transparent p-2 transition-colors duration-200 hover:bg-pink-500"
            onClick={() => setIsOpen((open) => !open)}
          >
            <HamburgerMenuIcon className="h-7 w-7 text-black transition-colors duration-200 hover:text-white" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            <Link href="/">Top Modas</Link>
          </h1>

          {isOpen && (
            <div
              id="mobile-navigation"
              className="fixed left-0 top-0 z-10 h-full w-64 bg-red-200 text-black shadow-xl"
            >
              <div className="flex items-center justify-between px-4 pt-4">
                <span className="text-2xl font-bold">Top Modas</span>
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-xl hover:bg-pink-300"
                >
                  ×
                </button>
              </div>
              <nav aria-label="Navegação móvel" className="p-4 text-lg">
                <ul>
                  <li className="rounded-md py-2 hover:bg-pink-300">
                    <Link href="#collections" className="ml-2 block" onClick={() => setIsOpen(false)}>
                      Catálogo
                    </Link>
                  </li>
                  <li className="rounded-md py-2 hover:bg-pink-300">
                    <Link href="/contatos" className="ml-2 block" onClick={() => setIsOpen(false)}>
                      Contatos
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>

        <nav aria-label="Navegação principal" className="hidden items-center space-x-3 md:flex lg:space-x-6">
          <Link
            href="#collections"
            className="rounded-md px-3 py-2 text-base font-bold text-black transition-colors hover:bg-pink-400 hover:text-gray-800 lg:px-5 lg:text-lg"
          >
            Catálogo
          </Link>
          <Link
            href="/contatos"
            className="rounded-md px-3 py-2 text-base font-bold text-black transition-colors hover:bg-pink-400 hover:text-gray-800 lg:px-5 lg:text-lg"
          >
            Contatos
          </Link>
        </nav>

        <Button
          asChild
          variant="outline"
          className="bg-transparent text-gray-700 hover:bg-gray-100"
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram"
          >
            <InstagramLogoIcon size={24} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
