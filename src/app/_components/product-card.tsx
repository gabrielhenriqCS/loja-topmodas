"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

const WHATSAPP_URL = "https://wa.link/qwls2e";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto "${product.name}". Pode me informar o preço e a disponibilidade?`
  );
  const contactUrl = `${WHATSAPP_URL}?text=${message}`;

  return (
    <Card className="group overflow-hidden rounded-xl border-gray-200 bg-white py-0 shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white">
            Destaque
          </span>
        )}
      </div>

      <CardContent className="flex flex-col gap-3 p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-pink-700">
            {product.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="mt-2 min-h-10 text-sm leading-5 text-gray-600">
            {product.description}
          </p>
        </div>
        <p className="text-sm text-gray-500">Consulte preço e disponibilidade</p>
        <Button asChild className="w-full bg-pink-600 text-white hover:bg-pink-700">
          <a href={contactUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            Consultar no WhatsApp
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
