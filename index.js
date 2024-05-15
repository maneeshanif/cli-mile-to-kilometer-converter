#!usr/bin/env node
import figlet from "figlet";
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("Developed By:-"));
console.log(chalk.red.bold.underline("\tAnees Hanif"));
figlet(("Mile to KM Converter"), function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
    let amswer = inquirer
        .prompt({
        name: "miles1",
        type: "number",
        message: chalk.blue.bold.italic("\n\nEnter the distance in miles:"),
    })
        .then((answer) => {
        const Miles1 = answer.miles1;
        const kilometers1 = Miles1 * 1.60934;
        console.log(chalk.green.bold.italic(`\n\t\tThe distance of ${Miles1} miles is equal to ${kilometers1.toFixed(2)} kms.`));
    });
});
