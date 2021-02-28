const fs = require("fs");
const inquirer = require("inquirer");

console.log(`Welcome to the README Generator`);

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },

        {
            type: "input",
            name: "description",
            message: "Provide a short description of your project and its purpose.",
        },

        {
            type: "input",
            name: "install",
            message: "What steps are required to install your project?",
        },

        {
            type: "input",
            name: "usage",
            message: "How should your project be used?",
        },

        {
            type: "input",
            name: "contributors",
            message: "List all contributors for this project.",
        },

        {
            type: "list",
            name: "license",
            message: "What type of license should apply to your project?",
            choices: ["MIT", "Apache", "GPL"],
            filter: function (val) {
                return val.toLowerCase();
            }
        },

        {
            type: "input",
            name: "testing",
            message: "List any specific testing instructions for your project. If there are none, enter 'There are no specific testing requirements.'",
        },

        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },

        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        }
    ])
    .then((answers) => {
        console.log(answers);

    });