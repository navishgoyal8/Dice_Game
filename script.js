var random1 = Math.floor(Math.random() * 6 + 1);
var random2 = Math.floor(Math.random() * 6 + 1);
// console.log(random1);
// console.log(random2);

if (random1 === random2) {
    document.querySelector(".img1").src = "images/dice" + random1 + ".png";
    document.querySelector(".img2").src = "images/dice" + random2 + ".png";
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (random1 > random2) {
    document.querySelector(".img1").src = "images/dice" + random1 + ".png";
    document.querySelector(".img2").src = "images/dice" + random2 + ".png";
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else {
    document.querySelector(".img1").src = "images/dice" + random1 + ".png";
    document.querySelector(".img2").src = "images/dice" + random2 + ".png";
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
