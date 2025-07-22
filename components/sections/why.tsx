// Why section
"use client";

import { motion } from "framer-motion";
import { Zap, Briefcase, Smile, Tag } from "lucide-react";

const features = [
  {
    icon: <Zap size={28} className="text-blue-600" />,
    title: "Cepat & Instan",
    desc: "Branding digital kamu selesai dalam ≤ 24 jam. Gak perlu tunggu berhari-hari.",
  },
  {
    icon: <Briefcase size={28} className="text-blue-600" />,
    title: "Tampil Profesional",
    desc: "Naikkan kredibilitas bisnis dengan desain yang rapi, solid, dan bisa dipercaya.",
  },
  {
    icon: <Smile size={28} className="text-blue-600" />,
    title: "Tanpa Ribet",
    desc: "Cukup isi form — tanpa desain, tanpa repot. Kami bantu semuanya.",
  },
  {
    icon: <Tag size={28} className="text-blue-600" />,
    title: "Harga Masuk Akal",
    desc: "Mulai Rp149.000. Solusi digital yang gak bikin kantong jebol.",
  },
];

export default function Why() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-white mb-4"
        >
          Kenapa Harus Ventyfour?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-10"
        >
          Ventyfour bantu UMKM & kreator lokal tampil profesional dengan cara
          yang cepat, praktis, dan gak bikin stres. Solusi digital yang semua
          orang bisa akses.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1">{f.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                  {f.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
