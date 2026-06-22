# Gestor de inventario con hooks avanzados

Proyecto de React y Vite para administrar el inventario de una tienda. Está
hecho deliberadamente **sin CSS**: no contiene hojas de estilos ni estilos en
línea.

## Funciones

- Agregar productos con nombre y cantidad inicial.
- Acumular cantidades al agregar dos veces el mismo producto.
- Aumentar, disminuir y eliminar productos.
- Buscar productos por nombre.
- Vaciar todo el inventario.
- Mostrar un registro de eventos de la sesión.
- Conservar el inventario en `localStorage` después de recargar la página.

## Hooks utilizados

- `useReducer` concentra las acciones y transiciones del inventario.
- `useRef` controla los campos del formulario y devuelve el foco al nombre.
- `useCallback` mantiene estables los controladores enviados a los productos.
- `useEffect` enfoca el formulario y sincroniza el inventario con
  `localStorage`.
- `useState` controla el texto del buscador.

`ProductItem` usa `memo` junto con los callbacks estables para evitar renders
innecesarios cuando cambia otra parte de la interfaz.

## Ejecutar el proyecto

Se necesita Node.js 20.19 o superior.

```bash
npm install
npm run dev
```

Después abre la dirección que indique Vite, normalmente
`http://localhost:5173`.

## Comandos disponibles

```bash
npm run dev
npm run lint
npm run build
npm run preview
```
