// Establish Variables
// const { default: inquirer } = require('inquirer');
const inquirer = require('inquirer');
const fs = require('fs');

// Establish Questions
inquirer.prompt([
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
        message: 'Please provide Instructions for this Project.',
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'Can Users contribute to this project?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How can Users test this project?',
    },

])
    .then((response) => {
        console.log(response);
        fs.writeFile('README_GEN.md', JSON.stringify(response, null, '\t'), (err) => {
            err ? console.log(err) : console.log("Succcess");
        });
    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();