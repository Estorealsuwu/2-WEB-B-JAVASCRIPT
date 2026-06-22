import { useState } from 'react'
import PanelControl from './PanelControl.jsx'

function App() {
  const [panelEncendido, setPanelEncendido] = useState(true)

  return (
    <main>
      <h1>El Viaje del Explorador Espacial</h1>
      <p>
        Este panel demuestra el montaje, la actualización y el desmontaje de
        componentes funcionales de React.
      </p>

      <button onClick={() => setPanelEncendido((encendido) => !encendido)}>
        {panelEncendido ? 'Apagar panel' : 'Encender panel'}
      </button>

      {panelEncendido ? (
        <PanelControl />
      ) : (
        <p>El panel de control está apagado.</p>
      )}
    </main>
  )
}

export default App

