import { useEffect, useMemo, useRef, useState } from 'react'
import Planeta from './Planeta.jsx'

function PanelControl() {
  const [distancia, setDistancia] = useState(0)
  const [combustible, setCombustible] = useState(100)
  const [estadoNave, setEstadoNave] = useState('En órbita')
  const [planetasVisitados, setPlanetasVisitados] = useState([])
  const [numeroPlaneta, setNumeroPlaneta] = useState(1)
  const combustibleActual = useRef(100)
  const primerCambioCombustible = useRef(true)

  useEffect(() => {
    console.log('¡El panel de control está listo!')

    const intervaloVuelo = setInterval(() => {
      if (combustibleActual.current === 0) {
        return
      }

      combustibleActual.current = Math.max(
        0,
        combustibleActual.current - 1,
      )
      setCombustible(combustibleActual.current)
      setDistancia((distanciaAnterior) => distanciaAnterior + 10)
    }, 1000)

    return () => {
      clearInterval(intervaloVuelo)
      console.log('El panel de control se ha apagado.')
    }
  }, [])

  useEffect(() => {
    if (primerCambioCombustible.current) {
      primerCambioCombustible.current = false
      return
    }

    console.log(`¡Combustible actualizado! Nivel: ${combustible}%`)

    if (combustible === 0) {
      setEstadoNave('Sin combustible')
    }
  }, [combustible])

  const mensajeEstado = useMemo(() => {
    console.log('Calculando el mensaje del estado de la nave...')
    return `Estado de la nave: ${estadoNave}`
  }, [estadoNave])

  const aterrizar = () => {
    const nuevoPlaneta = {
      id: `${Date.now()}-${numeroPlaneta}`,
      nombre: `Planeta ${numeroPlaneta}`,
    }

    setPlanetasVisitados((planetas) => [...planetas, nuevoPlaneta])
    setNumeroPlaneta((numero) => numero + 1)
    setEstadoNave(`Aterrizando en ${nuevoPlaneta.nombre}`)
  }

  const volverAOrbita = () => {
    setEstadoNave(combustible > 0 ? 'En órbita' : 'Sin combustible')
  }

  const eliminarPlaneta = (id) => {
    setPlanetasVisitados((planetas) =>
      planetas.filter((planeta) => planeta.id !== id),
    )
  }

  return (
    <section>
      <h2>Panel de control</h2>
      <p>Distancia recorrida: {distancia} km</p>
      <p>Combustible: {combustible}%</p>
      <p>{mensajeEstado}</p>

      <button onClick={aterrizar} disabled={combustible === 0}>
        Aterrizar
      </button>{' '}
      <button onClick={volverAOrbita}>Volver a órbita</button>

      <h2>Planetas visitados</h2>
      {planetasVisitados.length === 0 ? (
        <p>Todavía no has visitado ningún planeta.</p>
      ) : (
        <ul>
          {planetasVisitados.map((planeta) => (
            <Planeta
              key={planeta.id}
              nombre={planeta.nombre}
              onEliminar={() => eliminarPlaneta(planeta.id)}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default PanelControl
