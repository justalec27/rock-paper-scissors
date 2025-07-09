console.log("Hello world")

/* Get Computer choice
    1. Create a function getComputerChoice
    2. Get a random number from 0 - 100
        a. If random number <= 0.33, return "rock"
        b. If random number is >0.33 and <= 0.66, return "paper"
        c If random number is > 0.66, return "scissors"
    3. Print out getComputerChoice
*/

function getComputerChoice(){
    let randomNumber = Math.random()
    console.log(randomNumber) //remove later
    if (randomNumber <= 0.33){
        return "rock";
    }  else if (randomNumber > 0.33 && randomNumber <= 0.66){
        return "paper";
    }  else if (randomNumber > 0.66 ){
        return "scissors"
    }

}

console.log(getComputerChoice())