const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

// function createElement(Parent, tag, text, className, idName, cellIndexnum, styleType){

//     let element = document.createElement(tag)
//     element.innerText = text; 

//     if(className){
//         element.setAttribute('class', className);
//     }

//     if(idName){
//         element.setAttribute('id', idName);
//     }

//     if(cellIndexnum){
//         element.setAttribute('cellIndex', cellIndexnum);
//     }

//     if(styleType){
//         element.setAttribute('style', styleType);
//     }

//     Parent.appendChild(element)
// }

// const wrapper = document.getElementById('maincontainer')

// function setBoard(){

//     createElement(wrapper, 'h1', 'Tic Tac Toe', '', '', '', '',);                 
//     createElement(wrapper, 'div', '', 'card', 'cardContainer', '', '',);               
//     createElement(cardContainer, 'div', '', 'row', 'row1', '', 'height:150px',)     
//     createElement(row1, 'div', '', 'col', 'column1A', '', '',);                     
//     createElement(column1A, 'div', '', 'cell', '', '0', 'height: 125px',);            
//     createElement(row1, 'div', '', 'col', 'column1B', '', '',);
//     createElement(column1B, 'div', '', 'cell', '', '1', 'height: 125px',);
//     createElement(row1, 'div', '', 'col', 'column1C', '', '',);
//     createElement(column1C, 'div', '', 'cell', '', '2', 'height: 125px',);

//     createElement(cardContainer, 'div', '', 'row', 'row2', '', 'height: 150px',);
//     createElement(row2, 'div', '', 'col', 'column2A', '', '',);                     
//     createElement(column2A, 'div', '', 'cell', '', '3', 'height: 125px',);
//     createElement(row2, 'div', '', 'col', 'column2B', '', '',);
//     createElement(column2B, 'div', '', 'cell', '', '4', 'height: 125px',);
//     createElement(row2, 'div', '', 'col', 'column2C', '', '',);
//     createElement(column2C, 'div', '', 'cell', '', '5', 'height: 125px',);

//     createElement(cardContainer, 'div', '', 'row', 'row3', '', 'height: 150px',);        
//     createElement(row3, 'div', '', 'col', 'column3A', '', '',);
//     createElement(column3A, 'div', '', 'cell', '', '6', 'height: 125px',);
//     createElement(row3, 'div', '', 'col', 'column3B', '', '',);
//     createElement(column3B, 'div', '', 'cell', '', '7', 'height: 125px',);
//     createElement(row3, 'div', '', 'col', 'column3C', '', '',);
//     createElement(column3C, 'div', '', 'cell', '', '8', 'height: 125px',);

//     createElement(wrapper, 'h2', '', '', 'statusText', '', '',);                  
//     createElement(wrapper, 'button', 'RESET', 'btn btn-outline-dark btn-lg', 'resetBtn', '', '',); 

// }

// setBoard()

// let boardState = ['', '', '', '', '', '', '', '', ''];
// let currentPlayer = 'X';
// let statusText = document.querySelector('#statusText');
// let resetBtn = document.querySelector('#resetBtn');


// let tiles = document.querySelectorAll('.cell');
// let winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// const game = (tile, index) => {
//     tile.value = currentPlayer;
//     tile.disabled = true;
//     boardState[index] = currentPlayer;
//     currentPlayer = (currentPlayer == 'X') ? 'O': 'X';
//     statusText.innerHTML = `${currentPlayer}'s turn`;

//     for(let i=0; i<winConditions.length; i++){
//         let condition = winConditions[i];
//         let A = boardState[condition[0]];
//         let B = boardState[condition[1]];
//         let C = boardState[condition[2]];

//     if(A == '' || B == '' || C == ''){
//         continue;
//     }

//     if((A==B) && (B==C)){
//         statusText.innerHTML = `Player ${A} Wins!!`;
//         tiles.forEach((tile) => tile.disabled = true);           
//         }
//     }
// }

// function resetGame(){
//     boardState = ['', '', '', '', '', '', '', '', ''];
//     tiles.forEach((tile) =>{
//         tile.value = '';
//     });
//     currentPlayer = 'X';
//     tiles.forEach((tile) => tile.disabled = false);
// }

// document.querySelector('#resetBtn').addEventListener('click', resetGame);

// tiles.forEach((tile, i)=>{
//     tile.addEventListener('click',() => game(tile, i))
// });