//Get random choice between rock, paper, scissors
function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    if(randNum === 0){
        return "Rock";
    } else if (randNum ==1){
        return "Paper";
    } else{
        return "Scissors";
    }
}


//Function that plays a single round of RPS
function playRound(playerSelection, computerSelection){
    const pChoice = playerSelection.toUpperCase();
    const cpuChoice = computerSelection.toUpperCase();

    //Format the player selection
    const pChoiceCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    const cpuChoiceCap = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    //Print result based on draw/win/loss
    if(pChoice === cpuChoice){
        return `You draw! ${pChoiceCap} equals ${cpuChoiceCap}`
    } else if((pChoice === "ROCK"&& cpuChoice==="SCISSORS")||(pChoice==="PAPER"&&cpuChoice==="ROCK")||(pChoice==="SCISSORS"&&cpuChoice==="PAPER")){
        return `You Win! ${pChoiceCap} beats ${cpuChoiceCap}`
    } else {
        return `You Lose! ${cpuChoiceCap} beats ${pChoiceCap}`
    }
}