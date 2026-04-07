// costos.js

// Objeto que guarda el costo base de viajar a cada destino.
// La clave es el nombre del destino y el valor es su costo.
const COSTO_DESTINO = {
    Afganistan: 500,
    Londres: 400,
    Shanghai: 600,
    "Bogotá": 700,
    Paris: 350,
};

// Objeto que guarda el costo adicional dependiendo del transporte elegido.
const COSTO_TRANSPORTE = {
    "Avión": 200,
    Tren: 100,
    Autobús: 60,
};

// Objeto que guarda el costo por noche dependiendo del tipo de alojamiento.
const COSTO_ALOJAMIENTO_POR_NOCHE = {
    Hostal: 30,
    Hotel: 90,
    Airbnb: 70,
};

// Exportamos la función para poder usarla en otros archivos.
// Esta función recibe un objeto con los datos del viaje.
export const calcularCosto = ({
    destino,
    transporte,
    alojamiento,
    noches = 0,   // si no se especifica número de noches se usa 0
    personas = 1  // si no se especifica número de personas se usa 1
}) => {

    // Buscamos el costo del destino dentro del objeto COSTO_DESTINO.
    // Si el destino no existe, usamos 0 como valor por defecto.
    const baseDestino = COSTO_DESTINO[destino] ?? 0;

    // Buscamos el costo del transporte seleccionado.
    // Si no existe en el objeto, se usa 0.
    const extraTransporte = COSTO_TRANSPORTE[transporte] ?? 0;

    // Buscamos el costo del alojamiento por noche.
    // Si el tipo de alojamiento no existe, se usa 0.
    const costoNoche = COSTO_ALOJAMIENTO_POR_NOCHE[alojamiento] ?? 0;

    // Calculamos el costo base multiplicado por el número de personas.
    // Incluye costo del destino + transporte.
    let subtotal = (baseDestino + extraTransporte) * personas;

    // Sumamos el costo del alojamiento.
    // noches * precio por noche
    subtotal += noches * costoNoche;

    // Calculamos descuentos dependiendo del número de personas.
    // Usamos operador ternario.
    const descuento =
        personas >= 5 ? 0.12 : // 12% de descuento
            personas >= 3 ? 0.07 : // 7% de descuento
                0;                     // sin descuento

    // Aplicamos el descuento al subtotal
    const total = subtotal * (1 - descuento);

    // Redondeamos el resultado final
    return Math.round(total);
};