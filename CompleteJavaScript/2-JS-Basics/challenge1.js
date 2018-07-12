var player1Height = 180;
var player1Age = 26;

var player2Height = 180;
var player2Age = 27;

var player1Score = player1Height + (player1Age * 5);
var player2Score = player2Height + (player2Age * 5);

/*if(player1Score > player2Score) {
    console.log('Player 1 wins the game with '+ player1Score + ' points!');
} else if(player2Score > player1Score) {
    console.log('Player 2 wins the game with '+ player2Score + ' points!');
} else if(player1Score === player2Score) {
    console.log('There is draw');
}*/

var player3Height = 180;
var player3Age = 27;
var player3Score = player3Height + (player3Age * 5);


if(player1Score > player2Score && player1Score > player3Score) {
    console.log('Player 1 wins the game with '+ player1Score + ' points!');
} else if(player2Score > player1Score && player2Score > player3Score) {
    console.log('Player 2 wins the game with '+ player2Score + ' points!');
} else if(player3Score > player1Score && player3Score > player2Score) {
    console.log('Player 3 wins the game with '+ player3Score + ' points!');
} else {
    console.log('It\'s a draw');
}