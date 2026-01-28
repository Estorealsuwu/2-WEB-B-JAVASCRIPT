/* tipos de datos */

let edad=25; // number
let nombre="Hector"; // string
let esEstudiante=true; // boolean

console.log("Number: ")
console.log(edad);
console.log(typeof edad);
console.log("String: ")
console.log(nombre);
console.log(typeof nombre);
console.log("Boolean: ")
console.log(esEstudiante);
console.log(typeof esEstudiante);
//undefined
let direccion;
console.log("Undefined: ")
console.log(direccion);
console.log(typeof direccion);
//null
let telefono=null;
console.log("Null: ")
console.log(telefono);
console.log(typeof telefono); // object (esto es un error en JavaScript)

//object
let persona={
    nombre:"Hector",
    edad:25,
    ciudad:"monclova"
};
console.log("Object: ")
console.log(persona);
console.log(typeof persona);

//symbol
let id=Symbol("id");
console.log("Symbol: ")
console.log(id);
console.log(typeof id);