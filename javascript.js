

/* STEP 2 Get Computer choice
    1. Create a function getComputerChoice
    2. Get a random number from 0 - 100
        a. If random number <= 0.33, return "rock"
        b. If random number is >0.33 and <= 0.66, return "paper"
        c If random number is > 0.66, return "scissors"
    3. Print out getComputerChoice
*/

function getComputerChoice(){
    let randomNumber = Math.random()
    // console.log(randomNumber) // delete later
    if (randomNumber <= 0.33){
        return "rock";
    }  else if (randomNumber > 0.33 && randomNumber <= 0.66){
        return "paper";
    }  else if (randomNumber > 0.66 ){
        return "scissors";
    }

}


/* STEP 3 Get human choice
    1. Create a function getHumanChoice
    2. create a variable for string data type
    3. prompt the user to enter a choice; rock, paper or scissors and store that in the variabel
    4. return the variable value
*/

function getHumanChoice(){
    let input = prompt("What do you choose? Rock, paper or scissors: ");
    return input;

}


/* STEP 4 Keep track of human and computer score
    1. Create two new variables named humanScore and 
        computerScore in the global scope.
    2. Initialize those variables with the value of 0.
*/

let humanScore = 0
let computerScore = 0

/* STEP 5 Play a single round
    1. Create function playRound    
    2. Create 2 variables humanChoice and computerChoice and take previous arguments 
    3. Print out winning/losing message: “You lose! Paper beats Rock”."
    4. Increase the humanScore or computerScore variable based on the round winner.
*/

function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock" && computerChoice === "scissors"){
       console.log("You win! Rock beats Scissors.");
       humanScore += 1
    } else if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("It's a draw.")
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock")
        computerScore += 1
    } else if (humanChoice === "paper" && computerChoice ==="scissors"){
        console.log("You lose! Scissors beats Paper")
        computerScore += 1
    } else if (humanChoice === "paper" && computerChoice ==="rock"){
       console.log("You win! Paper beats Rock.");
       humanScore += 1
    } else if (humanChoice === "paper" && computerChoice ==="paper"){
        console.log("It's a draw.")
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("It's a draw.")
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper.");
        humanScore += 1
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors")
        computerScore += 1
    }
}

// let humanChoice = getHumanChoice()
// let computerChoice = getComputerChoice()

// playRound(humanChoice, computerChoice)
// console.log(`The human score: ${humanScore}`)
// console.log(`The computer score: ${computerScore}`)

/* STEP Play 5 rounds
    1. Create function playGame  
    2. Move playRound into playGame 
    3. call playRound 5 times
*/

// function playGame(){
//     humanScore = 0
//     computerScore = 0
//     let humanChoice = getHumanChoice().toLowerCase();
//     let computerChoice = getComputerChoice();
//     console.log(humanChoice)
//     console.log(computerChoice)
//     playRound(humanChoice, computerChoice);
//     console.log(`The human score: ${humanScore}`)
//     console.log(`The computer score: ${computerScore}`)
//     //new round
//     humanChoice = getHumanChoice().toLowerCase();
//     computerChoice = getComputerChoice();
//     console.log(humanChoice)
//     console.log(computerChoice)
//     playRound(humanChoice, computerChoice);
//     console.log(`The human score: ${humanScore}`);
//     console.log(`The computer score: ${computerScore}`);

//     humanChoice = getHumanChoice().toLowerCase();
//     computerChoice = getComputerChoice();
//     console.log(humanChoice)
//     console.log(computerChoice)
//     playRound(humanChoice, computerChoice);
//     console.log(`The human score: ${humanScore}`);
//     console.log(`The computer score: ${computerScore}`);

//     humanChoice = getHumanChoice().toLowerCase();
//     computerChoice = getComputerChoice();
//     console.log(humanChoice)
//     console.log(computerChoice)
//     playRound(humanChoice, computerChoice);
//     console.log(`The human score: ${humanScore}`);
//     console.log(`The computer score: ${computerScore}`);

//     humanChoice = getHumanChoice().toLowerCase();
//     computerChoice = getComputerChoice();
//     console.log(humanChoice)
//     console.log(computerChoice)
//     playRound(humanChoice, computerChoice);
//     console.log(`The human score: ${humanScore}`);
//     console.log(`The computer score: ${computerScore}`);

//     if (humanScore > computerScore){
//         console.log(`Congratulations, you won the game. Your score is ${humanScore} and the computer's score is ${computerScore}`);
//     } else if (humanScore < computerScore){
//         console.log(`Too bad, you lost the game. Your score is ${humanScore} and the computer's score is ${computerScore}`);
//     } else if (humanScore === computerScore){
//         console.log(`It's a draw. Your score is ${humanScore} and the computer's score is ${computerScore}`);
//     }

// }

//Start game
// playGame()

//User chooses rock
const rock = document.querySelector(".rock");

rock.addEventListener("click", (event) => {
  let playerSelection = "rock"
  let computerSelection = getComputerChoice()
  console.log(`player selection is ${playerSelection}`)
  console.log(`computer selection is ${computerSelection}`)
  playRound(playerSelection, computerSelection)
});

//User chooses paper
const paper = document.querySelector(".paper");

paper.addEventListener("click", (event) => {
  let playerSelection = "paper"
  let computerSelection = getComputerChoice()
  console.log(`player selection is ${playerSelection}`)
  console.log(`computer selection is ${computerSelection}`)
  playRound(playerSelection, computerSelection)
});

//User chooses scissors
const scissors = document.querySelector(".scissors");

scissors.addEventListener("click", (event) => {
  let playerSelection = "scissors"
  let computerSelection = getComputerChoice()
  console.log(`player selection is ${playerSelection}`)
  console.log(`computer selection is ${computerSelection}`)
  playRound(playerSelection, computerSelection)
});


//Container design
const container = document.querySelector("div")

container.style.border = "1px solid black";
container.style.backgroundColor = "powderblue";
container.style.textAlign = "center"
container.style.padding = "70px"
