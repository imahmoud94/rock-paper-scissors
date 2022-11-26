//Get random choice between rock, paper, scissors
function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3);
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
        //return `You draw! ${pChoiceCap} equals ${cpuChoiceCap}`
        console.log(`You draw! ${pChoiceCap} equals ${cpuChoiceCap}`);
        return "Draw"
        
    } else if((pChoice === "ROCK"&& cpuChoice==="SCISSORS")||(pChoice==="PAPER"&&cpuChoice==="ROCK")||(pChoice==="SCISSORS"&&cpuChoice==="PAPER")){
        //return `You Win! ${pChoiceCap} beats ${cpuChoiceCap}`
        console.log(`You Win! ${pChoiceCap} beats ${cpuChoiceCap}`);
        return "Player Win"
    } else {
        //return `You Lose! ${cpuChoiceCap} beats ${pChoiceCap}`
        console.log(`You Lose! ${cpuChoiceCap} beats ${pChoiceCap}`);
        return "CPU Win"
    }
}

//Play 5 rounds of RPS and keep score
function game(){
    //Define score vars for player and CPU
    let pScore = 0;
    let cScore = 0;



    for(let i=0; i<5; i++){
        //Take user input
        const pSelection = prompt('Choose between Rock, Paper, Scissors?', "");

        //Validate user input
        if(pSelection.toUpperCase() !== "ROCK" &&pSelection.toUpperCase() !== "PAPER" &&pSelection.toUpperCase() !== "SCISSORS"){
            alert("Invalid choice, try again");
            continue;
        }

        //Get CPU choice
        const cSelection = getComputerChoice();

        //Calculate result and display it
        const result = playRound(pSelection, cSelection);

        if(result === "Player Win"){
            pScore+=1;
        } else if (result === "CPU Win"){
            cScore+=1;
        } else{
            console.log("Draw");
        }
    }
    
    if(pScore>cScore){
        console.log(`Player wins with a score of ${pScore}-${cScore}`);
    } else if(cScore>pScore){
        console.log(`CPU wins with a score of ${cScore}-${pScore}`);
    } else{
        console.log(`It's a draw!`)
    }

}