var userArray = [];
var compRand = [
    "a", "b", "c", "d", "e", "f", 
    "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var lose = 0;
var guessesLeft = 10;
var randomGuess = compRand[Math.floor((Math.random()*compRand.length))];
console.log(randomGuess)

document.addEventListener("keydown", function(event){
    var userGuess = event.key
    userArray.push(userGuess);
    console.log(event)
    
    if (userGuess === randomGuess){
        win++;
        userArray.length = 0;
        guessesLeft = 10;
        randomGuess = compRand[Math.floor((Math.random()*compRand.length))];
        alert("Well look at you. You beat the system.");
        console.log(event);
        
}
    else{
        guessesLeft--;
    }

    if (guessesLeft === 0){
        lose++;
        userArray.length = 0;
        guessesLeft = 10;
        randomGuess = compRand[Math.floor((Math.random()*compRand.length))];
        console.log(event)
        alert("Better luck next time dingus.")
    }

    document.getElementById("win").innerHTML = "Win: " + win;
    document.getElementById("lose").innerHTML = "Lose: " + lose;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("userArray").innerHTML = "Guesses: " + userArray;
})

