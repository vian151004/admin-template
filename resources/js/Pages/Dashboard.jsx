import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  const stats = [
    { title: 'Total Pengguna', value: '1,250', change: '+12%', color: 'text-blue-600 bg-blue-50' },
    { title: 'Pendapatan', value: 'Rp 45.200.000', change: '+8%', color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Pesanan Aktif', value: '84', change: '-3%', color: 'text-amber-600 bg-amber-50' },
  ];

  const mockUsers = [
    { id: 1, name: 'Budi Santoso', email: 'budi@example.com', role: 'Admin', status: 'Aktif' },
    { id: 2, name: 'Siti Rahma', email: 'siti@example.com', role: 'Editor', status: 'Aktif' },
    { id: 3, name: 'Andi Pratama', email: 'andi@example.com', role: 'User', status: 'Non-Aktif' },
  ];

  return (
    <AdminLayout title="Ringkasan Dashboard">
      <Head title="Dashboard Admin" />

      {/* Ringkasan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((item, idx) => (
          <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">{item.title}</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">{item.value}</p>
              <span className="text-xs font-semibold text-emerald-600 mt-1 inline-block">
                {item.change} dari bulan lalu
              </span>
            </div>
            <div className={`p-3 rounded-lg font-bold ${item.color}`}>📈</div>
          </div>
        ))}
      </div>

      {/* Table Data Reusable */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Daftar User Terbaru</h3>
          <button className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
            + Tambah Data
          </button>
        </div>

        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">{user.name}</td>
                <td className="p-4 text-slate-600">{user.email}</td>
                <td className="p-4 text-slate-600">{user.role}</td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Aktif'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button className="text-xs font-semibold text-indigo-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-xs font-semibold text-red-600 hover:underline">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}