"use client";
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";

export default function TambahBukuPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Buku "${title}" oleh ${author} berhasil ditambahkan!`);
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto mt-20 bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Tambah Buku Baru
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Judul Buku"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 mb-4 rounded"
          />
          <input
            type="text"
            placeholder="Nama Penulis"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border px-3 py-2 mb-4 rounded"
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
            Simpan Buku
          </button>
        </form>
      </div>
    </div>
  );
}
