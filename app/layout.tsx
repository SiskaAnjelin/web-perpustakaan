import "./globals.css";

export const metadata = {
  title: "Aplikasi Peminjaman Buku",
  description: "Sistem perpustakaan digital sekolah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
