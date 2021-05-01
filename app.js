var number = document.querySelectorAll(".drum").length;

for (var i = 0; i < number; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // this.style.color = "white";
        var button = this.innerHTML;

        characterChecking(button);

        Animate(button);

    });

}
document.addEventListener("keydown", function (event) {

    // console.log(event.key);

    characterChecking(event.key);

    Animate(event.key);

});

function characterChecking(condition) {

    switch (condition) {

        case "w":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;

        case "a":
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;

        case "s":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;

        default: console.log(condition);
            break;
    }

}

function Animate(charcterKey) {
    var AnimateKey = document.querySelector("." + charcterKey);



    AnimateKey.classList.add("pressed");


    setTimeout(function () {

        AnimateKey.classList.remove("pressed");
    }, 100);
}
