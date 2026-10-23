"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "./product-card";

export function Collections() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("pt-BR");

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todas" || product.category === selectedCategory;
      const searchableText =
        `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase("pt-BR");
      const matchesSearch = searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="collections" className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">
            Encontre seu estilo
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Catálogo Top Modas
          </h2>
          <p className="text-base leading-7 text-gray-600 sm:text-lg">
            Explore as opções disponíveis e fale com a gente para consultar preços,
            tamanhos e disponibilidade.
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-3xl space-y-4">
          <label htmlFor="product-search" className="sr-only">
            Buscar produtos
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            />
            <input
              id="product-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar por produto ou categoria..."
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2" aria-label="Filtrar por categoria">
            {productCategories.map((category) => {
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 ${
                    isSelected
                      ? "border-pink-600 bg-pink-600 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-pink-400 hover:text-pink-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600" aria-live="polite">
            {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
          </p>
          {(searchTerm || selectedCategory !== "Todas") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todas");
              }}
              className="text-sm font-medium text-pink-700 underline underline-offset-4 hover:text-pink-900"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Nenhum produto encontrado
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Tente buscar por outro termo ou selecione uma categoria diferente.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
