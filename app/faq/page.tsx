"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Static data moved outside component for efficiency
const faqList = [
  {
    question: "Berapa lama pengerjaan produk?",
    answer:
      "Rata-rata selesai dalam **≤ 24 jam** setelah pembayaran dan brief.",
    kategori: "Produk",
  },
  {
    question: "Bagaimana cara order?",
    answer: "Cukup buka [halaman pemesanan](/pesan) dan isi form singkat.",
    kategori: "Produk",
  },
  {
    question: "Apakah bisa revisi?",
    answer: "Bisa revisi minor 1x. Kami pastikan hasilnya sesuai harapan kamu.",
    kategori: "Produk",
  },
  {
    question: "Metode pembayaran apa yang tersedia?",
    answer:
      "Transfer bank & QRIS. Setelah form dikirim, admin akan mengirim detailnya.",
    kategori: "Pembayaran",
  },
  {
    question: "Apakah bisa order via WhatsApp langsung?",
    answer:
      "Bisa. Klik [link ini](https://wa.me/628XXXXXX) untuk chat dengan tim kami.",
    kategori: "Teknis",
  },
];

const kategoriList = ["Semua", "Produk", "Pembayaran", "Teknis"];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaq = faqList.filter(
    (item) =>
      (kategori === "Semua" || item.kategori === kategori) &&
      item.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    while ((match = linkRegex.exec(text))) {
      parts.push(text.slice(lastIndex, match.index));
      parts.push(
        <a
          key={match[2]}
          href={match[2]}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }
    parts.push(text.slice(lastIndex));
    return parts;
  };

  return (
    <section className="max-w-2xl mx-auto px-4 pt-20 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center text-blue-600"
      >
        Pertanyaan Umum (FAQ)
      </motion.h1>

      <p className="text-center text-gray-600 mb-8">
        Jawaban atas hal-hal yang paling sering ditanyakan oleh pelanggan kami.
      </p>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Cari pertanyaan..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {kategoriList.map((cat) => (
          <button
            key={cat}
            onClick={() => setKategori(cat)}
            className={`px-3 py-1 rounded-full text-sm border ${
              kategori === cat ? "bg-blue-600 text-white" : "text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFaq.length === 0 ? (
          <p className="text-center text-gray-500">
            Tidak ada pertanyaan yang cocok 😅
          </p>
        ) : (
          filteredFaq.map((item, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-sm border-blue-100"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-4 py-3 font-medium bg-blue-100 hover:bg-blue-50 transition flex justify-between items-center"
              >
                <span>{item.question}</span>
                <span className="text-xl text-blue-500">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-4 py-3 text-sm text-gray-700 bg-white border-t border-blue-300">
                  {renderAnswer(item.answer)}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
