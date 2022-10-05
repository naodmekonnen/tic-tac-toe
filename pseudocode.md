## tic tac toe game requirements
---
### the game should let the players know whose turn it is
### the game should show the player's symbol off the board
### the game tiles should only be clickable once(disabled after a player's move or the game is over before resetting)
### the game should display who wins or ends in a tie
### the game should have reset button(not the page) to reset to initial state
### the game should continue until a win or draw state is reached or has been reset
### use only one <div> in the html, the rest will be created dynamically

## Layout
### dynamically create a 3X3 grid using bootstrap/css

## States in the game
## Initial state :clear board and ready to start game
## Player turns
    - player makes a move and has the symbol X
    - player moves after first and will have the symbol O
    - their turns alternate until a win or draw state is reached or the game is reset
## Current State
    - the current state of the game keeps track of each move made and will be updated after each turn
    - there are only 9 possible turns in each game
    - an array with 9 indices will keep





## winning state
    - a player wins when three of the same symbols are laid horizontally, vertically or diagonally
    - there are 8 possible combinations for a win condition to be true;
    - horizontal - [0,1,2],[3,4,5],[6,7,8]
    - vertical - [0,3,6], [1,4,7], [6,7,8]
    - diagonal - [0,4,8], [2,4,6]
### How to check for winning conditions?
    - 