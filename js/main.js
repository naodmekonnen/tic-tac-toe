
let id = 0;
classnames = 0;
att = 0;
function createDiv(){
    let div = document.createElement('div');
    // div.innerHTML = 'div' + id;
    div.id = 'tile' + id++;
    div.className = 'boxes';
    div.setAttribute = 'boxIndex' + att++;
    document.body.appendChild(div);
}
for (let i=0; i<=8; i++){
        createDiv();
    }

    let displayDiv = document.getElementById('main');

let gameInfo = document.createElement('h2');
    gameInfo.textContent = '';
    gameInfo.id = 'infoID';

let resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Game';
    resetButton.id = 'buttonID';

displayDiv.append(gameInfo,resetButton);

let cells = document.querySelectorAll('.boxes');

let winConditions = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
    ];


let boardState = ['','','','','','','','',''];
let currentPlayer = 'X';
let gameOn = true;
let tiles = Array.from(document.querySelector('.boxes'));

function startGame(){
    tiles.forEach(tiles => tiles.addEventlistener('click', updateTiles))
}

function updateTiles(){
    let tileIndex = this.getElementById('id');

    tiles[tilesIndex].textContent = currentPlayer;
}

function changePlayer(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O'
    }else{
        currentPlayer = 'X'
    }
}

function checkWin(){
    for(let i=0; i<win.length; i++){
        let condition = win[i]

        let cell0 = boardState[condition[0]]
        let cell1 = boardState[condition[1]]
        let cell2 = boardState[condition[2]]

        if(cell0 == '' || cell1 ==''|| cell3 ==''){
            continue;
        }
        if(cell0 == cell1 && cell1 == cell2){
            gameInfo.textContent = '`${currentPlayer} wins!!'
        }
}
}