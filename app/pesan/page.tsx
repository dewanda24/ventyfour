"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, MessageCircle } from "lucide-react";

const produkOptions = ["VentyKit", "VentyPage", "VentyAds", "VentyForm"];

export default function PesanPage() {
  const [form, setForm] = useState({
    nama: "",
    produk: produkOptions[0],
    kebutuhan: "",
    kontak: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 pt-24 py-10 space-y-10">
      {/* Judul Halaman */}
      <h1 className="text-3xl font-bold text-center text-blue-600">
        ✏️ Pesan Desainmu Sekarang
      </h1>

      {/* Progress Tracker */}
      <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
        <span className="after:content-['→'] after:mx-2">1. Isi Form</span>
        <span className="after:content-['→'] after:mx-2">2. Transfer</span>
        <span>3. Terima File</span>
      </div>

      {/* Formulir */}
      <section className="bg-gray-50 shadow-sm rounded-2xl p-6 space-y-4 border border-blue-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="nama"
            placeholder="Nama"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md border-blue-300 "
          />
          <select
            name="produk"
            onChange={handleChange}
            value={form.produk}
            className="w-full p-2 border rounded-md  border-blue-300"
          >
            {produkOptions.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          <textarea
            name="kebutuhan"
            placeholder="Detail kebutuhan..."
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md h-28  border-blue-300"
          />
          <input
            name="kontak"
            placeholder="Kontak (WA / Email)"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md  border-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:opacity-90 transition"
          >
            Kirim Pesanan
          </button>
        </form>
      </section>

      {/* Trust Indicators */}
      <section className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <CheckCircle className="text-green-500 w-4 h-4" /> 24 Jam Selesai
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="text-blue-500 w-4 h-4" /> Support WA
        </div>
        <div className="flex items-center gap-1">
          <Star className="text-yellow-400 w-4 h-4" /> Rating 4.9/5
        </div>
      </section>

      {/* Preview Produk */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Contoh Hasil Desain</h2>
        <div className="grid grid-cols-3 gap-2">
          <Image
            src="/template-sosmed/feed1.png"
            alt="Preview 1"
            width={300}
            height={200}
            className="rounded-md object-cover"
          />
          <Image
            src="/template-sosmed/feed1.png"
            alt="Preview 2"
            width={300}
            height={200}
            className="rounded-md object-cover"
          />
          <Image
            src="/template-sosmed/feed1.png"
            alt="Feed Instagram"
            width={300}
            height={200}
            className="rounded-md object-cover"
          />
        </div>
      </section>

      {/* Promo Singkat */}
      <section className="bg-yellow-200 text-red-600 p-4 rounded-md text-center font-medium">
        🎁 Order hari ini, dapat bonus 1 template gratis!
      </section>

      {/* Tips kebutuhan */}
      <section>
        <h2 className="font-semibold text-lg mb-1">Tips Menulis Kebutuhan</h2>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li>Sebutkan tujuan desainmu (contoh: promosi produk).</li>
          <li>Berikan detail isi yang harus ditampilkan.</li>
          <li>Sertakan referensi warna/logo jika ada.</li>
        </ul>
      </section>

      {/* FAQ Ringkas */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Pertanyaan Umum</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <strong>Q:</strong> Bisa revisi? <br />
            <strong>A:</strong> Bisa, revisi ringan maksimal 2x.
          </li>
          <li>
            <strong>Q:</strong> Bisa order satuan? <br />
            <strong>A:</strong> Tentu, tidak ada minimal order.
          </li>
          <li>
            <strong>Q:</strong> File apa yang saya terima? <br />
            <strong>A:</strong> File .JPG/.PNG & .PDF (siap cetak).
          </li>
        </ul>
      </section>

      {/* CTA ke Harga */}
      <section className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          Masih ingin lihat-lihat dulu?
        </p>
        <Link
          href="/harga"
          className="inline-block bg-blue-500 hover:bg-blue-300 text-black px-4 py-2 rounded-md transition"
        >
          💡 Lihat Paket Harga
        </Link>
      </section>
    </main>
  );
}
