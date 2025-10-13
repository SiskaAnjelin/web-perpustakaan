interface TableRiwayatProps {
  data: { id: number; title: string; borrowedAt: string }[];
}

export default function TableRiwayat({ data }: TableRiwayatProps) {
  return (
    <table className="w-full border-collapse bg-white shadow rounded-lg">
      <thead className="bg-green-700 text-white">
        <tr>
          <th className="p-3 text-left">Judul Buku</th>
          <th className="p-3 text-left">Tanggal Pinjam</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-b hover:bg-gray-100">
            <td className="p-3">{item.title}</td>
            <td className="p-3">{item.borrowedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
