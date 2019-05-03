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
        "puzzleState": getBlanks(word)
    }
}

function updateRound(theRound, guess){
    if(isCorrectGuess(theRound.word, guess)){
        theRound.guessesLeft--
        theRound.puzzleState = fillBlanks(theRound.word, theRound.puzzleState, guess)
    }else {
        theRound.guessesLeft--;
        theRound.guessesLeft.push(guess)
    }
}