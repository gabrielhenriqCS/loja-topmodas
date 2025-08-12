"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-10 py-3 bg-pink-200">
      <div className="container flex items-center justify-between mx-auto">
        {/* Menu lateral + Título */}
        <div className="relative flex items-center space-x-2">
          <button
            aria-label="Abrir menu"
            type="button"
            className="bg-transparent cursor-pointer hover:bg-pink-500 rounded-3xl p-2 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HamburgerMenuIcon className="w-7 h-7 text-black hover:text-white transition-colors duration-200" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            <Link href={"/"}>Top Modas</Link>
          </h1>
          {isOpen && (
            <div className="fixed left-0 top-0 h-full bg-red-200 text-black w-64 transform transition-transform duration-500 ease-in-out z-10">
              <h1 className="text-[30px] font-bold text-center mt-2 mb-10">Top Modas</h1>
              <div className="p-4 text-xl flex flex-col align-middle">
                <ul>
                  <li className="py-2 cursor-pointer text-black hover:bg-gray-700 hover:text-white hover:rounded-md">
                    <Link href="#" className="ml-2">Coleções</Link>
                  </li>
                  <li className="py-2 cursor-pointer text-black hover:bg-gray-700 hover:text-white hover:rounded-md">
                    <Link href="/contatos" className="ml-2">Contatos</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Menu */}
        <nav className="md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-black font-bold text-[18px] hover:text-gray-800 hover:bg-pink-400 px-5 py-2 transition-colors rounded-md"
          >
            Coleções
          </Link>
          <Link
            href="/contatos"
            className="text-black font-bold text-[18px] hover:text-gray-800 hover:bg-pink-400 px-5 py-2 transition-colors rounded-md"
          >
            Contatos
          </Link>
        </nav>

        {/* Botão Instagram */}
        <Button
          variant="outline"
          className="text-gray-700 hover:bg-gray-100 bg-transparent cursor-pointer"
        >
          <InstagramLogoIcon size={40} />
          Seguir
        </Button>
      </div>
    </header>
  );
}
