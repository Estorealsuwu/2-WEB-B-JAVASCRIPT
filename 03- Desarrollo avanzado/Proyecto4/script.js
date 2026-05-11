// Mesas disponibles en el restaurante
let mesasDisponibles = 5;

// Verificar disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {

        console.log("Verificando disponibilidad de mesas...");

        setTimeout(() => {

            if (mesasSolicitadas <= mesasDisponibles) {
                resolve("Mesas disponibles");
            } else {
                reject("No hay suficientes mesas disponibles");
            }

        }, 2000);

    });
}

// Simular envío de correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {

        console.log("Enviando correo de confirmación...");

        setTimeout(() => {

            const correoEnviado = Math.random() > 0.3;

            if (correoEnviado) {
                resolve(`Correo enviado correctamente a ${nombreCliente}`);
            } else {
                reject("Error al enviar el correo de confirmación");
            }

        }, 1500);

    });
}

// Función principal
async function hacerReserva(nombreCliente, mesasSolicitadas) {

    try {

        console.log(`\nProcesando reserva para ${nombreCliente}`);

        // Verificar mesas
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log(disponibilidad);

        // Descontar mesas
        mesasDisponibles -= mesasSolicitadas;

        console.log(`Reserva confirmada para ${nombreCliente}`);
        console.log(`Mesas restantes: ${mesasDisponibles}`);

        // Enviar correo
        const confirmacionCorreo = await enviarConfirmacionReserva(nombreCliente);
        console.log(confirmacionCorreo);

    } catch (error) {

        console.log("Ocurrió un error:");
        console.log(error);

    }
}

// Pruebas
hacerReserva("Daniel", 2);

setTimeout(() => {
    hacerReserva("María", 6);
}, 5000);

setTimeout(() => {
    hacerReserva("Carlos", 1);
}, 10000);