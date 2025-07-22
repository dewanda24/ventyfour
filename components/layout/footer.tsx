"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <footer className="bg-blue-50 dark:bg-blue-950 border-t border-blue-200 dark:border-blue-800 text-sm text-gray-600 dark:text-gray-400 px-4 py-6">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <button
            onClick={handleLogoClick}
            className="text-2xl font-bold text-blue-700 dark:text-blue-300 tracking-wide mb-2 hover:opacity-90 transition cursor-pointer"
          >
            Ventyfour
          </button>
          <p className="max-w-xs leading-relaxed">
            Solusi branding instan untuk UMKM & kreator lokal. Tampil
            profesional dalam ≤ 24 jam.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-gray-100 mb-3">
            Navigasi
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/produk" className="hover:text-blue-600">
                Produk
              </Link>
            </li>
            <li>
              <Link href="/harga" className="hover:text-blue-600">
                Harga
              </Link>
            </li>
            <li>
              <Link href="/pesan" className="hover:text-blue-600">
                Pesan
              </Link>
            </li>
          </ul>
        </div>

        {/* Bantuan & Info */}
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-gray-100 mb-3">
            Bantuan & Info
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-blue-600">
                Tanya Jawab
              </Link>
            </li>
            <li>
              <Link href="/cara-pesan" className="hover:text-blue-600">
                Alur Pemesanan
              </Link>
            </li>
            <li>
              <Link href="/syarat" className="hover:text-blue-600">
                Ketentuan Layanan
              </Link>
            </li>
            <li>
              <Link href="/tentang" className="hover:text-blue-600">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak & Sosmed */}
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-gray-100 mb-3">
            Kontak
          </h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:kontak@ventyfour.id"
                className="hover:text-blue-600"
              >
                kontak@ventyfour.id
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                +62 812-3456-7890
              </a>
            </li>
          </ul>

          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-100 mb-2">
              Ikuti Kami
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/ventyfour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border hover:border-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/ventyfour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border hover:border-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs py-4 border-t border-blue-100 dark:border-blue-800">
        &copy; {new Date().getFullYear()} Ventyfour. All rights reserved.
      </div>
    </footer>
  );
}
