var argButtonName, buttonPaper, buttonRock, buttonScissors, i, i1;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
i = 0;
i1 = 0;
function buttonClicked(argButtonName) {
  clearMessages();
  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
  	var yourScore = document.getElementById('player').getElementsByClassName('score')[0],
  		  oppScore = document.getElementById('pc').getElementsByClassName('score')[0];
    printMessage(argPlayerMove + ' VS ' + argComputerMove);
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Ależ obalenie!');
      i++;
      yourScore.innerHTML = i;
      if(i >= 2){
        printMessage('','win');
      }
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Twarda pięść!');
      i++;
      yourScore.innerHTML = i;
      if(i >= 2){
        printMessage('','win');
      }
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Ostre kopnięcie!');
      i++;
      yourScore.innerHTML = i;
      if(i >= 2){
        printMessage('','win');
      }
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Sparowany!');
    } else {
      printMessage('Oberwałeś!<br/>Garda wyżej!');
      i1++;
      oppScore.innerHTML = i1;
      if(i1 >= 2){
        printMessage('','lose');
      }
    }
    console.log(i);
    console.log(i1);
  }

  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){
	buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function(){
	buttonClicked('papier');
});
buttonScissors.addEventListener('click', function(){
	buttonClicked('nożyce');
});