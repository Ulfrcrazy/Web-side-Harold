
let randomNum1 = Math.floor(Math.random() * 6 ) + 1;

let randomImg = "dice" + randomNum1 + ".png";

let randomImgSource = "./assets/images/" + randomImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImgSource);

let randomNum2 = Math.floor(Math.random() * 6) + 1;
let randomImgSource2 = "./assets/images/dice" + randomNum2 + ".png";
var img2 = document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if(randomNum1 > randomNum2){
 document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
