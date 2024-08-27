// Welcome to the Chalkboard Printer!
const input = require('sync-input');

// These variables are already declared for you.
// Looks like we made a mistake and used 'var' instead of 'let'!
// Remember it's bad practice to use 'var', so let's change all of them to 'let'.
   // let name, surname, message;

// Assign the correct values to the variables.
// name = "Bart";
// surname = "Simpson";
// message = "I will not skateboard in the halls.";


// We have also imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
let name = input("Type your name: ");
let surname = String(input("Type your surname: "));
let message = String(input("Enter message: "));
let numberOfRepeats = Number(input("Enter number of repeats: "));

// Log the message to the console for the amount of times the user wishes.
for(let i = 1; i <= numberOfRepeats; i++){
    console.log(`This is ${name} ${surname} and ${message}`);
}

