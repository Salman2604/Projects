var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var imageSource1 = "images/dice" + randomNumber1 + ".png";

var player1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var imageSource2 = "images/dice" + randomNumber2 + ".png";

var player2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector('h3').innerHTML = "Player 1 is winner"
} else if(randomNumber1<randomNumber2){
    document.querySelector('h3').innerHTML = "Player 2 is winner"
} else {
    document.querySelector('h3').innerHTML = "No one is winner"
}