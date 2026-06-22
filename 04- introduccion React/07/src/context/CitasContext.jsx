import { createContext, useContext, useEffect, useState } from 'react'
import citasIniciales from '../data/citasIniciales.js'

const CitasContext = createContext(null)
const STORAGE_KEY = 'citas-medicas'

function obtenerCitasGuardadas() {
  try {
    const citasGuardadas = localStorage.getItem(STORAGE_KEY)
    return citasGuardadas ? JSON.parse(citasGuardadas) : citasIniciales
  } catch {
    return citasIniciales
  }
}

export function CitasProvider({ children }) {
  const [citas, setCitas] = useState(obtenerCitasGuardadas)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(citas))
  }, [citas])

  function agregarCita(datos) {
    const nuevaCita = {
      ...datos,
      id: crypto.randomUUID(),
      estado: 'Programada',
    }

    setCitas((citasActuales) => [...citasActuales, nuevaCita])
    return nuevaCita
  }

  function cancelarCita(id) {
    setCitas((citasActuales) =>
      citasActuales.map((cita) =>
        cita.id === id ? { ...cita, estado: 'Cancelada' } : cita,
      ),
    )
  }

  return (
    <CitasContext.Provider value={{ citas, agregarCita, cancelarCita }}>
      {children}
    </CitasContext.Provider>
  )
}

export function useCitas() {
  const contexto = useContext(CitasContext)

  if (!contexto) {
    throw new Error('useCitas debe utilizarse dentro de CitasProvider')
  }

  return contexto
}

