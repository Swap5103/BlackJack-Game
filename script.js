let cards =[]
let sum =0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
console.log(cards)
 
let player= {

    name : "Swap",
    chips: 500
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + " : $"+ player.chips



function startGame() {
    isAlive = true
    let firstCard = getRandomno()
    let secondCard = getRandomno()
  cards = [firstCard, secondCard]
     sum = firstCard + secondCard
    renderGame()
}

function getRandomno() {
   

    let randomNo = Math.floor(Math.random() * 13) + 1
    if (randomNo > 10) {
        return 10;
    } else if (randomNo === 1) {
        return 11
    } else {
        return randomNo;
    }
}

function renderGame() {

    cardsEl.textContent = "Cards :"
    for (let i = 0; i < cards.length; i++) {
        1
        cardsEl.textContent += cards[i] + ","
    }

    sumEl.textContent = "Sum :" + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message;

}
function newCard() {
    if ( isAlive===true && hasBlackJack ===false){
        let card = getRandomno();
        sum += card;
        cards.push(card)
        renderGame()
    }
    
}
