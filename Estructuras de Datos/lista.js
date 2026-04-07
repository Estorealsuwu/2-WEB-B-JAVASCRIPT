// lista.js

// Arreglo para guardar productos
const listaDeCompras = [];

// Agregar producto (sin duplicados)
export const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`Producto agregado: ${producto}`);
    } else {
        console.log(`El producto "${producto}" ya existe en la lista`);
    }
};

// Eliminar producto
export const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);

    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`Producto eliminado: ${producto}`);
    } else {
        console.log(`El producto "${producto}" no está en la lista`);
    }
};

// Mostrar lista
export const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía");
        return;
    }

    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
};