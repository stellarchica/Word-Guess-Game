// essentials
var wordsArray = [ 
    "beer",
    "parades",
    "floats",
    "medals",
    "cascarones"
]

var winCounter = 0;

var loss = 0;

var userGuess = [];

var wrongLetter = [];

var guessesLeft = 10;

var underScore = [];

var randomWord;

// function
function startGame(){
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
    console.log('random Word = ' + randomWord)
    // console.log(randomWord);

    for(var i = 0; i < randomWord.length; i++)
    {
        // console.log(i);
        underScore.push('_');
    }
        // console.log(underScore);
    // print
    document.getElementById('word-blanks').textContent = underScore.join(" ");

    // reset
    wrongLetter = [];
    guessesLeft = [];

    // HTML
    document.getElementById('guesses-left').textContent = guessesLeft;
}

    // function 2
    function winLose(){
        if(winCounter === randomWord.length){
            alert('You win!');
            startGame();
        }
        else if(guessesLeft === 0){
            alert('Try again.');
            startGame();
        }
    }

    // user guess
    document.onkeyup = function(event){
        userGuess = event.key;
        if(randomWord.indexOf(userGuess) > -1){
            for(var i = 0; i < randomWord.length; i++)
            {
                if(randomWord[i] === userGuess){
                    underScore[i] = userGuess;
                    console.log(userGuess);
                    winCounter = +1;
                    winLose();
                }
            }
        }
        else
        {
            wrongLetter.push(userGuess);
            guessesLeft--;
            console.log(guessesLeft);
            winLose();
        }
    }

    startGame();