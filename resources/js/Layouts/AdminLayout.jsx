import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children, title = 'Dashboard' }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { auth } = usePage().props;

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Data User', href: '#', icon: '👥' },
    { name: 'Produk & Layanan', href: '#', icon: '📦' },
    { name: 'Pengaturan', href: '#', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-slate-200 transition-all duration-300 flex flex-col h-screen border-r border-slate-800`}
      >
        {/* Logo / Brand Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          {sidebarOpen && (
            <span className="font-bold text-lg text-emerald-400 tracking-wider">
              ADMIN CORE
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            ☰
          </button>
        </div>

        {/* Navigasi Utama */}
        <nav className="flex-1 p-3 space-y-1">
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* User / Logout */}
        <div className="p-4 border-t border-slate-800">
          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <span>🚪</span>
            {sidebarOpen && <span>Keluar</span>}
          </Link>
        </div>
      </aside>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <h1 className="font-semibold text-lg text-slate-800">{title}</h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow">
                {auth?.user?.name ? auth.user.name[0].toUpperCase() : 'A'}
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-semibold text-slate-800">
                  {auth?.user?.name || 'Admin User'}
                </p>
                <p className="text-xs text-slate-500">
                  {auth?.user?.email || 'admin@example.com'}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}