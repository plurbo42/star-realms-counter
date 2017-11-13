$(document).ready(onReady);

function onReady(){
    $('#playerOne').on('click', '.scoreButton', playerOneScoreAdjust);
    $('#playerTwo').on('click', '.scoreButton', playerTwoScoreAdjust);
    // $('#playerThree').on('click', '.scoreButton', scoreAdjust);
    // $('#playerFour').on('click', '.scoreButton', scoreAdjust);
    $('#newgame').on('click', newGame);
}

var playerOneScore = 50;
var playerTwoScore = 50;
var playerThreeScore = 50;
var playerFourScore = 50;

function newGame(){
    playerOneScore = 50;
    playerTwoScore = 50;
    $('#playerOne').css('color', 'white'); //there has to be a better way to reset this. Look into it later
    $('#playerTwo').css('color', 'white');
    $('#playerOne').find('h1').replaceWith('<h1 class="score">' + playerOneScore + '</h1>');
    $('#playerTwo').find('h1').replaceWith('<h1 class="score">' + playerTwoScore + '</h1>');
    // playerThreeScore = 50;
    // playerFourScore = 50; 
}

function playerOneScoreAdjust(){
    //check button and adjust score
    if($(this).hasClass('addOne')){
        playerOneScore++;
    }else if($(this).hasClass('subtractOne')){
        playerOneScore--;
    }else if($(this).hasClass('addFive')){
        playerOneScore = playerOneScore + 5;
    }else if($(this).hasClass('subtractFive')){
        playerOneScore = playerOneScore - 5;
    }
    //update score on DOM
    $('#playerOne').find('h1').replaceWith('<h1 class="score">' + playerOneScore + '</h1>');
    //check for game complete
    if(playerOneScore < 1){
        $('#playerOne').css('color', 'red')
    }else if(playerOneScore > 0){
        $('#playerOne').css('color', 'white')
    }
}

function playerTwoScoreAdjust(){
    //check button and adjust score
    if($(this).hasClass('addOne')){
        playerTwoScore++;
    }else if($(this).hasClass('subtractOne')){
        playerTwoScore--;
    }else if($(this).hasClass('addFive')){
        playerTwoScore = playerTwoScore + 5;
    }else if($(this).hasClass('subtractFive')){
        playerTwoScore = playerTwoScore - 5;
    }
    //update score on DOM
    $('#playerTwo').find('h1').replaceWith('<h1 class="score">' + playerTwoScore + '</h1>');
    //check for game complete
    if(playerTwoScore < 1){
        $('#playerTwo').css('color', 'red')
    }else if(playerTwoScore > 0){
        $('#playerTwo').css('color', 'white')
    }
}