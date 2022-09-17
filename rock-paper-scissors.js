const prompt = require('prompt-sync')({sigint: true});


let Player1 = prompt("Player 1, enter rock, paper or scissors: ");console.log(Player1)
let Player2 = prompt("Player 2, enter rock, paper or scissors: ");console.log(Player2);

if(Player1 === "rock" || Player1 === "paper" || Player1 === "scissors" ){console.log()}
else{console.log("Failure")};

if(Player2 === "rock" || Player2 === "paper" || Player2 === "scissors" ){console.log()}
else{console.log("Failure")};

if(Player1 === "paper" && Player2 === "rock" || Player1 === "rock" && Player2 === "scissors" || Player1 === "scissors" && Player2 === "paper")
{console.log("Player 1 Wins")}

if(Player2 === "paper" && Player1 === "rock" || Player2 === "rock" && Player1 === "scissors" || Player2 === "scissors" && Player1 === "paper")
{console.log("Player 2 Wins")}

else if(Player1 === "paper" && Player2 === "paper" || Player1 === "rock" && Player2 === "rock" || Player1 === "scissors" && Player2 === "scissors"){console.log("It's a draw")}
































