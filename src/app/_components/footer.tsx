import Link from "next/link";
import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { MapPin, Phone, Clock, CreditCard, ShieldCheck, User } from "lucide-react";
import GoogleMapFrame from "@/components/GoogleMapFrame";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-zinc-800">
          
          {/* Coluna 1: Marca & Redes */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-36">
                <Image
                  src="/logo-topmodas.svg"
                  alt="Top Modas"
                  fill
                  className="object-contain object-left brightness-125"
                  sizes="150px"
                />
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Aqui é luxo! A Top Modas traz o melhor em peças femininas, masculinas
              e infantis, aliando sofisticação, conforto e preço justo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Top Modas"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-zinc-300 hover:bg-rose-600 hover:text-white transition-colors"
              >
                <InstagramLogo size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação & Departamentos */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Departamentos
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link
                  href="/colecoes?categoria=Feminino"
                  className="hover:text-rose-400 transition-colors"
                >
                  Moda Feminina
                </Link>
              </li>
              <li>
                <Link
                  href="/colecoes?categoria=Masculino"
                  className="hover:text-rose-400 transition-colors"
                >
                  Moda Masculina
                </Link>
              </li>
              <li>
                <Link
                  href="/colecoes?categoria=Infantil"
                  className="hover:text-rose-400 transition-colors"
                >
                  Moda Infantil
                </Link>
              </li>
              <li>
                <Link
                  href="/colecoes?categoria=Acessórios"
                  className="hover:text-rose-400 transition-colors"
                >
                  Bolsas & Acessórios
                </Link>
              </li>
              <li>
                <Link
                  href="/contatos"
                  className="hover:text-rose-400 transition-colors"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Horários de Atendimento */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="h-4 w-4 text-rose-500" />
              <span>Funcionamento</span>
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div>
                <p className="font-semibold text-zinc-200 mb-1">Segunda a Sexta:</p>
                <p className="text-xs text-zinc-400">08:00 às 12:00 | 14:30 às 18:30</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-200 mb-1">Sábado:</p>
                <p className="text-xs text-zinc-400">08:00 às 18:00 (Direto)</p>
              </div>
            </div>
          </div>

          {/* Coluna 4: Onde Estamos & Contatos */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-rose-500" />
              <span>Onde Estamos</span>
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <GoogleMapFrame height={160} />
              
              <p className="flex items-center gap-2 text-sm uppercase text-white font-bold pt-1">
                <Phone className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                <span>Atendimento WhatsApp</span>
              </p>

              <div className="flex items-center gap-2 text-xs">
                <User className="h-4 w-4 text-rose-400 shrink-0" />
                <span className="text-zinc-300 font-medium">Gardênia:</span>
                <a
                  href="https://wa.link/qwls2e"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 hover:underline"
                >
                  Iniciar Conversa
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <User className="h-4 w-4 text-rose-400 shrink-0" />
                <span className="text-zinc-300 font-medium">Paulo:</span>
                <a
                  href="https://wa.me/5585987314664"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 hover:underline"
                >
                  (85) 98731-4664
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior: Pagamentos & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-zinc-300">Top Modas</strong>. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CreditCard className="h-3.5 w-3.5" /> Cartão em até 3x
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Pix com desconto
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
