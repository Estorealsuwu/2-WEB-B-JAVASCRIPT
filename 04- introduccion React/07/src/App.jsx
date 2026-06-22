import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { CitasProvider } from './context/CitasContext.jsx'
import CitaDetalle from './pages/CitaDetalle.jsx'
import Citas from './pages/Citas.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import NuevaCita from './pages/NuevaCita.jsx'

function App() {
  return (
    <BrowserRouter>
      <CitasProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/citas/nueva" element={<NuevaCita />} />
            <Route path="/cita/:id" element={<CitaDetalle />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CitasProvider>
    </BrowserRouter>
  )
}

export default App

