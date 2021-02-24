


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {



    document.querySelectorAll(".drum")[i].addEventListener("click", function () {



    var buttonInnerHTML = this.innerHTML;


    makeSound(buttonInnerHTML);


    buttonAnimation(buttonInnerHTML);




  });
}





document.addEventListener("keypress", function (event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});



function makeSound(key) {

  switch (key) {

    case "w": case "ц":

    var tom1 = new Audio("tom-1.mp3");
    tom1.play();

      break;

    case "a": case "ф":

    var tom2 = new Audio("tom-2.mp3");
    tom2.play();

      break;


    case "s": case "ы":

    var tom3 = new Audio("tom-3.mp3");
    tom3.play();

      break;


    case "d": case "в":

    var tom4 = new Audio("tom-4.mp3");
    tom4.play();


    break;

    case "j": case "о":

    var crash = new Audio("crash.mp3");
    crash.play();


    break;


    case "k": case "л":

    var kickBass = new Audio("kick-bass.mp3");
    kickBass.play();


    break;


    case "l": case "д":

    var snare = new Audio("snare.mp3");
    snare.play();


    break;


    default:;

  }

}








function buttonAnimation (currentKey) {


  var activeButton = document.querySelector("." + currentKey);


  activeButton.classList.add("pressed");


  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);


}
