import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-3">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex flex-col items-center space-x-2">
              <h5 className="text-xl font-bold">Top Modas</h5>
              <p className="text-gray-400">Aqui é luxo!!</p>
            </div>
          </div>

          <div className="space-y-4">
            <h6 className="text-lg font-semibold">Links Rápidos</h6>
            <div className="flex flex-col space-y-2">
              <Link
                href="#collections"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Coleções
              </Link>
              <Link
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contatos
              </Link>
              <Link
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Sobre Nós
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h6 className="text-lg font-semibold">Funcionamento:</h6>
            <div className="space-y-2 text-gray-400">
              <p>Segunda a Sexta: 8:00 às 12:00, 14:30 às 19:00</p>
              <p>Sábado: 8:00 às 19:00</p>
              <p>Domingo: 8:00 às 12:00</p>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-md mt-10">
          &copy; {new Date().getFullYear()} Top Modas. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
