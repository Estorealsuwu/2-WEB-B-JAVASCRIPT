import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const Clouds = () => (
  <div className="cloud-marquee" aria-hidden="true">
    <div className="cloud-strip">
      <img src="https://assets.codepen.io/7237686/clouds.png?format=auto" alt="" />
    </div>
    <div className="cloud-strip">
      <img src="https://assets.codepen.io/7237686/clouds.png?format=auto" alt="" />
    </div>
    <div className="cloud-strip">
      <img src="https://assets.codepen.io/7237686/clouds.png?format=auto" alt="" />
    </div>
    <div className="cloud-strip">
      <img src="https://assets.codepen.io/7237686/clouds.png?format=auto" alt="" />
    </div>
  </div>
);

const HeaderNav = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="nav-menu" aria-label="Navegacion principal">
      <NavLink to="/">
        Tablon
      </NavLink>

      {isAuthenticated ? (
        <>
          <NavLink to="/profile">
            Casa
          </NavLink>

          <button className="nav-action" type="button" onClick={handleLogout}>
            Salir
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login">
            Entrar
          </NavLink>

          <NavLink to="/register">
            Registro
          </NavLink>
        </>
      )}

      {user && <span className="session-chip">@{user.username}</span>}
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Clouds />

        <div className="app-shell">
          <header className="top-bar">
            <div className="brand">
              <span className="brand-badge">PT</span>
              <span>PixelTown</span>
            </div>

            <HeaderNav />
          </header>

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
