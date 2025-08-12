"use client"
import React, { useState } from "react";
import Form from "next/form";

export default function Contatos() {
  const [formData, setFormData] = useState({
    nome: "",
    tipoContato: "email",
    contato: "",
    mensagem: "",
  });
  return (
    <div className="bg-blue-300 h-screen text-xl">
      <div className="container mx-auto py-20">
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          Contato
        </h1>
        <Form
          action="post"
          className="mx-auto max-w-md bg-white rounded-lg shadow p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="bg-amber-50 px-3 py-2 rounded border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Digite seu nome"
            />

            <select
              name="Tipo de Contato"
              id="tipo_contato"
              className="bg-amber-50 gap-1 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
            <input
              id="contato"
              type="text"
              className="bg-amber-50 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu contato"
            />
            <textarea
              name="mensagem"
              id="message"
              cols={30}
              rows={10}
              className="bg-amber-50 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua mensagem"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold transition-colors cursor-pointer"
               >
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
