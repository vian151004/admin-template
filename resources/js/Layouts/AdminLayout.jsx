import React, { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children, title = 'Dashboard' }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { auth } = usePage().props;

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Data User', href: '#', icon: '👥' },
    { name: 'Produk & Layanan', href: '#', icon: '📦' },
    { name: 'Pengaturan', href: '#', icon: '⚙️' },
  ];

  // Efek untuk menutup dropdown jika pengguna mengklik di luar area dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-slate-200 transition-all duration-300 flex flex-col h-screen border-r border-slate-800`}
      >
        {/* Brand Header */}
        {/* <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
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
        </div> */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          <Link href="/dashboard" className="flex items-center gap-3">
            {/* SVG Icon / Emblem Logo */}
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            {/* Teks Brand (Hanya Muncul saat Sidebar Terbuka) */}
            {sidebarOpen && (
              <span className="font-bold text-lg text-white tracking-wider">
                ADMIN<span className="text-emerald-400">CORE</span>
              </span>
            )}
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            ☰
          </button>
        </div>

        {/* Navigation Items */}
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

        {/* Footer / Logout Button */}
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

          {/* USER PROFILE DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-3 pl-4 border-l border-slate-200 hover:opacity-80 transition-opacity focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow">
                {auth?.user?.name ? auth.user.name[0].toUpperCase() : 'A'}
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-semibold text-slate-800 leading-tight">
                  {auth?.user?.name || 'admin'}
                </p>
                <p className="text-xs text-slate-500">
                  {auth?.user?.email || 'admin@gmail.com'}
                </p>
              </div>
              <span className="text-xs text-slate-400 hidden md:block ml-1">
                {userDropdownOpen ? '▲' : '▼'}
              </span>
            </button>

            {/* POPUP DROPDOWN MENU */}
            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {/* Header Info User */}
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-sm font-semibold text-slate-800">
                    {auth?.user?.name || 'admin'}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {auth?.user?.email || 'admin@gmail.com'}
                  </p>
                </div>

                {/* List Menu Options */}
                <div className="py-1">
                  <Link
                    href={route('profile.edit')}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>⚙️</span> Pengaturan Profil
                  </Link>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>🔄</span> Ganti Akun
                  </a>
                </div>

                {/* Divider & Logout */}
                <div className="border-t border-slate-100 pt-1">
                  <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    <span>🚪</span> Keluar / Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}