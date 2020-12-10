
{
    let computerScore = 0;
    let playerScore = 0;
    const increasePlayerScore = document.getElementById('playerScore');
    const increaseComputerScore = document.getElementById('computerScore');
    const computerIcon = document.getElementById('computerIcon');
    const playerIcon = document.getElementById('playerIcon');
    const iconsArray = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors"]


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


        //computer loss in 75% cases
        const randomComputerLoss = Math.floor(Math.random() * 100 + 1);
        const computerLoss = function (playerInput) {

            if ((playerInput == 1 && randomComputerLoss >= 25) || (playerInput == 2 && randomComputerLoss < 25)) {
                return 3;
            } else if ((playerInput == 2 && randomComputerLoss >= 25) || (playerInput == 3 && randomComputerLoss < 25)) {
                return 1;
            } else if ((playerInput == 3 && randomComputerLoss >= 25) || (playerInput == 1 && randomComputerLoss < 25)) {
                return 2;
            }
        }
        console.log(randomComputerLoss);
        console.log("Ruch komputera: " + computerLoss(playerInput));
        //score
        const displayResult = function (argComputerMove, argPlayerMove) {
            const playerWin = function () {
                printMessage('Wygrywasz!');
                document.getElementById('messages').style.color = "green";
                playerScore++;
                increasePlayerScore.innerHTML = playerScore;
            }
            const playerLose = function () {
                printMessage('Przegrywasz');
                computerScore++;
                increaseComputerScore.innerHTML = computerScore;
                document.getElementById('messages').style.color = "red";
            }
            const tie = function () {
                printMessage('Remis');
                document.getElementById('messages').style.color = "black";
            }
            if ((argComputerMove == 1 && argPlayerMove == 2) || //win
                (argComputerMove == 2 && argPlayerMove == 3) ||
                (argComputerMove == 3 && argPlayerMove == 1)) {
                playerWin();
            } else if (argComputerMove == argPlayerMove) { //tie
                tie();
            } else { //lose
                playerLose();
            }

        }
        //computer move, show computer icon

        const computerMove = computerLoss(playerInput);
        
        const showComputerIcon = function () {
            computerIcon.className = iconsArray[computerMove - 1];
        }
        showComputerIcon();
        //player input
        const playerMove = getMoveName(playerInput);


        displayResult(computerMove, playerMove);
    }

    const showPlayerIcon = function (playerInput) {
        playerIcon.className = iconsArray[playerInput - 1];
    }
    document.getElementById('play-rock').addEventListener('click', function () {
        showPlayerIcon(1);
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        showPlayerIcon(2);
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        showPlayerIcon(3);
        playGame(3);
    });
}