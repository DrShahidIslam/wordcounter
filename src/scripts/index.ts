#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red("WELCOME TO THE WORD COUNTER"))
const mytask =async () => {
let ask :{sentence: string} = await inquirer.prompt([
    {
     name: "sentence",
     type: "input",
     message:chalk.bgBlackBright("Please write the sentence that you want me to count the words")   
    }
])
let splitted = ask.sentence.split(" ");
let wordcount = splitted.length
console.log(chalk.bgYellow("Your word count is " + wordcount))
}
mytask()