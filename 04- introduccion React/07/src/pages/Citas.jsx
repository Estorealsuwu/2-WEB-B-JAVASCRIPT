import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCitas } from '../context/CitasContext.jsx'

function Citas() {
  const { citas } = useCitas()
  const [filtro, setFiltro] = useState('Todas')

  const citasFiltradas =
    filtro === 'Todas'
      ? citas
      : citas.filter((cita) => cita.estado === filtro)

  return (
    <section>
      <h2>Citas médicas</h2>
      <p>
        <Link to="/citas/nueva">Agendar una nueva cita</Link>
      </p>

      <label htmlFor="filtro-estado">Filtrar por estado: </label>
      <select
        id="filtro-estado"
        value={filtro}
        onChange={(evento) => setFiltro(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Programada">Programadas</option>
        <option value="Cancelada">Canceladas</option>
      </select>

      {citasFiltradas.length === 0 ? (
        <p>No hay citas con el estado seleccionado.</p>
      ) : (
        <ul>
          {citasFiltradas.map((cita) => (
            <li key={cita.id}>
              <article>
                <h3>{cita.especialidad}</h3>
                <p>Paciente: {cita.paciente}</p>
                <p>Doctor: {cita.doctor}</p>
                <p>
                  Fecha: {cita.fecha} a las {cita.hora}
                </p>
                <p>Estado: {cita.estado}</p>
                <Link to={`/cita/${cita.id}`}>Ver detalles</Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Citas

