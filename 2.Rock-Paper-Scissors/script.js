const computerPick = () => {
    let number = Math.ceil(Math.random() * 3);
    let computerWeapon = "";
    let computerImage = document.querySelector(".computer");
    let heading = document.createElement("h2");
    let text = document.createTextNode("Computer picks ");
    heading.appendChild(text);
    computerImage.appendChild(heading);
    if (number === 1) {
        computerWeapon = "troll";
        let troll = document.createElement("img");
        troll.src = "images/troll.png";
        troll.alt = "troll";
        computerImage.appendChild(troll);
    }
    else if (number === 2 ) {
        computerWeapon = "book";
        let book = document.createElement("img");
        book.src = "images/book.png";
        book.alt = "book";
        computerImage.appendChild(book);
    }
    else if (number === 3) {
        computerWeapon =  "sword";
        let sword = document.createElement("img");
        sword.src = "images/sword.png";
        sword.alt = "sword";
        computerImage.appendChild(sword);
    }
    return computerWeapon;
}

const buttonStyle = (e) => {
    const buttons = document.querySelectorAll(".image-player");
    buttons.forEach(btn => {
        if (e.target === btn) {
            e.target.style.visibility = "visible";
        }
        else {
            btn.style.visibility = "hidden";
        }
    })
}

const result = (e) => {
    let computer = computerPick();
    let player = e.target.alt;
    let result = document.querySelector(".result");
    if (computer === player) {
        /* draw */
        let paragraph = document.createElement("p");
        let text = document.createTextNode("It's a draw! But AI is going to enslave humans, so humanity loses!");
        paragraph.appendChild(text);
        result.appendChild(paragraph);
        
    }
    else if (computer === "troll" && player === "sword" || computer === "book" && player === "troll" || computer === "sword" && player === "book") {
     /* computer wins */
     let paragraph = document.createElement("p");
     let text = document.createTextNode("Computer wins! Losing to a machine, uh?");
     paragraph.appendChild(text);
     result.appendChild(paragraph);
    }
    else {
        /* player wins */
        let paragraph = document.createElement("p");
        let text = document.createTextNode("You won! Oh, wait, I think my code is broken...");
        paragraph.appendChild(text);
        result.appendChild(paragraph);
    }
    const playAgain = document.createElement("button");
    const textButton = document.createTextNode("Play Again");
    playAgain.appendChild(textButton);
    result.appendChild(playAgain);
    playAgain.addEventListener("click", () => {
        document.location.reload()
    });
}

const playerPick = document.querySelectorAll(".player-pick");
playerPick.forEach(btn => {
    btn.addEventListener("click", result);
    btn.addEventListener("click", buttonStyle);
    btn.addEventListener("click", () => {
        btn.disabled = true;
    })
});