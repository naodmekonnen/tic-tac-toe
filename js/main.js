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

// let displayDiv = document.getElementById('main');

// let gameInfo = document.createElement('h2');
//     gameInfo.textContent = '';
//     gameInfo.id = 'infoID';

// let resetButton = document.createElement('button');
//     resetButton.textContent = 'Reset Game';
//     resetButton.id = 'buttonID';

// displayDiv.append(gameInfo,resetButton);

// const tiles = document.querySelectorAll('.col btn');
// const statusText = document.querySelectorAll('#infoID');

// const winConditions = [
//         ['0','1','2'],
//         ['3','4','5'],
//         ['6','7','8'],
//         ['0','3','6'],
//         ['1','4','7'],
//         ['2','5','8'],
//         ['0','4','8'],
//         ['2','4','6']
// ];

// let box = 'col btn'
// let boardState = ['','','','','','','','',''];
// let currentPlayer = 'X';
// let gameOn = false;

// function init(){
//     tiles.forEach(box => box.addEventListener('click', tileClicked));
//     resetButton.addEventListener('click', resetGame);
//     statusText.textContent = `${currentPlayer}'s turn`;
//     gameOn = true;
// }

// function tileClicked(){
//     const tileIndex = this.getAttribute('data-tile');
//     if(boardState[tileIndex] != '' || !gameOn){
//         return;
//     } 
//     updateTile(this, tileIndex);
//     checkWin();
// }

// function updateTile(box, index){
//     boardState[index] = currentPlayer;
//     box.textContent = currentPlayer;
//     console.log(boardState[index])
// }

// function switchPlayer(){
//     currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
//     statusText.textContent = `${currentPlayer}'s turn`;
// }

// function checkWin(){
//     let game = false;
//     for(let i=0; i<winConditions.length; i++){
//         let condition = winConditions[i];
        
//         let tileA = boardState[condition[0]];
//         let tileB = boardState[condition[1]];
//         let tileC = boardState[condition[2]];

//         if(tileA == '' || tileB == '' || tileC == ''){
//             continue;
//         }
//         if(tileA == tileB && tileB == tileC){
//             game = true;
//             break;
//         }
    
//     }
//         if(game){
//             statusText.textContent = `${currentPlayer} wins!!`;
//             gameOn = false;
//         }
//         else if(boardState.includes('')){
//             statusText.textContent = "It's a tie";
//             gameOn = false;
//         }
//         else{
//             switchPlayer();
//         }
// }

// function resetGame(){
//     currentPlayer = 'X';
//     let boardState = ['','','','','','','','',''];
//     statusText.textContent = `${currentPlayer}'s turn`;
//     tiles.forEach(box => box.textContent = '');
//     gameOn = true;


// }































