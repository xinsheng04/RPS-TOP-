console.log("Rock Paper Scissors The Game")
const p = "PAPER", r = "ROCK", s="SCISSORS";

let HC="";
let CC="";
var humanScore =0, ComputerScore=0; 
const answer = document.querySelector(".answer");
function getComputerChoice(){ 
    let computerAnswerText="";
    let random = Math.floor(Math.random()*3);
    if (random === 0){
        computerAnswerText='Paper';
        answer.textContent= computerAnswerText;
        return p;
    }
    else if (random ===1){
        computerAnswerText='Rock';
        answer.textContent= computerAnswerText;
        return r;
    }
    else {
        computerAnswerText='Scissors';
        answer.textContent= computerAnswerText;
        return s;
    }

}

function playRound(HC,CC){
    
    if ((HC ==s && CC == p ) ||(HC ==r && CC == s)||(HC== p && CC == r))
        alert("Human Wins")
    else if (HC === CC){
        alert("Tie");
    }
    else{ 
        alert("Computer Wins");
    }
    alert ("computer played "+CC+ "\nHuman Played "+ HC);
    //global score
    // console.log("Human Score :"+humanScore);
    // console.log("Computer Score :"+ComputerScore);

}

// adding the query selector 


// const rock = document.querySelector('.rock');

// rock.addEventListener("click", ()=>{
//     HC = r;
//     CC= getComputerChoice();
//     playRound(HC,CC);
    
// });


// const paper = document.querySelector(".paper");
// paper.addEventListener("click", ()=>{
//     HC = p;
//     CC= getComputerChoice();
//     playRound(HC,CC);
    
// });


// const scissors = document.querySelector(".scissors");
// scissors.addEventListener("click", ()=>{
//     HC = s;
//     CC= getComputerChoice();
//     playRound(HC,CC);
    
    
// });


// I think you can shorten the above to this
// requires you to use id for rock, paper and scissors however
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelector(".container");
    buttons.addEventListener("click", (e) => {
        const pressed = e.target;
        switch(pressed.id){
            case "rock": HC = r; break;
            case "paper": HC = p; break;
            case "scissors": HC = s; break;
        }
        CC= getComputerChoice();
        playRound(HC,CC);
    });
});

// writting logic to play a single round 




// function playGame (HC,CC){
    
//     while (humanScore<5 && ComputerScore<5){
//         let CC= getComputerChoice();
//         let HC = getHumanChoice();
//         playRound(HC,CC);
//         alert ("computer played "+CC+ "\nHuman Played "+ HC);
       
//     }
// }

function checkWinner (humanScore, ComputerScore){
    if (humanScore> ComputerScore){
        alert("human wins!");
    }
    else if (humanScore< ComputerScore)
        alert("Computer wins");
}

//fucntion to reset game 
// function ResetGame(){
//     let CC= getComputerChoice();
//     let HC = getHumanChoice(); 
//     playRound(HC,CC);
//     checkWinner(humanScore,ComputerScore);
//     humanScore =0, ComputerScore=0; 
// }

// let CC= getComputerChoice();
// let HC = getHumanChoice();
// playRound(HC,CC);



