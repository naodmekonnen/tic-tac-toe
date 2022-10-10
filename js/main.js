function createElement(Parent, tag, text, className, idName, cellIndexnum, styleType){

    let element = document.createElement(tag)
    element.innerText = text; 

    if(className){
        element.setAttribute('class', className);
    }

    if(idName){
        element.setAttribute('id', idName);
    }

    if(cellIndexnum){
        element.setAttribute('cellIndex', cellIndexnum);
    }

    if(styleType){
        element.setAttribute('style', styleType);
    }

    Parent.appendChild(element)
}

const wrapper = document.getElementById('maincontainer')

function setBoard(){

    createElement(wrapper, 'h1', 'Tic Tac Toe', '', '', '', '',);                 
    createElement(wrapper, 'div', '', 'card', 'cardContainer', '', '',);               
    createElement(cardContainer, 'div', '', 'row', 'row1', '', 'height:150px',)     
    createElement(row1, 'div', '', 'col', 'column1A', '', '',);                     
    createElement(column1A, 'div', '', 'cell', '', '0', 'height: 125px',);            
    createElement(row1, 'div', '', 'col', 'column1B', '', '',);
    createElement(column1B, 'div', '', 'cell', '', '1', 'height: 125px',);
    createElement(row1, 'div', '', 'col', 'column1C', '', '',);
    createElement(column1C, 'div', '', 'cell', '', '2', 'height: 125px',);

    createElement(cardContainer, 'div', '', 'row', 'row2', '', 'height: 150px',);
    createElement(row2, 'div', '', 'col', 'column2A', '', '',);                     
    createElement(column2A, 'div', '', 'cell', '', '3', 'height: 125px',);
    createElement(row2, 'div', '', 'col', 'column2B', '', '',);
    createElement(column2B, 'div', '', 'cell', '', '4', 'height: 125px',);
    createElement(row2, 'div', '', 'col', 'column2C', '', '',);
    createElement(column2C, 'div', '', 'cell', '', '5', 'height: 125px',);

    createElement(cardContainer, 'div', '', 'row', 'row3', '', 'height: 150px',);        
    createElement(row3, 'div', '', 'col', 'column3A', '', '',);
    createElement(column3A, 'div', '', 'cell', '', '6', 'height: 125px',);
    createElement(row3, 'div', '', 'col', 'column3B', '', '',);
    createElement(column3B, 'div', '', 'cell', '', '7', 'height: 125px',);
    createElement(row3, 'div', '', 'col', 'column3C', '', '',);
    createElement(column3C, 'div', '', 'cell', '', '8', 'height: 125px',);

    createElement(wrapper, 'h2', '', '', 'statusText', '', '',);                  
    createElement(wrapper, 'button', 'RESET', 'btn btn-outline-dark btn-lg', 'resetBtn', '', '',); 

}

setBoard()

let boardState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let statusText = document.querySelector('#statusText');
let resetBtn = document.querySelector('#resetBtn');


let tiles = document.querySelectorAll('.cell');
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const game = (tile, index) => {
    tile.value = currentPlayer;
    tile.disabled = true;
    boardState[index] = currentPlayer;
    currentPlayer = (currentPlayer == 'X') ? 'O': 'X';
    statusText.innerHTML = `${currentPlayer}'s turn`;

    for(let i=0; i<winConditions.length; i++){
        let condition = winConditions[i];
        let A = boardState[condition[0]];
        let B = boardState[condition[1]];
        let C = boardState[condition[2]];

    if(A == '' || B == '' || C == ''){
        continue;
    }

    if((A==B) && (B==C)){
        statusText.innerHTML = `Player ${A} Wins!!`;
        tiles.forEach((tile) => tile.disabled = true);           
        }
    }
}

function resetGame(){
    boardState = ['', '', '', '', '', '', '', '', ''];
    tiles.forEach((tile) =>{
        tile.value = '';
    });
    currentPlayer = 'X';
    tiles.forEach((tile) => tile.disabled = false);
}

document.querySelector('#resetBtn').addEventListener('click', resetGame);

tiles.forEach((tile, i)=>{
    tile.addEventListener('click',() => game(tile, i))
});
