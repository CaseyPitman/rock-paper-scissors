//Rock paper scissors 2.0

$(document).ready(function() {//jQuery

  const choices = [
    "rock",
    "paper",
    "scissors"
  ];
  
  //the computer makes a random choice
  const computerMakesChoice = function(){
    let randomNumber = Math.floor(Math.random() * 3.0);
    let computerChoice = choices[randomNumber];
    console.log(computerChoice);
    return computerChoice;
  }
  
  //user chooses rock
  const chooseRock = function(){
    let userChoice = choices[0];
    let computerChoice = computerMakesChoice();
      if (computerChoice === "paper"){
        alert("You lose.\nYour opponent chose paper. Paper covers rock.");
      }else if (computerChoice === "scissors"){
        alert("YOU WIN!\nYour opponent chose scissors. Rock smashes scissors.");
      }else {
        alert("It's a tie!\nYou both chose rock. Shoot again!");
      }
     return;
  };
  
  //user chooses paper
  const choosePaper = function(){
    let userChoice = choices[1];
    let computerChoice = computerMakesChoice();
      if (computerChoice === "scissors"){
        alert("You lose.\nYour opponent chose scissors. Scissors cuts paper.");
      }else if (computerChoice === "rock"){
        alert("YOU WIN!\nYour opponent chose rock. Rock covers paper");
      }else{
        alert("It's a tie!\nYou both chose paper. Shoot again.");
      }
    return;
  };
  
  //use chooses scissors
  const chooseScissors = function(){
    let userChoice = choices[2];
    let computerChoice = computerMakesChoice();
      if(computerChoice === "rock"){
        alert("You lose.\nYour opponent chose rock. Rock smashes scissors.");
      }else if (computerChoice === "paper"){
        alert("YOU WIN!\nYour opponent chose paper. Scissors cuts paper.");
      }else{
        alert("It's a tie!\nYou both chose scissors. Shoot again.")
      }
    return;
  };
  
  //user makes choice
  $("#rock").click(chooseRock);
  $("#paper").click(choosePaper);
  $("#scissors").click(chooseScissors);
  
  });//ends jQuery
  
  
  
  