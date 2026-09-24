import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Settings() {
  return (
    <AdminLayout title="Pengaturan Sistem">
      <Head title="Pengaturan" />

      <div className="max-w-3xl bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Pengaturan Umum</h3>
          <p className="text-xs text-slate-500">Konfigurasi identitas aplikasi dasar.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Aplikasi</label>
            <input
              type="text"
              defaultValue="Admin Core"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Kontak Support</label>
            <input
              type="email"
              defaultValue="support@admincore.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}