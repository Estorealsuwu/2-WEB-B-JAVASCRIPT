import { Link } from 'react-router-dom'
import { useCitas } from '../context/CitasContext.jsx'

function Home() {
  const { citas } = useCitas()
  const citasProgramadas = citas.filter(
    (cita) => cita.estado === 'Programada',
  ).length

  return (
    <section>
      <h2>Bienvenido a la plataforma de citas</h2>
      <p>
        Consulta tus próximas citas, revisa sus detalles o agenda una nueva
        visita médica.
      </p>
      <p>Citas programadas: {citasProgramadas}</p>

      <h3>¿Qué deseas hacer?</h3>
      <ul>
        <li>
          <Link to="/citas">Consultar todas las citas</Link>
        </li>
        <li>
          <Link to="/citas/nueva">Agendar una cita</Link>
        </li>
      </ul>
    </section>
  )
}

export default Home

