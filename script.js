//audio.volume = 0.5;
let ALERT_AUDIO = new Audio("./audio/alert.mp3");
let SUCCESS_AUDIO = new Audio("#");
let WIN_AUDIO = new Audio("#");
let LOSE_AUDIO = new Audio("#");


function setPlayArea() {
    for(let i = 1; i <= 9; i++) {
        setPlayField(i);
    }
}


function setSymbole(i) {
    if(proofFieldEmpty(i)) {
        document.getElementById(i).innerHTML = `
        <img src="./img/${activePlayer}">
    `;
    changePlayer();
    } else {
        ALERT_AUDIO.play();
    }
}


function changePlayer() {
  if ( activePlayer === symbols[0]) {
      activePlayer = symbols[1];
  } else {
    activePlayer = symbols[0];
  }
}


function proofFieldEmpty(i) {
    return document.getElementById(i).innerHTML === ``;
}


function setPlayField(i) {
    document.getElementById(i).innerHTML = ``;
}
