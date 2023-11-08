const secretNumber = () => {
    let number = Math.ceil(Math.random() * 25);
    return number.toString();
}


let winnerNumber = secretNumber();
console.log(winnerNumber);
let missedNumberPlus = parseFloat(winnerNumber) + 1;
console.log(missedNumberPlus);
let missedNumberMinus = parseFloat(winnerNumber) - 1;
console.log(missedNumberMinus);

const handleNumber = (e) => {
    let guessedNumber = document.getElementById("guessedNumber").value;
    if (guessedNumber == 0 || guessedNumber > 26) {
        alert ("This is a impossible number. Try a different one!")
    }
    else if (guessedNumber === winnerNumber) {
        alert("You won! But whoops... I guess I ate it!")
    }
    else if (guessedNumber === missedNumberPlus.toString() || guessedNumber === missedNumberMinus.toString()) {
        alert("So close! It almost seems like you don't want to win...")
    }
    else if (guessedNumber !== winnerNumber){
        alert("Nope. Try again!")
   }
   console.log(guessedNumber);
   e.preventDefault();
}


const button = document.querySelector("button");
button.addEventListener("click", handleNumber);

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        handleNumber();
      }
});