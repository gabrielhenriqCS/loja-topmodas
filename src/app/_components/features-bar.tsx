import { Sparkles, Truck, ShieldCheck, CreditCard } from "lucide-react";

export function FeaturesBar() {
  const features = [
    {
      icon: Sparkles,
      title: "Peças Selecionadas",
      description: "Tecidos nobres e acabamento de alto padrão",
    },
    {
      icon: Truck,
      title: "Envio Rápido & Seguro",
      description: "Entregamos na sua região com cuidado total",
    },
    {
      icon: ShieldCheck,
      title: "Atendimento VIP",
      description: "Consultoria personalizada direto no WhatsApp",
    },
    {
      icon: CreditCard,
      title: "Pagamento Facilitado",
      description: "Pix com desconto ou parcelamento sem juros",
    },
  ];

  return (
    <section className="border-y border-rose-100/80 bg-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl p-3.5 transition-colors duration-200 hover:bg-rose-50/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 shadow-xs">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
