
// let score = {
//   wins: 0,
//   losses: 0,
//   ties: 0
// };

let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}

updateScoreElement();

//document.querySelector('.js-score').innerHTML = '\n Wins: ' + score.wins + ', Losses: ' + score.losses + ', Tie: ' + score.ties;

//let computerMove = ''; // global-variable

function playGame(playerMove) {

  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {

    if (computerMove === 'Rock') {
      result = 'You Lose.';
    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    } else {
      result = 'You Win.'
    }

  }

  else if (playerMove === 'Paper') {

    if (computerMove === 'Rock') {
      result = 'You Win.';
    } else if (computerMove === 'Scissors') {
      result = 'You Lose.';
    } else {
      result = 'Tie.'
    }

  }

  else if (playerMove === 'Rock') {

    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'You Win.';
    } else {
      result = 'You Lose.'
    }

  }

  if (result === 'You Win.') {
    score.wins = score.wins + 1;
  } else if (result == 'You Lose.') {
    score.losses = score.losses + 1;
  } else if (result === 'Tie.') {
    score.ties = score.ties + 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  //document.querySelector('.js-score').innerHTML = '\n Wins: ' + score.wins + ', Losses: ' + score.losses + ', Tie: ' + score.ties;

  document.querySelector('.js-result').innerHTML = result;

  if (playerMove === 'Rock') {
    playerMove = '✊';
  } else if (playerMove === 'Paper') {
    playerMove = '🖐️';
  } else if (playerMove === 'Scissors') {
    playerMove = '✌️';
  }

  document.querySelector('.js-moves').innerHTML = 'You picked ' + playerMove + ', Computer picked ' + computerMove;

}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = '\n Wins: ' + score.wins + ', Losses: ' + score.losses + ', Ties: ' + score.ties;
}

function pickComputerMove() {

  let computerMove = '';        // declared inside scope. so it is a different variable and does not conflict with const computerMove.

  let random = Math.random();

  if (random >= 0 && random < 1 / 3) {
    computerMove = 'Rock';
  } else if (random >= 1 / 3 && random < 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  return computerMove;

}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
  //alert('Score reset Done.')
}
