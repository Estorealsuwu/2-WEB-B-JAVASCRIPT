import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'contador-tareas'

function cargarTareas() {
  try {
    const tareasGuardadas = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (!Array.isArray(tareasGuardadas)) {
      return []
    }

    return tareasGuardadas.filter(
      (tarea) =>
        typeof tarea.id === 'string' &&
        typeof tarea.nombre === 'string' &&
        Number.isFinite(tarea.duracion) &&
        tarea.duracion > 0,
    )
  } catch {
    return []
  }
}

function crearId() {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random()}`
}

function App() {
  const [tareas, setTareas] = useState(cargarTareas)
  const [nombre, setNombre] = useState('')
  const [duracion, setDuracion] = useState('')
  const [horaActual, setHoraActual] = useState(() => new Date())

  const tiempoTotal = useMemo(() => {
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0)
  }, [tareas])

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date())
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  useEffect(() => {
    document.title = `Total: ${tiempoTotal} minutos`
  }, [tiempoTotal])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas))
  }, [tareas])

  function agregarTarea(evento) {
    evento.preventDefault()

    const nombreLimpio = nombre.trim()
    const duracionNumerica = Number(duracion)

    if (!nombreLimpio || !Number.isInteger(duracionNumerica) || duracionNumerica < 1) {
      return
    }

    const nuevaTarea = {
      id: crearId(),
      nombre: nombreLimpio,
      duracion: duracionNumerica,
    }

    setTareas((tareasActuales) => [...tareasActuales, nuevaTarea])
    setNombre('')
    setDuracion('')
  }

  function eliminarTarea(id) {
    setTareas((tareasActuales) =>
      tareasActuales.filter((tarea) => tarea.id !== id),
    )
  }

  function eliminarTodas() {
    setTareas([])
  }

  return (
    <main>
      <header>
        <h1>Contador de tareas</h1>
        <p>
          Hora actual:{' '}
          <time dateTime={horaActual.toISOString()}>
            {horaActual.toLocaleTimeString('es-GT')}
          </time>
        </p>
      </header>

      <section aria-labelledby="formulario-tarea">
        <h2 id="formulario-tarea">Agregar una tarea</h2>

        <form onSubmit={agregarTarea}>
          <p>
            <label htmlFor="nombre">Nombre de la tarea</label>
            <br />
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(evento) => setNombre(evento.target.value)}
              placeholder="Ejemplo: Estudiar React"
              required
            />
          </p>

          <p>
            <label htmlFor="duracion">Duración en minutos</label>
            <br />
            <input
              id="duracion"
              type="number"
              min="1"
              step="1"
              value={duracion}
              onChange={(evento) => setDuracion(evento.target.value)}
              placeholder="Ejemplo: 45"
              required
            />
          </p>

          <button type="submit">Agregar tarea</button>
        </form>
      </section>

      <section aria-labelledby="lista-tareas">
        <h2 id="lista-tareas">Tareas registradas</h2>

        {tareas.length === 0 ? (
          <p>No hay tareas registradas.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th scope="col">Tarea</th>
                  <th scope="col">Duración</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {tareas.map((tarea) => (
                  <tr key={tarea.id}>
                    <td>{tarea.nombre}</td>
                    <td>{tarea.duracion} minutos</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => eliminarTarea(tarea.id)}
                        aria-label={`Eliminar ${tarea.nombre}`}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p aria-live="polite">
              <strong>Total de tiempo: {tiempoTotal} minutos</strong>
            </p>

            <button type="button" onClick={eliminarTodas}>
              Eliminar todas las tareas
            </button>
          </>
        )}
      </section>
    </main>
  )
}

export default App

