import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, eventType } = body;

    if (!productId || !eventType) {
      return NextResponse.json({ error: "productId e eventType são obrigatórios" }, { status: 400 });
    }

    const event = await prisma.productEvent.create({
      data: {
        productId,
        eventType,
      },
    });

    return NextResponse.json(
      {
        id: event.id.toString(),
        productId: event.productId,
        eventType: event.eventType,
        createdAt: event.createdAt,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Erro ao registrar evento" }, { status: 500 });
  }
}
