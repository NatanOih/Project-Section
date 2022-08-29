
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
const buttons = $(".btn");
var level = 0;
var highScore = 0;

var keyPressed = false;
console.log('keyPressed', keyPressed)


$(document).keypress(() => {
    if (keyPressed === false) {
        nextSequence()
        $('#level-title').text('level' + ' ' + level) ;
    };
    keyPressed = true;
});

$('#button').click( function() {
    if (keyPressed === false) {
        nextSequence()
        $('#level-title').text('level' + ' ' + level) ;
    };
    keyPressed = true;
})

buttons.click( function() {
    // function for button clicked
    let userChosenColour  = $(this)[0].id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    indexUser = userClickedPattern.length - 1;
    checkAnswer(indexUser);

});

function startOver(){
    gamePattern = [];
    if (highScore < level) {highScore = level};
    level = 0;
    keyPressed = false;
    $('#button').click( function() {
        if (keyPressed === false) {
            nextSequence()
            $('#level-title').text('level' + ' ' + level) ;
        };
        keyPressed = true;
    })
    $('#score').text(highScore)
}
function nextSequence() {
    userClickedPattern =[];
    level += 1;
    $('#level-title').text('level' + ' ' + level) ;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.volume = 0.1;
    audio.play();
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function(){  $('#' + currentColour).removeClass('pressed') }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (currentLevel === gamePattern.length - 1) {
            setTimeout(nextSequence(), 1000)
        }
    } else {
        playSound('wrong');
        $('body').addClass('game-over');
        $('#level-title').html('Game Over, Press Any Key to Restart or click <button id ="button" >here</button>');
        setTimeout(function(){  $('body').removeClass('game-over') }, 200);
        startOver();
    }
}


