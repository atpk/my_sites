var randomNumber1 = 1 + Math.floor(6*Math.random());
var imgg = "images/dice" + randomNumber1 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", imgg);

var randomNumber2 = 1 + Math.floor(6*Math.random());
imgg = "images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[1].setAttribute("src", imgg);

if(randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent="Hurray! Number 1 is the winner!";
else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent="Hurray! Number 2 is the winner!";
else
    document.querySelector("h1").textContent="Sorry! Match drawn";