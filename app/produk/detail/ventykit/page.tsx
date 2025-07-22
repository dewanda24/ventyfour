import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Ventykit | Ventyfour",
  description: "Toolkit branding digital instan dan modular.",
};

export default function VentykitPage() {
  const product = products.find((p) => p.slug === "ventykit");
  if (!product) return notFound();

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-neutral-500 mb-6 mt-4">
        <Link href="/" className="hover:text-blue-600">
          Beranda
        </Link>{" "}
        /{" "}
        <Link href="/produk" className="hover:text-blue-600">
          Produk
        </Link>{" "}
        / {product.name}
      </div>

      {/* Card Wrapper */}
      <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-sm p-6 bg-white dark:bg-neutral-900">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Gambar Produk */}
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg w-full h-auto border-blue-400"
            priority
          />

          {/* Konten Kanan */}
          <div className="flex flex-col space-y-4">
            {/* Judul */}
            <h1 className="text-2xl font-bold text-blue-700">{product.name}</h1>

            {/* Penjelasan */}
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {product.description}
            </p>

            {/* Fitur Unggulan */}
            <div>
              <h2 className="text-sm font-semibold text-blue-600 mb-1">
                Fitur Unggulan
              </h2>
              <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                <li>Template branding siap pakai</li>
                <li>Edit via Canva & Figma</li>
                <li>Integrasi otomatis warna/logo</li>
                <li>Siap untuk sosial media & promosi</li>
              </ul>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {"★".repeat(5)}{" "}
              <span className="ml-2 text-neutral-600 dark:text-neutral-400 text-xs">
                127 review
              </span>
            </div>

            {/* Harga & CTA */}
            <div className="mt-4 space-y-2">
              {/* Harga */}
              <div className="text-base text-neutral-800 dark:text-neutral-100">
                Mulai dari:{" "}
                <span className="font-semibold text-blue-600">
                  {product.pricing?.basic}
                </span>
              </div>

              {/* Tombol */}
              <Link
                href="/pesan"
                className="inline-block bg-blue-600 text-white text-sm px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
              >
                Pesan Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
