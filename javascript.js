//global variables
let win = 0;
let loss = 0;
let tie = 0;
let score;

for(i = 0; i < 5; i++){




//player selection
let answer = prompt('Rock, paper, or scissors?')
console.log(answer);

//computer selection
let choices = ['rock', 'paper', 'scissors'];
console.log(choices);

let random = choices[Math.floor(Math.random()*choices.length)];
console.log(random);

//player and computer selections as constant
const playerSelection = answer;
const computerSelection = random;


function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() =='rock' && computerSelection == 'rock') {
        alert("The computer chose " + computerSelection + "!" + " It's a tie!");
        tie+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return ("Your choice: " + playerSelection + "." +  " Computer's choice: " + computerSelection);
        
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        alert("The computer chose " + computerSelection + "!" + " You lose!");
        loss+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return ("Your choice: " + playerSelection + "." +  " Computer's choice: " + computerSelection);

    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        alert("The computer chose " + computerSelection + "!"+ " You win!");
        win+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return ("Your choice: " + playerSelection + "." +  " Computer's choice: " + computerSelection);

    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        alert("The computer chose " + computerSelection + "!"+ " You win!");
        win+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return ("Your choice: " + playerSelection + "." +  " Computer's choice: " + computerSelection);

    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper'){
        alert("The computer chose " + computerSelection + "!" + " It's a tie!");
        tie+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return ("Your choice: " + playerSelection + "." +  " Computer's choice: " + computerSelection);

    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
        alert("The computer chose " + computerSelection + "!" + " You lose!");
        loss+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return ("Your choice: " + playerSelection + "." +  " Computer's choice: " + computerSelection);

    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
        alert("The computer chose " + computerSelection + "!" + " You lose!");
        loss+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return "You lose!"

    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        alert("The computer chose " + computerSelection + "!"+ " You win!");
        win+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return ("Your choice: " + playerSelection + "." +  " Computer's choice: " + computerSelection);

    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors'){
        alert("The computer chose " + computerSelection + "!" + " It's a tie!");
        tie+=1;
        score = ("Player: " + win + " Computer: " + loss + " Ties: " + tie);
        alert(score);
        console.log(score);
        return ("Your choice: " + playerSelection + "." +  " Computer's choice: " + computerSelection);

    } else {
        alert("Something went wrong! Choose between rock, paper, or scissors.");
        return "Something went wrong! Choose between rock, paper, or scissors."
    }
}
console.log(playRound(playerSelection, computerSelection));

};


function results(){
    if (win > loss){
        alert('You won the game!')
        return "You won!"
    } else if (win < loss){
        alert('You lost the game!')
        return "You lost!"
    } else if (win == loss){
        alert('The game was a tie!')
        return "The game was a tie!"
    } else if (tie > win && loss){
        alert('The game was a tie!')
        return "The game was a tie!"
    }else {
        alert('Something went wrong!')
        return "Something went wrong!"
    }


}
console.log(results());

