# Proyecto: Ciclo de vida de componentes

Panel de control de un explorador espacial creado con React y Vite. El proyecto
no utiliza CSS ni librerías de estilos.

## Hooks utilizados

- `useState`: administra distancia, combustible, estado y planetas visitados.
- `useEffect`: inicia el vuelo, detecta cambios de combustible y limpia el
  intervalo al desmontar componentes.
- `useMemo`: evita recalcular el mensaje del estado mientras dicho estado no
  cambie.
- `useRef`: conserva el combustible actual para controlar el intervalo.

## Ciclo de vida que se puede observar

- **Montaje:** al encender el panel comienza la simulación del vuelo.
- **Actualización:** cada segundo cambian la distancia y el combustible.
- **Desmontaje:** al apagar el panel se limpia el intervalo.
- Al aterrizar se monta un componente `Planeta`; al eliminarlo se desmonta.

Los mensajes de cada etapa aparecen en la consola del navegador.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Después abre la dirección que muestre Vite, normalmente
`http://localhost:5173`.

## Crear y publicar el repositorio

```bash
git init
git add .
git commit -m "feat: crear panel del explorador espacial"
git branch -M main
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
```
