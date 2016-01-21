
var userChoice = parseInt(Math.random()*10)%3;
var computerChoice = parseInt(Math.random()*10)%3;

var userScore = 0
var computerScore = 0

if (userChoice = 0) {
  	userChoice = "rock";
} 
else if(userChoice = 1) {
  	userChoice = "paper";
} 
else {
  	userChoice = "scissors";
} 

if (computerChoice == 0) {
    computerChoice = "rock";
} 
else if(computerChoice == 1) {
    computerChoice = "paper";
} 
else {
    computerChoice = "scissors";
} 

var compare = function(choice1, choice2) {
    
  if (choice1 === choice2) {
      return "The result is a tie!";
  }
    
  else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "rock wins";
      userScore += 1;
    }  
    else { 
        return "paper wins";
        computerScore += 1;
    }
  }
    
  else if(choice1 === "paper") {
    if (choice2 === "rock") {
       return "paper wins";
       userScore += 1;
    }
    else { 
        return "scissors wins";
    }   computerScore += 1; 
  }
    
  else if(choice1 === "scissors") {
    if (choice2 === "rock"){ 
        return "rock wins";
        computerScore += 1;
    }
    else {
        return "scissors wins";
        userScore += 1;
    }
  }
};

console.log("User1: " + userChoice);
console.log("User2: " + computerChoice); 

/* below code gets infinite loop....
while (userScore || computerScore < 3) {
console.log(compare(userChoice, computerChoice));
console.log(userScore, computerScore);
}
*/
