//Rock Paper Scissors game using functions
var hands = ['rock', 'paper', 'scissors'];

var player1Score = 0;
var player2Score = 0;

function getHand() {
	return hands[parseInt(Math.random()*10)%3];
}

function playRound(player1, player2) {
  var player1 = { name: 'Katy',
  hand: getHand() };
  var player2 = { name: 'Kim',
  hand: getHand() };

  	if (player1.hand === player2.hand) {
  		console.log("It's a tie!")
  	}
  	else if ((player1.hand === 'rock' && player2.hand === 'scissors') || 
  		(player1.hand === 'scissors' && player2.hand === 'paper') ||
  		(player1.hand === 'paper' && player2.hand === 'rock')) {
  		console.log((player1Score += 1) + (player2Score += 0));
		console.log(player1.name + " wins")
	}
	else {
		console.log(player2Score += 1)
		console.log(player2.name + " wins")
	}
	return (player1.name + ': ' + player1.hand + " vs " + player2.name + ': ' + player2.hand);

  };

for i = 0
console.log(playRound());

