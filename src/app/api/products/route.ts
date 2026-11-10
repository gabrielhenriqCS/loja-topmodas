import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get("category");
    const featured = searchParams.get("featured");

    const products = await prisma.product.findMany({
      where: {
        active: true,
        ...(categorySlug
          ? {
              category: {
                slug: categorySlug,
              },
            }
          : {}),
        ...(featured === "true" ? { featured: true } : {}),
      },
      include: {
        category: true,
        images: {
          orderBy: { position: "asc" },
        },
        sizes: {
          where: { active: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar produtos" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, description, price, categoryId, featured, images, sizes } = body;

    if (!title || !slug || price === undefined) {
      return NextResponse.json(
        { error: "Título, slug e preço são obrigatórios." },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        title,
        slug,
        description,
        price,
        categoryId,
        featured: Boolean(featured),
        images: images?.length
          ? {
              create: images.map((img: { imageUrl: string; position?: number }, index: number) => ({
                imageUrl: img.imageUrl,
                position: img.position ?? index,
              })),
            }
          : undefined,
        sizes: sizes?.length
          ? {
              create: sizes.map((s: { size: string; stockQuantity?: number }) => ({
                size: s.size,
                stockQuantity: s.stockQuantity ?? 0,
              })),
            }
          : undefined,
      },
      include: {
        category: true,
        images: true,
        sizes: true,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    console.error("Erro ao cadastrar produto:", error);
    return NextResponse.json(
      { error: error?.message || "Erro ao cadastrar produto" },
      { status: 500 }
    );
  }
}
