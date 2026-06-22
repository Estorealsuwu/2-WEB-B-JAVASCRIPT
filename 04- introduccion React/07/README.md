# Plataforma de Gestión de Citas Médicas

Proyecto realizado con React, Vite y `react-router-dom`. Permite consultar,
crear y cancelar citas médicas. Los datos se guardan en el almacenamiento local
del navegador.

El proyecto no utiliza CSS ni estilos en línea.

## Instalación

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Página de inicio |
| `/citas` | Lista y filtro de citas |
| `/citas/nueva` | Formulario para crear una cita |
| `/cita/:id` | Detalle dinámico de una cita |
| `*` | Página para rutas inexistentes |

## Conceptos utilizados

- `BrowserRouter` para habilitar el enrutamiento.
- `Routes` y `Route` para declarar las páginas.
- `Link` y `NavLink` para navegar sin recargar el navegador.
- `useParams` para obtener el identificador de la cita desde la URL.
- `useNavigate` para redirigir después de crear una cita.
- Rutas anidadas mediante `Outlet`.
- Context API y `localStorage` para compartir y conservar las citas.

