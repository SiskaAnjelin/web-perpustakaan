"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function UserPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    nama: "Siska Anjelin",
    email: "whoisnayya@gmail.com",
    status: "Anggota Perpustakaan",
    id: "12925",
  });

  // Ambil data dari localStorage saat halaman mount
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser((prev) => ({ ...prev, ...parsed }));
    }
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Animasi konten utama */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg text-center border border-pink-200"
        >
          {/* Judul dengan animasi */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-pink-600 mb-6"
          >
            Profil Pengguna
          </motion.h1>

          {/* Foto dan data pengguna */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.img
              src="/images/user1.jpg"
              alt="Foto Pengguna"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-28 h-28 rounded-full border-4 border-pink-300 shadow-md object-cover object-center"
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-700 text-left space-y-1"
            >
              <p>
                <strong>Nama:</strong> {user.nama}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Status:</strong> {user.status}
              </p>
              <p>
                <strong>ID Anggota:</strong> {user.id}
              </p>
            </motion.div>
          </motion.div>

          {/* Tombol dengan efek hover halus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/edit")}
              className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Edit Profil
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/riwayat")}
              className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Lihat Riwayat
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
