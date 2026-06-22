import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import ProductItem from './ProductItem.jsx'
import {
  INVENTORY_STORAGE_KEY,
  inventoryReducer,
  loadInitialState,
} from './inventoryReducer.js'

function InventoryManager() {
  const [state, dispatch] = useReducer(
    inventoryReducer,
    undefined,
    loadInitialState,
  )
  const [searchTerm, setSearchTerm] = useState('')
  const nameInputRef = useRef(null)
  const quantityInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current?.focus()
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(
        INVENTORY_STORAGE_KEY,
        JSON.stringify(state.products),
      )
    } catch {
      // La aplicación sigue funcionando si el navegador bloquea localStorage.
    }
  }, [state.products])

  const handleAddProduct = useCallback((event) => {
    event.preventDefault()

    const name = nameInputRef.current?.value.trim() ?? ''
    const quantity = Number(quantityInputRef.current?.value ?? 1)

    if (!name || !Number.isInteger(quantity) || quantity < 1) return

    dispatch({
      type: 'add',
      id: crypto.randomUUID(),
      name,
      quantity,
    })

    nameInputRef.current.value = ''
    quantityInputRef.current.value = '1'
    nameInputRef.current.focus()
  }, [])

  const handleIncrement = useCallback((id) => {
    dispatch({ type: 'increment', id })
  }, [])

  const handleDecrement = useCallback((id) => {
    dispatch({ type: 'decrement', id })
  }, [])

  const handleRemove = useCallback((id) => {
    dispatch({ type: 'remove', id })
  }, [])

  const handleClear = useCallback(() => {
    dispatch({ type: 'clear' })
    nameInputRef.current?.focus()
  }, [])

  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, [])

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const visibleProducts = state.products.filter((product) =>
    product.name.toLowerCase().includes(normalizedSearch),
  )
  const totalUnits = state.products.reduce(
    (total, product) => total + product.quantity,
    0,
  )

  return (
    <>
      <section aria-labelledby="add-product-title">
        <h2 id="add-product-title">Agregar producto</h2>
        <form onSubmit={handleAddProduct}>
          <p>
            <label htmlFor="product-name">Nombre: </label>
            <input
              id="product-name"
              ref={nameInputRef}
              type="text"
              placeholder="Ejemplo: Audífonos"
              required
            />
          </p>
          <p>
            <label htmlFor="product-quantity">Cantidad inicial: </label>
            <input
              id="product-quantity"
              ref={quantityInputRef}
              type="number"
              min="1"
              step="1"
              defaultValue="1"
              required
            />
          </p>
          <button type="submit">Agregar al inventario</button>
        </form>
      </section>

      <section aria-labelledby="inventory-title">
        <h2 id="inventory-title">Inventario</h2>

        <p>
          <label htmlFor="product-search">Buscar producto: </label>
          <input
            id="product-search"
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Escribe un nombre"
          />
        </p>

        <p aria-live="polite">
          Productos diferentes: {state.products.length} | Unidades totales:{' '}
          {totalUnits}
        </p>

        {visibleProducts.length > 0 ? (
          <table>
            <caption>Productos disponibles</caption>
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {visibleProducts.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onRemove={handleRemove}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p>
            {state.products.length === 0
              ? 'Todavía no hay productos en el inventario.'
              : 'No se encontraron productos con esa búsqueda.'}
          </p>
        )}

        <p>
          <button
            type="button"
            onClick={handleClear}
            disabled={state.products.length === 0}
          >
            Vaciar inventario
          </button>
        </p>
      </section>

      <section aria-labelledby="history-title">
        <h2 id="history-title">Registro de eventos</h2>
        {state.history.length > 0 ? (
          <ol>
            {state.history.map((event, index) => (
              <li key={`${event}-${index}`}>{event}</li>
            ))}
          </ol>
        ) : (
          <p>Aún no hay movimientos registrados en esta sesión.</p>
        )}
      </section>

      <details>
        <summary>Hooks utilizados</summary>
        <ul>
          <li>
            <code>useReducer</code>: organiza todas las acciones del inventario.
          </li>
          <li>
            <code>useRef</code>: accede a los inputs, los limpia y controla el
            foco.
          </li>
          <li>
            <code>useCallback</code>: mantiene estables las funciones enviadas a
            los productos.
          </li>
        </ul>
      </details>
    </>
  )
}

export default InventoryManager
