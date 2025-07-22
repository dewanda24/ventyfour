import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Ventyfour",
  description: "Jelajahi semua solusi digital modular dari Ventyfour.",
};

const getKategori = (slug: string) => {
  if (slug.includes("form")) return "Formulir";
  if (slug.includes("site") || slug.includes("page")) return "Website";
  if (slug.includes("ads")) return "Iklan";
  return "Branding";
};

export default function ProdukPage() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 mt-4">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          Semua Produk Ventyfour
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Semua produk dirancang modular dan siap pakai. Kamu bisa pilih satuan,
          atau bundling hemat sesuai kebutuhan bisnismu.
        </p>
      </div>

      {/* Produk List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.slug}
            className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow hover:shadow-md transition p-5 text-center hover:scale-[1.02]"
          >
            {/* Promo Badge */}
            {p.slug === "ventykit" && (
              <span className="absolute top-3 right-3 bg-yellow-400 text-xs px-2 py-1 rounded-full font-bold shadow">
                Promo
              </span>
            )}

            {/* Kategori */}
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full mb-2">
              {getKategori(p.slug)}
            </span>

            <Image
              src={p.image}
              alt={p.name}
              width={300}
              height={200}
              className="rounded-md mx-auto mb-4"
              loading="lazy"
            />

            <h2 className="text-lg font-semibold text-blue-600 mb-1">
              {p.name}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              {p.description}
            </p>
            <p className="text-xs text-neutral-500 mb-4">
              Mulai {p.pricing?.basic}
            </p>

            {/* Link ke Halaman Statis */}
            <Link
              href={`/produk/detail/${p.slug}`}
              className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>

      {/* CTA bawah */}
      <div className="text-center mt-16">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
          Masih ragu pilih produk? Yuk konsultasi gratis atau cek daftar harga
          lengkapnya dulu!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pesan"
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
          >
            Konsultasi Sekarang
          </Link>
          <Link
            href="/harga"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 dark:hover:bg-neutral-800 transition"
          >
            Lihat Daftar Harga
          </Link>
        </div>
      </div>
    </section>
  );
}
