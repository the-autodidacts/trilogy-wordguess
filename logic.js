var gameWords = ["","","","",""];

function randomWord(words){
    return words[Math.floor(Math.random() * Math.floor(words.length))]
}

// Watch for those that use regex
function isCorrectGuess(word, letter){
    return new RegExp(letter, "gi").test(word)
}

function getBlanks(word){
   return word.replace(/[\s\S]/g, "_").split("");
}

function fillBlanks(word, array, letter){
    for (var i = 0; i < word.length ;i++){
        if (word[i] === letter)  array[i] = letter
    }
    return array
}

function setupRound(word){
    return {
        "word": word,
        "guessesLeft": 9,
        "wrongGuesses": [],
        "puzzleState": []
    }
}

function updateRound(theRound, guess){
    if(isCorrectGuess(theRound.word, guess)){
        theRound.puzzleState = fillBlanks(theRound.word, theRound.puzzleState, guess)
    }else {
        theRound.guessesLeft--;
        theRound.wrongGuesses.push(guess)
    }
    return theRound
}

function hasWon(puzzleState){
    return !/_/g.test(puzzleState.join(""))
}

function hasLost(guessesLeft){
    return !!!guessesLeft
}

function isEndOfRound(theRound){
   return hasWon(theRound.puzzleState)|| hasLost(theRound.guessesLeft)
}

function setupGame(words,wins,losses){
    return {
        "round": setupRound(randomWord(words)),
        "wins": wins,
        "losses": losses
    }
}

function startNewRound(theGame){
    if(hasWon(theGame.round.puzzleState)){
        theGame.wins++
    }if(hasLost(theGame.round.guessesLeft)){
        theGame.losses++
    }
    alert(theGame.round.word);
}