import {
  Bot,
  Kanban,
  Users,
  Palette,
  Store,
  Smartphone,
  Sparkles,
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  Building2,
  Megaphone,
} from 'lucide-react';

const features = [
  {
    badge: 'IA + Humano',
    icon: <Bot className="w-6 h-6 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border-indigo-100',
    title: 'Fusión IA + Agente Humano',
    description:
      'Kibo atiende primero en menos de 3 segundos, recolecta datos clave y transfiere el chat a tu equipo solo cuando el cliente está listo para comprar.'
  },
  {
    badge: 'Pipeline Visual',
    icon: <Kanban className="w-6 h-6 text-emerald-600" />,
    iconBg: 'bg-emerald-50 border-emerald-100',
    title: 'Tablero Kanban en Tiempo Real',
    description:
      'Visualiza todo tu embudo de ventas de un vistazo. Arrastra tarjetas de clientes por etapas y detecta cuellos de botella al instante.'
  },
  {
    badge: 'Multiagente',
    icon: <Users className="w-6 h-6 text-violet-600" />,
    iconBg: 'bg-violet-50 border-violet-100',
    title: 'Trabajo en Equipo Unificado',
    description:
      'Conecta múltiples asesores y varios números oficiales de WhatsApp bajo una misma bandeja compartida con asignación inteligente.'
  },
  {
    badge: 'Marca Blanca',
    icon: <Palette className="w-6 h-6 text-pink-600" />,
    iconBg: 'bg-pink-50 border-pink-100',
    title: '100% Personalizado a Tu Marca',
    description:
      'Adapta la plataforma con tu propio logo, colores corporativos y estilo visual para brindar una experiencia impecable a tu equipo.'
  },
  {
    badge: 'Módulos Verticales',
    icon: <Store className="w-6 h-6 text-amber-600" />,
    iconBg: 'bg-amber-50 border-amber-100',
    title: 'Adaptado a Tu Industria',
    description:
      'E-commerce, restaurantes, clínicas, inmobiliarias o campañas políticas (perfilado de votantes, eventos con inscripción y PQRS con radicado). Kibo activa módulos específicos según tu modelo de negocio.'
  },
  {
    badge: 'Hecho para LATAM',
    icon: <Smartphone className="w-6 h-6 text-teal-600" />,
    iconBg: 'bg-teal-50 border-teal-100',
    title: 'Facturación Local en COP',
    description:
      'Olvídate de cobros impredecibles en dólares. Paga en pesos colombianos vía Wompi y opera sobre el canal #1 de tus clientes: WhatsApp.'
  }
];

const industries = [
  { icon: <ShoppingBag className="w-4 h-4" />, name: 'E-commerce y Tiendas' },
  { icon: <UtensilsCrossed className="w-4 h-4" />, name: 'Restaurantes y Domicilios' },
  { icon: <Stethoscope className="w-4 h-4" />, name: 'Clínicas y Consultorios' },
  { icon: <Building2 className="w-4 h-4" />, name: 'Inmobiliarias y Servicios' },
  { icon: <Megaphone className="w-4 h-4" />, name: 'Campañas Políticas y PQRS' },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 bg-grid-slate relative" id="caracteristicas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-100/80 border border-indigo-200 text-kibo-primary text-xs sm:text-sm font-bold py-1.5 px-4 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Potencia Todo-en-Uno
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            El control total de tus ventas en un solo lugar
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Kibo no es un chatbot básico de respuestas rígidas. Es un{' '}
            <span className="font-semibold text-slate-900">CRM conversacional completo</span> diseñado para que no pierdas ni un solo lead.
          </p>
        </div>

        {/* Cinta de industrias */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {industries.map((ind, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-white border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
            >
              <span className="text-kibo-primary">{ind.icon}</span>
              {ind.name}
            </span>
          ))}
        </div>

        {/* Grid de características */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-13 h-13 p-3.5 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-transform ${feature.iconBg}`}
                  >
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-kibo-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}