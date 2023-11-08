const secretNumber = () => {
    let number = Math.ceil(Math.random() * 25);
    return number.toString();
}

let winnerNumber = secretNumber();
let missedNumberPlus = parseFloat(winnerNumber) + 1;
let missedNumberMinus = parseFloat(winnerNumber) - 1;

const handleNumber = (e) => {
    let guessedNumber = document.getElementById("guessedNumber").value;
    if (guessedNumber == 0 || guessedNumber > 26) {
        alert ("This is a impossible number. Try a different one!")
        e.preventDefault();
    }
    else if (guessedNumber === winnerNumber) {
        alert("You won! But whoops... I guess I ate it!")
    }
    else if (guessedNumber === missedNumberPlus.toString() || guessedNumber === missedNumberMinus.toString()) {
        alert("So close! It almost seems like you don't want to win...")
        e.preventDefault();
    }
    else if (guessedNumber !== winnerNumber){
        alert("Nope. Try again!")
        e.preventDefault();
   }
}

const button = document.querySelector("button");
button.addEventListener("click", handleNumber);

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        handleNumber();
      }
});