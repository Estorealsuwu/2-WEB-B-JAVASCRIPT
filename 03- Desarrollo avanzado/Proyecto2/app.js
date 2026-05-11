let biblioteca = [
  {
    titulo: "Harry Potter",
    autor: "J.K. Rowling",
    genero: "Fantasía",
    disponible: true
  },
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Ficción",
    disponible: false
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    disponible: true
  }
];

function leerDatos(callback) {
  console.log("Leyendo datos...");

  setTimeout(() => {
    callback(biblioteca);
  }, 2000);
}

function escribirDatos(nuevosDatos, callback) {
  console.log("Guardando cambios...");

  setTimeout(() => {
    biblioteca = nuevosDatos;
    callback();
  }, 2000);
}

function mostrarLibros() {
  leerDatos((libros) => {
    console.log("\nInventario de libros\n");

    libros.forEach((libro, index) => {
      console.log(`
Libro ${index + 1}
Titulo: ${libro.titulo}
Autor: ${libro.autor}
Genero: ${libro.genero}
Estado: ${libro.disponible ? "Disponible" : "Prestado"}
      `);
    });
  });
}

function agregarLibro(titulo, autor, genero) {
  leerDatos((libros) => {

    const nuevoLibro = {
      titulo,
      autor,
      genero,
      disponible: true
    };

    libros.push(nuevoLibro);

    escribirDatos(libros, () => {
      console.log(`\nLibro "${titulo}" agregado correctamente.`);
    });
  });
}

function actualizarDisponibilidad(titulo, nuevoEstado) {

  leerDatos((libros) => {

    const libro = libros.find(
      (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (!libro) {
      console.log("\nLibro no encontrado.");
      return;
    }

    libro.disponible = nuevoEstado;

    escribirDatos(libros, () => {
      console.log(`
Estado actualizado:
${libro.titulo} -> ${nuevoEstado ? "Disponible" : "Prestado"}
      `);
    });
  });
}

mostrarLibros();

setTimeout(() => {
  agregarLibro(
    "Percy Jackson",
    "Rick Riordan",
    "Fantasia"
  );
}, 3000);

setTimeout(() => {
  actualizarDisponibilidad(
    "Harry Potter",
    false
  );
}, 6000);

setTimeout(() => {
  mostrarLibros();
}, 9000);