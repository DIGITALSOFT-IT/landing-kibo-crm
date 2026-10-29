import { useState, useEffect } from 'react';
import { Bot, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { CRM_ROUTES } from '../../config/crm';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Demo en Video', href: '/#video-kibo' },
    { name: 'Características', href: '/#caracteristicas' },
    { name: 'Planes y Precios', href: '/#planes' },
    { name: 'Programa Partners', href: '/#partners' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="/" aria-label="Kibo CRM — Inicio" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-kibo-green to-emerald-600 text-slate-950 shadow-lg shadow-kibo-green/25 group-hover:scale-105 transition-transform">
            <Bot className="w-6 h-6 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kibo-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-slate-950"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              Kibo <span className="text-kibo-green">CRM</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
              AI Sales Suite
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions: Login & Register */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={CRM_ROUTES.login}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 transition-all"
          >
            <LogIn className="w-4 h-4 text-kibo-green" />
            Iniciar Sesión
          </a>
          <a
            href={CRM_ROUTES.register}
            className="relative inline-flex items-center gap-2 bg-kibo-green hover:bg-emerald-400 text-slate-950 font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-kibo-green/25 hover:shadow-kibo-green/40 hover:-translate-y-0.5 transition-all"
          >
            <UserPlus className="w-4 h-4 stroke-[2.5]" />
            Registrarse
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 text-slate-200 hover:text-white border border-white/10"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-kibo-green"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={CRM_ROUTES.login}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4 text-kibo-green" />
              Iniciar Sesión
            </a>
            <a
              href={CRM_ROUTES.register}
              className="w-full bg-kibo-green text-slate-950 font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-kibo-green/20"
            >
              <UserPlus className="w-4 h-4 stroke-[2.5]" />
              Registrarse en el CRM
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

