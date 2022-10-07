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


























// let boardState = ['','','','','','','','',''];
// let currentPlayer = 'X';
// let btn = document.querySelectorAll('col btn');

// let displayDiv = document.getElementById('main');

// let gameInfo = document.createElement('h2');
//     gameInfo.textContent = '';
//     gameInfo.id = 'infoID';

// let resetButton = document.createElement('button');
//     resetButton.textContent = 'Reset Game';
//     resetButton.className = 'reset';
//     resetButton.id = 'buttonID';

// displayDiv.append(gameInfo,resetButton);

// let showStatus = document.getElementById('infoID')
// let gameStatus = true;

// let win = () => `Player ${currentPlayer} wins`;
// let draw = () => `It's a tie`;
// let playerturn = () => `It's ${currentPlayer}'s turn`;

// showStatus.innerHTML = playerturn;

// function playerMove(clickedTile, tileIndex){
//     boardState[tileIndex] = currentPlayer;
//     clickedtile.innerHTML = currentPlayer;
// }

// function switchPlayer(){
//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     showStatus.innerHTML = playerturn();
// }

// function checkWin(){
//     let winGame = false;
//     for(let i=0; i<=8; i++){
//         let condition = winConditions[i];
//         let A = boardState[condition[0]];
//         let B = boardState[condition[1]];
//         let C = boardState[condition[2]];
    
//     if(A === '' || B === ''|| C == '')
//         continue;
//     if(A === B  && B === C){
//         winGame = true;
//         break;
//     }
// }
// switchPlayer()
// }

// function tileClicked(clickedbox){
//     let clickedTile = clickedbox.target;
//     let tileIndex = clickedTile.getAttribute('data-tile');

//     if(boardState[tileIndex] !== '' || !gameStatus)
//     return;

//     playerMove();
//     checkWin();

// }


// let box = 'col btn';
// console.log(box)
// function resetGame(){
// gameStatus = true;
// currentPlayer = 'X';
// let boardState = ['','','','','','','','',''];
// showStatus.innerHTML = playerturn();
// document.querySelectorAll('box').forEach(box => box.innerHTML = '');

// }

// document.querySelectorAll('box')
// .