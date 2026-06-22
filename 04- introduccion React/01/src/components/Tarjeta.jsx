function Tarjeta() {
  const nombre = 'Ana Pérez'
  const profesion = 'Desarrolladora Web'
  const mensaje = '¡Bienvenido a mi tarjeta de presentación!'

  return (
    <article>
      <header>
        <h2>{nombre}</h2>
        <p>{profesion}</p>
      </header>

      <p>{mensaje}</p>
    </article>
  )
}

export default Tarjeta
