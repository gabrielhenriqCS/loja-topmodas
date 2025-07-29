import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"

interface CollectionCardProps {
  title: string
  description: string
  image: string
  badge: string
}

export function CollectionCard({ title, description, image, badge }: CollectionCardProps) {
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative h-80 overflow-hidden rounded-t-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4 bg-amber-600 text-white">{badge}</Badge>
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button
            variant="outline"
            className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white bg-transparent cursor-pointer"
          >
            Ver Coleção
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
