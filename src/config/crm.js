// Configuración centralizada de las rutas hacia la aplicación Kibo CRM.
// La URL sale de VITE_CRM_URL (archivo .env.production, o la variable del proyecto en Vercel). Si
// falta: en desarrollo, el CRM local; en producción, el CRM publicado (nunca un localhost roto).

const PRODUCTION_CRM_URL = 'https://kibo.jurytechsolutions.com';

export const CRM_BASE_URL = (
  import.meta.env.VITE_CRM_URL || (import.meta.env.DEV ? 'http://localhost:3000' : PRODUCTION_CRM_URL)
).replace(/\/$/, '');

export const CRM_ROUTES = {
  login: `${CRM_BASE_URL}/login`,
  register: `${CRM_BASE_URL}/register`,
  // El CRM resalta ese plan en Facturación después del registro (no distingue mayúsculas)
  registerWithPlan: (planSlug) =>
    planSlug
      ? `${CRM_BASE_URL}/register?plan=${encodeURIComponent(planSlug)}`
      : `${CRM_BASE_URL}/register`,
};
