import { createClient } from "@/lib/supabase/server";
import {
  Package,
  FolderTree,
  MousePointerClick,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

type RecentProduct = {
  id: string;
  title: string;
  price: number;
  active: boolean;
  created_at: string;
  category_id: string | null;
  categories: { name: string } | { name: string }[] | null;
};

export default async function DashboardPage() {
  const supabase = await createClient();

  // Busca dados reais das tabelas no Supabase
  const [
    { count: productsCount },
    { count: categoriesCount },
    { count: eventsCount },
  ] = await Promise.all([
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("categories").select("*", { count: "exact", head: true }),
    supabase.from("product_events").select("*", { count: "exact", head: true }),
  ]);

  const { data: recentProducts } = await supabase
    .from("products")
    .select(
      "id, title, price, active, created_at, category_id, categories(name)",
    )
    .returns<RecentProduct[]>()
    .order("created_at", { ascending: false })
    .limit(6);

  const stats = [
    {
      title: "Produtos Cadastrados",
      value: productsCount ?? 0,
      icon: Package,
      desc: "Total no catálogo",
    },
    {
      title: "Departamentos",
      value: categoriesCount ?? 0,
      icon: FolderTree,
      desc: "Categorias ativas",
    },
    {
      title: "Cliques no WhatsApp",
      value: eventsCount ?? 0,
      icon: MousePointerClick,
      desc: "Conversões rastreadas",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Título e Ações Rápidas de Topo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200/80">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Visão Geral
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Métricas de desempenho, estoque informativo e atividade recente da
            Top Modas.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-rose-600 bg-white border border-gray-200 hover:border-rose-200 px-3.5 py-2.5 rounded-xl shadow-xs transition"
          >
            <span>Ver Loja Pública</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <Link
            href="/colecoes"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-rose-600 bg-white border border-gray-200 hover:border-rose-200 px-3.5 py-2.5 rounded-xl shadow-xs transition"
          >
            <span>Catálogo</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Grid de Estatísticas / Cartões de Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  {stat.title}
                </p>
                <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 mt-1">{stat.desc}</p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                <Icon className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Lista de Peças Recentes */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Produtos no Banco de Dados
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Peças cadastradas e sincronizadas via Supabase.
            </p>
          </div>
        </div>

        {recentProducts && recentProducts.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {recentProducts.map((p) => {
              const category = Array.isArray(p.categories)
                ? p.categories[0]
                : p.categories;
              const categoryName = category?.name ?? "Geral";
              return (
                <div
                  key={p.id}
                  className="p-4 sm:px-6 flex items-center justify-between hover:bg-gray-50/70 transition"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">
                      {p.title}
                    </h4>
                    <p className="text-xs font-medium text-rose-600 uppercase tracking-wider">
                      {categoryName}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-extrabold text-gray-900 tracking-tight">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(p.price)}
                    </p>
                    <span
                      className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        p.active
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {p.active ? "Ativo" : "Inativo"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center text-gray-500 text-sm">
            <p className="font-semibold text-gray-700">
              Nenhum produto cadastrado no Supabase ainda.
            </p>
            <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
              Quando você inserir produtos na tabela{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">
                products
              </code>
              , eles aparecerão listados aqui automaticamente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
