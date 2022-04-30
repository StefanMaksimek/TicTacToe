function setPlayAreaHTML() {
    return `
    <div class="first-line row" id="first-line">
                <div class="play-field" id="1" onclick="setSymbole(1)">
                </div>
                <div class="play-field" id="2" onclick="setSymbole(2)">
                    <img src="./img/circle.png">
                </div>
                <div class="play-field" id="3" onclick="setSymbole(3)">
                    <img src="./img/circle.png">
                </div>
            </div>
    
            <div class="second-line row" id="second-line">
                <div class="play-field" id="4" onclick="setSymbole(4)">
                    <img src="./img/cross.png">
                </div>
                <div class="play-field" id="5" onclick="setSymbole(5)">
                </div>
                <div class="play-field" id="6" onclick="setSymbole(6)">
                    <img src="./img/cross.png">
                </div>
            </div>
    
            <div class="third-line row" id="third-line">
                <div class="play-field" id="7" onclick="setSymbole(7)">
                    <img src="./img/circle.png">
                </div>
                <div class="play-field" id="8" onclick="setSymbole(8)">
                    <img src="./img/circle.png">
                </div>
                <div class="play-field" id="9" onclick="setSymbole(9)">

                </div>
            </div>
    `;
}


function setDrawCardHTML() {
    return `
    <div class="draw">
            <span class="circle">D </span>
            <span class="cross">R </span>
            <span class="circle">A </span>
            <span class="cross">W</span>
        </div
    `
}
