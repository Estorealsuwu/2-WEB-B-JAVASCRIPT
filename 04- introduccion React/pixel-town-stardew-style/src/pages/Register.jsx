import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../context/useAuth";

const Register = () => {
  const { isAuthenticated, register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (formData.password.length < 6) {
      setError("La contrasena debe tener al menos 6 caracteres.");
      return;
    }

    setIsSubmitting(true);

    try {
      await register(formData);
      navigate("/", { replace: true });
    } catch (caughtError) {
      setError(caughtError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container auth-container">
      <section className="auth-card board">
        <p className="eyebrow">Nuevo habitante</p>
        <h1>Crear Cuenta</h1>
        <p className="subtitle">
          Registra tu usuario para proteger tus acciones dentro del pueblo.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="alex"
            required
          />

          <label htmlFor="email">Correo</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@mail.com"
            required
          />

          <label htmlFor="new-password">Contrasena</label>
          <input
            id="new-password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimo 6 caracteres"
            required
          />

          {error && <p className="form-alert">{error}</p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creando..." : "Crear cuenta"}
          </button>
        </form>

        <p className="auth-switch">
          Ya tienes cuenta? <Link to="/login">Inicia sesion</Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
