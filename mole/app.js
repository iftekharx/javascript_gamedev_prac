const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeLeft = document.querySelector('#time-left')
let timerId

const score = document.querySelector('#score')

let result = 0
let hitPosition
let countDownTimerId
let currentTime = 60
const status = document.getElementById('status')

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]

  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

function moveMole() {
  if (currentTime <= 0) {
    currentTime = 60
    status.innerHTML = ''
  }
  stopMole()
  timerId = null
  timerId = setInterval(randomSquare, 500)
  countDownTimerId = setInterval(countDown, 1000)
}

function stopMole() {
  clearInterval(timerId)
  clearInterval(countDownTimerId)
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.innerHTML = result
      hitPosition = null
    }
  })
})

function countDown() {
  currentTime--
  timeLeft.innerHTML = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    status.innerHTML = 'GAME OVER! your final score is ' + result
  }
}
