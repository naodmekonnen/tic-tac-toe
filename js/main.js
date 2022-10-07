const containerDiv = document.getElementById('main')
containerDiv.setAttribute('class', 'container text-center')

function setLayout(parent, tag, text, className, idName, number) {
    let element = document.createElement(tag)
    element.innerText = text
    if (className) {
        element.setAttribute('class', className)
    };
    if (idName) {
        element.setAttribute('id', idName)
    }
    if (number){
        element.setAttribute('data-tile', number)
    }
    parent.appendChild(element)
};

function setBoard(){
    setLayout(containerDiv,'div','','','gameContainer')

    setLayout(gameContainer, 'div', '', 'row', 'topRow')
    setLayout(topRow, 'button', '', 'col btn', 'col1', '0')
    setLayout(topRow, 'button', '', 'col btn', 'col2', '1')
    setLayout(topRow, 'button', '', 'col btn', 'col3', '2')
    setLayout(gameContainer, 'div', '', 'row', 'middleRow')
    setLayout(middleRow, 'button', '', 'col btn', 'col4', '3')
    setLayout(middleRow, 'button', '', 'col btn', 'col5', '4')
    setLayout(middleRow, 'button', '', 'col btn', 'col6', '5')
    setLayout(gameContainer, 'div', '', 'row', 'bottomRow')
    setLayout(bottomRow, 'button', '', 'col btn', 'col7', '6')
    setLayout(bottomRow, 'button', '', 'col btn', 'col8', '7')
    setLayout(bottomRow, 'button', '', 'col btn', 'col9', '8')

};
setBoard()
// console.log(setBoard)

let displayDiv = document.getElementById('main');

let gameInfo = document.createElement('h2');
    gameInfo.textContent = '';
    gameInfo.id = 'infoID';

let resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Game';
    resetButton.id = 'buttonID';

displayDiv.append(gameInfo,resetButton);

const tiles = document.querySelectorAll('.col btn');
const statusText = document.querySelectorAll('#infoID');

const winConditions = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
];

let box = 'col btn'
let boardState = ['','','','','','','','',''];
let currentPlayer = 'X';
let gameOn = false;

function init(){
    tiles.forEach(box => box.addEventListener('click', tileClicked));
    resetButton.addEventListener('click', resetGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    gameOn = true;
    console.log(resetButton)
}

function tileClicked(){
    const tileIndex = this.getAttribute('data-tile');
    if(boardState[tileIndex] != '' || !gameOn){
        return;
    } 
    updateTile(this, tileIndex);
    checkWin();
}

function updateTile(box, index){
    boardState[index] = currentPlayer;
    box.textContent = currentPlayer;
    console.log(currentPlayer)
}


function switchPlayer(){
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWin(){
    let game = false;
    for(let i=0; i<winConditions.length; i++){
        let condition = winConditions[i];
        
        let tileA = boardState[condition[0]];
        let tileB = boardState[condition[1]];
        let tileC = boardState[condition[2]];

        if(tileA == '' || tileB == '' || tileC == ''){
            continue;
        }
        if(tileA == tileB && tileB == tileC){
            game = true;
            break;
        }
    
    }
        if(game){
            statusText.textContent = `${currentPlayer} wins!!`;
            gameOn = false;
        }
        else if(boardState.includes('')){
            statusText.textContent = "It's a tie";
            gameOn = false;
        }
        else{
            switchPlayer();
        }

}

function resetGame(){
    currentPlayer = 'X';
    let boardState = ['','','','','','','','',''];
    statusText.textContent = `${currentPlayer}'s turn`;
    tiles.forEach(box => box.textContent = '');
    gameOn = true;


}
































// let att = 0;
// let id = 0;
// // let classnames = 0;
// function createDiv(){
//     let div = document.createElement('div');
//     div.innerHTML = 'div' + id;
//     div.id = 'tile' + id++;
//     div.className = 'boxes';
//     div.dataset.boxIndex = 'boxIndex' + att++;
//     document.body.appendChild(div);
// }
// for (let i=0; i<=8; i++){
//         createDiv();
//     }



// // let cells = document.querySelectorAll('.boxes');



// let tiles = Array.from(document.querySelector('.boxes'));
// console.log(tiles);

// function startGame(){
//     tiles.forEach(tiles => tiles.addEventlistener('click', updateTiles))
// };

// function updateTiles(){
//     let tileIndex = this.getAttribute('boxIndex');
//     console.log(tileIndex);

//     tiles[tileIndex].textContent = currentPlayer;
// }

// function changePlayer(){
//     if(currentPlayer === 'X'){
//         currentPlayer = 'O'
//     }else{
//         currentPlayer = 'X'
//     }
// } console.log(currentPlayer)

// function checkWin(){
//     for(let i=0; i<winConditions.length; i++){
        
//         let condition = winConditions[i]
        
//         let cell0 = boardState[condition[0]]
//         let cell1 = boardState[condition[1]]
//         let cell2 = boardState[condition[2]]
//         let cell3 = boardState[condition[3]]
//         let cell4 = boardState[condition[4]]
//         let cell5 = boardState[condition[5]]
//         let cell6 = boardState[condition[6]]
//         let cell7 = boardState[condition[7]]
//         let cell8 = boardState[condition[8]]
        
//         if(cell0 == '' || cell1 ==''|| cell2 ==''){
//             continue;
//         }
//         if(cell0 == cell1 && cell1 == cell2){
//             gameInfo.textContent = '`${currentPlayer} wins!!';
//             console.log(gameInfo.textContent);
//         }

//         if(cell3 == '' || cell4 ==''|| cell5 ==''){
//             continue;
//         }
//         if(cell3 == cell4 && cell4 == cell5){
//             gameInfo.textContent = '`${currentPlayer} wins!!';
//             console.log(gameInfo.textContent);
//         }

//         if(cell6 == '' || cell7 ==''|| cell8 ==''){
//             continue;
//         }
//         if(cell6 == cell7 && cell7 == cell8){
//             gameInfo.textContent = '`${currentPlayer} wins!!';
//             console.log(gameInfo.textContent);
//         }

//         if(cell0 == '' || cell3 ==''|| cell6 ==''){
//             continue;
//         }
//         if(cell0 == cell3 && cell3 == cell6){
//             gameInfo.textContent = '`${currentPlayer} wins!!';
//             console.log(gameInfo.textContent);
//         }

//         if(cell1 == '' || cell4 ==''|| cell7 ==''){
//             continue;
//         }
//         if(cell1 == cell4 && cell4 == cell7){
//             gameInfo.textContent = '`${currentPlayer} wins!!';
//             console.log(gameInfo.textContent);
//         }

//         if(cell2 == '' || cell5 ==''|| cell8 ==''){
//             continue;
//         }
//         if(cell2 == cell5 && cell5 == cell8){
//             gameInfo.textContent = '`${currentPlayer} wins!!';
//             console.log(gameInfo.textContent);
//         }

//         if(cell0 == '' || cell4 ==''|| cell8 ==''){
//             continue;
//         }
//         if(cell0 == cell4 && cell4 == cell8){
//             gameInfo.textContent = '`${currentPlayer} wins!!';
//             console.log(gameInfo.textContent);
//         }

//         if(cell2 == '' || cell4 ==''|| cell6 ==''){
//             continue;
//         }
//         if(cell2 == cell4 && cell4 == cell6){
//             gameInfo.textContent = '`${currentPlayer} wins!!';
//             console.log(gameInfo.textContent);
//         }


// }
// }

