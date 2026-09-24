import React, { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children, title = 'Dashboard' }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Default tertutup di mobile
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { auth } = usePage().props;

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', routeName: 'dashboard', icon: '📊' },
    { name: 'Data User', href: '/users', routeName: 'users.index', icon: '👥' },
    { name: 'Produk & Layanan', href: '/products', routeName: 'products.index', icon: '📦' },
    { name: 'Pengaturan', href: '/settings', routeName: 'settings.index', icon: '⚙️' },
  ];

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
    <div className="flex h-screen bg-surface-bg font-sans overflow-hidden antialiased">
      
      {/* BACKDROP GELAP UNTUK MOBILE SAAT SIDEBAR TERBUKA */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}

      {/* SIDEBAR RESPONSIVE */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 bg-brand-700 text-slate-300 transition-all duration-300 flex flex-col h-screen border-r border-slate-800/60 shrink-0 shadow-xl ${
          sidebarOpen
            ? 'translate-x-0 w-64'
            : '-translate-x-full md:translate-x-0 md:w-64'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/10 bg-black/10">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-rose flex items-center justify-center shrink-0 shadow-md shadow-accent-rose/20 font-bold text-white text-sm tracking-wider">
              AC
            </div>
            <span className="font-extrabold text-lg text-white tracking-wide">
              ADMIN<span className="text-accent-coral">CORE</span>
            </span>
          </Link>

          {/* Tombol Close Sidebar Khusus Mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
          {navigation.map((item, idx) => {
            const isActive = window.location.pathname === item.href;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setSidebarOpen(false)} // Otomatis tutup sidebar setelah klik menu di HP
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'bg-white/10 text-white font-semibold shadow-inner'
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1.5 bg-accent-rose rounded-r-full" />
                )}
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer / Logout */}
        <div className="p-3.5 border-t border-white/10 bg-black/10">
          <Link
            href="/logout"
            method="post"
            as="button"
            className="w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium text-slate-400 hover:text-accent-rose hover:bg-accent-rose/10 rounded-xl transition-all cursor-pointer"
          >
            <span>🚪</span>
            <span>Keluar</span>
          </Link>
        </div>
      </aside>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
        
        {/* HEADER RESPONSIVE */}
        <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          
          <div className="flex items-center gap-3">
            {/* Tombol Hamburger Menu (Hanya muncul di Mobile) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-xl text-slate-700 focus:outline-none"
            >
              ☰
            </button>
            <h1 className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight truncate">
              {title}
            </h1>
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2.5 p-1 sm:p-1.5 sm:pl-4 rounded-full border border-slate-200/80 hover:bg-slate-50 transition-all focus:outline-none cursor-pointer"
            >
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  {auth?.user?.name || 'Admin User'}
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  {auth?.user?.email || 'admin@gmail.com'}
                </p>
              </div>

              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-brand-500 to-accent-rose text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow-sm">
                {auth?.user?.name ? auth.user.name[0].toUpperCase() : 'A'}
              </div>
            </button>

            {/* Dropdown Popup */}
            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 sm:w-60 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                <div className="px-4 py-2.5 border-b border-slate-100">
                  <p className="text-xs font-semibold text-slate-400">LOGGED IN AS</p>
                  <p className="text-sm font-bold text-slate-800 truncate">
                    {auth?.user?.name || 'Admin User'}
                  </p>
                </div>

                <div className="py-1">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 font-medium"
                  >
                    <span>⚙️</span> Pengaturan Akun
                  </Link>
                </div>

                <div className="border-t border-slate-100 pt-1">
                  <Link
                    href="/logout"
                    method="post"
                    as="button"
                    className="w-full text-left flex items-center gap-2.5 px-4 py-2.5 text-sm text-accent-rose hover:bg-accent-soft font-semibold cursor-pointer"
                  >
                    <span>🚪</span> Keluar
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}