import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr" 
import Image from "next/image";

export function Hero() {
    return (
        <section className="bg-[#FFB6C1] text-white relative overflow-hidden">
            <div className="container mx-auto py-16 px-4">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative p-10">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-10">
                            Top Modas é luxo!!
                        </h1>
                        <p className="lg:text-lg text-sm mb-4">
                            Moda masculina, feminina, infantil e muito mais!!
                        </p>
                        <a href="#" className="bg-green-500 text-white px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                            <WhatsappLogoIcon className="w-5 h-5"/>
                                WhatsApp
                            </a>
                       
                        <div className="mt-8">
                            <p className="text-sm md:text-lg mb-4">
                                Top Modas é uma loja de roupas que oferece uma ampla variedade de produtos para toda a família, incluindo moda masculina, feminina e infantil. Com um compromisso com a qualidade e o estilo, a Top Modas se destaca por suas peças elegantes e confortáveis, atendendo às últimas tendências da moda. 
                            </p>
                        </div>
                    </div>
                    <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg"
                alt="Modelo usando peça da coleção Top Moda e Luxo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
                </article>
            </div>
        </section>
    )
}