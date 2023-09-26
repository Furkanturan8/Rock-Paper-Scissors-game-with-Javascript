
const scoreUsers = {
    player : 0,
    computer : 0
};

for(; ;){
    if( scoreUsers.player===3){
        console.log("Congratulations, you won!")
        break;            
    }
    else if(scoreUsers.computer===3){
        console.log("Sorry, you lost! The computer won!")
        break;
    }
    let playerSelection = prompt("Please choose one of rock, paper, or scissors:");
    let computerSelection = getComputerChoice();
    
    console.log("you: " + playerSelection + " | computer: " + computerSelection);
    console.log(score(playerSelection,computerSelection));
}


function getComputerChoice(){
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomValue = options[randomIndex];
    
    return randomValue;
}


function score(playerSelection, computerSelection){
     
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection){
        case "rock" : 
            if(computerSelection==="scissors"){
                scoreUsers.player++;
            }
            else if(computerSelection==="paper"){
                scoreUsers.computer++;
            }
            break;
        

        case "paper" : 
            if(computerSelection==="scissors"){
                scoreUsers.computer++;
            }
            else if(computerSelection==="rock"){
                scoreUsers.player++;
            }
            break;

        case "scissors" : 
            if(computerSelection==="rock"){
                scoreUsers.computer++;
            }
            else if(computerSelection==="paper"){
                scoreUsers.player++;
            }
            break;
            
        default :
            console.log("The value you entered is not valid!");
            break;    
    }

    return scoreUsers;
}