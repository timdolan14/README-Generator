// Establish Variables
// const { default: inquirer } = require('inquirer');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require("./utils/generateMarkdown");

// Establish Questions

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of this project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List your collaborators, if any, with links to their Github profiles.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Can users test this project? If so, please explain.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license(s) will be used for this project?',
        choices: ['MIT','Apache','GPL'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provde instructions and examples for usage. Include screenshots if neccessary.',
    },

];

// Function to initialize app 
// Creates Format of ReadME and applies responses to specific areas
// Allows users to click on the table of contents and be directed to that specific area

const writeToFile = ({title, github, email, description, contributing, tests, license, installation, Usage}) => 

`
# ${title}
![${license}](https://img.shields.io/badge/license-${license}-blue.svg)
## Description 
${description}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
## Installation
${installation}
## Usage 
${Usage}
## License
This application is covered by the ${license} license.
## Contributing
${contributing}
## Tests
${tests}
## Questions
Find my Github profile here: [${github}](https://github.com/${github}).
If you have any additional questions, please contact me via email at ${email}.
Thank you!
`;

// Function to Create File
function init () {
inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        fs.writeFile('README.md', writeToFile(response), (err) => {
            err ? console.log(err) : console.log("Succcess");
        });
    })
}

// Function call to initialize app
init();