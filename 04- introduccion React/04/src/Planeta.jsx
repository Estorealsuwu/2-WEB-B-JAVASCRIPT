import { useEffect } from 'react'

function Planeta({ nombre, onEliminar }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`)

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`)
    }
  }, [nombre])

  return (
    <li>
      <strong>{nombre}</strong>{' '}
      <button onClick={onEliminar}>Eliminar planeta</button>
    </li>
  )
}

export default Planeta

