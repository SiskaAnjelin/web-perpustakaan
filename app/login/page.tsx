"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && email) {
      router.push("/welcome");
    } else {
      alert("Harap isi semua kolom sebelum masuk!");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md mx-auto mt-28 bg-white/80 backdrop-blur-md shadow-lg p-8 rounded-2xl border border-pink-200"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-center text-pink-600 mb-6"
        >
          Login Pengguna
        </motion.h2>

        <motion.form
          onSubmit={handleLogin}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Input Nama */}
          <div>
            <label className="block text-gray-500 font-medium mb-1">
              Nama
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Masukkan Nama Lengkap"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg outline-none border-2 transition-all bg-transparent
                ${
                  username
                    ? "border-pink-400 text-pink-600 focus:ring-2 focus:ring-pink-400"
                    : "border-gray-300 text-gray-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-300"
                }`}
            />
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-gray-500 font-medium mb-1">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg outline-none border-2 transition-all bg-transparent
                ${
                  email
                    ? "border-pink-400 text-pink-600 focus:ring-2 focus:ring-pink-400"
                    : "border-gray-300 text-gray-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-300"
                }`}
            />
          </div>

          {/* Tombol */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg shadow-md transition-transform"
          >
            Masuk Sekarang
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
