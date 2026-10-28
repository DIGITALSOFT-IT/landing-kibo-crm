# Landing de Kibo CRM

Página pública de Kibo CRM: **https://kibocrm.jurytechsolutions.com** (Vercel).

El CRM es un proyecto aparte, en **https://kibo.jurytechsolutions.com** (repositorio
`JuryTechSolutions/crm-whatsapp`). Esta página solo enlaza a él: no llama a su API ni guarda datos.

## Enlaces al CRM

Todos salen de `src/config/crm.js`:

| Botón | Lleva a |
|---|---|
| Iniciar sesión | `https://kibo.jurytechsolutions.com/login` |
| Crear cuenta | `https://kibo.jurytechsolutions.com/register` |
| Elegir un plan | `https://kibo.jurytechsolutions.com/register?plan=basico` (el CRM lo resalta en Facturación) |

La URL del CRM se puede cambiar con la variable `VITE_CRM_URL` (en Vercel: Settings → Environment
Variables). Sin ella: en desarrollo usa `http://localhost:3000`; en producción, el CRM publicado.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4200
npm run lint
npm run build    # deja la página en dist/
```

## Despliegue (Vercel)

- Proyecto de Vercel conectado a este repositorio; `vercel.json` ya trae la compilación (Vite), las
  cabeceras de seguridad y la caché de `/assets`.
- Rama de producción: `main`. Cada push a `main` publica; otras ramas dan una vista previa.
- Dominio: `kibocrm.jurytechsolutions.com` → registro **CNAME** `kibocrm` en el DNS de
  `jurytechsolutions.com` (Hostinger) con el valor que indica Vercel en Settings → Domains.

## Íconos

`public/favicon.ico` (16–256 px), `public/icon-512.png` y `public/apple-touch-icon.png`: el logo de
Kibo con las esquinas transparentes. Son los mismos del CRM.
