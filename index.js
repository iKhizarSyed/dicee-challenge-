var randomNumerber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice"+ randomNumerber1 + ".png"
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource );

// for image2

var randomNumber2 = Math.floor(Math.random()* 6) + 1;
var randomImageSource2 = "images/dice"+ randomNumber2+ ".png"
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// applying result thru if statement 

if (randomImageSource>randomImageSource2) {
    document.querySelector("h1").innerHTML= "PLAYER 1 IS WINNER"
}
else if (randomImageSource2>randomImageSource){
    document.querySelector("h1").innerHTML= "PLAYER 2 IS WINNER"
}
else {
    document.querySelector("h1").innerHTML= "DRAW"
}