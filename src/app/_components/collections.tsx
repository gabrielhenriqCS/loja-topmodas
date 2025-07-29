import { CollectionCard } from "./cards"


export function Collections() {
    const collections = [
        { title: "Coleção Primavera", description: "Peças leves e florais para a estação das flores." },
        { title: "Coleção Verão", description: "Roupas frescas e coloridas para os dias quentes." },
        { title: "Coleção Outono", description: "Tons terrosos e texturas aconchegantes para o clima ameno." },
        { title: "Coleção Inverno", description: "Peças quentes e elegantes para os dias frios." },
        { title: "Coleção Festas", description: "Roupas glamourosas para ocasiões especiais." }
    ]
    return (
        <section id="collections" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Coleções da loja</h3>
                    <p className="text-xl text-gray-600 mx-auto max-w-2xl">Peças exclusivas de primeiríssima qualidade </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collections.map((collection, index) => (
                        <CollectionCard
                            image={""} badge={""} key={index}
                            {...collection}                        />
                    ))}
                </div>
            </div>
        </section>
    )
}