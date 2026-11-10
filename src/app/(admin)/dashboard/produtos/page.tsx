import Link from "next/link";
import { Plus, Package, ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      images: { take: 1, orderBy: { position: "asc" } },
      sizes: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      {/* Topo com ações */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 transition"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Gerenciar Produtos
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Cadastre, edite e acompanhe o estoque das roupas da loja.
            </p>
          </div>
        </div>

        <Link
          href="/dashboard/produtos/novo"
          className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition"
        >
          <Plus className="h-4 w-4" />
          <span>Cadastrar Produto</span>
        </Link>
      </div>

      {/* Tabela de Produtos */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
        {products.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="p-4">Produto</th>
                  <th className="p-4">Categoria</th>
                  <th className="p-4">Preço</th>
                  <th className="p-4">Tamanhos</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50/70 transition">
                    <td className="p-4 font-bold text-gray-900">{p.title}</td>
                    <td className="p-4 text-xs font-semibold text-rose-700">
                      {p.category?.name ?? "Sem categoria"}
                    </td>
                    <td className="p-4 font-extrabold text-gray-900">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(Number(p.price))}
                    </td>
                    <td className="p-4 text-xs">
                      {p.sizes.map((s) => s.size).join(", ") || "—"}
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          p.active
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {p.active ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-gray-500 text-sm">
            <Package className="h-10 w-10 text-gray-300 mx-auto mb-3" />
            <p className="font-bold text-gray-800">Nenhum produto cadastrado no Prisma ainda.</p>
            <p className="text-xs text-gray-400 mt-1">
              Clique no botão "Cadastrar Produto" acima para adicionar a primeira peça.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
