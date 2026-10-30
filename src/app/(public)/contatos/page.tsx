"use client";

import { useState } from "react";
import {
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
  Clock,
  ChatCircleText,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.link/qwls2e";

export default function ContatosPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [assunto, setAssunto] = useState("Dúvida sobre Produtos");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const textoFormatado = `*Mensagem enviada pelo Site Top Modas*%0A%0A*Nome:* ${encodeURIComponent(
      nome
    )}%0A*Telefone/WhatsApp:* ${encodeURIComponent(
      telefone
    )}%0A*Assunto:* ${encodeURIComponent(assunto)}%0A*Mensagem:* ${encodeURIComponent(
      mensagem
    )}`;

    window.open(`https://wa.link/qwls2e?text=${textoFormatado}`, "_blank");
  }

  return (
    <div className="bg-gradient-to-b from-rose-50/60 via-white to-gray-50/50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Página */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
            <ChatCircleText size={16} weight="fill" />
            <span>Fale Conosco</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Estamos prontos para atender você
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg leading-relaxed">
            Tem dúvidas sobre disponibilidade de tamanhos, encomendas ou deseja
            conhecer nossa loja? Escolha o canal de sua preferência abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Coluna Esquerda: Canais Rápidos & Horários (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card Principal: WhatsApp VIP */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 sm:p-8 text-white shadow-xl shadow-emerald-700/15">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md mb-4">
                <WhatsappLogo size={30} weight="fill" />
              </div>
              <h3 className="text-xl font-bold">Atendimento Rápido via WhatsApp</h3>
              <p className="mt-2 text-emerald-100 text-sm leading-relaxed">
                Nosso canal principal para envio de fotos reais, consulta de tamanhos
                e fechamento de pedidos com entrega rápida.
              </p>
              <Button
                asChild
                className="mt-6 w-full bg-white text-emerald-800 hover:bg-emerald-50 font-bold shadow-md py-6 text-sm"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Chamar no WhatsApp Agora
                </a>
              </Button>
            </div>

            {/* Informações da Loja */}
            <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-7 shadow-xs space-y-5">
              
              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Horário de Funcionamento</h4>
                  <div className="mt-1 text-xs text-gray-600 space-y-0.5">
                    <p><strong className="text-gray-700">Seg. a Sex:</strong> 08:00 às 12:00 | 14:30 às 19:00</p>
                    <p><strong className="text-gray-700">Sábado:</strong> 08:00 às 19:00</p>
                    <p><strong className="text-gray-700">Domingo:</strong> 08:00 às 12:00</p>
                  </div>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Loja Física</h4>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    Visite nossa loja para provar os looks pessoalmente ou solicite entrega em sua casa.
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <InstagramLogo size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Instagram</h4>
                  <p className="mt-1 text-xs text-gray-600">
                    Acompanhe provadores, novidades e bastidores da loja.
                  </p>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline"
                  >
                    Seguir @topmodas →
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Coluna Direita: Formulário de Mensagem (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-10 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Envie uma Mensagem
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-500">
                  Preencha os campos abaixo para iniciar seu atendimento diretamente.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Seu Nome Completo
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex: Maria Silva"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      WhatsApp / Telefone
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      required
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="(00) 90000-0000"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="assunto"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                    >
                      <option value="Dúvida sobre Produtos">Dúvida sobre Peças</option>
                      <option value="Consulta de Tamanhos">Consulta de Tamanhos</option>
                      <option value="Encomendas e Reservas">Encomendas / Reservas</option>
                      <option value="Outros Assuntos">Outro Assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Sua Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    required
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Olá! Gostaria de saber mais sobre..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-6 text-sm sm:text-base shadow-md shadow-rose-600/20 flex items-center justify-center gap-2"
                >
                  <PaperPlaneTilt size={20} weight="fill" />
                  <span>Enviar Mensagem no WhatsApp</span>
                </Button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
