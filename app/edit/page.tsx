"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";

export default function EditProfilePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    status: "",
  });

  // Ambil data dari localStorage saat komponen mount
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      setFormData(JSON.parse(saved));
    } else {
      // default data jika belum ada
      setFormData({
        nama: "Siska Anjelin",
        email: "whoisnayya@gmail.com",
        status: "Anggota Perpustakaan",
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simpan ke localStorage
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("Profil berhasil diperbarui!");
    router.push("/user");
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl border border-pink-200">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">
          Edit Profil
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-gray-900">
          <div>
            <label className="block text-left text-gray-900 font-semibold mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-left text-gray-900 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-left text-gray-900 font-semibold mb-1">
              Status
            </label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
            />
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              type="button"
              onClick={() => router.push("/user")}
              className="px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition-all"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-md transition-all"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
