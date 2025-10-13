"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col justify-between relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay gradasi pink lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/70 via-pink-700/50 to-pink-300/30 backdrop-blur-[2px]" />

      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-20 md:mt-28 flex-grow overflow-auto"
      >
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-pink-100 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)] leading-snug">
            Yuk, Temukan Buku Favoritmu!
          </h1>
        </motion.div>

        {/* Deskripsi + Nama & Kontak Developer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-2xl w-full mb-10"
        >
          <div className="bg-white/70 px-8 py-6 rounded-2xl shadow-lg border border-pink-300 backdrop-blur-md text-gray-700 text-lg md:text-xl leading-relaxed">
            <p>
              Aplikasi ini dibuat untuk memudahkan proses peminjaman dan pengelolaan buku di perpustakaan sekolah agar lebih cepat, praktis, dan efisien. Pengguna dapat mencatat serta melacak data peminjaman tanpa harus menunggu lama, sekaligus membantu meningkatkan minat baca di kalangan siswa.<br /><br />
              
              <span className="text-base md:text-lg font-semibold text-gray-800">
                Dikembangkan oleh <strong className="text-pink-600">Siska Anjelin</strong><br />
                Nomor : <strong>+62 838-9343-4101</strong> | IG : <a href="https://instagram.com/cluvssid" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500 transition">@cluvssid</a>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Tombol utama kecil */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(219, 39, 119, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => router.push("/books")}
          className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-10 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all"
        >
          Jelajahi Dunia Buku
        </motion.button>
      </motion.div>

      {/* Footer kosong untuk jarak bawah */}
      <div className="py-6" />
    </div>
  );
}
