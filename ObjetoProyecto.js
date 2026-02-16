const libro ={
    //propiedades del disco
    titulo:"Man's Best Friend",
    autor: "Sabrina Carpenter",
    anioPublicacion: 2025,
    disponible: true,
    //Podemos guardar acciones relacionadas con los datos
    capitulos: ["Capitulo 1: El encuentro", "Capitulo 2: La aventura comienza", "Capitulo 3: El misterio se revela"],
    //Metodo para mostrar la informacion del disco
    describirLibro(){
        console.log(`${this.titulo} de ${this.autor}, lanzado en ${this.anioPublicacion}.`);

    },
        agregarCapitulo(capituloNuevo){
        this.capitulos.push(capituloNuevo);
        console.log(`"${capituloNuevo}" agregado al libro.`);
    },
    listarCapitulos(){
        this.capitulos.forEach((capitulo, i) => {
            console.log(`${i + 1}. ${capitulo}`);
        })
    }


}
libro.agregarCapitulo("Capitulo 4: El desenlace");
libro.listarCapitulos();
