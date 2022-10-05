## tic tac toe game requirements

### the game should let the players know whose turn it is
### the game should show the player's symbol off the board
### the game tiles should only be clickable once(disabled after a player's move or the game is over before resetting)
### the game should display who wins or ends in a tie
### the game should have reset button(not the page) to reset to initial state
### the game should continue until a win or draw state is reached or has been reset
### use only one <div> in the html, the rest will be created dynamically

## Layout
    - dynamically create a 3X3 grid 
    - the tiles in the grid must be clickable
--- 

# States in the game
## Initial state :clear board and ready to start game
## Player turns(state)
    - player makes a move and has the symbol X
    - (what happens when a player makes a move?)
        - a player clicks on a tile
        - that tile is makred X or O.
        - then that tile is disabled
        - the the board state is updated
        -       
    - second player moves after first and will have the symbol O
    - their turns alternate until a win or draw state is reached or the game is reset

## Current State(board)
    - the current state of the game keeps track of each move made and will update after each turn
    - there are only 9 possible turns in each game
    - an array with 9 indices will update to keep track of each move
    - the changes in the indices correspond to the cell selected in the game
    - once the array updates based on the cell number, there will be 8 remaining positions then seven and so on...
    - this board will continue to update until all the 9 positions are filled or the game is reset.
    - ex: current state = ['','','','','','','','','']
    - (how is this array updated as the game progresses? what function?)
    
## winning state
    - a player wins when three of the same symbols are laid horizontally, vertically or diagonally
    - there are 8 possible combinations for a win condition to be true;
    - horizontal - [0,1,2],[3,4,5],[6,7,8]
    - vertical -   [0,3,6], [1,4,7], [6,7,8]
    - diagonal -   [0,4,8], [2,4,6]
### How to check for winning conditions?
     - to check win condition: if any of the 8 winning conditions (an array of 3 indices that are defined above) are matched in the currentState array
    - (what method will be used to compare the two arrays?)

# Functions

## init()
    - sets the initial page of the game:clear board and ready to play

## drawBoard()
    - this function will dynamically create the DOM elements to create the playing board
    - this function will create separate divs for each tile in the game
    - it will also create the different bootstrap classes for each div

## handleClick
    - this function will execute when a tile in the game is clicked
    - this function will update the cells as they are clicked
    - 

## setState
    - (can this function be passed in as a parameter in the handleClick function?)
    - this function will update the state of the game
    - an empty array is set to be filled one at a time when each cell is clicked
    -     


## checkWin/draw
    - this function will check for a win
    - this function will run a conditional to check whether all nine tiles have been filled and a winning state has been reached. If all tiles are filled and no win has been
    reached, then it will be a draw.
## displayResult
    - after the checkWin function runs, this function will display the results of the game(win or draw)
## resetGame
    - after the displayResult function runs, this function executes and resets the board of the game
    - 