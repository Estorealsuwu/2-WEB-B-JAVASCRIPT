const listaPedidos = document.getElementById("listaPedidos");

const btnPedido = document.getElementById("btnPedido");

let contadorPedidos = 1;

/**
 * Crear pedido visualmente
 */
function crearElementoPedido(id){

    const pedidoDiv = document.createElement("div");

    pedidoDiv.classList.add("pedido");

    pedidoDiv.id = `pedido-${id}`;

    pedidoDiv.innerHTML = `
        <h3>🍓 Pedido #${id}</h3>

        <p class="estado en-proceso">
            Estado: En Proceso ☕
        </p>
    `;

    listaPedidos.appendChild(pedidoDiv);
}

/**
 * Actualizar estado del pedido
 */
function actualizarEstado(id, estado){

    const estadoElemento =
        document.querySelector(
            `#pedido-${id} .estado`
        );

    estadoElemento.textContent =
        `Estado: ${estado}`;

    estadoElemento.classList.remove(
        "en-proceso",
        "completado"
    );

    if(estado === "Completado 💖"){

        estadoElemento.classList.add(
            "completado"
        );

    }else{

        estadoElemento.classList.add(
            "en-proceso"
        );
    }
}

/**
 * Simular preparación
 */
function prepararPedido(id){

    return new Promise((resolve)=>{

        // Tiempo aleatorio
        const tiempoPreparacion =
            Math.floor(Math.random() * 5000)
            + 2000;

        console.log(
            `Preparando pedido #${id}`
        );

        setTimeout(()=>{

            resolve(id);

        }, tiempoPreparacion);

    });
}

/**
 * Procesar pedido async
 */
async function procesarPedido(id){

    await prepararPedido(id);

    actualizarEstado(
        id,
        "Completado 💖"
    );

    console.log(
        `Pedido #${id} completado`
    );
}

/**
 * Nuevo pedido
 */
function nuevoPedido(){

    const id = contadorPedidos++;

    crearElementoPedido(id);

    procesarPedido(id);
}

/**
 * Evento botón
 */
btnPedido.addEventListener(
    "click",
    nuevoPedido
);