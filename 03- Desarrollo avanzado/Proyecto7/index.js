const planetas = require("./planetas");

console.log("==================================");
console.log("   LISTA DE PLANETAS FAVORITOS");
console.log("==================================\n");

planetas.forEach((planeta, index) => {
  console.log(`${index + 1}. ${planeta.nombre}`);
  console.log(`   Tipo: ${planeta.tipo}`);
  console.log(`   Color: ${planeta.color}\n`);
});

console.log("==================================");
console.log("PLANETAS GASEOSOS");
console.log("==================================\n");

const gaseosos = planetas.filter(
  planeta => planeta.tipo === "Gaseoso"
);

gaseosos.forEach(planeta => {
  console.log(`- ${planeta.nombre}`);
});

console.log("\nExploración espacial completada");