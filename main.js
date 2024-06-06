#! /usr/bin/env node
//SHABANG
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.greenBright("=".repeat(70)));
console.log(chalk.bgMagenta("\t\t***** CURRENCY CONVERTER *****\t"));
console.log(chalk.greenBright("=".repeat(70)));
//Define the list of currencies and their exchange rate
let exchange_rate = {
    "USD": 1, // Base currency
    "EUR": 0.9, //European Currency (Euro)
    "JYP": 113, // Janenese Currency (yen)
    "CAD": 1.3, // Canadian Dollar 
    "AUD": 1.65, //Australian Currency 
    "PKR": 280, // Pakistan Rupees
    // Add more currencies and their exchange rate here
};
//prompt  the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.bgCyanBright("\nSelect the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.bgBlueBright("\nSelect the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.bgGreenBright("\nEnter the amount to convert:")
    }
]);
// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of conversion currncies
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(chalk.yellowBright(`\nconverted amount =  ${converted_amount}`));
