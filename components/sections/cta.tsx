"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Tampil Profesional?
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-8">
          Jangan tunggu nanti. Mulai branding usahamu sekarang juga — cukup isi
          form, kami yang bantu beresin!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/pesan"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-neutral-100 transition"
            >
              <Rocket size={18} /> Pesan Sekarang
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20VentyKit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white px-6 py-3 rounded-full text-white hover:bg-white/10 transition"
            >
              <MessageCircle size={18} /> Chat WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
