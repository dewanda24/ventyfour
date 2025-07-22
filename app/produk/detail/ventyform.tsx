// app/produk/detail/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={400}
          className="rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            {product.name}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            {product.description}
          </p>
          <p className="mb-4 text-sm">
            Mulai dari <strong>{product.pricing?.basic}</strong>
          </p>
          <Link
            href="/pesan"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
