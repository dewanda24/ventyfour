// Custom 404 page
// app/404.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white dark:bg-zinc-950">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-6xl font-bold text-zinc-900 dark:text-white"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-md"
      >
        Halaman yang kamu cari tidak ditemukan. Mungkin sudah dipindahkan atau
        tidak pernah ada.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-700 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </Link>
      </motion.div>
    </section>
  );
}
