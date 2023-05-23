const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
]

cardArray.sort(() => 0.5 - Math.random()) // 0 - 1 decimal value
//console.log(0.5 - Math.random()) // returns negative or positive value so randomly sorting

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.getElementById('result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('class', 'card')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}

createBoard()
let message = document.getElementById('status')

function checkMatch() {
  const cards = document.querySelectorAll('#grid img')

  if (cardsChosenIds[0] == cardsChosenIds[1]) {
    cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
    message.innerHTML = 'You have clicked the same image!'
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    message.innerHTML = 'You found a match!'
    cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')

    cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
    cards[cardsChosenIds[1]].removeEventListener('click', flipCard)

    cardsWon.push(cardsChosen)
  } else {
    cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
    message.innerHTML = 'Sorry try again!'
  }

  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length == cardArray.length / 2) {
    message.innerHTML = 'You finally won all the cards!'
  } else {
    resultDisplay.innerHTML = cardsWon.length
  }
}

function flipCard() {
  let cardId = this.getAttribute('data-id')

  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)

  this.setAttribute('src', cardArray[cardId].img)

  if (cardsChosen.length == 2) {
    setTimeout(checkMatch, 500)
  }
}
