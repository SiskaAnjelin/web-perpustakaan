"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Judul */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-pink-100 transition">
          Peminjaman Buku
        </Link>

        {/* Menu Navigasi */}
        <div className="space-x-6">
          <Link href="/books" className="hover:text-pink-100 transition">
            Buku
          </Link>
          <Link href="/riwayat" className="hover:text-pink-100 transition">
            Riwayat
          </Link>
          <Link href="/user" className="hover:text-pink-100 transition">
            Profil
          </Link>
          <Link
            href="/login"
            className="bg-white text-pink-600 font-semibold px-3 py-1 rounded hover:bg-pink-100 transition"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
