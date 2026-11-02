"use client";

import { useMemo, useState } from "react";
import { Search, X, Sparkles, SlidersHorizontal } from "lucide-react";
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
        `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase(
          "pt-BR"
        );
      const matchesSearch = searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="collections" className="bg-gray-50/60 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção com Equilíbrio de Medida e Espaçamento */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
            <Sparkles className="h-3 w-3" />
            <span>Catálogo Exclusivo</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Nossas Coleções
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg leading-relaxed max-w-xl mx-auto">
            Encontre o look ideal para você e sua família. Clique na peça para
            consultar tamanhos e solicitar no WhatsApp.
          </p>
        </div>

        {/* Barra de Busca e Filtros com Proporções Refinadas */}
        <div className="mx-auto mb-10 max-w-2xl space-y-4">
          {/* Campo de Busca */}
          <div className="relative">
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            />
            <input
              id="product-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por vestido, camisa, conjunto, bolsa..."
              className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-12 pr-10 text-sm sm:text-base text-gray-900 shadow-xs outline-none transition placeholder:text-gray-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Limpar busca"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Abas de Categorias */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 pt-1"
            aria-label="Filtrar por categoria"
          >
            {productCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-rose-600 text-white shadow-md shadow-rose-600/20 scale-105"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50/40"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Resumo de Resultados */}
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-3 text-xs sm:text-sm text-gray-500">
          <p>
            Exibindo{" "}
            <span className="font-bold text-gray-900">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "produto" : "produtos"}
          </p>

          {(searchTerm || selectedCategory !== "Todas") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todas");
              }}
              className="font-semibold text-rose-600 hover:text-rose-700 hover:underline"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Grade de Produtos com Gaps Padronizados */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Estado Vazio */
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-rose-600">
              <SlidersHorizontal className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Nenhum produto encontrado
            </h3>
            <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">
              Não encontramos nenhum item correspondente à sua busca. Tente buscar
              por outro termo ou selecione outra categoria.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todas");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-rose-700 transition"
            >
              Ver todos os produtos
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
