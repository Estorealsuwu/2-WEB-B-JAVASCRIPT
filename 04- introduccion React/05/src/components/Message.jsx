function Message({ message }) {
  if (!message) {
    return <p>Ingresa tu primer intento.</p>
  }

  return message.type === 'success' ? (
    <p>
      <strong>{message.text}</strong>
    </p>
  ) : (
    <p>{message.text}</p>
  )
}

export default Message

