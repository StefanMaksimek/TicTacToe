let players = ["circle", "cross"]
let fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let activePlayer = players[0];

let ALERT_AUDIO = new Audio("./audio/alert.mp3");


function setPlayArea() {
    document.getElementById('play-area').innerHTML = setPlayAreaHTML();
    for (let i = 1; i <= 9; i++) {
        setPlayField(i);
    }
    fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    activePlayer = players[0];
    setNewHoverEffect("var(--main-hover)")
    setBlockDivOFF()
    setRestartStartBtn();
    document.getElementById('header').innerHTML = `<h1>TicTacToe</h1>`;
    document.getElementById('header').style.color = '#000205'
}


function setSymbole(i) {
    if (proofFieldEmpty(i)) {
        document.getElementById(i).innerHTML = `
        <img src="./img/${activePlayer}.png">
        `;
        fields[i - 1] = activePlayer
        if (proofWin()) {
            fillwinfields();
            setWinningCard();
            setBlockDiv();
        } else if (proofDraw()) {
            setDrawCard()
        }
        else {
            changePlayer();
        }
    } else {
        ALERT_AUDIO.play();
    }
}


function setBlockDiv() {
    document.getElementById('block').className = 'block';
}


function setBlockDivOFF() {
    document.getElementById('block').className = 'd-none';
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


function setNewHoverEffectOFF() {
    for (let a = 1; a <= 9; a++) {
        document.getElementById(a).addEventListener("mouseover", function () {
            document.getElementById(a).style.backgroundColor = "var(--grey2-color)";
        })
    }
    for (let a = 1; a <= 9; a++) {
        document.getElementById(a).addEventListener("mouseout", function () {
            document.getElementById(a).style.backgroundColor = "var(--grey2-color)";
        })
    }
}


function changePlayer() {
    if (activePlayer === players[0]) {
        activePlayer = players[1];
        setNewHoverEffect("var(--main2-hover)")
    } else {
        activePlayer = players[0];
        setNewHoverEffect("var(--main-hover)")
    }
}


function proofFieldEmpty(i) {
    return document.getElementById(i).innerHTML === ``;
}


function setPlayField(i) {
    document.getElementById(i).className = 'play-field';
    document.getElementById(i).innerHTML = ``;
}


function setRestartStartBtn() {
    document.getElementById('start').innerHTML = `Restart`;
}


function proofWin() {
    return proofHrizontaly() || proofDiagonal() || proofVertical();
}


function proofHrizontaly() {
    return fields[0] === fields[1] && fields[1] === fields[2] || //horizontal oben
        fields[3] === fields[4] && fields[4] === fields[5] ||        //horizontal mitte
        fields[6] === fields[7] && fields[7] === fields[8]           //horizontal unten
}


function proofDiagonal() {
    return fields[6] === fields[4] && fields[4] === fields[2] || //diagonal links unten -> rechts oben
        fields[0] === fields[4] && fields[4] === fields[8]           //diagonal links oben -> rechts unten
}


function proofVertical() {
    return fields[0] === fields[3] && fields[3] === fields[6] || //vertikal links
        fields[1] === fields[4] && fields[4] === fields[7] ||        //vertikal mitte
        fields[2] === fields[5] && fields[5] === fields[8];          //vertikal rechts
}


function proofDraw() {
    return proofDrawLineOne() && proofDrawLineTwo() && proofDrawLineThree()
}


function proofDrawLineOne() {
    return (fields[0] === players[0] || fields[0] === players[1]) &&
        (fields[1] === players[0] || fields[1] === players[1]) &&
        (fields[2] === players[0] || fields[2] === players[1])
}


function proofDrawLineTwo() {
    return (fields[3] === players[0] || fields[3] === players[1]) &&
        (fields[4] === players[0] || fields[4] === players[1]) &&
        (fields[5] === players[0] || fields[5] === players[1])
}


function proofDrawLineThree() {
    return (fields[6] === players[0] || fields[6] === players[1]) &&
        (fields[7] === players[0] || fields[7] === players[1]) &&
        (fields[8] === players[0] || fields[8] === players[1])
}


function fillwinfields() {
    if (proofHrizontaly) {
        setHorizontally();
    }
    if (proofVertical()) {
        setVertically();
    }
    if (proofDiagonal()) {
        setDiagonal()
    }
}


function setHorizontally() {
    if (fields[0] === fields[1] && fields[1] === fields[2]) {
        document.getElementById(1).classList.add('t-up-left');
        document.getElementById(2).classList.add('t-up');
        document.getElementById(3).classList.add('t-up-right');
    }
    if (fields[3] === fields[4] && fields[4] === fields[5]) {
        document.getElementById(4).classList.add('t-left');
        document.getElementById(5).classList.add('t-middle');
        document.getElementById(6).classList.add('t-right');
    }
    if (fields[6] === fields[7] && fields[7] === fields[8]) {
        document.getElementById(7).classList.add('t-down-left');
        document.getElementById(8).classList.add('t-down');
        document.getElementById(9).classList.add('t-down-right');
    }
}


function setVertically() {
    if (fields[0] === fields[3] && fields[3] === fields[6]) {
        document.getElementById(1).classList.add('t-up-left');
        document.getElementById(4).classList.add('t-left');
        document.getElementById(7).classList.add('t-down-left');
    }
    if (fields[1] === fields[4] && fields[4] === fields[7]) {
        document.getElementById(2).classList.add('t-up');
        document.getElementById(5).classList.add('t-middle');
        document.getElementById(8).classList.add('t-down');
    }
    if (fields[2] === fields[5] && fields[5] === fields[8]) {
        document.getElementById(3).classList.add('t-up-right');
        document.getElementById(6).classList.add('t-right');
        document.getElementById(9).classList.add('t-down-right');
    }
}


function setDiagonal() {
    if (fields[0] === fields[4] && fields[4] === fields[8]) {
        document.getElementById(1).classList.add('t-up-left');
        document.getElementById(5).classList.add('t-middle');
        document.getElementById(9).classList.add('t-down-right');
    }
    if (fields[2] === fields[4] && fields[4] === fields[6]) {
        document.getElementById(3).classList.add('t-up-right');
        document.getElementById(5).classList.add('t-middle');
        document.getElementById(7).classList.add('t-down-left');
    }
}


function setWinningCard() {
    document.getElementById('header').innerHTML = `<span>${activePlayer} Wins</span>`
    if (activePlayer == players[0]) {
        document.getElementById('header').style.color = 'var(--main-color)'
    } else {
        document.getElementById('header').style.color = 'var(--main2-color)'
    }
}


function setDrawCard() {
    document.getElementById('first-line').classList.add('line-down')
    document.getElementById('third-line').classList.add('line-up')
    document.getElementById('second-line').innerHTML = setDrawCardHTML()


}