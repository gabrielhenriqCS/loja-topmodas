import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="container px-5 py-4 flex items-center justify-between">
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
          <h1 className="text-2xl font-bold text-gray-900">Top Modas</h1>
          <div
            className={`fixed left-0 h-full bg-gray-200 text-black w-64 transform transition-transform duration-300 ease-in-out z-10 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4">
              <ul>
                <li className="py-2 text-white hover:bg-gray-700">
                  <Link href="#">Coleções</Link>
                </li>
                <li className="py-2 text-white hover:bg-gray-700">
                  <Link href="#">Contatos</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#collections"
            className="text-black font-bold text-[18px] hover:text-gray-800 hover:bg-pink-400 hover:px-5 hover:py-2 transition-colors hover:rounded-md"
          >
            Coleções
          </Link>
          <Link
            href="#contact"
            className="text-black font-bold text-[18px] hover:text-gray-800 hover:bg-pink-400 hover:px-5 hover:py-2 transition-colors hover:rounded-md"
          >
            Contatos
          </Link>
        </nav>

        {/* Botão Instagram */}
        <Button
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-white bg-transparent cursor-pointer flex items-center"
        >
          <InstagramLogoIcon className="h-4 w-4 mr-2" />
          Seguir
        </Button>
      </div>
    </header>
  );
}
