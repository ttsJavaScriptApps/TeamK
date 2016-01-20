/* Rock Paper Scissors Game */ 
var user1 = parseInt(Math.random()*10)%3;
var user2 = parseInt(Math.random()*10)%3;

  if (user1 || user2 == 0) {
  	console.log("rock");
  } 
  else if(user1 || user2 == 1) {
  	console.log("paper");
  } 
  else {
  	console.log("scissors");
  } 
  console.log("User1: " + user1);
  console.log("User2: " + user2); 

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

compare (user1, user2)

