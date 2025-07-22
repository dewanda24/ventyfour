import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | Ventyfour`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
          {product.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {product.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 items-start">
        <div className="flex-1">
          <Image
            src={`/${product.image}`} // <- ✅ gunakan path dari /public/
            alt={product.name}
            width={600}
            height={400}
            className="rounded-xl shadow-md"
            loading="lazy"
          />
        </div>

        <div className="flex-1 space-y-6">
          <ul className="space-y-2">
            {product.features.map((feat) => (
              <li
                key={feat}
                className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200"
              >
                ✅ {feat}
              </li>
            ))}
          </ul>

          <div className="text-sm text-gray-700 dark:text-gray-200">
            <p>
              <strong>Basic:</strong> {product.pricing.basic}
            </p>
            <p>
              <strong>Pro:</strong> {product.pricing.pro}
            </p>
          </div>

          <Link
            href={`/pesan?produk=${product.slug}`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 transition"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
