var userChoice = parseInt(Math.random()*10)%3;
var computerChoice = parseInt(Math.random()*10)%3;

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

console.log("User1: " + userChoice);
console.log("User2: " + computerChoice); 

var compare = function(choice1, choice2) {
    
  if (choice1 === choice2) {
      return "The result is a tie!";
  }
    
  else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "rock wins";
    }  
    else { 
        return "paper wins";
    }
  }
    
  else if(choice1 === "paper") {
    if (choice2 === "rock") {
       return "paper wins";
    }
    else { 
        return "scissors wins";
    }    
  }
    
  else if(choice1 === "scissors") {
    if (choice2 === "rock"){ 
        return "rock wins";
    }
    else {
        return "scissors wins";
    }
  }
};

console.log(compare(userChoice, computerChoice))

