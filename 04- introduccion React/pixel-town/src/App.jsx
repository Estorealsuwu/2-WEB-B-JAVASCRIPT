import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Inicio</Link>

        <Link to="/profile">
          Perfil
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;