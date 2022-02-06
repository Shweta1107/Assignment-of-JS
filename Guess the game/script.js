const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guess");
const remaining = document.querySelector(".lastResult");

const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");

let perivousGuessse = [];
let numGuesses = 0;

let randomNumber = parseInt(Math.random() * 100 + 1);
let maxGuesses = 10;

submit.addEventListener("click",function(e){
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

function validateGuess(guess){
    perivousGuessse.push(guess);
    
    if(perivousGuessse.length === maxGuesses){
        //just game over
        displayGuesses(guess);
        displayMsg(`Game over !! Number was ${randomNumber}`);
        endGame();
    }else{
        displayGuesses(guess);
        checkGuess(guess);
    }
}

function  displayGuesses(guess){
    guessSlot.innerHTML += `${guess}`;
    userInput.value = "";
    numGuesses++;

    let remainingGuesses = maxGuesses - numGuesses;

    if(remainingGuesses < 0){
        remainingGuesses = 0;
    }
    remaining.innerHTML = remainingGuesses;
}

function displayMsg(messsage){
    lowOrHi.innerHTML = `<h1>${messsage}</h1>`;
}

function  checkGuess(guess){
    if(guess = randomNumber){
        displayMsg("You guessed corectly !!");
        endGame();
    }
    else if(guess < randomNumber){
        displayMsg("Too low ! Try a higher number...");
    }
    else{
        displayMsg("Too high ! Try a smaller number...");
    }
}

const pEl = document.createElement("p");

function endGame(){
    userInput.value = "";
    pEl.classList.add("button");
    pEl.style.cursor = "pointer";
    pEl.innerHTML = `<h1 onclick= "newGame()" id="newGame">Start new Game !!</h1>`

    startOver.append(pEl);

    userInput.disabled = true;
    submit.disabled = true;

}
function newGame(){
    location.reload();
}


