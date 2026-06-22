# Contador de tareas con React

Proyecto del workshop de hooks `useEffect` y `useMemo`, creado con React y Vite. La aplicación no utiliza CSS.

## Funciones

- Agregar tareas con una duración en minutos.
- Eliminar una tarea o vaciar la lista completa.
- Calcular el tiempo total con `useMemo` solamente cuando cambia la lista.
- Mostrar un reloj actualizado cada segundo con `useEffect`.
- Actualizar el título de la pestaña con el tiempo total.
- Guardar las tareas en `localStorage` para conservarlas al recargar.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Después abre la dirección que muestre Vite, normalmente `http://localhost:5173`.

## Crear la versión de producción

```bash
npm run build
npm run preview
```

## Hooks practicados

- `useState`: administra los datos de los formularios, las tareas y la hora.
- `useEffect`: controla el reloj, el título del documento y `localStorage`.
- `useMemo`: memoriza la suma de las duraciones de las tareas.

