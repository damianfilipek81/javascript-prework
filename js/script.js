let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const kamień = document.getElementById('rock');
const papier = document.getElementById('paper');
const nożyce = document.getElementById('scissors');
function playGame(playerInput){
    clearMessages();
    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return kamień;
        } else if (argMoveId == 2) {
            return papier;
        } else if (argMoveId == 3) {
            return nożyce;
        }
    }
    //score
    function displayResult(argComputerMove, argPlayerMove){
        //win
        if ((argComputerMove == kamień && argPlayerMove == papier)||
        (argComputerMove == papier && argPlayerMove == nożyce)||
        (argComputerMove == nożyce && argPlayerMove == kamień)){
            printMessage('Wygrywasz!');
            pScore.innerHTML = playerScore;
            playerScore++;
        }
        //tie
        else if (argComputerMove == argPlayerMove) {
            printMessage('Remis');
            pScore.innerHTML = pScore.innerHTML;
            cScore.innerHTML = cScore.innerHTML;
        }
        //lose
        else {
            printMessage('Przegrywasz');
            cScore.innerHTML = computerScore;
            computerScore++;
        }
    }
    //random, computer move
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let ComputerMove = getMoveName(randomNumber);

    printMessage('Ruch komputera: ' + ComputerMove);

    //player input
    console.log('Gracz wpisał: ' + playerInput);

    let PlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + PlayerMove);


    displayResult(ComputerMove, PlayerMove);

}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
