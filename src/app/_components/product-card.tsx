"use client";

import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const message = encodeURIComponent(
    `Olá! Vi o produto "${product.name}" no site da Top Modas e gostaria de verificar tamanhos disponíveis e valores.`
  );
  const whatsappUrl = `https://wa.link/qwls2e?text=${message}`;

  const formattedPrice = product.price
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.price)
    : null;

  const installmentPrice = product.price
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.price / 3)
    : null;

  return (
    <Card className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-0 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-rose-200">
      {/* Imagem do Produto */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-rose-50/40">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Tags / Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5 z-10">
          {product.featured && (
            <span className="rounded-full bg-rose-600 px-2.5 py-0.5 text-xs font-bold text-center text-white shadow-xs">
              Destaque
            </span>
          )}
          {product.tag && (
            <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-gray-800 shadow-xs backdrop-blur-xs">
              {product.tag}
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo do Card com Alinhamento Estrito */}
      <CardContent className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            {product.category}
          </span>

          <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-rose-700 transition-colors line-clamp-1 tracking-tight">
            {product.name}
          </h3>

          <p className="mt-1.5 text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Bloco de Preço */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          {formattedPrice ? (
            <div>
              <p className="text-lg font-extrabold text-gray-900 tracking-tight">
                {formattedPrice}
              </p>
              <p className="text-[11px] text-gray-500">
                ou 3x de <span className="font-semibold text-gray-700">{installmentPrice}</span> sem juros
              </p>
            </div>
          ) : (
            <p className="text-xs font-semibold text-gray-600">
              Consulte valores e tamanhos
            </p>
          )}

          {/* Botão de WhatsApp */}
          <Button
            asChild
            className="mt-3.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xs py-2.5 h-auto text-xs sm:text-sm"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>Pedir no WhatsApp</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
