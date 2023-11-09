import {cards} from "./deck.js";

const randomNumber = () => {
    return Math.floor(Math.random() * cards.length);
}

const dealCard = () => {
    let num = randomNumber();
    let card = cards[num];
    cards.splice(num, 1);
    return card;
}

const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
    const rules = document.querySelector(".initial-rules");
    const game = document.querySelector(".game");
    rules.style.visibility = "hidden";
    game.style.visibility = "visible";
})

/* player */

let playerScore = 0
const playerHand = () => {
    let image = document.createElement("img");
    let card = dealCard();
    image.src = card.picture;
    const playerTable = document.querySelector(".player-table");
    playerTable.appendChild(image);
    if (card.value === 1 && playerScore < 11) {
        playerScore = playerScore + card.value + 10;
    }
    else {
        playerScore = playerScore + card.value;
    }
    let playerCount = document.getElementById("player-count");
    playerCount.innerHTML = playerScore;
}

/* computer */

let computerScore = 0
const computerHand = () => {
    if (computerScore < 16) {
        let image = document.createElement("img");
        let card = dealCard();
        image.src = card.picture;
        const computerTable = document.querySelector(".computer-table");
        computerTable.appendChild(image);
        if (card.value === 1 && computerScore < 11) {
            computerScore = computerScore + card.value + 10;
        }
        else {
            computerScore = computerScore + card.value;
        }
    }
    else {
        return computerScore;
    }
    let computerCount = document.getElementById("computer-count");
    computerCount.innerHTML = computerScore;
}

/* results */

const calculateResults = () => {
    const scoreboard = document.querySelector(".result");
    const result = document.createElement("p");
        /* player or both above 21 - table wins*/
    if (playerScore > 21) {
        const text = document.createTextNode("You busted! I hope you haven't bet your savings on this game...");
        result.appendChild(text);
    }
        /* table above 21 and player below/equal 21 - player wins*/
    else if (computerScore > 21 && playerScore < 22) {
        const text = document.createTextNode("Who you are gonna call? Computerbusters! You won!");
        result.appendChild(text);
    }
        /* player 21 or below and table has less points */
    else if (playerScore < 22 && playerScore > computerScore) {
        const text = document.createTextNode("You won! Wait, were you counting cards? Hum...Security!!");
        result.appendChild(text);
    }
        /* table 21 or below and player has less points */
    else if (computerScore < 22 && computerScore > playerScore) {
        const text = document.createTextNode("Better luck next time. Computer wins!");
        result.appendChild(text);
    }
        /* tie on 21 or below*/ 
    else if (playerScore < 22 && computerScore < 22 && playerScore === computerScore) {
        const text = document.createTextNode("It's a... tie? That's not fun. Play again!");
        result.appendChild(text);
    }
    scoreboard.appendChild(result);
}
    
/* button hit me */

const hitMe = document.getElementById("hit-me");
hitMe.addEventListener("click", playerHand);
hitMe.addEventListener("click", computerHand);

/* button stop */

const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  hitMe.disabled = true;
  while (computerScore < 16) {
      computerHand();
  }
  calculateResults();
  stop.disabled = true;
})

    /* button play again */





