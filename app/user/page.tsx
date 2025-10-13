"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";

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
      setUser({ ...user, ...parsed });
    }
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-6">
            Profil Pengguna
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <img
              src="/images/user1.jpg"
              alt="Foto Pengguna"
              className="w-28 h-28 rounded-full border-4 border-pink-300 shadow-md object-cover object-center"
            />
            <div className="text-gray-700 text-left space-y-1">
              <p><strong>Nama:</strong> {user.nama}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Status:</strong> {user.status}</p>
              <p><strong>ID Anggota:</strong> {user.id}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => router.push("/edit")}
              className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Edit Profil
            </button>

            <button
              onClick={() => router.push("/riwayat")}
              className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Lihat Riwayat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
