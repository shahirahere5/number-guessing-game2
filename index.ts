import inquirer from "inquirer";

// 1) computer will generate a random number - done
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result 

// const randomNumber = 13;
// const randomNumber = Math.random() //giives value between 0 and 1
const randomNumber = Math.floor(Math.random() * 10 + 1);  //floor round-down numbers //multiply by the number of digits we want //if dice then + 1
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 and 10: "
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations, you guessed the correct number!");
}else {
    console.log("Sorry, you guessed wrong. The correct number was: " + randomNumber);
};

// console.log(randomNumber);

// console.log(answers);
//ESNext (updates target itself)