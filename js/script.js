
{
    let computerScore = 1;
    let playerScore = 1;
    let pScore = document.getElementById('playerScore');
    let cScore = document.getElementById('computerScore');
    let computerIconDisplay = document.getElementById('computerIcon');
    let playerIconDisplay = document.getElementById('playerIcon');
    let arr = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors"]


    const playGame = function (playerInput) {
        clearMessages();
        const getMoveName = function (argMoveId) {
            if (argMoveId == 1) {   //rock
                return 1;
            } else if (argMoveId == 2) {    //paper
                return 2;
            } else if (argMoveId == 3) {    //scissors
                return 3;
            }
        }
        //let randomNumber = Math.floor(Math.random() * 3 + 1);

        let randomComputerLoss = Math.random();
        //computer loss in 75% cases
        const computerLoss = function (playerInput) {

            if ((playerInput == 1 && randomComputerLoss > 0.25) || (playerInput == 2 && randomComputerLoss < 0.25)) {
                return 3;
            } else if ((playerInput == 2 && randomComputerLoss > 0.25) || (playerInput == 3 && randomComputerLoss < 0.25)) {
                return 1;
            } else if ((playerInput == 3 && randomComputerLoss > 0.25) || (playerInput == 1 && randomComputerLoss < 0.25)) {
                return 2;
            }
        }
        console.log("Ruch komputera: " + computerLoss(playerInput));
        console.log("Wylosowana liczba: " + randomComputerLoss);
        //score
        const displayResult = function (argComputerMove, argPlayerMove) {
            //win
            if ((argComputerMove == 1 && argPlayerMove == 2) ||
                (argComputerMove == 2 && argPlayerMove == 3) ||
                (argComputerMove == 3 && argPlayerMove == 1)) {
                printMessage('Wygrywasz!');
                document.getElementById('messages').style.color = "green";
                pScore.innerHTML = playerScore;
                playerScore++;
            }
            //tie
            else if (argComputerMove == argPlayerMove) {
                printMessage('Remis');
                document.getElementById('messages').style.color = "black";
            }
            //lose
            else {
                printMessage('Przegrywasz');
                cScore.innerHTML = computerScore;
                computerScore++;
                document.getElementById('messages').style.color = "red";
            }
        }
        //random, computer move
        computerIconDisplay.className = arr[computerLoss(playerInput) - 1];
        const computerMove = computerLoss(playerInput);

        //player input
        const playerMove = getMoveName(playerInput);


        displayResult(computerMove, playerMove);
    }


    document.getElementById('play-rock').addEventListener('click', function () {
        playerIconDisplay.className = arr[0];
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playerIconDisplay.className = arr[1];
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playerIconDisplay.className = arr[2];
        playGame(3);
    });
}