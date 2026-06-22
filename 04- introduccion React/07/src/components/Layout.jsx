import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header>
        <h1>Clínica Bienestar</h1>
        <nav aria-label="Navegación principal">
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/citas">Ver citas</NavLink>
            </li>
            <li>
              <NavLink to="/citas/nueva">Agendar cita</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Plataforma de Gestión de Citas Médicas</p>
      </footer>
    </>
  )
}

export default Layout

