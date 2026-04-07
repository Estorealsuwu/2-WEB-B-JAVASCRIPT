// app.js

// Importamos funciones desde viajes.js
import { registrarDestino, mostrarItinerario } from "./viajes.js";

// Función principal que inicia la aplicación
const iniciarApp = () => {

    // Registramos algunos viajes de ejemplo

    registrarDestino("Paris", "2026-06-15", "Avión", {
        alojamiento: "Hotel",
        noches: 5,
        personas: 2
    });

    registrarDestino("Londres", "2026-07-01", "Tren", {
        alojamiento: "Airbnb",
        noches: 4,
        personas: 3
    });

    registrarDestino("Tokio", "2026-08-10", "Avión", {
        alojamiento: "Hostal",
        noches: 7,
        personas: 1
    });

    // Mostramos todos los viajes registrados
    mostrarItinerario();
};

// Ejecutamos la aplicación
iniciarApp();