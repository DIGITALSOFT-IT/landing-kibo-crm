import React from 'react';
import { Bot, MessageSquare, LogIn, UserPlus } from 'lucide-react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import VideoShowcase from './components/sections/VideoShowCase';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import PartnerCTA from './components/sections/PartnerCTA';
import { CRM_ROUTES } from './config/crm';

function App() {
  const phoneNumber = "573152955017";
  const floatMessage = "¡Hola! Estoy visitando la web de Kibo CRM y me gustaría recibir asesoría.";
  const waFloatUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(floatMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <Features />
      <Pricing />
      <PartnerCTA />

      {/* Footer mejorado */}
      <footer className="bg-kibo-dark text-slate-400 py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-kibo-green text-slate-950">
                <Bot className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-extrabold text-white">
                Kibo <span className="text-kibo-green">CRM</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium">
              <a href="#video-kibo" className="hover:text-white transition">Demo en Video</a>
              <a href="#caracteristicas" className="hover:text-white transition">Características</a>
              <a href="#planes" className="hover:text-white transition">Planes</a>
              <a href="#partners" className="hover:text-white transition">Partners</a>
              <a
                href={CRM_ROUTES.login}
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-kibo-green transition"
              >
                <LogIn className="w-4 h-4 text-kibo-green" />
                Iniciar Sesión
              </a>
              <a
                href={CRM_ROUTES.register}
                className="inline-flex items-center gap-1.5 text-kibo-green hover:text-emerald-300 font-bold transition"
              >
                <UserPlus className="w-4 h-4" />
                Registrarse
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 Kibo CRM. Tu equipo de ventas automatizado con IA en WhatsApp.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300 transition">Términos y Condiciones</a>
              <a href="#" className="hover:text-slate-300 transition">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp para soporte comercial */}
      <a
        href={waFloatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 bg-kibo-green hover:bg-emerald-400 text-slate-950 font-extrabold px-5 py-3.5 rounded-full shadow-2xl shadow-kibo-green/40 hover:scale-105 transition-all"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-slate-950/15" />
        <span className="hidden sm:inline text-sm">¿Dudas? Escríbenos</span>
      </a>
    </div>
  );
}

export default App;