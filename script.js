//query selector to get the tic tac toe squares
let squares = document.querySelectorAll('.tictactoeboard');
//let Player1 = 'red';
//let Player2 = 'blue';
//for now will go with player 1, or red goes first
let nextPlayer = 'red';

function ButtonClicked () {
  // if square[i] not white, alert or message pick another square, return
  // change square[i] to color of nextPlayer - //squares[].style.background-color = nextPlayer;
  // change nextPlayer color
}

//create a loop for the event listener
for (let i = 0; i < squares.length;i++) {
    squares[i].addEventListener('click',ButtonClicked);
}