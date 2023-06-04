/*document.querySelector(".btn").addEventListener("click", instrumentSound);

function instrumentSound() {
  let recording = new Audio("sounds/boom.wav");

  recording.play();
}*/

let buttonInstruction = document.querySelectorAll(".btn").length;
// let buttonHTML = this.innerHTML;

function clickHandler() {
  let buttonHTML = this.querySelector("h2").innerText; //forEach? classList?
  let recording;
  switch (buttonHTML) {
    case "A":
      recording = new Audio("/sounds/boom.wav");
      break;

    case "S":
      recording = new Audio("/sounds/clap.wav");
      break;
    case "D":
      recording = new Audio("/sounds/hihat.wav");
      break;

    case "F":
      recording = new Audio("/sounds/kick.wav");
      break;
    case "G":
      recording = new Audio("/sounds/openhat.wav");
      break;

    case "H":
      recording = new Audio("/sounds/ride.wav");
      break;

    case "J":
      recording = new Audio("/sounds/snare.wav");
      break;

    case "K":
      recording = new Audio("/sounds/tink.wav");
      break;

    case "L":
      recording = new Audio("/sounds/tom.wav");
      break;

    default:
  }
  recording.play();
}
let buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttonInstruction; i++) {
  //console.log("i=", i);
  buttons[i].addEventListener("click", clickHandler);
}
