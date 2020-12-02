function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
    else {
        return 'nieznany ruch(' + playerInput + ')';
    }
}

//random, computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);

printMessage('Ruch komputera: ' + ComputerMove);


//player input
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + PlayerMove);

//score
function displayResult(argComputerMove, argPlayerMove){
    //win
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Wygrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrywasz!');
    }
    //tie
    else if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
    }
    else if (isNaN(playerInput) || playerInput > 3 || playerInput < 1) {
        printMessage('Brak wyniku.');
    }
    //lose
    else {
        printMessage('Przegrywasz');
    }
}
displayResult(ComputerMove, PlayerMove);
