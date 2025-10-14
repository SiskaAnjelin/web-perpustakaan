"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function RiwayatPage() {
  const [riwayat, setRiwayat] = useState<
    { title: string; borrower: string; date: string; status: string }[]
  >([]);
  const [toast, setToast] = useState<string | null>(null);

  // Ambil data dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("riwayatPeminjaman");
    if (saved) {
      const parsed = JSON.parse(saved);
      const updated = parsed.map((item: any) => ({
        ...item,
        status: item.status || "Belum Dikembalikan",
      }));
      setRiwayat(updated);
    }
  }, []);

  // Toggle status
  const toggleStatus = (index: number) => {
    const updated = [...riwayat];
    updated[index].status =
      updated[index].status === "Sudah Dikembalikan"
        ? "Belum Dikembalikan"
        : "Sudah Dikembalikan";

    setRiwayat(updated);
    localStorage.setItem("riwayatPeminjaman", JSON.stringify(updated));

    showToast(`Status buku "${updated[index].title}" berhasil diperbarui!`);
  };

  // Hapus riwayat
  const hapusRiwayat = (index: number) => {
    const updated = riwayat.filter((_, i) => i !== index);
    setRiwayat(updated);
    localStorage.setItem("riwayatPeminjaman", JSON.stringify(updated));

    showToast("Riwayat peminjaman berhasil dihapus!");
  };

  // Toast sementara
  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  // Format tanggal
  const formatTanggal = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-pink-50 relative overflow-hidden">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-pink-600 text-center mb-6"
        >
          Riwayat Peminjaman Buku
        </motion.h1>

        <AnimatePresence mode="wait">
          {riwayat.length === 0 ? (
            <motion.p
              key="nodata"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-gray-600"
            >
              Belum ada data peminjaman buku.
            </motion.p>
          ) : (
            <motion.table
              key="table"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full border border-pink-300 rounded-lg text-gray-800"
            >
              <thead className="bg-pink-100">
                <tr>
                  <th className="py-2 px-4 border-b border-pink-300 text-left">
                    Judul Buku
                  </th>
                  <th className="py-2 px-4 border-b border-pink-300 text-left">
                    Nama Peminjam
                  </th>
                  <th className="py-2 px-4 border-b border-pink-300 text-left">
                    Tanggal Peminjaman
                  </th>
                  <th className="py-2 px-4 border-b border-pink-300 text-center">
                    Status
                  </th>
                  <th className="py-2 px-4 border-b border-pink-300 text-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {riwayat.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-pink-50 transition-all"
                  >
                    <td className="py-2 px-4 border-b border-pink-200">
                      {item.title}
                    </td>
                    <td className="py-2 px-4 border-b border-pink-200">
                      {item.borrower}
                    </td>
                    <td className="py-2 px-4 border-b border-pink-200">
                      {formatTanggal(item.date)}
                    </td>
                    <td className="py-2 px-4 border-b border-pink-200 text-center">
                      <AnimatePresence mode="wait">
                        <motion.button
                          key={item.status}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => toggleStatus(index)}
                          className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                            item.status === "Sudah Dikembalikan"
                              ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                              : "bg-pink-100 text-pink-700 hover:bg-pink-200"
                          }`}
                        >
                          {item.status}
                        </motion.button>
                      </AnimatePresence>
                    </td>
                    <td className="py-2 px-4 border-b border-pink-200 text-center">
                      <button
                        onClick={() => hapusRiwayat(index)}
                        className="px-3 py-1 rounded-lg text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                      >
                        Hapus
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Toast animasi lembut */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-5 py-3 rounded-lg shadow-lg font-medium flex items-center gap-2"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
