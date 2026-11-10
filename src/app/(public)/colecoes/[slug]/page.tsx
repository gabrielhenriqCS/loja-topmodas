import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/app/_components/product-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ColecaoEspecificaPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).toLowerCase();

  // Filtra produtos que pertencem a essa categoria
  const produtosDaCategoria = products.filter(
    (product) => product.category.toLowerCase() === decodedSlug
  );

  // Nome formatado para exibição
  const nomeCategoria =
    productCategories.find((cat) => cat.toLowerCase() === decodedSlug) ||
    slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="bg-gradient-to-b from-rose-50/40 via-white to-gray-50/30 min-h-screen py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Botão de Voltar */}
        <div className="mb-6">
          <Link
            href="/colecoes"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-rose-600 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para todas as coleções</span>
          </Link>
        </div>

        {/* Cabeçalho */}
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
            <Sparkles className="h-3 w-3" />
            <span>Departamento</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Coleção {nomeCategoria}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Confira as novidades e peças selecionadas do departamento {nomeCategoria}.
          </p>
        </div>

        {/* Grade de Produtos */}
        {produtosDaCategoria.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produtosDaCategoria.map((produto) => (
              <ProductCard key={produto.id} product={produto} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Nenhuma peça encontrada nesta categoria
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Estamos atualizando nosso estoque com novas peças em breve!
            </p>
            <Link
              href="/colecoes"
              className="mt-4 inline-block rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-rose-700 transition"
            >
              Explorar outras coleções
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
