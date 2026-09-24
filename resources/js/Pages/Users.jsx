import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Users() {
  const users = [
    { id: 1, name: 'Budi Santoso', email: 'budi@gmail.com', role: 'Administrator', status: 'Aktif' },
    { id: 2, name: 'Siti Rahma', email: 'siti@gmail.com', role: 'Staff', status: 'Aktif' },
    { id: 3, name: 'Andi Pratama', email: 'andi@gmail.com', role: 'Staff', status: 'Non-Aktif' },
  ];

  return (
    <AdminLayout title="Kelola Data User">
      <Head title="Data User" />

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-800">Daftar Pengguna Sistem</h3>
            <p className="text-xs text-slate-500">Kelola hak akses dan akun pengguna.</p>
          </div>
          <button className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
            + Tambah User Baru
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
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">{u.name}</td>
                <td className="p-4 text-slate-600">{u.email}</td>
                <td className="p-4 text-slate-600">{u.role}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${u.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {u.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button className="text-xs font-semibold text-indigo-600 hover:underline">Edit</button>
                  <button className="text-xs font-semibold text-red-600 hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}