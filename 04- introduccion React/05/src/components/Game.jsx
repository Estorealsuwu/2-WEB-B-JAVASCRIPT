import { useState } from 'react'
import InputNumber from './InputNumber.jsx'
import Message from './Message.jsx'
import RestartButton from './RestartButton.jsx'

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

function Game() {
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber)
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState(null)
  const [attempts, setAttempts] = useState(0)
  const [hasWon, setHasWon] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const number = Number(guess)

    if (!Number.isInteger(number) || number < 1 || number > 100) {
      setMessage({
        type: 'error',
        text: 'Ingresa un número entero entre 1 y 100.',
      })
      return
    }

    const currentAttempt = attempts + 1
    setAttempts(currentAttempt)

    if (number === secretNumber) {
      setMessage({
        type: 'success',
        text: `¡Correcto! Adivinaste el número en ${currentAttempt} ${
          currentAttempt === 1 ? 'intento' : 'intentos'
        }.`,
      })
      setHasWon(true)
      return
    }

    setMessage({
      type: 'hint',
      text:
        number < secretNumber
          ? 'El número secreto es mayor.'
          : 'El número secreto es menor.',
    })
    setGuess('')
  }

  function handleRestart() {
    setSecretNumber(generateRandomNumber())
    setGuess('')
    setMessage(null)
    setAttempts(0)
    setHasWon(false)
  }

  return (
    <section>
      <h1>Adivina el Número</h1>
      <p>Estoy pensando en un número del 1 al 100.</p>

      {hasWon ? (
        <p>Juego terminado. Puedes iniciar una partida nueva.</p>
      ) : (
        <InputNumber
          value={guess}
          onChange={setGuess}
          onSubmit={handleSubmit}
        />
      )}

      <Message message={message} />

      {attempts > 0 && <p>Intentos: {attempts}</p>}
      {attempts > 0 && <RestartButton onRestart={handleRestart} />}
    </section>
  )
}

export default Game

