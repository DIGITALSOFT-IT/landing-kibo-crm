import { LEGAL } from '../../config/legal';

const contact = [
  LEGAL.email && `correo electrónico ${LEGAL.email}`,
  `WhatsApp ${LEGAL.whatsapp}`,
].filter(Boolean).join(' o ');

const responsible = [
  LEGAL.company,
  LEGAL.nit && `NIT ${LEGAL.nit}`,
  LEGAL.address,
].filter(Boolean).join(', ');

const documents = {
  terminos: {
    title: 'Términos y Condiciones',
    intro: `Estos Términos regulan el uso de Kibo CRM, plataforma operada por ${responsible}. Al registrarte o usar el servicio aceptas estas condiciones.`,
    sections: [
      {
        heading: '1. Objeto del servicio',
        body: [
          'Kibo CRM es un software como servicio (SaaS) que permite atender clientes por WhatsApp mediante un agente de inteligencia artificial, gestionar leads en un tablero Kanban y transferir conversaciones a agentes humanos.',
        ],
      },
      {
        heading: '2. Registro y cuenta',
        body: [
          'Para usar Kibo CRM debes crear una cuenta con información veraz y mantenerla actualizada. Eres responsable de la confidencialidad de tus credenciales y de toda actividad realizada desde tu cuenta y la de los agentes que agregues.',
        ],
      },
      {
        heading: '3. Planes, pagos y renovación',
        body: [
          'Toda cuenta nueva inicia con una prueba gratuita de 14 días con 50 conversaciones, sin cobro. Al terminar la prueba, para seguir usando el servicio debes activar un plan desde la sección de Facturación.',
          'Los planes se cobran en pesos colombianos (COP) según los precios publicados en este sitio, de forma mensual o anual (el plan anual equivale a 10 meses de pago por 12 de uso). Los pagos se procesan a través de Wompi (PSE, Nequi, Botón Bancolombia o tarjeta). El plan se activa cuando la pasarela confirma el pago.',
          'Los límites de cada plan (números, agentes, conversaciones y tokens de IA) se reinician en cada periodo de facturación y no son acumulables. Puedes comprar recargas de conversaciones, que se suman al cupo del mes en curso y no se trasladan al siguiente. Si no se renueva el pago, el acceso a los módulos de pago puede suspenderse.',
          'Podemos actualizar los precios notificándote con anticipación; el cambio aplicará desde el siguiente periodo de facturación.',
        ],
      },
      {
        heading: '4. Uso aceptable y políticas de WhatsApp',
        body: [
          'Te comprometes a usar Kibo CRM conforme a la ley y a las Políticas de WhatsApp Business y de Meta. Está prohibido enviar spam, mensajes no solicitados, contenido ilegal, engañoso o fraudulento, o contactar personas que no hayan dado su autorización.',
          'Eres responsable de obtener el consentimiento de tus clientes para tratar sus datos y escribirles por WhatsApp. El bloqueo o la restricción de tu número por parte de Meta derivados de tu uso no son responsabilidad de Kibo CRM.',
        ],
      },
      {
        heading: '5. Inteligencia artificial',
        body: [
          'Las respuestas del agente de IA se generan automáticamente y pueden contener errores. Debes revisar la configuración, la información y los precios que entregas al agente y supervisar las conversaciones. Kibo CRM no garantiza resultados comerciales específicos.',
        ],
      },
      {
        heading: '6. Propiedad intelectual y datos del cliente',
        body: [
          'El software, la marca y los contenidos de Kibo CRM son propiedad de su operador. Se te otorga una licencia limitada, no exclusiva e intransferible para usarlo durante la vigencia de tu plan.',
          'La información de tus clientes y conversaciones te pertenece. Kibo CRM la trata como encargado, solo para prestarte el servicio, conforme a nuestra Política de Privacidad.',
        ],
      },
      {
        heading: '7. Disponibilidad y limitación de responsabilidad',
        body: [
          'Procuramos mantener el servicio disponible de forma continua, pero puede haber interrupciones por mantenimiento o por fallas de terceros (Meta, proveedores de IA, hosting o pasarela de pagos).',
          'En la máxima medida permitida por la ley, la responsabilidad total de Kibo CRM se limita al valor pagado por el plan en el último mes de servicio.',
        ],
      },
      {
        heading: '8. Suspensión y terminación',
        body: [
          'Puedes cancelar tu plan en cualquier momento; no habrá nuevos cobros, pero no se reembolsan periodos ya iniciados salvo lo que disponga la ley. Podemos suspender o cancelar cuentas que incumplan estos Términos.',
        ],
      },
      {
        heading: '9. Modificaciones, ley aplicable y contacto',
        body: [
          'Podemos modificar estos Términos; la versión vigente siempre estará publicada en esta página. Estos Términos se rigen por las leyes de la República de Colombia.',
          `Para cualquier consulta escríbenos por ${contact}.`,
        ],
      },
    ],
  },
  privacidad: {
    title: 'Política de Privacidad y Tratamiento de Datos',
    intro: `Esta política describe cómo ${responsible}, responsable de Kibo CRM, trata los datos personales, en cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas colombianas de protección de datos.`,
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        body: [`${responsible}. Canal de atención: ${contact}.`],
      },
      {
        heading: '2. Datos que recolectamos',
        body: [
          'Datos de registro y facturación: nombre, empresa, correo, teléfono y datos necesarios para emitir facturas. Los datos de tarjetas y cuentas bancarias los procesa directamente Wompi; Kibo CRM no los almacena.',
          'Datos de las conversaciones de WhatsApp que tus clientes intercambian con tu negocio, tratados por cuenta tuya como encargado.',
          'Datos técnicos de uso de la plataforma y del sitio web (dirección IP, navegador, páginas visitadas).',
        ],
      },
      {
        heading: '3. Finalidades',
        body: [
          'Prestar, mantener y mejorar el servicio; gestionar tu cuenta, pagos y facturación; brindar soporte; enviarte información sobre tu plan y novedades del producto (puedes oponerte en cualquier momento); cumplir obligaciones legales y prevenir fraudes.',
        ],
      },
      {
        heading: '4. Encargados y transferencias',
        body: [
          'Para operar el servicio compartimos los datos estrictamente necesarios con proveedores como Meta Platforms (WhatsApp Cloud API), proveedores de inteligencia artificial, servicios de alojamiento en la nube y Wompi. Algunos pueden estar fuera de Colombia; exigimos que apliquen medidas de seguridad adecuadas. No vendemos datos personales.',
        ],
      },
      {
        heading: '5. Derechos del titular',
        body: [
          'Como titular puedes: conocer, actualizar y rectificar tus datos; solicitar prueba de la autorización otorgada; ser informado del uso dado a tus datos; revocar la autorización y solicitar la supresión cuando proceda; presentar quejas ante la Superintendencia de Industria y Comercio (SIC); y acceder gratuitamente a tus datos.',
        ],
      },
      {
        heading: '6. Procedimiento para consultas y reclamos',
        body: [
          `Envía tu solicitud por ${contact}, indicando tu nombre, identificación, la descripción de lo que solicitas y un medio de respuesta.`,
          'Las consultas se responden en máximo diez (10) días hábiles y los reclamos en máximo quince (15) días hábiles, prorrogables según la Ley 1581 de 2012.',
        ],
      },
      {
        heading: '7. Seguridad y conservación',
        body: [
          'Aplicamos medidas técnicas y administrativas razonables para proteger la información. Conservamos los datos mientras tu cuenta esté activa y durante el tiempo necesario para cumplir obligaciones legales, contables o resolver disputas.',
        ],
      },
      {
        heading: '8. Cookies',
        body: [
          'El sitio puede usar cookies técnicas y de analítica para su funcionamiento y para medir visitas. Puedes deshabilitarlas desde la configuración de tu navegador.',
        ],
      },
      {
        heading: '9. Vigencia y cambios',
        body: [
          'Esta política rige desde su publicación. Cualquier cambio sustancial será informado a través de este sitio o de la plataforma.',
        ],
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const doc = documents[page];

  return (
    <>
      <section className="bg-kibo-dark text-white pt-36 pb-16 px-4 bg-grid-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-kibo-green mb-3">Kibo CRM · Legal</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">{doc.title}</h1>
          <p className="text-sm text-slate-400">Última actualización: {LEGAL.updatedAt}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 text-slate-700 leading-relaxed">
        <p className="text-lg mb-10">{doc.intro}</p>
        {doc.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mb-3">{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </>
  );
}
