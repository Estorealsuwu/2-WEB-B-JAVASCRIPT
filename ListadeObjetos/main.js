//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];


const resultado=productos
//filter 

.filter(producto => producto.precio < 100) //productos que cuesten menos de 100

//sort
.sort((a, b) => a.nombre.localeCompare(b.nombre)) //localcompare compra strings correctamente
//map
.map(producto=>producto.nombre) //devuelve solo el nombre del producto
    
console.log("resultados de usar los metodos filter,sort y map")
console.log(resultado)