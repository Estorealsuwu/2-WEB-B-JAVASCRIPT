const disco={
    //propiedades del disco
    titulo:"Man's Best Friend",
    artista: "Sabrina Carpenter",
    anio: 2025,
    disponible: true,
    //propiedad de tipo arreeglos
    canciones: ["Manchild", "Tears", "My man on willpower","Sugar talking", "Go go Juice"],

    //Podemos guardar acciones relacionadas con los datos
    //Metodo para mostrar la informacion del disco
    mostrarInfo(){
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}.`);

    },
     //Metodo que lista las canciones del disco
    listarCanciones(){
        this.canciones.forEach((cancion, i) => {
            console.log(`${i + 1}. ${cancion}`);
        })
    },

    //Agregar una cancion
    agregarCancion(nuevaCancion){
        this.canciones.push(nuevaCancion);
        console.log(`"${nuevaCancion}" agregada al disco.`);
    },
    //Eliminar una cancion
    eliminarCancion(cancionAEliminar){
        const index = this.canciones.indexOf(cancionAEliminar) //la busca en el arreglo y devuelve su indice, si no la encuentra devuelve -1, y no es case sensitive si pongo en minuscula 
        //  una letra da error :c
        if (index !== -1)//Sí existe la canción se elimina 
        {
            this.canciones.splice(index, 1);
            console.log(`"${cancionAEliminar}" eliminada del disco`);
        } else {
            console.log(`La canción "${cancionAEliminar}" no se encontró en el disco`);
        }
    },

    //cambiar estado de disco a NO disponible
    marcarNoDisponible(){
        this.disponible = false;
        console.log("El disco ha sido marcado como no disponible");
    }
}
console.log(disco.titulo);
console.log("--------------------");
console.log(disco["titulo"]);
console.log(disco.artista);
console.log(disco.anio);
console.log(disco.disponible);
console.log(disco.canciones);

//Acceder a una cancion en especifico
console.log(disco.canciones[0]);

//llamar a nuestro metodo
disco.mostrarInfo();
disco.listarCanciones();
disco.agregarCancion("Goodbye");
console.log("--------------------");
disco.listarCanciones();
console.log("--------------------");
disco.eliminarCancion("Tears");
console.log("--------------------");
disco.listarCanciones();
console.log("--------------------");
disco.marcarNoDisponible();


//Desestructuracion de objetos
//es sacar cosas de un objeto sin necesida de escribir el objeto.propiedad
const{canciones}=disco;
const[primera,segunda,tercera]=canciones;
console.log("Canciones desestructuradas: ")
console.log(primera);
console.log(segunda);
console.log(tercera);

const{canciones:[pista1, pista2, pista3]}=disco;
console.log(pista1)
console.log(pista2)
console.log(pista3)

//Error comun: desestructurar No crea datos, solo los extras
//renombrar variables
const{titulo:nombreDisco,anio: Lanzamiento}=disco;

console.log(nombreDisco);
console.log(Lanzamiento);
//desestructuracion basica
const{titulo, artista}=disco;
console.log(titulo);
console.log(artista);