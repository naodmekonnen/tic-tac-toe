
let id = 0;
// let classnames = 0;
function createDiv(){
    let div = document.createElement('div');
    div.innerHTML = 'div' + id;
    div.id = 'tile' + id++;
    div.className = 'g-col-6">.g-col-6';
    // div.setAttribute = 'boxIndex' + att++;
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

// let cells = document.querySelectorAll('.boxes');

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
console.log(tiles);

function startGame(){
    tiles.forEach(tiles => tiles.addEventlistener('click', updateTiles))
};

function updateTiles(){
    let tileIndex = this.getElementById('id');
    console.log(tileIndex);

    tiles[tileIndex].textContent = currentPlayer;
}

function changePlayer(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O'
    }else{
        currentPlayer = 'X'
    }
} console.log(currentPlayer)

function checkWin(){
    for(let i=0; i<winConditions.length; i++){
        
        let condition = winConditions[i]
        
        let cell0 = boardState[condition[0]]
        let cell1 = boardState[condition[1]]
        let cell2 = boardState[condition[2]]
        let cell3 = boardState[condition[3]]
        let cell4 = boardState[condition[4]]
        let cell5 = boardState[condition[5]]
        let cell6 = boardState[condition[6]]
        let cell7 = boardState[condition[7]]
        let cell8 = boardState[condition[8]]
        
        if(cell0 == '' || cell1 ==''|| cell2 ==''){
            continue;
        }
        if(cell0 == cell1 && cell1 == cell2){
            gameInfo.textContent = '`${currentPlayer} wins!!';
            console.log(gameInfo.textContent);
        }

        if(cell3 == '' || cell4 ==''|| cell5 ==''){
            continue;
        }
        if(cell3 == cell4 && cell4 == cell5){
            gameInfo.textContent = '`${currentPlayer} wins!!';
            console.log(gameInfo.textContent);
        }

        if(cell6 == '' || cell7 ==''|| cell8 ==''){
            continue;
        }
        if(cell6 == cell7 && cell7 == cell8){
            gameInfo.textContent = '`${currentPlayer} wins!!';
            console.log(gameInfo.textContent);
        }

        if(cell0 == '' || cell3 ==''|| cell6 ==''){
            continue;
        }
        if(cell0 == cell3 && cell3 == cell6){
            gameInfo.textContent = '`${currentPlayer} wins!!';
            console.log(gameInfo.textContent);
        }

        if(cell1 == '' || cell4 ==''|| cell7 ==''){
            continue;
        }
        if(cell1 == cell4 && cell4 == cell7){
            gameInfo.textContent = '`${currentPlayer} wins!!';
            console.log(gameInfo.textContent);
        }

        if(cell2 == '' || cell5 ==''|| cell8 ==''){
            continue;
        }
        if(cell2 == cell5 && cell5 == cell8){
            gameInfo.textContent = '`${currentPlayer} wins!!';
            console.log(gameInfo.textContent);
        }

        if(cell0 == '' || cell4 ==''|| cell8 ==''){
            continue;
        }
        if(cell0 == cell4 && cell4 == cell8){
            gameInfo.textContent = '`${currentPlayer} wins!!';
            console.log(gameInfo.textContent);
        }

        if(cell0 == '' || cell1 ==''|| cell3 ==''){
            continue;
        }
        if(cell0 == cell1 && cell1 == cell2){
            gameInfo.textContent = '`${currentPlayer} wins!!';
            console.log(gameInfo.textContent);
        }


}
}