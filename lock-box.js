const prompt = require('prompt-sync')({sigint: true});


let pinCode = Number(prompt("Please enter your pin code: "));console.log(pinCode);

if(pinCode === 1234){console.log("Success")}

else{console.log("Failure")}

