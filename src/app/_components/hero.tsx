"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.link/qwls2e";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-white to-rose-50/20 py-12 md:py-20 lg:py-24">
      {/* Luzes difusas de ambientação */}
      <div
        className="pointer-events-none absolute -top-12 -left-20 h-96 w-96 rounded-full bg-rose-200/35 blur-3xl z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-pink-100/40 blur-3xl z-0"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Lado Esquerdo: Conteúdo Textual com Tipografia Editorial */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Tag / Badge com Proporções e Tracking Precisos */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/95 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 shadow-xs backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-rose-600" />
              <span>Aqui é luxo! • Nova Coleção</span>
            </div>

            {/* Título Principal Editorial (Serif no destaque, sem gradiente chapado) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
              Elegância e estilo <br />
              <span className="font-serif italic font-normal text-rose-700">
                para toda a família
              </span>
            </h1>

            {/* Medida de leitura controlada (max-w-xl ~65ch) e leading confortável */}
            <p className="max-w-xl text-base sm:text-lg text-gray-600 leading-relaxed">
              Descubra peças cuidadosamente selecionadas que unem sofisticação,
              conforto e as principais tendências da moda feminina, masculina e
              infantil. Qualidade e caimento que valorizam o seu visual.
            </p>

            {/* Ações / Botões com Altura e Ritmo Consistentes */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-600/20 px-6 py-6 text-sm sm:text-base group"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5"
                >
                  <WhatsappLogo size={22} weight="fill" />
                  <span>Consulte novidades no WhatsApp</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-rose-50/70 hover:border-rose-300 text-gray-800 font-semibold px-6 py-6 text-sm sm:text-base"
              >
                <Link href="#collections" className="flex items-center justify-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-rose-600" />
                  <span>Ver Catálogo</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Lado Direito: Imagem com Proporção e Enquadramento Otimizados */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-3xl bg-rose-100 shadow-xl ring-1 ring-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
                  alt="Coleção de moda elegante Top Modas"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  className="object-cover object-top transition duration-700 hover:scale-105"
                />
                
                {/* Degradê inferior sutil para profundidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
