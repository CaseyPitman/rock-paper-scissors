//Rock paper scissors game


$(document).ready(function() {//jQuery
  
    const tie = "It's a tie. Try again."
     
    const choices =[//computer's chooses from here
      "rock",
      "paper",
      "scissors"
    ];
      
    const compare = function(){//function to compare selections of user and computer
      
      
      //retrieves user selection and determines computer's random choice
       let userSelection = document.getElementById("user-selection").value; 
       let randomNumber = Math.floor(Math.random() * 3);
       let computerSelection = choices[randomNumber];
      
      if (userSelection==="selected"){ //user neglects to choose
        alert("Choose rock, paper, or scissors.");
        return;
      }//end unselected
      
      else if (userSelection === "rock"){//user selects rock
        if (computerSelection === "scissors"){
          result = "Rock smashes scissors. You win!";
        }
        else if (computerSelection === "paper"){
          result = "Paper covers rock. You lose.";
        }
        else {
          result = tie;
        }
      }//ends user selects rock
      
      else if (userSelection === "paper"){//user selects paper
        if (computerSelection === "rock"){
          result = "Paper covers rock. You win!";
        }
        else if (computerSelection === "scissors"){
          result = "Scissors cuts paper. You lose.";
        }
        else {
          result = (tie);
        }
      }//ends user selects paper
      
      else { //user selects scissors
        if (computerSelection === "paper"){
          result = "Scissors cuts paper. You win!";
        }
        else if (computerSelection === "rock"){
          result = "Rock smashes scissors. You lose.";
        }
        else {
          result = (tie);
        }
      }
      //diplays results
      result = "You chose " + userSelection + ". " + "Computer chose " + computerSelection + ". " + result;
      alert(result);
      
    };//ends compare function
      
      $("#play").click(compare);
      
    });//ends jQuery