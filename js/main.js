//Rock paper scissors

  const choices = [
    "rock",
    "paper",
    "scissors"
  ];
  
  //the computer makes a random choice
  function computerMakesChoice (){
    let randomNumber = Math.floor(Math.random() * 3.0);
    let computerChoice = choices[randomNumber];
    return computerChoice;
  }
  
  //user chooses rock
  function chooseRock (){
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
  function choosePaper (){
    let userChoice = choices[1];
    let computerChoice = computerMakesChoice();
      if (computerChoice === "scissors"){
        alert("You lose.\nYour opponent chose scissors. Scissors cuts paper.");
      }else if (computerChoice === "rock"){
        alert("YOU WIN!\nYour opponent chose rock. Paper covers rock.");
      }else{
        alert("It's a tie!\nYou both chose paper. Shoot again.");
      }
    return;
  };
  
  //use chooses scissors
  function chooseScissors(){
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
  