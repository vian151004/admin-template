import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 sm:p-6 font-sans antialiased">
      <Head title="Log in - Admin Core" />

      {/* Main Container Card */}
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 shadow-xl p-8 space-y-6">
        
        {/* Header / Brand Logo */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2B5B84] to-[#E96B85] text-white font-extrabold text-xl shadow-md shadow-[#E96B85]/20 mb-2">
            AC
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Selamat Datang Kembali
          </h2>
          <p className="text-xs font-medium text-slate-500">
            Masuk ke akun panel <span className="font-bold text-[#2B5B84]">ADMIN</span><span className="font-bold text-[#E96B85]">CORE</span> kamu
          </p>
        </div>

        {/* Status Message (jika ada alert dari Laravel) */}
        {status && (
          <div className="p-3.5 bg-emerald-50 border border-emerald-200/60 rounded-xl text-xs font-semibold text-emerald-700">
            {status}
          </div>
        )}

        {/* Form Login */}
        <form onSubmit={submit} className="space-y-4">
          {/* Field Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2B5B84] focus:bg-white transition-all"
              autoComplete="username"
              placeholder="admin@gmail.com"
              onChange={(e) => setData('email', e.target.value)}
              required
            />
            {errors.email && (
              <p className="text-xs font-semibold text-[#E96B85] mt-1.5">
                {errors.email}
              </p>
            )}
          </div>

          {/* Field Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              {canResetPassword && (
                <Link
                  href={route('password.request')}
                  className="text-xs font-semibold text-[#2B5B84] hover:text-[#1E4363] hover:underline"
                >
                  Lupa Password?
                </Link>
              )}
            </div>
            <input
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2B5B84] focus:bg-white transition-all"
              autoComplete="current-password"
              placeholder="••••••••"
              onChange={(e) => setData('password', e.target.value)}
              required
            />
            {errors.password && (
              <p className="text-xs font-semibold text-[#E96B85] mt-1.5">
                {errors.password}
              </p>
            )}
          </div>

          {/* Checkbox Remember Me */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
                className="w-4 h-4 text-[#2B5B84] border-slate-300 rounded focus:ring-[#2B5B84]"
              />
              <span className="text-xs font-medium text-slate-600">
                Ingat Saya
              </span>
            </label>
          </div>

          {/* Tombol Submit Login */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={processing}
              className="w-full py-3 px-4 bg-[#2B5B84] hover:bg-[#1E4363] active:scale-[0.99] text-white text-sm font-bold rounded-xl shadow-md shadow-[#2B5B84]/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {processing ? 'Memproses...' : 'Masuk ke Dashboard'}
            </button>
          </div>
        </form>

        {/* Link Register / Opsional */}
        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-500 font-medium">
            Belum punya akun?{' '}
            <Link
              href={route('register')}
              className="font-bold text-[#E96B85] hover:underline"
            >
              Daftar Sekarang
            </Link>
          </p>
        </div>

      </div>

      {/* Footer copyright */}
      <p className="text-[11px] font-medium text-slate-400 mt-6">
        © 2026 Admin Core. All rights reserved.
      </p>
    </div>
  );
}