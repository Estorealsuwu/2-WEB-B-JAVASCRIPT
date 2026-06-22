import { Link, useParams } from 'react-router-dom'
import { useCitas } from '../context/CitasContext.jsx'

function CitaDetalle() {
  const { id } = useParams()
  const { citas, cancelarCita } = useCitas()
  const cita = citas.find((citaActual) => citaActual.id === id)

  if (!cita) {
    return (
      <section>
        <h2>Cita no encontrada</h2>
        <p>No existe una cita con el identificador: {id}</p>
        <Link to="/citas">Volver a la lista de citas</Link>
      </section>
    )
  }

  return (
    <section>
      <h2>Detalles de la cita</h2>
      <dl>
        <dt>ID</dt>
        <dd>{cita.id}</dd>
        <dt>Paciente</dt>
        <dd>{cita.paciente}</dd>
        <dt>Doctor</dt>
        <dd>{cita.doctor}</dd>
        <dt>Especialidad</dt>
        <dd>{cita.especialidad}</dd>
        <dt>Fecha</dt>
        <dd>{cita.fecha}</dd>
        <dt>Hora</dt>
        <dd>{cita.hora}</dd>
        <dt>Motivo</dt>
        <dd>{cita.motivo}</dd>
        <dt>Estado</dt>
        <dd>{cita.estado}</dd>
      </dl>

      {cita.estado === 'Programada' && (
        <button type="button" onClick={() => cancelarCita(cita.id)}>
          Cancelar cita
        </button>
      )}

      <p>
        <Link to="/citas">Volver a la lista de citas</Link>
      </p>
    </section>
  )
}

export default CitaDetalle

