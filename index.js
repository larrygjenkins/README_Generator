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
        }

        // {
        //     type: "input",
        //     name: "usage",
        //     message: "What is the title of your project?",
        // },

        // {
        //     type: "input",
        //     name: "title",
        //     message: "What is the title of your project?",
        // },

        // {
        //     type: "input",
        //     name: "title",
        //     message: "What is the title of your project?",
        // },

        // {
        //     type: "input",
        //     name: "title",
        //     message: "What is the title of your project?",
        // },

        // {
        //     type: "input",
        //     name: "title",
        //     message: "What is the title of your project?",
        // }
    ])
    .then((answers) => {
        console.log(answers);

    });