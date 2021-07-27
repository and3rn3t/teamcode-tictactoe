//query selector to get the tic tac toe squares
let squares = document.querySelectorAll('.square');
//let Player1 = 'red';
//let Player2 = 'blue';
//for now will go with player 1, or red goes first
let nextPlayer = 'red';
let refresh = document.querySelector('#reset');

function buttonClicked(evt) {
    evt.preventDefault();
    console.log("in buttonclicked");
    console.log(evt);
    console.log(evt.srcElement);
    console.log("color is",evt.srcElement.style.background_color);
    //if square already picked, alert to choose another square
    if (evt.srcElement.style.background == 'red' || evt.srcElement.style.background == 'blue') {
        alert('This square already picked, choose another');
        return;
    }
    // change square[i] to color of nextPlayer - //squares[].style.background-color = nextPlayer;
    evt.srcElement.style.background = nextPlayer;
    // change nextPlayer color
    if (nextPlayer == 'red') {
        nextPlayer = 'blue';
    } else {
        nextPlayer = 'red';
    }
}

function resetBoard(evt) {
    evt.preventDefault();
    for (let j = 0; j < squares.length; j++) {
        squares[j].style.background = 'bisque';
    }
}

    //create a loop for the event listener
    for (let i = 0; i < squares.length; i++) {
        console.log(i);
        squares[i].addEventListener('click', buttonClicked);
    }

    reset.addEventListener('click', resetBoard);