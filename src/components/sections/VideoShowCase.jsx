import { PlayCircle, Sparkles, MessageSquareCode, Bot, Handshake } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: <MessageSquareCode className="w-5 h-5 text-kibo-green" />,
    title: 'Conecta tu WhatsApp Oficial',
    desc: 'Integramos tu número con la API Oficial de Meta y personalizamos el tono y catálogo de tu negocio.'
  },
  {
    step: '02',
    icon: <Bot className="w-5 h-5 text-indigo-400" />,
    title: 'Kibo IA Atiende y Filtra 24/7',
    desc: 'Responde dudas frecuentes, envía PDFs/menús, toma datos clave y clasifica automáticamente al prospecto.'
  },
  {
    step: '03',
    icon: <Handshake className="w-5 h-5 text-emerald-400" />,
    title: 'Handoff Humano para Cerrar',
    desc: 'Cuando el cliente está listo para comprar, Kibo notifica y transfiere el chat a tu asesor con todo el contexto.'
  }
];

export default function VideoShowcase() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="video-kibo">
      {/* Resplandor decorativo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-indigo-600/20 rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-bold py-1.5 px-4 rounded-full mb-4">
            <PlayCircle className="w-4 h-4 text-kibo-green" />
            Conoce a Kibo en Acción
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Tu nuevo asistente de ventas estrella
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Mira cómo Kibo atiende a tus clientes 24/7, organiza tus leads en el tablero Kanban y trabaja en equipo con tus asesores.
          </p>
        </div>

        {/* Marco estilo MacOS / SaaS Dashboard para el reproductor de video */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-kibo-green/30 via-indigo-500/40 to-emerald-400/30 rounded-[2rem] blur-xl opacity-80" />
          
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/15 shadow-2xl">
            {/* Barra de ventana */}
            <div className="bg-slate-900/90 border-b border-white/10 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-kibo-green" />
                app.kibocrm.com — Demo Interactiva
              </div>
              <div className="w-12" />
            </div>

            {/* Reproductor de video */}
            <video
              className="w-full h-auto aspect-video object-cover bg-slate-950"
              controls
              preload="metadata"
              title="Demo de Kibo CRM: agente de IA para WhatsApp y tablero Kanban de ventas"
            >
              <source src="/kibo-promo.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
        </div>

        {/* Pasos de Cómo Funciona */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-2xl font-extrabold text-white/15 group-hover:text-white/30 transition-colors">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}