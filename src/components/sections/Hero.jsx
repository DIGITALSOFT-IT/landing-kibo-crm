import {
  ArrowRight,
  Sparkles,
  Bot,
  CheckCircle2,
  ShieldCheck,
  Zap,
  UserCheck,
  TrendingUp,
  UserPlus,
  LogIn,
  CreditCard,
} from 'lucide-react';
import { CRM_ROUTES } from '../../config/crm';

export default function Hero() {
  return (
    <section className="relative bg-kibo-dark text-white pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 overflow-hidden bg-grid-white">
      {/* Luces ambientales de fondo */}
      <div className="pointer-events-none absolute top-0 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-kibo-green/15 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute top-28 right-1/4 translate-x-1/3 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Columna Izquierda: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/10 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-semibold py-2 px-4 rounded-full mb-7 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-kibo-green animate-ping" />
              <Sparkles className="w-4 h-4 text-kibo-green" />
              <span>IA Conversacional + CRM Multiagente en WhatsApp</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.1rem] font-extrabold mb-6 tracking-tight leading-[1.08]">
              Vende más por WhatsApp{' '}
              <span className="bg-gradient-to-r from-kibo-green via-emerald-300 to-indigo-400 bg-clip-text text-transparent">
                sin estar pegado al celular.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300/90 mb-9 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Automatiza tu primera línea de atención con un agente de IA que responde en segundos,{' '}
              <strong className="text-white font-semibold">califica a tus clientes en tu tablero Kanban</strong> y transfiere el chat a tu equipo humano justo cuando están listos para pagar.
            </p>

            {/* Botones de Acción: Registro directo, Selección de Plan y Login */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-5">
              <a
                href={CRM_ROUTES.register}
                className="group bg-kibo-green hover:bg-emerald-400 text-slate-950 font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-kibo-green/25 hover:shadow-kibo-green/40 hover:-translate-y-0.5 transition-all"
              >
                <UserPlus className="w-5 h-5 stroke-[2.5]" />
                Crear Cuenta en el CRM
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#planes"
                className="bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-base sm:text-lg py-4 px-7 rounded-2xl flex items-center justify-center gap-2.5 backdrop-blur-md transition-all"
              >
                <CreditCard className="w-5 h-5 text-indigo-400" />
                Elegir Plan y Activar
              </a>
            </div>

            {/* Enlace rápido a Login para usuarios existentes */}
            <div className="mb-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400">
              <span>¿Ya tienes una cuenta registrada?</span>
              <a
                href={CRM_ROUTES.login}
                className="inline-flex items-center gap-1.5 text-kibo-green hover:text-emerald-300 font-bold underline underline-offset-4 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Inicia sesión aquí
              </a>
            </div>

            {/* Píldoras de confianza */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-kibo-green shrink-0" />
                <span>API Oficial de Meta (Sin bloqueos)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Pago directo en COP vía <strong className="text-slate-200">Wompi</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Desbloqueo automático de módulos al pagar</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mockup Interactivo de Chat IA + Handoff Humano */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow detrás de la tarjeta */}
              <div className="absolute -inset-1 bg-gradient-to-r from-kibo-green/40 via-indigo-500/40 to-emerald-500/40 rounded-3xl blur-xl opacity-70" />

              {/* Ventana principal de simulación Kibo CRM */}
              <div className="relative bg-slate-900/95 border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                {/* Barra superior tipo app */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-extrabold text-sm">
                      CM
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-sm">Camila Montoya</h4>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Lead Caliente 🔥
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">+57 314 890 •••• • WhatsApp Oficial</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-kibo-green bg-kibo-green/10 border border-kibo-green/30 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5" /> IA Activa
                  </span>
                </div>

                {/* Mensajes de la conversación */}
                <div className="space-y-3.5 text-xs sm:text-sm mb-5">
                  {/* Cliente */}
                  <div className="flex flex-col items-start">
                    <div className="bg-slate-800/90 text-slate-100 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] border border-white/5">
                      Hola 👋 Vi la promoción en Instagram. ¿Tienen envío a Medellín y pago contraentrega o PSE?
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 ml-1">10:42 AM</span>
                  </div>

                  {/* Respuesta de Kibo IA */}
                  <div className="flex flex-col items-end">
                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[88%] shadow-lg shadow-indigo-950/50 border border-indigo-400/20">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-200 mb-1">
                        <Bot className="w-3 h-3" /> Kibo IA • Respuesta en 1.8s
                      </div>
                      ¡Hola Camila! 🙌 Sí, enviamos a Medellín en 24h y recibimos PSE, Nequi o Tarjeta. ¿Buscas el kit de 2 o de 4 unidades para pasarte el link de pago?
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 mr-1">10:42 AM</span>
                  </div>

                  {/* Cliente confirma intención de compra */}
                  <div className="flex flex-col items-start">
                    <div className="bg-slate-800/90 text-slate-100 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] border border-white/5">
                      Quiero el de 4 unidades por favor, ¿me ayudas a facturarlo a nombre de mi empresa?
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 ml-1">10:43 AM</span>
                  </div>
                </div>

                {/* Notificación inteligente de Handoff + Kanban */}
                <div className="bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-indigo-500/15 border border-emerald-400/30 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-kibo-green/20 border border-kibo-green/40 flex items-center justify-center text-kibo-green shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">
                        Transferido a Asesor Humano + Movido en Kanban
                      </p>
                      <p className="text-[11px] text-emerald-300">
                        Etapa: &ldquo;Listo para Cierre&rdquo; • Valor est. $380.000 COP
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta flotante inferior de métrica */}
              <div className="hidden sm:flex items-center gap-3 bg-slate-900/95 border border-white/15 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl absolute -bottom-6 -left-6 animate-float">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Conversión con IA + Humano</div>
                  <div className="text-sm font-extrabold text-white">+3.4x más cierres de venta</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Barra de estadísticas / Impacto rápido */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
          {[
            { value: '< 3 seg', label: 'Tiempo de respuesta IA 24/7' },
            { value: '100%', label: 'API Oficial de WhatsApp Meta' },
            { value: '0 Leads', label: 'Perdidos por falta de seguimiento' },
            { value: 'COP $', label: 'Precios fijos en pesos colombianos' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-center hover:bg-white/[0.06] transition"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}