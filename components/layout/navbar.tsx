"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    {
      label: "Beranda",
      render:
        pathname === "/" ? (
          <Link
            href="#"
            onClick={handleScrollTop}
            className="text-sm hover:text-blue-600"
          >
            Beranda
          </Link>
        ) : (
          <Link href="/" className="text-sm hover:text-blue-600">
            Beranda
          </Link>
        ),
    },
    {
      label: "Produk",
      href: "/produk",
    },
    {
      label: "Harga",
      href: "/harga",
    },
    {
      label: "Tentang",
      href: "/tentang",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "Pesan",
      href: "/pesan",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        {pathname === "/" ? (
          <Link
            href="#"
            onClick={handleScrollTop}
            className="text-xl font-bold tracking-tight text-blue-600 cursor-pointer"
          >
            Ventyfour
          </Link>
        ) : (
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-blue-600"
          >
            Ventyfour
          </Link>
        )}

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) =>
            link.render ? (
              <div key={link.label}>{link.render}</div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="text-sm text-neutral-700 hover:text-blue-600 dark:text-neutral-100 dark:hover:text-blue-400 transition"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-700 dark:text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) =>
              link.render ? (
                <div key={link.label}>{link.render}</div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setOpen(false)}
                  className="text-sm text-neutral-700 hover:text-blue-600 dark:text-neutral-100 dark:hover:text-blue-400 transition"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
