// Cara Pemesanan
"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CaraPesanPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-24 space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Cara Pesan Layanan di Ventyfour
        </motion.h1>

        <div className="space-y-10 text-lg leading-relaxed">
          <div>
            <h2 className="font-semibold text-xl mb-2">
              1. Telusuri & Pilih Produk
            </h2>
            <p>
              Kunjungi halaman utama kami untuk melihat berbagai layanan digital
              seperti desain konten, branding, copywriting, dan lainnya. Pilih
              layanan yang paling sesuai dengan kebutuhanmu. Jika ragu, kamu
              bisa konsultasi dulu melalui kontak yang tersedia.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              2. Isi Formulir Pemesanan
            </h2>
            <p>
              Masuk ke halaman{" "}
              <Link href="/pesan" className="text-blue-600 underline">
                Pesan
              </Link>
              , kemudian isi formulir dengan lengkap:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Nama kamu atau nama brand</li>
              <li>Jenis produk yang ingin dipesan</li>
              <li>Deskripsi kebutuhan secara ringkas</li>
              <li>Kontak aktif (WhatsApp, Instagram, atau email)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              3. Konfirmasi & Pembayaran
            </h2>
            <p>
              Setelah mengisi formulir, tim kami akan menghubungimu untuk
              konfirmasi detail dan mengirimkan informasi pembayaran. Proses
              pengerjaan dimulai setelah pembayaran diterima.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">4. Proses Pengerjaan</h2>
            <p>
              Tim Ventyfour akan mulai mengerjakan pesananmu sesuai antrian.
              Rata-rata pengerjaan selesai dalam ≤ 24 jam. Kamu akan mendapatkan
              preview hasil untuk revisi ringan (jika ada).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">5. Pengiriman Hasil</h2>
            <p>
              Hasil akhir akan dikirim melalui email atau platform komunikasi
              yang kamu pilih. Semua file akan dalam format siap pakai.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/pesan"
            className="inline-block bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            Isi Formulir Sekarang
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
