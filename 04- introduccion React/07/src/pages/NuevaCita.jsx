import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCitas } from '../context/CitasContext.jsx'

const formularioInicial = {
  paciente: '',
  doctor: '',
  especialidad: '',
  fecha: '',
  hora: '',
  motivo: '',
}

function NuevaCita() {
  const [formulario, setFormulario] = useState(formularioInicial)
  const { agregarCita } = useCitas()
  const navigate = useNavigate()

  function actualizarCampo(evento) {
    const { name, value } = evento.target
    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }))
  }

  function manejarEnvio(evento) {
    evento.preventDefault()
    const nuevaCita = agregarCita(formulario)
    navigate(`/cita/${nuevaCita.id}`)
  }

  return (
    <section>
      <h2>Agendar una cita médica</h2>
      <form onSubmit={manejarEnvio}>
        <p>
          <label htmlFor="paciente">Nombre del paciente</label>
          <br />
          <input
            id="paciente"
            name="paciente"
            type="text"
            value={formulario.paciente}
            onChange={actualizarCampo}
            required
          />
        </p>

        <p>
          <label htmlFor="especialidad">Especialidad</label>
          <br />
          <select
            id="especialidad"
            name="especialidad"
            value={formulario.especialidad}
            onChange={actualizarCampo}
            required
          >
            <option value="">Selecciona una especialidad</option>
            <option value="Medicina general">Medicina general</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Dermatología">Dermatología</option>
            <option value="Pediatría">Pediatría</option>
          </select>
        </p>

        <p>
          <label htmlFor="doctor">Doctor</label>
          <br />
          <input
            id="doctor"
            name="doctor"
            type="text"
            value={formulario.doctor}
            onChange={actualizarCampo}
            required
          />
        </p>

        <p>
          <label htmlFor="fecha">Fecha</label>
          <br />
          <input
            id="fecha"
            name="fecha"
            type="date"
            value={formulario.fecha}
            onChange={actualizarCampo}
            required
          />
        </p>

        <p>
          <label htmlFor="hora">Hora</label>
          <br />
          <input
            id="hora"
            name="hora"
            type="time"
            value={formulario.hora}
            onChange={actualizarCampo}
            required
          />
        </p>

        <p>
          <label htmlFor="motivo">Motivo de la consulta</label>
          <br />
          <textarea
            id="motivo"
            name="motivo"
            value={formulario.motivo}
            onChange={actualizarCampo}
            required
          />
        </p>

        <button type="submit">Guardar cita</button>
      </form>

      <p>
        <Link to="/citas">Cancelar y volver</Link>
      </p>
    </section>
  )
}

export default NuevaCita

