// Product section
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutTemplate, Globe, Megaphone, ClipboardCheck } from "lucide-react";
import { memo } from "react";

const products = [
  {
    Icon: LayoutTemplate,
    name: "VentyKit",
    desc: "Logo, warna, QR & template instan untuk branding profesional.",
    slug: "ventykit",
  },
  {
    Icon: Globe,
    name: "VentySite",
    desc: "Landing page online yang simpel dan langsung bisa dibagikan.",
    slug: "ventysite",
  },
  {
    Icon: Megaphone,
    name: "VentyAds",
    desc: "Konten iklan siap posting untuk promosi cepat & menarik.",
    slug: "ventyads",
  },
  {
    Icon: ClipboardCheck,
    name: "VentyForm",
    desc: "Formulir online untuk order, survei, atau pendaftaran.",
    slug: "ventyform",
  },
];

const Products = () => {
  return (
    <section className="py-20 px-4 bg-blue-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-white mb-4"
        >
          Produk Unggulan Ventyfour
        </motion.h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
          Semua produk dirancang modular dan bisa dibeli satuan — atau
          dipaketkan sesuai kebutuhan.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {products.map(({ Icon, name, desc, slug }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="mb-4 text-blue-600">
                <Icon size={28} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                {name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {desc}
              </p>
              <Link
                href={`/produk/${slug}`}
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Lihat Detail →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Products);
