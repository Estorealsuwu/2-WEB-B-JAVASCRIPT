let randomNumber
let attempts

const input = document.getElementById('guessInput')
const guessBtn = document.getElementById('guessBtn')
const restartBtn = document.getElementById('restartBtn')
const message = document.getElementById('message')
const attemptsText = document.getElementById('attempts')

export function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1
  attempts = 0

  message.textContent = ''
  attemptsText.textContent = 'Intentos: 0'

  guessBtn.addEventListener('click', checkGuess)
  restartBtn.addEventListener('click', restartGame)
}

function checkGuess() {
  const userNumber = Number(input.value)

  if (!userNumber) {
    message.textContent = 'Ingresa un número válido'
    return
  }

  attempts++
  attemptsText.textContent = `Intentos: ${attempts}`

  if (userNumber === randomNumber) {
    message.textContent = '¡Correcto! Adivinaste el número'
  } else if (userNumber < randomNumber) {
    message.textContent = 'El número es más alto'
  } else {
    message.textContent = 'El número es más bajo'
  }

  input.value = ''
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1
  attempts = 0

  message.textContent = 'Juego reiniciado'
  attemptsText.textContent = 'Intentos: 0'

  input.value = ''
}