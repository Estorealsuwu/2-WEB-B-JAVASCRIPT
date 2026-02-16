
let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
};

agregarLibro("El perfume");
agregarLibro("El alquimista");
agregarLibro("Llamame por tu nombre");
console.log(librosLeidos);
function mostrarLibrosLeidos(){
    console.log("Libros leidos:");
    for (let i = 0; i < librosLeidos.length; i++){
        console.log((i + 1) + ". " + librosLeidos[i]);
    }
}
mostrarLibrosLeidos();