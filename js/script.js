//random, computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
	computerMove = 'papier';
}
else if (randomNumber == 3){
	computerMove = 'nożyce';
}

printMessage('Ruch komputera: ' + computerMove);


//player input
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1') {
  playerMove = 'kamień';
}
else if (playerInput == '2') {
	playerMove = 'papier';
}
else if (playerInput == '3') {
	playerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + playerMove);

//win situation
if (computerMove == 'kamień' && playerMove == 'papier') {
	printMessage('Wygrywasz!');
}
else if (computerMove == 'papier' && playerMove == 'nożyce') {
	printMessage('Wygrywasz');
}
else if (computerMove == 'nożyce' && playerMove == 'kamień') {
	printMessage('Wygrywasz');
}
//lose situation
else if (computerMove == 'papier' && playerMove == 'papier') {
	printMessage('Remis');
}
else if (computerMove == 'kamień' && playerMove == 'kamień') {
	printMessage('Remis');
}
else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
	printMessage('Remis');
}
//tie situation
else if (computerMove == 'papier' && playerMove == 'kamień') {
	printMessage('Przegrywasz');
}
else if (computerMove == 'kamień' && playerMove == 'nożyce') {
	printMessage('Przegrywasz');
}
else if (computerMove == 'nożyce' && playerMove == 'papier') {
	printMessage('Przegrywasz');
}
//uknown situation
else {
	printMessage('Nie wykonałeś poprawnego ruchu');
}
