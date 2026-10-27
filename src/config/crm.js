// Configuración centralizada de las rutas hacia la aplicación Kibo CRM.
// Puedes cambiar VITE_CRM_URL en el archivo .env cuando pases a producción (ej. https://app.kibocrm.com)

export const CRM_BASE_URL = (import.meta.env.VITE_CRM_URL || 'http://localhost:3000').replace(/\/$/, '');

export const CRM_ROUTES = {
  login: `${CRM_BASE_URL}/login`,
  register: `${CRM_BASE_URL}/register`,
  registerWithPlan: (planSlug) =>
    planSlug
      ? `${CRM_BASE_URL}/register?plan=${encodeURIComponent(planSlug)}`
      : `${CRM_BASE_URL}/register`,
};

