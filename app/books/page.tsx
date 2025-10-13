"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";

export default function BooksPage() {
  const [borrowData, setBorrowData] = useState({
    title: "",
    borrower: "",
    date: "",
  });

  const [records, setRecords] = useState<
    { title: string; borrower: string; date: string }[]
  >([]);

  useEffect(() => {
    // ambil data lama dari localStorage
    const saved = localStorage.getItem("riwayatPeminjaman");
    if (saved) setRecords(JSON.parse(saved));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!borrowData.title || !borrowData.borrower || !borrowData.date) {
      alert("⚠️ Mohon isi semua kolom sebelum menyimpan!");
      return;
    }

    const newRecords = [...records, borrowData];
    setRecords(newRecords);

    // simpan ke localStorage agar bisa diakses halaman lain
    localStorage.setItem("riwayatPeminjaman", JSON.stringify(newRecords));

    alert(`Data peminjaman buku "${borrowData.title}" berhasil disimpan!`);
    setBorrowData({ title: "", borrower: "", date: "" });
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Form Peminjaman Buku
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
          <div>
            <label className="block font-semibold mb-1">Judul Buku</label>
            <input
              type="text"
              placeholder="Masukkan judul buku"
              value={borrowData.title}
              onChange={(e) =>
                setBorrowData({ ...borrowData, title: e.target.value })
              }
              className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 text-gray-900 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Nama Peminjam</label>
            <input
              type="text"
              placeholder="Masukkan nama peminjam"
              value={borrowData.borrower}
              onChange={(e) =>
                setBorrowData({ ...borrowData, borrower: e.target.value })
              }
              className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 text-gray-900 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Tanggal Peminjaman</label>
            <input
              type="date"
              value={borrowData.date}
              onChange={(e) =>
                setBorrowData({ ...borrowData, date: e.target.value })
              }
              className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 text-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Simpan Data Peminjaman
          </button>
        </form>
      </div>
    </div>
  );
}
