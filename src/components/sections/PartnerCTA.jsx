import { ArrowRight, BadgePercent, Coins, Repeat, Handshake } from 'lucide-react';

export default function PartnerCTA() {
  const phoneNumber = "573152955017";
  const partnerMessage = "Hola, me interesa unirme al programa de Partners de Kibo CRM para ser distribuidor oficial. ¿Me pueden dar más información sobre cómo funciona la comisión del 10%?";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(partnerMessage)}`;

  return (
    <section className="py-20 bg-slate-50" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-[2.25rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Efectos de luz decorativos */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-kibo-green/15 blur-3xl" />

          <div className="relative z-10 lg:max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-kibo-green text-xs sm:text-sm font-bold py-1.5 px-4 rounded-full mb-5">
              <BadgePercent className="w-4 h-4" />
              Programa Oficial de Partners y Afiliados
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              ¿Conoces negocios que necesitan a Kibo?{' '}
              <span className="text-kibo-green">Gana ingresos recurrentes.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Únete a nuestro programa de aliados comerciales y recibe un{' '}
              <strong className="text-white font-bold underline decoration-kibo-green/60 underline-offset-4">
                10% de comisión mensual recurrente
              </strong>{' '}
              por cada cliente que refieras mientras mantenga activo cualquiera de nuestros planes.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <Repeat className="w-4 h-4 text-kibo-green" />
                <span>Comisión mes a mes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>Sin techo de referidos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <Handshake className="w-4 h-4 text-indigo-400" />
                <span>Nosotros cerramos y damos soporte</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col items-center">
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl rounded-3xl p-6 sm:p-8 text-center w-full sm:w-80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Comisión Recurrente
              </div>
              <div className="text-5xl font-extrabold text-white mb-2">10%</div>
              <p className="text-xs text-slate-300 mb-6">
                De la mensualidad de cada cliente activo que traigas a Kibo CRM.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-kibo-primary hover:bg-indigo-500 text-white font-extrabold text-base py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-950/50 hover:-translate-y-0.5"
              >
                Quiero ser Partner Kibo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}