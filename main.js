printLetterByLetter("#title", "The Ultimate Game", 100);
setTimeout(function() {
    printLetterByLetter(".sub", "First to 5 Wins.........May the Best Player Win", 125);
}, 3000);

var opener = document.querySelector('#opening');
console.log(opener);

let yourScore = 0;
let comScore = 0;    
let result;

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let choice = btn.id;
        result = playRound(choice, computerPlay());
        if (result == "W") {
            yourScore = incrementScore(yourScore);
        }
        if (result == "L") {
            comScore = incrementScore(comScore);
        }
        scoreboard.innerText = String(yourScore) + " - " + String(comScore);

        if (yourScore == 5) {
            var player = document.querySelector('#win');
            player.play();
            selected.remove();
            report.remove();
            var subheading = document.querySelector('.sub');
            subheading.remove();
            scoreboard.style.marginTop = "3em";
            var final = document.createElement('center');
            final.setAttribute('id', 'finalReport');
            document.body.appendChild(final);
            var restartButton = document.createElement('button');
            restartButton.style.color = "white";
            restartButton.style.marginRight = "75%";
            restartButton.style.marginLeft = "38%";
            restartButton.innerText = "Restart";
            restartButton.addEventListener('click', () => {
                restart();
            })
            setTimeout(function() {
                printLetterByLetter("#finalReport", "You have beaten the computer! Play Again?", 125);
                document.body.appendChild(restartButton);
            }, 2000);
        }
        if (comScore == 5) {
            var player = document.querySelector('#loss');
            player.play();
            player = document.querySelector('#loss2');
            player.play();
            selected.remove();
            report.remove();
            var subheading = document.querySelector('.sub');
            subheading.remove();
            scoreboard.style.marginTop = "3em";
            var final = document.createElement('center');
            final.setAttribute('id', 'finalReport');
            document.body.appendChild(final);
            var restartButton = document.createElement('button');
            restartButton.style.color = "white";
            restartButton.style.marginRight = "75%";
            restartButton.style.marginLeft = "38%";
            restartButton.innerText = "Restart";
            restartButton.addEventListener('click', () => {
                restart();
            })
            setTimeout(function() {
                printLetterByLetter("#finalReport", "You have lost to the computer! Try Again?", 125);
                document.body.appendChild(restartButton);
            }, 2000);
        }
    })
})

function restart() {
    document.location.href = "";
}

const scoreboard = document.createElement('center');
scoreboard.innerText = String(yourScore) + " - " + String(comScore);
scoreboard.style.color = '#03DAC5';
scoreboard.style.fontSize = '0em';
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
    if(playerSelection == "rock") {
        if (computerSelection == "Rock") {
            report.innerText = "Tie, you both chose Rock!";
            return "WL";
        } else if (computerSelection == "Paper") {
            report.innerText = "You Lose! Paper beats Rock!";
            return "L";
        } else {
            report.innerText = "You Win! Rock beats Scissors!";
            return "W";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            report.innerText = "You Win! Paper beats Rock!";
            return "W";
        } else if (computerSelection == "Paper") {
            report.innerText = "Tie, you both chose Paper!";
            return "WL";
        } else {
            report.innerText = "You Lose! Scissors beats Paper!";
            return "L";
        }
    } else {
        if (computerSelection == "Rock") {
            report.innerText = "You Lose! Rock beats Scissors!";
            return "L";
        } else if (computerSelection == "Paper") {
            report.innerText = "You Win! Scissors beats Paper!";
            return "W";
        } else {
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
}

function printLetterByLetter(destination, message, speed){
    var i = 0;
    var text = "";
    var interval = setInterval(function(){
        const titles = document.querySelector(destination);
        text += message.charAt(i);
        //console.log(text);
        titles.innerText = text;
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

var opacity = 0;
var handle1;
var handle2;
var selected = document.querySelector("#buttons");
selected.style.cssText = "opacity: 0;"
window.onload = effects;
//window.onload = growth;

var size = 0;

function effects(){
    setTimeout(function() {
        handle1 = setInterval(show, 10);
        opener.play();
    }, 10000);
    setTimeout(function() {
        handle2 = setInterval(grow, 50);
    }, 12000);
}

function show() {
    selected.style.cssText = "opacity: 0;";
    if (opacity < 1) {
        opacity += 0.005;
        selected.style.opacity = opacity;
        console.log(selected.style.opacity);
    } else {
        clearInterval(handle1);
        selected.style.opacity = opacity;
        console.log(selected.style.opacity);
    }
}

function grow() {
    if (size < 4) {
        size += 0.1;
        scoreboard.style.fontSize = String(size) + 'em';
    } else {
        clearInterval(handle2);
        selected.style.fontSize = String(size) + 'em';
    }
}