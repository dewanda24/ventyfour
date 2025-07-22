// Testimonials
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Putri A.",
    role: "Owner Kopi Kita",
    quote:
      "Baru pertama kali bikin branding tapi prosesnya super gampang! Desainnya kece, langsung bisa dipakai promosi.",
    image: "/testimoni/testi1.png",
  },
  {
    name: "Rian D.",
    role: "Freelancer & Konten Kreator",
    quote:
      "Gak nyangka hasilnya sebagus itu. Harganya masuk akal, tampilannya profesional banget.",
    image: "/testimoni/testi2.png",
  },
  {
    name: "Dewi L.",
    role: "Pemilik Toko Fashion Lokal",
    quote:
      "Suka banget sama hasil brandingnya. Jadi lebih pede pas launching toko online!",
    image: "/testimoni/testi3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-white mb-6">
          Apa Kata Mereka
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl shadow hover:shadow-lg transition text-left"
            >
              <p className="text-sm text-neutral-700 dark:text-neutral-300 italic mb-4">
                “{t.quote}”
              </p>
              <div className="flex items-center mt-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
