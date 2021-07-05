function computerPlay(){
    let x = Math.ceil(Math.random() * 3);
    var choice;
    if(x == 1) {
        choice = "Rock";
    } else if (x == 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}
function incrementScore(number){
    return number + 1;
}
function playRound(playerSelection, computerSelection){
    var pS = prompt("Choose (Rock, Paper, Scissors)");
    playerSelection = pS;
    console.log("You Chose: " + playerSelection);
    console.log("The Computer: " + computerSelection);
    if(playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            console.log("Tie!");
            return "WL";
        } else if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock.");
            return "L";
        } else {
            console.log("You Win! Rock beats Scissors.");
            return "W";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock.");
            return "W";
        } else if (computerSelection == "Paper") {
            console.log("Tie!");
            return "WL";
        } else {
            console.log("You Lose! Scissors beats Paper.");
            return "L";
        }
    } else {
        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors.");
            return "L";
        } else if (computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper.");
            return "W";
        } else {
            console.log("Tie!");
            return "WL";
        }
    }
}
function game(){
    let yourScore = 0;
    let comScore = 0;
    let result;
    for(let i = 0; i < 5; i++){
        result = playRound("", computerPlay);
        if (result == "W") {
            yourScore = incrementScore(yourScore);
        } else if (result == "L") {
            comScore = incrementScore(comScore);
        } else {
            yourScore = incrementScore(yourScore);
            comScore = incrementScore(comScore);
        }
    }
    if (yourScore > comScore) {
        console.log("You Win!");
        console.log("Score: " + String(yourScore) + " - " + String(comScore));
    } else if (yourScore < comScore) {
        console.log("You Lose!");
        console.log("Score: " + String(yourScore) + " - " + String(comScore));
    } else {
        console.log("Tie!");
        console.log("Score: " + String(yourScore) + " - " + String(comScore));
    }
}

game();