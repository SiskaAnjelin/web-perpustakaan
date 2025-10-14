"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";

export default function BooksPage() {
  const [borrowData, setBorrowData] = useState({
    title: "",
    borrower: "",
    date: "",
  });

  const [customTitle, setCustomTitle] = useState("");
  const [records, setRecords] = useState<
    { title: string; borrower: string; date: string }[]
  >([]);

  const bookOptions = [
    "Laskar Pelangi - Andrea Hirata",
    "Cantik Itu Luka - Eka Kurniawan",
    "Dilan 1990 - Pidi Baiq",
    "Tentang Kamu - Tere Liye",
    "Mariposa - Luluk HF",
    "Nanti Kita Cerita Tentang Hari Ini - Marchella FP",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("riwayatPeminjaman");
    if (saved) setRecords(JSON.parse(saved));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalTitle = customTitle.trim()
      ? customTitle
      : borrowData.title.trim();

    if (!finalTitle || !borrowData.borrower || !borrowData.date) {
      alert("Mohon isi semua kolom sebelum menyimpan!");
      return;
    }

    const newRecord = {
      title: finalTitle,
      borrower: borrowData.borrower,
      date: borrowData.date,
    };

    const newRecords = [...records, newRecord];
    setRecords(newRecords);
    localStorage.setItem("riwayatPeminjaman", JSON.stringify(newRecords));

    alert(`Data peminjaman buku "${finalTitle}" berhasil disimpan!`);

    setBorrowData({ title: "", borrower: "", date: "" });
    setCustomTitle("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl mx-auto p-6 mt-6 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl border border-pink-200"
      >
        <h1 className="text-2xl font-bold text-center text-pink-600 mb-5">
          Form Peminjaman Buku
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700 text-[15px]">
          {/* Pilihan Buku */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Pilih Buku
            </label>
            <select
              value={borrowData.title}
              onChange={(e) =>
                setBorrowData({ ...borrowData, title: e.target.value })
              }
              className={`w-full border border-pink-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 bg-pink-50 placeholder-pink-300 transition-all duration-200 ${
                borrowData.title ? "text-pink-600" : "text-gray-900"
              }`}
            >
              <option value="">Pilih dari daftar</option>
              {bookOptions.map((book, index) => (
                <option key={index} value={book}>
                  {book}
                </option>
              ))}
            </select>

            {/* Input opsional */}
            <label className="block font-semibold mt-3 mb-1 text-gray-700">
              Buku favoritmu belum terdaftar? Ketik judulnya di sini
            </label>
            <input
              type="text"
              placeholder="Contoh: Laut Bercerita"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              className={`w-full border border-pink-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 bg-pink-50 placeholder-pink-300 transition-all duration-200 ${
                customTitle ? "text-pink-600" : "text-gray-900"
              }`}
            />
            <p className="text-sm text-pink-600 mt-1">
              (Jika kamu menulis di sini, sistem akan mengabaikan pilihan di atas)
            </p>
          </div>

          {/* Nama Peminjam */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Nama Peminjam
            </label>
            <input
              type="text"
              placeholder="Masukkan nama peminjam"
              value={borrowData.borrower}
              onChange={(e) =>
                setBorrowData({ ...borrowData, borrower: e.target.value })
              }
              className={`w-full border border-pink-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 bg-pink-50 placeholder-pink-300 transition-all duration-200 ${
                borrowData.borrower ? "text-pink-600" : "text-gray-900"
              }`}
            />
          </div>

          {/* Tanggal Peminjaman */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Tanggal Peminjaman
            </label>
            <input
              type="date"
              value={borrowData.date}
              onChange={(e) =>
                setBorrowData({ ...borrowData, date: e.target.value })
              }
              className={`w-full border border-pink-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 bg-pink-50 transition-all duration-200 ${
                borrowData.date ? "text-pink-600" : "text-gray-900"
              }`}
            />
          </div>

          {/* Tombol Simpan */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl font-semibold shadow-md transition-all"
          >
            Simpan Data Peminjaman
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
