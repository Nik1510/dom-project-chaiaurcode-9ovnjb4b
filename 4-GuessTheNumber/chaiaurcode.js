let guessInput =document.querySelector("#guessField");
let submitBtn = document.querySelector("#subt");
let guesses = document.querySelector(".guesses");
let guessRem = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");


let computerGuess = Math.floor(Math.random() * 100) + 1;
let attemptLeft =10;
let previousGuess=[];
let x=0;

submitBtn.addEventListener("click",function(event){
  event.preventDefault();

  let userGuess=Number(guessInput.value);

  if(!userGuess || userGuess<1 || userGuess>100){
    lowOrHi.innerHTML="please enter a number between 1 and 100";
    return;
  }
  attemptLeft--;
  previousGuess.push(userGuess);
  guesses.innerHTML= previousGuess[x++];
  guessRem.innerHTML=attemptLeft;
  
  if(userGuess===computerGuess){
    lowOrHi.innerHTML ="You guessed right";
  }
  else if(userGuess<computerGuess){
    lowOrHi.innerHTML="You guessed low";
  }else{
    lowOrHi.innerHTML="You guessed high";
  }
  if(attemptLeft==0 && userGuess!== computerGuess){
    lowOrHi.innerHTML=`Game Over! The correct answer is ${computerGuess}`
    submitBtn.disabled = true;
    guessInput.disabled= true;
  }
  guessInput.value="";
  guessInput.focus();
})