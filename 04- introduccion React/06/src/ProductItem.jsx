import { memo, useCallback } from 'react'

const ProductItem = memo(function ProductItem({
  product,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  const handleIncrement = useCallback(() => {
    onIncrement(product.id)
  }, [onIncrement, product.id])

  const handleDecrement = useCallback(() => {
    onDecrement(product.id)
  }, [onDecrement, product.id])

  const handleRemove = useCallback(() => {
    onRemove(product.id)
  }, [onRemove, product.id])

  return (
    <tr>
      <th scope="row">{product.name}</th>
      <td>{product.quantity}</td>
      <td>
        <button type="button" onClick={handleIncrement}>
          Aumentar
        </button>{' '}
        <button
          type="button"
          onClick={handleDecrement}
          disabled={product.quantity === 1}
        >
          Disminuir
        </button>{' '}
        <button type="button" onClick={handleRemove}>
          Eliminar
        </button>
      </td>
    </tr>
  )
})

export default ProductItem
