import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  const stats = [
    { title: 'Total Pengguna', value: '1,250', change: '+12.5%', isUp: true, icon: '👥' },
    { title: 'Pendapatan', value: 'Rp 45.200.000', change: '+8.2%', isUp: true, icon: '💰' },
    { title: 'Pesanan Aktif', value: '84', change: '-2.1%', isUp: false, icon: '📦' },
  ];

  const mockUsers = [
    { id: 1, name: 'Budi Santoso', email: 'budi@gmail.com', role: 'Administrator', status: 'Aktif' },
    { id: 2, name: 'Siti Rahma', email: 'siti@gmail.com', role: 'Staff Editor', status: 'Aktif' },
    { id: 3, name: 'Andi Pratama', email: 'andi@gmail.com', role: 'Staff Editor', status: 'Pending' },
  ];

  return (
    <AdminLayout title="Overview Dashboard">
      <Head title="Dashboard Admin" />

      {/* Grid Stats Card (1 kolom di HP, 3 kolom di Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">{item.title}</span>
              <span className="p-2 sm:p-2.5 rounded-xl bg-slate-50 text-lg sm:text-xl">{item.icon}</span>
            </div>
            <div className="mt-2">
              <p className="text-xl sm:text-3xl font-extrabold text-slate-800 tracking-tight break-all">{item.value}</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold">
                <span className={item.isUp ? 'text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full' : 'text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full'}>
                  {item.change}
                </span>
                <span className="text-slate-400 text-[11px] sm:text-xs">dibanding bulan lalu</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table Data Responsive */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-800 text-base sm:text-lg">Aktivitas Pengguna Terbaru</h3>
            <p className="text-xs text-slate-500 mt-0.5">Ringkasan user yang baru terdaftar di sistem.</p>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-colors shadow-sm">
            + Tambah Data
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[500px]">
            <thead className="bg-slate-50/70 text-slate-500 font-semibold border-b border-slate-100 text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4 pl-6">Pengguna</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6">
                    <p className="font-bold text-slate-800">{user.name}</p>
                    <p className="text-xs text-slate-400 font-normal">{user.email}</p>
                  </td>
                  <td className="p-4 text-slate-600">{user.role}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === 'Aktif'
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200/50'
                          : 'bg-amber-50 text-amber-600 border border-amber-200/50'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right space-x-3">
                    <button className="text-xs font-bold text-brand-500 hover:text-brand-700">Edit</button>
                    <button className="text-xs font-bold text-accent-rose hover:underline">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}