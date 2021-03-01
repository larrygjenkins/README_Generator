const fs = require("fs");
const inquirer = require("inquirer");

console.log(`Welcome to the README Generator`);

// These are the questions the user will answer when setting up their README file.

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

        // These if/else if statements add a new key/value pair to the answers object, depending on the type of license the user chooses for their project. 
       
        if (answers.license == "MIT") {
            answers.badgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }
        else if (answers.license == "Apache") {
            answers.badgeURL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

        } else {
            answers.badgeURL = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        }

        console.log(answers);

        const readMeContent = generateReadMe(answers);

        fs.writeFile("newREADME.md", readMeContent, (err) => 
            err ? console.error(err) : console.log(`The file was created.`)
        );
    });


// This function contains the Markdown for the README text. 
const generateReadMe = (answers) =>

`# ${answers.title}
${answers.badgeURL}

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Questions](#questions)

## Installation
${answers.install}

## Usage
${answers.usage}

## Testing
${answers.testing}

## Questions?
Contact me at the following locations:

* Email: <a href="mailto:${answers.email}">${answers.email}</a>
* GitHub: <a href="https://github.com/${answers.github}">github.com/${answers.github}</a>

## Licensing
Licensed under the ${answers.license} license.
`