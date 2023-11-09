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

const actionLog = document.querySelector(".log");

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
    playerCount.innerHTML = "Player count: " + playerScore;
    let listItem = document.createElement("li");
    let action = document.createTextNode("Player has drawn a " + card.altText + ". Player has now " + playerScore + " points.");
    listItem.appendChild(action);
    actionLog.appendChild(listItem);
    if (playerScore >= 21 || computerScore >= 21) {
        calculateResults();
        stop.disabled = true;
        hitMe.disabled = true;
    }
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
        let listItem = document.createElement("li");
        let action = document.createTextNode("Computer has drawn a " + card.altText + ". Computer has now " + computerScore + " points.");
        listItem.appendChild(action);
        actionLog.appendChild(listItem);
    }
    else {
        return computerScore;
    }
    let computerCount = document.getElementById("computer-count");
    computerCount.innerHTML = "Computer count: " + computerScore;
}

/* results */

const calculateResults = () => {
    const scoreboard = document.querySelector(".result");
    const result = document.createElement("p");
        /* player or both above 21 - table wins*/
    if (playerScore > 21 && computerScore < 22) {
        const text = document.createTextNode("You busted! I hope you haven't bet your savings on this game...");
        result.appendChild(text);
    }
    else if (playerScore > 21 && computerScore > 22) {
        const text = document.createTextNode("You both are... not great. But house has the upperhand, so computer wins!");
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
    scoreboard.insertBefore(result, playAgain);
    scoreboard.style.visibility = "visible";
}

/* button lets play*/

const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
    const rules = document.querySelector(".initial-rules");
    const header = document.querySelector("header");
    const game = document.querySelector(".game");
    rules.remove();
    header.remove();
    game.style.visibility = "visible";
    actionLog.style.visibility = "visible";
    playerHand();
    computerHand();
})
    
/* button hit me */

const hitMe = document.getElementById("hit-me");
hitMe.addEventListener("click", playerHand);

/* button stop */

const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  hitMe.disabled = true;
  while (computerScore < 16 && computerScore < playerScore) {
      computerHand();
  }
  calculateResults();
  stop.disabled = true;
})

    /* button play again */
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", () => {
    document.location.reload();
})



