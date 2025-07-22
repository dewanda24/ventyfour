"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-blue-50 to-white dark:from-neutral-900 dark:to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-white mb-4">
          Kenalan dengan Ventyfour
        </h1>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          Ventyfour adalah platform digitalisasi instan untuk UMKM & kreator
          lokal — bantu bisnismu tampil profesional tanpa ribet, tanpa menunggu
          lama.
        </p>
        <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mb-8">
          Dari <strong>VentyKit</strong> hingga <strong>VentySite</strong>,{" "}
          <strong>VentyAds</strong>, dan <strong>VentyForm</strong> — semua
          dirancang modular, cepat, dan siap pakai.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/produk">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer">
              Jelajahi Produk
            </button>
          </Link>
          <Link href="/tentang">
            <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800 transition cursor-pointer">
              Tentang Ventyfour
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
