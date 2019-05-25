const buttonPaper = document.getElementById('button-paper'),
      buttonRock = document.getElementById('button-rock'),
      buttonScissors = document.getElementById('button-scissors');
let i = 0,
    i1 = 0;

buttonRock.addEventListener('click', function(){
  buttonClicked('cios'); // kamien
});
buttonPaper.addEventListener('click', function(){
  buttonClicked('chwyt'); // papier
});
buttonScissors.addEventListener('click', function(){
  buttonClicked('kopniak'); // nozyce
});

function buttonClicked(argButtonName) {
  clearMessages();
  let playerMove = argButtonName,
      randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'tors'; // kamien
    } else if (argMoveId == 2) {
      return 'wątrobę'; // papier
    } else if (argMoveId == 3) {
      return 'głowę'; // nozyce
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
  	const yourScore = document.getElementById('player').getElementsByClassName('score')[0],
  		    oppScore = document.getElementById('pc').getElementsByClassName('score')[0];
    printMessage(argPlayerMove + ' na ' + argComputerMove);
	if (argPlayerMove == 'chwyt' && argComputerMove == 'tors') {
      printMessage('Ależ obalenie!');
      i++;
      yourScore.innerHTML = i;
      if(i >= 5){
        printMessage('','win');
      }
    } else if (argPlayerMove == 'cios' && argComputerMove == 'głowę') {
      printMessage('Celne trafienie!');
      i++;
      yourScore.innerHTML = i;
      if(i >= 5){
        printMessage('','win');
      }
    } else if (argPlayerMove == 'kopniak' && argComputerMove == 'wątrobę') {
      printMessage('Szybkie kopnięcie!');
      i++;
      yourScore.innerHTML = i;
      if(i >= 5){
        printMessage('','win');
      }
    } else if (argPlayerMove == 'cios' && argComputerMove == 'tors') {
      printMessage('Sparowany!');
    } else if (argPlayerMove == 'chwyt' && argComputerMove == 'wątrobę') {
      printMessage('Że jak!?');
    } else if (argPlayerMove == 'kopniak' && argComputerMove == 'głowę') {
      printMessage('Uniknięty!');
    } else {
      printMessage('Chybiłeś!<br/>Weszła kontra!');
      i1++;
      oppScore.innerHTML = i1;
      if(i1 >= 5){
        printMessage('','lose');
      }
    }
  }
}