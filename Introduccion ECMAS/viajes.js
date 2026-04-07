// viajes.js

// Importamos la función que calcula costos
import { calcularCosto } from "./costos.js";

// Creamos un arreglo donde guardaremos todos los viajes registrados.
// Usamos const porque no vamos a cambiar el arreglo,
// solo vamos a agregar elementos dentro de él.
const destinos = [];

// Función para registrar un nuevo viaje
export const registrarDestino = (
    destino,
    fecha,
    transporte,
    { alojamiento = "Hotel", noches = 0, personas = 1 } = {}
) => {

    // Creamos un objeto que representa un viaje
    const nuevoViaje = {

        // Guardamos los datos recibidos
        destino,
        fecha,
        transporte,
        alojamiento,
        noches,
        personas,

        // Calculamos el costo llamando a la función calcularCosto
        costo: calcularCosto({
            destino,
            transporte,
            alojamiento,
            noches,
            personas
        })
    };

    // Agregamos el nuevo viaje al arreglo de destinos
    destinos.push(nuevoViaje);

    // Devolvemos el objeto por si otra parte del programa lo necesita
    return nuevoViaje;
};

// Función para obtener todos los viajes registrados
export const obtenerItinerario = () => {

    // Usamos el operador spread (...) para devolver una copia del arreglo
    // y evitar que se modifique directamente desde afuera.
    return [...destinos];
};

// Función para mostrar todos los viajes en consola
export const mostrarItinerario = () => {

    // Si no hay viajes registrados mostramos un mensaje
    if (destinos.length === 0) {
        console.log("No hay viajes registrados.");
        return;
    }

    // Recorremos el arreglo usando forEach
    destinos.forEach((viaje, idx) => {

        // Mostramos el número de viaje
        console.log(`#${idx + 1}`);

        // Mostramos la información del viaje
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Alojamiento: ${viaje.alojamiento} (${viaje.noches} noches)`);
        console.log(`Personas: ${viaje.personas}`);

        // Mostramos el costo calculado
        console.log(`Costo total estimado: $${viaje.costo}`);

        // Línea separadora para que sea más legible
        console.log("---------------------------");
    });
};