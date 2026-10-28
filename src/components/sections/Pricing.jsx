import {
  Check,
  Sparkles,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  UserPlus,
  Unlock,
  LogIn,
  Gift,
  Zap,
  CalendarCheck,
} from 'lucide-react';
import { CRM_ROUTES } from '../../config/crm';

// Mismos precios y cupos que los planes del CRM (panel SuperAdmin → Planes). Si cambian allá,
// se cambian aquí: la landing no los lee del CRM.
const plans = [
  {
    slug: 'basico',
    name: 'Básico',
    tagline: 'Para empezar',
    price: '$69.000',
    description: 'Para un negocio pequeño o una marca personal que atiende por WhatsApp.',
    features: [
      '1 Número oficial (Meta Cloud API)',
      'Hasta 2 Agentes conectados',
      '150 Conversaciones / mes',
      'Asistente con IA incluido',
      '1 Módulo Vertical a elección',
      'Menú interactivo y envío de PDFs'
    ],
    highlighted: false,
    button: 'Comenzar con Básico',
  },
  {
    slug: 'emprendedor',
    name: 'Emprendedor',
    tagline: 'Para iniciar con paso firme',
    price: '$99.000',
    description: 'Ideal para pequeños negocios, marcas personales y profesionales independientes.',
    features: [
      '1 Número oficial (Meta Cloud API)',
      'Hasta 2 Agentes conectados',
      '300 Conversaciones / mes',
      'Asistente con IA incluido',
      '1 Módulo Vertical a elección',
      'Menú interactivo y envío de PDFs'
    ],
    highlighted: false,
    button: 'Comenzar con Emprendedor',
  },
  {
    slug: 'crecimiento',
    name: 'Crecimiento',
    tagline: 'El favorito de las PyMEs',
    price: '$219.000',
    description: 'El plan insignia para comercios activos que quieren escalar cierres con IA + Equipo.',
    features: [
      '2 Números oficiales de WhatsApp',
      'Hasta 5 Agentes simultáneos',
      '600 Conversaciones / mes',
      'Asistente con IA incluido',
      'Tablero Kanban de Ventas en vivo',
      'Handoff Humano y Calificación IA'
    ],
    highlighted: true,
    button: 'Comenzar con Crecimiento',
  },
  {
    slug: 'pro',
    name: 'Pro',
    tagline: 'Máxima capacidad y control',
    price: '$499.000',
    description: 'Para operaciones de alto volumen, franquicias, cadenas y campañas políticas.',
    features: [
      'Hasta 5 Números de WhatsApp',
      'Hasta 15 Agentes en plataforma',
      '1.300 Conversaciones / mes',
      'IA avanzada (modelo premium incluido)',
      'Módulo Avanzado (PQRS, Zonas, Rutas)',
      'Auditoría avanzada y métricas completas'
    ],
    highlighted: false,
    button: 'Comenzar con Pro',
  }
];

const activationSteps = [
  {
    step: 'Paso 1',
    icon: <UserPlus className="w-5 h-5 text-indigo-600" />,
    title: 'Elige tu Plan y Regístrate',
    desc: 'Al elegir un plan te llevamos al registro del CRM con tu plan preseleccionado.'
  },
  {
    step: 'Paso 2',
    icon: <Gift className="w-5 h-5 text-emerald-600" />,
    title: 'Prueba Gratis 14 Días',
    desc: 'Tu cuenta arranca con 14 días gratis y 50 conversaciones para probar el asistente con clientes reales, sin pagar nada.'
  },
  {
    step: 'Paso 3',
    icon: <Unlock className="w-5 h-5 text-amber-600" />,
    title: 'Paga con Wompi y Sigue Atendiendo',
    desc: 'Cuando quieras, pagas tu plan en Facturación (PSE, Nequi o Tarjeta) y se activa al instante.'
  }
];

// Mismas recargas que el CRM: suman conversaciones al mes en curso, sin cambiar de plan
const recharges = [
  { name: 'Recarga S', conversations: '100', price: '$45.000' },
  { name: 'Recarga M', conversations: '300', price: '$119.000' },
  { name: 'Recarga L', conversations: '800', price: '$329.000' },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="planes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold py-1.5 px-4 rounded-full mb-4">
            <CreditCard className="w-4 h-4 text-emerald-600" />
            Activación Automática 100% Online
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Elige tu plan, regístrate y activa tus módulos al instante
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Precios fijos en pesos colombianos. Empieza con 14 días gratis y paga tu plan con Wompi cuando quieras seguir.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
            <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 py-1.5 px-4 rounded-full">
              <Gift className="w-4 h-4" />
              14 días gratis · 50 conversaciones
            </span>
            <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-800 py-1.5 px-4 rounded-full">
              <CalendarCheck className="w-4 h-4" />
              Plan anual: pagas 10 meses y usas 12
            </span>
          </div>
        </div>

        {/* Cómo funciona la compra y activación */}
        <div className="grid md:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
          {activationSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">
                  {item.step}
                </span>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tarjetas de Planes */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const registerPlanUrl = CRM_ROUTES.registerWithPlan(plan.slug);

            return (
              <div
                key={plan.slug}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-slate-950 text-white border-2 border-indigo-500 shadow-2xl shadow-indigo-950/30 lg:-translate-y-3 relative'
                    : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-kibo-green to-emerald-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider py-1.5 px-4 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Más Elegido
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-extrabold">{plan.name}</h3>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        plan.highlighted
                          ? 'bg-white/10 text-emerald-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {plan.tagline}
                    </span>
                  </div>

                  <p
                    className={`text-sm mb-6 min-h-[40px] ${
                      plan.highlighted ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-8 pb-6 border-b border-current/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl xl:text-[2.5rem] font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          plan.highlighted ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        COP / mes
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-9">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? 'bg-kibo-green/20 text-kibo-green'
                              : 'bg-emerald-50 text-emerald-600'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={registerPlanUrl}
                    className={`group w-full py-4 px-6 rounded-2xl font-extrabold text-center flex items-center justify-center gap-2 transition-all ${
                      plan.highlighted
                        ? 'bg-kibo-green hover:bg-emerald-400 text-slate-950 shadow-lg shadow-kibo-green/25'
                        : 'bg-slate-900 hover:bg-indigo-600 text-white'
                    }`}
                  >
                    {plan.button}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p
                    className={`text-[11px] text-center mt-3 ${
                      plan.highlighted ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Empieza con 14 días gratis · pago seguro con Wompi
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recargas: más conversaciones en el mes sin cambiar de plan */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 text-slate-900">
            <Zap className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg sm:text-xl font-extrabold">
              ¿Se te acabaron las conversaciones del mes? Recarga sin cambiar de plan
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {recharges.map((pack) => (
              <div
                key={pack.name}
                className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm"
              >
                <p className="text-sm font-bold text-slate-500">{pack.name}</p>
                <p className="text-2xl font-extrabold text-slate-900 mt-1">{pack.price}</p>
                <p className="text-sm text-slate-600 mt-1">
                  +{pack.conversations} conversaciones
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-slate-500 mt-3">
            Se compran desde Facturación en el CRM y se suman al cupo del mes en curso.
          </p>
        </div>

        {/* Nota sobre pagos y acceso al Login/Registro */}
        <div className="mt-12 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1">
                  Pagos 100% Seguros con Wompi Bancolombia y Activación en Tiempo Real
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aceptamos <strong>PSE, Nequi, Botón Bancolombia y Tarjetas</strong>. Al registrarte empiezas tu prueba gratis de 14 días; cuando termine, activas tu plan desde la sección de Facturación para seguir atendiendo.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 w-full lg:w-auto justify-center">
              <a
                href={CRM_ROUTES.register}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition"
              >
                <UserPlus className="w-4 h-4 text-indigo-600" />
                Solo Registrarme
              </a>
              <a
                href={CRM_ROUTES.login}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition"
              >
                <LogIn className="w-4 h-4 text-kibo-green" />
                Ir al Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}