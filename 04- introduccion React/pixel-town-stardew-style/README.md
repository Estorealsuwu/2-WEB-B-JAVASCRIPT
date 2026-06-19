# PixelTown Auth

Proyecto React + Vite para practicar autenticacion simulada y rutas protegidas.

## Funcionalidades

- Registro de usuarios con usuario, correo y contrasena.
- Inicio y cierre de sesion con persistencia en `localStorage`.
- Contrasenas almacenadas como hash SHA-256 con salt, no en texto plano.
- Ruta protegida `/profile` con redireccion a `/login` si no hay sesion.
- Publicar mensajes y dar estrellas solo cuando el usuario esta autenticado.
- Perfil con datos del usuario y estadisticas de sus publicaciones.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run lint
```

> Nota: esta autenticacion es simulada para el taller. En produccion debe hacerse con backend, sesiones/tokens seguros y validacion del servidor.
