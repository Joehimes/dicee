
function randomNumber1() {
    return Math.floor((Math.random() * 6) + 1);
}

let num1 = randomNumber1();
let num2 = randomNumber1();

let leftDice = document.querySelector(".img1");
let rightDice = document.querySelector(".img2");
let title = document.querySelector(".title");

leftDice.src = "images/dice" + num1 + ".png";
rightDice.src = "images/dice" + num2 + ".png";

if (num1 === num2) {
    title.innerHTML = "Draw";
} else if (num1 > num2) {
    title.innerHTML = "Player 1 Wins!";
} else {
    title.innerHTML = "Player 2 Wins!";
}