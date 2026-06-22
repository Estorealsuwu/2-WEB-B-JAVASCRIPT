export const INVENTORY_STORAGE_KEY = 'gestor-inventario-products'

export const initialState = {
  products: [],
  history: [],
}

const MAX_HISTORY_ITEMS = 15

function addHistory(history, message) {
  return [message, ...history].slice(0, MAX_HISTORY_ITEMS)
}

export function inventoryReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existingProduct = state.products.find(
        (product) => product.name.toLowerCase() === action.name.toLowerCase(),
      )

      if (existingProduct) {
        return {
          products: state.products.map((product) =>
            product.id === existingProduct.id
              ? { ...product, quantity: product.quantity + action.quantity }
              : product,
          ),
          history: addHistory(
            state.history,
            `Se agregaron ${action.quantity} unidades a ${existingProduct.name}.`,
          ),
        }
      }

      return {
        products: [
          ...state.products,
          {
            id: action.id,
            name: action.name,
            quantity: action.quantity,
          },
        ],
        history: addHistory(
          state.history,
          `Se agregó ${action.name} con ${action.quantity} unidades.`,
        ),
      }
    }

    case 'increment': {
      const selectedProduct = state.products.find(
        (product) => product.id === action.id,
      )

      if (!selectedProduct) return state

      return {
        products: state.products.map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
        history: addHistory(
          state.history,
          `Se aumentó la cantidad de ${selectedProduct.name}.`,
        ),
      }
    }

    case 'decrement': {
      const selectedProduct = state.products.find(
        (product) => product.id === action.id,
      )

      if (!selectedProduct || selectedProduct.quantity <= 1) return state

      return {
        products: state.products.map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
        history: addHistory(
          state.history,
          `Se redujo la cantidad de ${selectedProduct.name}.`,
        ),
      }
    }

    case 'remove': {
      const selectedProduct = state.products.find(
        (product) => product.id === action.id,
      )

      if (!selectedProduct) return state

      return {
        products: state.products.filter((product) => product.id !== action.id),
        history: addHistory(
          state.history,
          `Se eliminó ${selectedProduct.name} del inventario.`,
        ),
      }
    }

    case 'clear':
      if (state.products.length === 0) return state

      return {
        products: [],
        history: addHistory(state.history, 'Se vació todo el inventario.'),
      }

    default:
      return state
  }
}

export function loadInitialState() {
  try {
    const savedProducts = JSON.parse(
      localStorage.getItem(INVENTORY_STORAGE_KEY) ?? '[]',
    )

    if (!Array.isArray(savedProducts)) return initialState

    const validProducts = savedProducts.filter(
      (product) =>
        typeof product?.id === 'string' &&
        typeof product?.name === 'string' &&
        Number.isInteger(product?.quantity) &&
        product.quantity > 0,
    )

    return { products: validProducts, history: [] }
  } catch {
    return initialState
  }
}
