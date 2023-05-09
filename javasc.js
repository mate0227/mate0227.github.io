const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
let playerChoice;

const winCounter = document.getElementById("win");
const drawCounter = document.getElementById("draw");
const lossCounter = document.getElementById("lose");

function updateWinCounter() {
  winCounter.innerText = parseInt(winCounter.innerText) + 1;
}

function updateDrawCounter() {
  drawCounter.innerText = parseInt(drawCounter.innerText) + 1;
}

function updateLossCounter() {
  lossCounter.innerText = parseInt(lossCounter.innerText) + 1;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    playGame();
  });
});

function playGame() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];



  switch (playerChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(playerChoice, computerChoice);
	  updateWinCounter();
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(playerChoice, computerChoice);
      updateLossCounter();
	  break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
	  updateDrawCounter();
      draw(playerChoice, computerChoice);
      break;
  }
}

function win(player, computer) {
  result.style.color = 'green';
  result.textContent = `You chose ${player}, computer chose ${computer}, ${player} beats ${computer}. You win!`;
}

function lose(player, computer) {
  result.style.color = 'red';
  result.textContent = `You chose ${player}, computer chose ${computer}, ${player} loses to ${computer}. You lose!`;
}

function draw(player, computer) {
  result.style.color = 'black';
  result.textContent = `You chose ${player}, computer chose ${computer}, ${player} equals ${computer}. It's a draw!`;
}
