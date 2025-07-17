import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr"

export function Header() {
    return (
        <header className="border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-gray-900">Top Modas</h1>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href={"#collections"} className="text-black hover:text-gray-700 transition-colors">
                        Coleções
                    </Link>
                    <Link href={"#contact"} className="text-black hover:text-gray-700 transition-colors">
                        Contatos
                    </Link>
                </nav>
                <Button variant={"outline"} className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-white bg-transparent cursor-pointer">
                    <InstagramLogoIcon className="h-4 w-4 mr-2" />
                    Seguir
                </Button>
            </div>
        </header>
    )
}