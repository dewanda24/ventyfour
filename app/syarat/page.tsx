// Syarat & Ketentuan
"use client";

import { motion } from "framer-motion";

export default function SyaratPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        Syarat & Ketentuan Penggunaan Layanan
      </motion.h1>

      <div className="space-y-8 text-lg leading-relaxed">
        <p>
          Dengan menggunakan layanan Ventyfour, kamu setuju terhadap syarat &
          ketentuan berikut. Harap dibaca dengan seksama.
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Data Valid:</strong> Pelanggan wajib memberikan informasi
            yang benar dan dapat dihubungi. Kesalahan data bukan tanggung jawab
            kami.
          </li>
          <li>
            <strong>Pembayaran di Muka:</strong> Semua layanan dikerjakan
            setelah konfirmasi pembayaran diterima secara penuh.
          </li>
          <li>
            <strong>Revisi Terbatas:</strong> Jumlah revisi sesuai paket
            layanan. Revisi tambahan bisa dikenakan biaya tambahan.
          </li>
          <li>
            <strong>Waktu Pengerjaan:</strong> Estimasi penyelesaian layanan
            adalah ≤ 24 jam, tergantung pada antrean dan kompleksitas.
          </li>
          <li>
            <strong>Kebijakan Penolakan:</strong> Kami berhak menolak permintaan
            yang mengandung unsur SARA, pornografi, plagiat, atau melanggar
            hukum.
          </li>
          <li>
            <strong>Penggunaan Karya:</strong> Kami dapat menampilkan hasil
            karya sebagai portofolio, kecuali ada permintaan tertulis dari klien
            untuk tidak dipublikasikan.
          </li>
        </ul>
      </div>
    </main>
  );
}
