import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { LogOut, UserCircle } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", user.id)
    .single();

  // Permitir acesso se a role for 'admin' OU se for o e-mail do dono da loja (configurado no .env)
  const ownerEmail = process.env.EMAIL?.replace(/['"]/g, "").trim().toLowerCase();
  const isOwnerEmail = Boolean(user.email && ownerEmail && user.email.toLowerCase() === ownerEmail);

  if (profile?.role !== "admin" && !isOwnerEmail) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50/70 flex flex-col font-sans">
      {/* Topo Limpo e Alinhado com o Design System */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Marca */}
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="flex items-center gap-2 group">
              <div className="relative h-9 w-32">
                <Image
                  src="/logo-topmodas.svg"
                  alt="Top Modas"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
            <span className="text-gray-300">|</span>
            <span className="rounded-full bg-rose-50 border border-rose-200/80 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-rose-700">
              Painel Admin
            </span>
          </div>

          {/* Usuário e Ação de Sair */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-700">
              <UserCircle className="h-4 w-4 text-rose-600" />
              <span>{profile?.full_name || user.email}</span>
            </div>

            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3 py-1.5 rounded-xl border border-red-200/60 transition cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sair</span>
              </button>
            </form>
          </div>

        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
        {children}
      </main>
    </div>
  );
}
