"use client";
import React from "react";

export default function Contatos() {
   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
     e.preventDefault();
     const formData = e.currentTarget;
     const nome = formData.nome.value;
     const tipoContato = formData.tipo_contato.value;
     const contato = formData.contato.value;
     const mensagem = formData.mensagem.value;

     const mailto = `mailto:${tipoContato}:${contato}?subject=Contato de ${encodeURIComponent(nome)}&body=${encodeURIComponent(mensagem)}`;
    window.open(mailto, "_blank");
   }
  return (
    <div className="bg-blue-300 min-h-screen text-xl">
      <div className="container mx-auto py-20">
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          Contato
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-md bg-white rounded-lg shadow p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <input
              name="nome"
              id="nome"
              type="text"
              className="bg-amber-50 px-3 py-2 rounded border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Digite seu nome"
              required
            />

            <select
              name="tipo_contato"
              id="tipo_contato"
              className="bg-amber-50 gap-1 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
            <input
              name="contato"
              id="contato"
              type="text"
              className="bg-amber-50 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu contato"
              required
            />
            <textarea
              name="mensagem"
              id="mensagem"
              cols={30}
              rows={10}
              className="bg-amber-50 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua mensagem"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold transition-colors cursor-pointer"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
