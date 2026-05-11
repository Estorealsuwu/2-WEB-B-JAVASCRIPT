// =====================================================================
// EJERCICIO 1 — process.argv
// Imprime tu nombre recibido por argumento.
// Si no recibes nombre, imprime "Anónimo".
//
// Pruébalo:
//   node 05-ejercicios.js Ana
//   node 05-ejercicios.js
// =====================================================================
// =====================================================================
// EJERCICIO 2 — Módulo nativo `os`
// Importa el módulo `os` (es nativo, no necesitas instalarlo).
// Imprime: el sistema operativo (os.platform()) y la cantidad de cores
// (os.cpus().length).
// =====================================================================
// =====================================================================
// EJERCICIO 3 — Leer un archivo
// Lee el archivo `frases.txt` (ya está en la carpeta /ejercicios) y
// cuenta cuántas líneas tiene. Imprime el resultado.
//
// Pista: usa fs.readFileSync(ruta, 'utf8') y luego split('\n').length.
// =====================================================================
// =====================================================================
// EJERCICIO 4 — Crear tu propio módulo
// Crea un archivo `matematicas.js` en esta carpeta que exporte:
//   - cuadrado(n)        → n * n
//   - cubo(n)            → n * n * n
//   - esPar(n)           → true/false
//
// Luego impórtalo aquí y úsalo:
//   const { cuadrado } = require('./matematicas');
//   console.log(cuadrado(5));   // 25
// =====================================================================
// =====================================================================
// EJERCICIO 5 — Instalar y usar dayjs
// Pasos:
//   1. cd ejercicios
//   2. npm init -y           (si no existe package.json)
//   3. npm install dayjs
//   4. Descomenta el código de abajo y córrelo.
// =====================================================================
// =====================================================================
// EJERCICIO 6 — Script en package.json
// Edita el package.json de la carpeta /ejercicios y agrega:
//   "scripts": {
//     "ejercicios": "node 05-ejercicios.js",
//     "retos": "node 06-retos.js"
//   }
//
// Luego corre `npm run ejercicios` desde la terminal.
// (No hay código que escribir aquí — solo verifica que funciona.)
// =====================================================================