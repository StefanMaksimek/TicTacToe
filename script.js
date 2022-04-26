function setSymbole(i) {
    
    document.getElementById(i).innerHTML = `
        <img src="./img/${activePlayer}">
    `;
    changePlayer();
}

function changePlayer() {
  if ( activePlayer === symbols[0]) {
      activePlayer = symbols[1];
  } else {
    activePlayer = symbols[0];
  }
}