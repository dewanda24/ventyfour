// Harga
import Link from "next/link";
import { products } from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga Ventyfour",
  description: "Lihat daftar harga semua produk dan paket bundling Ventyfour.",
};

const bundles = [
  {
    name: "⭐ Starter",
    detail: "Kit Basic + Site Lite",
    price: "Rp299rb",
    url: "/pesan?paket=starter",
  },
  {
    name: "🔥 Promo Ready",
    detail: "Kit Full + Ads Promo",
    price: "Rp599rb",
    url: "/pesan?paket=promo-ready",
  },
  {
    name: "💼 Pro Digital",
    detail: "Semua versi Full",
    price: "Rp1.099rb",
    url: "/pesan?paket=pro-digital",
  },
];

export default function HargaPage() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
          Daftar Harga
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          Pilih paket atau produk individual sesuai kebutuhan. Semua harga
          transparan, tidak ada biaya tersembunyi.
        </p>
      </div>

      {/* Produk Individual */}
      <h2 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">
        Produk Individual
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {products.map((p) => (
          <div
            key={p.slug}
            className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              {p.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              {p.description}
            </p>
            <p className="text-sm text-neutral-800 dark:text-neutral-200">
              Basic: <strong>{p.pricing.basic}</strong> · Pro:{" "}
              <strong>{p.pricing.pro}</strong>
            </p>
            <Link
              href={`/produk/${p.slug}`}
              className="inline-block mt-4 text-sm text-blue-600 hover:underline"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>

      {/* Paket Bundling */}
      <h2 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">
        Paket Bundling
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {bundles.map((b) => (
          <div
            key={b.name}
            className="bg-blue-50 dark:bg-neutral-800 border border-blue-200 dark:border-blue-800 rounded-xl p-5 shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-base font-bold text-blue-700 dark:text-blue-300 mb-1">
              {b.name}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-200 mb-2">
              {b.detail}
            </p>
            <p className="font-semibold text-blue-800 dark:text-blue-100 mb-4">
              {b.price}
            </p>
            <Link
              href={b.url}
              className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Pilih Paket Ini
            </Link>
          </div>
        ))}
      </div>

      {/* CTA bawah */}
      <div className="text-center mt-16">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Mau lihat detail produk satuan?
        </p>
        <Link
          href="/produk"
          className="inline-block mt-2 text-sm text-blue-600 hover:underline"
        >
          Lihat Semua Produk →
        </Link>
      </div>
    </section>
  );
}
