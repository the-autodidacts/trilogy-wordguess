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