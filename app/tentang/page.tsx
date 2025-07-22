"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const timeline = [
  { year: "2023", desc: "Ide awal muncul dari komunitas UMKM lokal." },
  {
    year: "2024",
    desc: "MVP dirilis dengan VentyKit, VentySite, dan VentyAds.",
  },
  {
    year: "2025",
    desc: "Scale-up dengan bundling promo dan landing page siap pakai.",
  },
];

const nilaiInti = [
  {
    icon: "⚡",
    title: "Cepat & Responsif",
    desc: "Order selesai ≤ 24 jam. Tanpa ribet.",
  },
  {
    icon: "🎯",
    title: "Tepat Sasaran",
    desc: "Desain & konten disesuaikan dengan target UMKM.",
  },
  {
    icon: "🧩",
    title: "Modular",
    desc: "Bisa beli satuan atau bundling sesuai kebutuhan.",
  },
  {
    icon: "💬",
    title: "Support Personal",
    desc: "Bantuan langsung via WhatsApp, cepat & ramah.",
  },
];

const statistik = [
  { label: "Proyek Selesai", value: "120+" },
  { label: "Rating Pelanggan", value: "4.9/5" },
  { label: "Durasi Rata-rata", value: "≤ 24 jam" },
  { label: "Partner UMKM", value: "80+" },
];

export default function TentangPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-20 pb-24 space-y-16">
      {/* Hanya animasi untuk heading utama */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          Tentang Ventyfour
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Ventyfour adalah platform digitalisasi untuk UMKM & kreator lokal.
          Kami hadir agar siapa pun bisa punya branding & sistem online yang
          cepat, mudah, dan profesional — tanpa biaya tinggi atau ribet.
        </p>
      </motion.div>

      {/* Cerita Brand */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          💡 Cerita Singkat
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Berawal dari teman yang kesulitan bikin logo dan katalog usahanya,
          kami sadar banyak pelaku UMKM sebenarnya ingin tampil profesional —
          tapi bingung harus mulai dari mana. Maka lahirlah Ventyfour, sebagai
          solusi digital instan & modular yang bisa langsung dipakai untuk
          promosi dan presentasi usaha.
        </p>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          📅 Timeline Perjalanan
        </h2>
        <div className="relative border-l-2 border-blue-200 pl-6 space-y-4 text-sm text-gray-700">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <p>
                <strong className="text-blue-600">{item.year}:</strong>{" "}
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Nilai Inti */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          🧩 Nilai Inti Kami
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {nilaiInti.map((v, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 bg-white hover:shadow-md transition-transform hover:scale-105 text-blue-600"
            >
              <div className="text-2xl mb-2">{v.icon}</div>
              <h3 className="font-semibold mb-1">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visi & Misi */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          🌱 Visi
        </h2>
        <p className="text-gray-700 mb-4">
          Menjadi platform digitalisasi paling ramah UMKM di Indonesia.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-600">🎯 Misi</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
          <li>Mempermudah akses branding berkualitas untuk semua.</li>
          <li>
            Menyediakan produk digital yang cepat, modular, dan terjangkau.
          </li>
          <li>Memberdayakan UMKM lewat solusi instan dan profesional.</li>
        </ul>
      </div>

      {/* Testimoni */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <p className="italic text-gray-800 text-lg mb-2">
          “Kami percaya semua usaha layak tampil keren — bahkan tanpa tim desain
          atau budget besar.”
        </p>
        <p className="text-sm text-gray-600">— Tim Ventyfour</p>
      </div>

      {/* Statistik */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center text-sm">
          {statistik.map((s, i) => (
            <div key={i} className="py-4">
              <div className="text-2xl font-bold text-blue-600">{s.value}</div>
              <div className="text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gambar Tim */}
      <div className="text-center">
        <Image
          src="/banner/banner.svg"
          alt="Tim kreatif Ventyfour"
          width={800}
          height={400}
          loading="lazy"
          className="rounded-lg shadow-md w-full max-w-2xl mx-auto object-cover h-auto"
        />
        <p className="text-sm text-gray-500 mt-2">
          Tim kreatif di balik Ventyfour
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/produk"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Lihat Produk Kami
        </Link>
      </div>
    </section>
  );
}
