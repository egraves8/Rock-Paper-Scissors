let yourScore = 0;
let comScore = 0;    
let result;

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let choice = btn.id;
        console.log(choice);
        result = playRound(choice, computerPlay());
        console.log(result);
        if (result == "W") {
            yourScore = incrementScore(yourScore);
        }
        if (result == "L") {
            comScore = incrementScore(comScore);
        } 
        /*if (result == "WL") {
            yourScore = incrementScore(yourScore);
            comScore = incrementScore(comScore);
        }*/
        console.log(String(yourScore + " - " + comScore));
        scoreboard.innerText = String(yourScore) + " - " + String(comScore);
    })
})

const scoreboard = document.createElement('center');
scoreboard.innerText = String(yourScore) + " - " + String(comScore);
scoreboard.style.color = '#03DAC5';
scoreboard.style.fontSize = "4em";
document.body.appendChild(scoreboard);

const report = document.createElement('center');
report.style.color = "white";
document.body.appendChild(report);


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
    //var pS = prompt("Choose (Rock, Paper, Scissors)");
    console.log("You Chose: " + playerSelection);
    console.log("The Computer: " + computerSelection);
    if(playerSelection == "rock") {
        if (computerSelection == "Rock") {
            console.log("Tie!");
            report.innerText = "Tie, you both chose Rock!";
            return "WL";
        } else if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock.");
            report.innerText = "You Lose! Paper beats Rock!";
            return "L";
        } else {
            console.log("You Win! Rock beats Scissors.");
            report.innerText = "You Win! Rock beats Scissors!";
            return "W";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock.");
            report.innerText = "You Win! Paper beats Rock!";
            return "W";
        } else if (computerSelection == "Paper") {
            console.log("Tie!");
            report.innerText = "Tie, you both chose Paper!";
            return "WL";
        } else {
            console.log("You Lose! Scissors beats Paper.");
            report.innerText = "You Lose! Scissors beats Paper!";
            return "L";
        }
    } else {
        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors.");
            report.innerText = "You Lose! Rock beats Scissors!";
            return "L";
        } else if (computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper.");
            report.innerText = "You Win! Scissors beats Paper!";
            return "W";
        } else {
            console.log("Tie!");
            report.innerText = "Tie, you both chose Scissors!";
            return "WL";
        }
    }
}

function scoreForRound(yourScore, comScore){
    if (result == "W") {
        yourScore = incrementScore(yourScore);
    } else if (result == "L") {
        comScore = incrementScore(comScore);
    } else {
        yourScore = incrementScore(yourScore);
        comScore = incrementScore(comScore);
    }
    console.log(String(yourScore + " - " + comScore));
}
/*function game(){
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
}*/

//game();