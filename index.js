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
        message: 'What is your Email Address?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of this Project.',
    },

    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide instructions for this project.',
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'Can users contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test this project?',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license will be used for this project?',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Creative Commons Attribution 4.0', 'GNU General Public License family'],
    },

];

// Function to initialize app 

const writeToFile = ({title, github, email, description, instructions, contributions, tests, licenses}) => 

`
## Title 
${title}
## Github 
${github}
## Description 
${description}
## Instructions 
${instructions}
## Contributions 
${contributions}
## Tests 
${tests}
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