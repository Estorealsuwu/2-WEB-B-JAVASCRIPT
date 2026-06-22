function InputNumber({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="guess">Escribe un número del 1 al 100:</label>
      <br />
      <input
        id="guess"
        name="guess"
        type="number"
        min="1"
        max="100"
        step="1"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
        autoFocus
        required
      />
      <button type="submit">Adivinar</button>
    </form>
  )
}

export default InputNumber
