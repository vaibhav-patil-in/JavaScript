/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying, lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) 
    {
        //1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;  //Random number between  1 & 6
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2.Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //3. Update the round score if the rolled number was not a 1
        if(dice1 !== 1 && dice2 !== 1)
        {
            //Add the score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else
        {
            //Otherwise -Next Player
            nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {

    if(gamePlaying)
    {
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //Check if the player won the game - Or next player
        var input = document.querySelector(".final-score").value;
        var winningScore = 100;

        //Undefined, 0, null, or "" are COERCED to false. Anything else is COERCED to true
        if(input) {
            winningScore = input;
        }

        if(scores[activePlayer] >= winningScore)
        {
            document.querySelector('#name-'+ activePlayer).textContent = "WINNER!";
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            gamePlaying = false;
        }
        else
        {
            //Next Player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
        //change player
        activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //Reset Score
        roundScore = 0;
        priviousDiceScore = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;

        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    priviousDiceScore = 0;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player-1";
    document.getElementById('name-1').textContent = "Player-2";

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');
}