"use client";

import { useMemo, useState } from "react";
import { Search, X, Sparkles, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/app/_components/product-card";

type SortOption = "destaque" | "preco-menor" | "preco-maior" | "nome";

export default function ColecoesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [selectedSort, setSelectedSort] = useState<SortOption>("destaque");
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("pt-BR");

    // 1. Filtragem por busca, categoria e destaque
    const result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todas" || product.category === selectedCategory;

      const searchableText =
        `${product.name} ${product.description} ${product.category} ${product.tag ?? ""}`.toLocaleLowerCase(
          "pt-BR"
        );
      const matchesSearch = searchableText.includes(normalizedSearch);

      const matchesFeatured = onlyFeatured ? Boolean(product.featured) : true;

      return matchesCategory && matchesSearch && matchesFeatured;
    });

    // 2. Ordenação
    return result.sort((a, b) => {
      if (selectedSort === "preco-menor") {
        return (a.price ?? 0) - (b.price ?? 0);
      }
      if (selectedSort === "preco-maior") {
        return (b.price ?? 0) - (a.price ?? 0);
      }
      if (selectedSort === "nome") {
        return a.name.localeCompare(b.name, "pt-BR");
      }
      // Destaques primeiro (padrão)
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchTerm, selectedCategory, selectedSort, onlyFeatured]);

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "Todas" ||
    selectedSort !== "destaque" ||
    onlyFeatured;

  function resetFilters() {
    setSearchTerm("");
    setSelectedCategory("Todas");
    setSelectedSort("destaque");
    setOnlyFeatured(false);
  }

  return (
    <div className="bg-gradient-to-b from-rose-50/50 via-white to-gray-50/40 min-h-screen py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo / Cabeçalho Editorial */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Coleções Top Modas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Todas as Peças & Looks
          </h1>

          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            Navegue pelo nosso catálogo completo. Filtre por departamento, ordene
            por valor e tire suas dúvidas direto no WhatsApp.
          </p>
        </div>

        {/* Barra Central de Controles e Filtros */}
        <div className="mx-auto max-w-5xl rounded-3xl border border-rose-100 bg-white/95 p-4 sm:p-6 shadow-sm backdrop-blur-xs mb-10 space-y-5">
          
          {/* Linha 1: Campo de Busca e Ordenação */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            {/* Input de Busca */}
            <div className="relative md:col-span-8">
              <Search
                aria-hidden="true"
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              />
              <input
                id="search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nome, modelo, tecido ou acessório..."
                className="w-full rounded-2xl border border-gray-200 bg-gray-50/60 py-3.5 pl-12 pr-10 text-sm sm:text-base text-gray-900 shadow-xs outline-none transition placeholder:text-gray-400 focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Limpar termo de busca"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Select de Ordenação */}
            <div className="relative md:col-span-4">
              <ArrowUpDown className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value as SortOption)}
                className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50/60 py-3.5 pl-10 pr-8 text-sm font-medium text-gray-700 shadow-xs outline-none transition focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10 cursor-pointer"
                aria-label="Ordenar produtos"
              >
                <option value="destaque">Destaques Primeiro</option>
                <option value="preco-menor">Menor Preço</option>
                <option value="preco-maior">Maior Preço</option>
                <option value="nome">Nome (A - Z)</option>
              </select>
            </div>
          </div>

          {/* Linha 2: Categorias + Toggle de Apenas Destaques */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-gray-100">
            {/* Categorias (Pills) */}
            <div className="flex flex-wrap items-center gap-2" aria-label="Filtrar por departamento">
              {productCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-rose-600 text-white shadow-md shadow-rose-600/20 scale-105"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50/40"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Switch / Filtro Rápido: Só Destaques */}
            <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={onlyFeatured}
                onChange={(e) => setOnlyFeatured(e.target.checked)}
                className="h-4 w-4 rounded-md border-gray-300 text-rose-600 focus:ring-rose-500 cursor-pointer"
              />
              <span>Apenas Destaques</span>
            </label>
          </div>

        </div>

        {/* Linha de Status de Resultados */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-8 text-xs sm:text-sm text-gray-500">
          <p>
            Exibindo{" "}
            <span className="font-bold text-gray-900">
              {filteredAndSortedProducts.length}
            </span>{" "}
            {filteredAndSortedProducts.length === 1 ? "peça encontrada" : "peças encontradas"}
            {selectedCategory !== "Todas" && (
              <span> em <strong className="text-rose-700">{selectedCategory}</strong></span>
            )}
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="font-semibold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
            >
              Limpar todos os filtros
            </button>
          )}
        </div>

        {/* Grade de Produtos / Cards */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Estado Vazio Amigável */
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center max-w-xl mx-auto shadow-xs">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-4">
              <SlidersHorizontal className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Nenhuma peça encontrada
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Não encontramos nenhum produto com os filtros selecionados. Tente
              procurar por outro termo ou limpe os filtros para ver todo o catálogo.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-rose-700 transition cursor-pointer shadow-xs"
            >
              Ver todas as roupas
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

