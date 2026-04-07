// app.js

import { agregarProducto, eliminarProducto, mostrarLista } from './lista.js';

const iniciarApp = () => {
    agregarProducto("Leche");
    agregarProducto("Pan");
    agregarProducto("Huevos");

    agregarProducto("Pan"); // duplicado

    mostrarLista();

    eliminarProducto("Pan");

    mostrarLista();
};

iniciarApp();