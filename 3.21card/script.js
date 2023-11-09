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
    
    /* table */

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

    /* table */

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

  /* button hit me */

  const hitMe = document.getElementById("hit-me");
  hitMe.addEventListener("click", playerHand);
  hitMe.addEventListener("click", computerHand);

  /* stop */


/* results */

    /* player above 21 */

    /* table above 21 */

    /* player wins count */

    /* table wins count */

    /* both above 21 - table wins */ 

    /* tie */ 

    /* play again */





