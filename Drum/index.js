var n = document.querySelectorAll(".drum").length;

for (var i=0; i<n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        playsSound(this.innerHTML);

        animation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    playsSound(event.key);
    animation(event.key);
});

function playsSound(val) {
    switch(val){
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "s":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;

        case "f":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;

        case "k":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;

        case "l":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;

        default:
            console.log(val);
    }
}

function animation(val) {
    var a = document.querySelector("."+val);
    a.classList.add("pressed");

    setTimeout(function () {
        a.classList.remove("pressed");
    }, 100);
}