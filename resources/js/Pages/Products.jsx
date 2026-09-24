import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Products() {
  const products = [
    { id: 1, code: 'PRD-001', name: 'Pengembangan Web Custom', category: 'Layanan', price: 'Rp 5.000.000' },
    { id: 2, code: 'PRD-002', name: 'Template Admin Core', category: 'Produk Digital', price: 'Rp 750.000' },
    { id: 3, code: 'PRD-003', name: 'Maintenance Server (Bulanan)', category: 'Layanan', price: 'Rp 1.200.000' },
  ];

  return (
    <AdminLayout title="Produk & Layanan">
      <Head title="Produk & Layanan" />

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-800">Katalog Produk & Layanan</h3>
            <p className="text-xs text-slate-500">Kelola daftar layanan dan produk yang dijual.</p>
          </div>
          <button className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
            + Tambah Produk
          </button>
        </div>

        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              <th className="p-4">Kode</th>
              <th className="p-4">Nama Produk / Layanan</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Harga</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50">
                <td className="p-4 font-mono text-xs text-slate-500">{p.code}</td>
                <td className="p-4 font-medium text-slate-800">{p.name}</td>
                <td className="p-4 text-slate-600">{p.category}</td>
                <td className="p-4 font-semibold text-emerald-600">{p.price}</td>
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