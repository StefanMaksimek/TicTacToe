//audio.volume = 0.5;
let ALERT_AUDIO = new Audio("./audio/alert.mp3");
let SUCCESS_AUDIO = new Audio("#");
let WIN_AUDIO = new Audio("#");
let LOSE_AUDIO = new Audio("#");


function setPlayArea() {
    for (let i = 1; i <= 9; i++) {
        setPlayField(i);
    }
    setNewHoverEffect("var(--main-hover)")
    setRestartStartBtn()
}


function setSymbole(i) {
    if (proofFieldEmpty(i)) {
        document.getElementById(i).innerHTML = `
        <img src="./img/${activePlayer}">
    `;
        changePlayer(i);
    } else {
        ALERT_AUDIO.play();
    }
}


function setNewHoverEffect(b) {
    for (let a = 1; a <= 9; a++) {
        if (proofFieldEmpty(a)) {
            document.getElementById(a).addEventListener("mouseover", function () {
                document.getElementById(a).style.backgroundColor = b;
            })
        } else {
            document.getElementById(a).addEventListener("mouseover", function () {
                document.getElementById(a).style.backgroundColor = "var(--grey2-color)";
            })
        }
    }
    for (let a = 1; a <= 9; a++) {
        if (proofFieldEmpty(a)) {
            document.getElementById(a).addEventListener("mouseout", function () {
                document.getElementById(a).style.backgroundColor = "var(--grey2-color)";
            })
        } else {
            document.getElementById(a).style.backgroundColor = "var(--grey2-color)";
        }
    }
}


function changePlayer(i) {
    if (activePlayer === symbols[0]) {
        activePlayer = symbols[1];
        setNewHoverEffect("var(--main2-hover)")
    } else {
        activePlayer = symbols[0];
        setNewHoverEffect("var(--main-hover)")
    }

}


function proofFieldEmpty(i) {
    return document.getElementById(i).innerHTML === ``;
}


function setPlayField(i) {
    document.getElementById(i).innerHTML = ``;
}


function setRestartStartBtn() {
    document.getElementById('start').innerHTML = `Restart`;
}