import { useState } from "react";

function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = (evento) => {
    evento.preventDefault();

    const nombre = nuevoProducto.trim();

    if (!nombre) {
      return;
    }

    const producto = {
      id: crypto.randomUUID(),
      nombre,
    };

    setProductos((productosActuales) => [...productosActuales, producto]);
    setNuevoProducto("");
  };

  const eliminarProducto = (id) => {
    setProductos((productosActuales) =>
      productosActuales.filter((producto) => producto.id !== id),
    );
  };

  return (
    <section aria-labelledby="titulo-lista">
      <h2 id="titulo-lista">Productos</h2>

      <form onSubmit={agregarProducto}>
        <label htmlFor="nuevo-producto">Nombre del producto</label>
        <input
          id="nuevo-producto"
          type="text"
          value={nuevoProducto}
          onChange={(evento) => setNuevoProducto(evento.target.value)}
          placeholder="Ejemplo: Leche"
          autoComplete="off"
          required
        />
        <button type="submit">Agregar producto</button>
      </form>

      <p aria-live="polite">
        {productos.length === 1
          ? "1 producto en la lista"
          : `${productos.length} productos en la lista`}
      </p>

      {productos.length === 0 ? (
        <p>Tu lista de compras está vacía.</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <span>{producto.nombre}</span>{" "}
              <button
                type="button"
                onClick={() => eliminarProducto(producto.id)}
                aria-label={`Eliminar ${producto.nombre}`}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListaCompras;
