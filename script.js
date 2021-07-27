//query selector to get the tic tac toe squares
let squares = document.querySelectorAll('.square');
//let Player1 = 'red';
//let Player2 = 'blue';
//for now will go with player 1, or red goes first
let nextPlayer = 'red';
let refresh = document.querySelector('#reset');
let count = 1;
document.querySelector('#whosturn').innerHTML = `it's ${nextPlayer}'s turn`;
function buttonClicked(evt) {
    evt.preventDefault();
    //   console.log("in buttonclicked",count);
    //  console.log(evt);
    //    console.log(evt.srcElement);
    //    console.log("color is",evt.srcElement.style.background);
    //if square already picked, alert to choose another square
    if (evt.srcElement.style.background == 'red' || evt.srcElement.style.background == 'blue') {
        alert('This square already picked, choose another');
        return;
    }
    // change square[i] to color of nextPlayer - //squares[].style.background-color = nextPlayer;
    evt.srcElement.style.background = nextPlayer;
    // change nextPlayer color
    checkForWinner(nextPlayer, count);
    if (nextPlayer == 'red') {
        nextPlayer = 'blue';
    } else {
        nextPlayer = 'red';
    }
    document.querySelector('#whosturn').innerHTML = `it's ${nextPlayer}'s turn`;
    count++;
}

function resetBoard(evt) {
    count = 1;
    evt.preventDefault();
    document.querySelector('#winner').innerHTML = '';
    for (let j = 0; j < squares.length; j++) {
        squares[j].style.background = 'bisque';
    }
}

function checkForWinner(winColor, inCount) {
    //   let possibleWInners = [squares[0],squares[1],squares[2]], [sqaures[3],squares[4],squares[5]];
    //console.log('in check winner',winColor,count);
    //console.log('0 = ',squares[0].style.background);
    if (squares[0].style.background == winColor && squares[1].style.background == winColor && squares[2].style.background == winColor) {
        document.querySelector('#winner').innerHTML = `${winColor} is the winner!`;
    } else if (squares[3].style.background == winColor && squares[4].style.background == winColor && squares[5].style.background == winColor) {
        document.querySelector('#winner').innerHTML = `${winColor} is the winner!`;
    } else if (squares[6].style.background == winColor && squares[7].style.background == winColor && squares[8].style.background == winColor) {
        document.querySelector('#winner').innerHTML = `${winColor} is the winner!`;
    } else if (squares[0].style.background == winColor && squares[3].style.background == winColor && squares[6].style.background == winColor) {
        document.querySelector('#winner').innerHTML = `${winColor} is the winner!`;
    } else if (squares[1].style.background == winColor && squares[4].style.background == winColor && squares[7].style.background == winColor) {
        document.querySelector('#winner').innerHTML = `${winColor} is the winner!`;
    } else if (squares[2].style.background == winColor && squares[5].style.background == winColor && squares[8].style.background == winColor) {
        document.querySelector('#winner').innerHTML = `${winColor} is the winner!`;
    } else if (squares[0].style.background == winColor && squares[4].style.background == winColor && squares[8].style.background == winColor) {
        document.querySelector('#winner').innerHTML = `${winColor} is the winner!`;
    } else if (squares[2].style.background == winColor && squares[4].style.background == winColor && squares[6].style.background == winColor) {
        document.querySelector('#winner').innerHTML = `${winColor} is the winner!`;
    } else {
        if (inCount == 9) {
            document.querySelector('#winner').innerHTML = 'This game is a draw..., try again?';
        }
    }
}

//create a loop for the event listener
for (let i = 0; i < squares.length; i++) {
    //      console.log(i);
    squares[i].addEventListener('click', buttonClicked);
}

reset.addEventListener('click', resetBoard);