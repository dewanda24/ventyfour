// Pricing section
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { memo } from "react";

const individual = [
  { name: "VentyKit", basic: "Rp149rb", pro: "Rp399rb", slug: "ventykit" },
  { name: "VentySite", basic: "Rp199rb", pro: "Rp249rb", slug: "ventysite" },
  { name: "VentyAds", basic: "Rp249rb", pro: "Rp349rb", slug: "ventyads" },
  { name: "VentyForm", basic: "Rp79rb", pro: "Rp149rb", slug: "ventyform" },
];

const bundles = [
  {
    name: "⭐ Starter",
    detail: "Kit Basic + Site Lite",
    price: "Rp299rb",
    url: "/pesan?paket=starter",
    highlight: false,
  },
  {
    name: "🔥 Promo Ready",
    detail: "Kit Full + Ads Promo",
    price: "Rp599rb",
    url: "/pesan?paket=promo-ready",
    highlight: true,
  },
  {
    name: "💼 Pro Digital",
    detail: "Semua versi Full",
    price: "Rp1.099rb",
    url: "/pesan?paket=pro-digital",
    highlight: false,
  },
];

const PriceTable = () => {
  return (
    <section className="py-20 px-4 bg-blue-50 dark:bg-neutral-900 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-white mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Pilih Sesuai Kebutuhanmu
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Produk Satuan */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 dark:text-white mb-4">
            Produk Satuan
          </h3>
          <div className="space-y-4">
            {individual.map(({ name, basic, pro, slug }, i) => (
              <motion.div
                key={slug}
                className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow hover:ring-2 hover:ring-blue-500 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={`/produk/${slug}`}>
                  <h4 className="font-semibold text-neutral-800 dark:text-white cursor-pointer">
                    {name}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Basic: <strong>{basic}</strong> · Pro:{" "}
                    <strong>{pro}</strong>
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Paket Bundling */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 dark:text-white mb-4">
            Paket Bundling
          </h3>
          <div className="space-y-4">
            {bundles.map(({ name, detail, price, url, highlight }, i) => (
              <motion.div
                key={url}
                className={`rounded-xl p-5 text-left shadow-md transition hover:ring-2 hover:ring-blue-500 ${
                  highlight
                    ? "bg-yellow-100 border-2 border-yellow-400 dark:bg-yellow-950"
                    : "bg-white dark:bg-neutral-800"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={url}>
                  <h4 className="text-base font-bold text-neutral-800 dark:text-white cursor-pointer">
                    {name}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {detail}
                  </p>
                  <p className="mt-1 text-blue-600 font-semibold">{price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
        Lihat detail lengkap di{" "}
        <Link
          href="/harga"
          className="text-blue-600 font-medium hover:underline"
        >
          halaman harga →
        </Link>
      </p>
    </section>
  );
};

export default memo(PriceTable);
