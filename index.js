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
        name: 'instructions',
        message: 'Please provide instructions for this project.',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their Github profiles.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Can users test this project? If so, please explain.',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license(s) will be used for this project?',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Creative Commons Attribution 4.0', 'GNU General Public License family'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provde instructions and examples for use.',
        
    },

];

// Function to initialize app 
// Creates Format of ReadME and applies responses to specific areas

const writeToFile = ({title, github, email, description, instructions, credits, tests, licenses, Installation, Usage}) => 

`
# ${title}
## Github 
${github}
## Email
${email}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#licenses)
## Description 
${description}
## Instructions 
${instructions}
## Credits
${credits}
## Tests 
${tests}
## Installation 
${Installation}
## Usage 
${Usage}
## Licenses 
${licenses}`;

// Function to Create File
function init () {
inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        fs.writeFile('README_GEN.md', writeToFile(response), (err) => {
            err ? console.log(err) : console.log("Succcess");
        });
    })
}

// Function call to initialize app
init();