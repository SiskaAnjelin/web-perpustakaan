interface BookCardProps {
  title: string;
  author: string;
  year: number;
  onBorrow: () => void;
}

export default function BookCard({ title, author, year, onBorrow }: BookCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{author}</p>
      <p className="text-sm text-gray-500 mb-3">Tahun: {year}</p>
      <button
        onClick={onBorrow}
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Pinjam Buku
      </button>
    </div>
  );
}
