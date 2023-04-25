// Establish Variables
const Inq = require('inquirer');

// Establish Questions
const prompts = [
    
{

type: 'input',
name: 'title',
message: 'What is the title of this project?'

},
{
    type: 'input',
    name: 'github',
    message: 'What is your Github Username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your Email Address?'
},

{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of this Project.'
},

{
    type: 'input',
    name: 'instructions',
    message: 'Please provide Instructions for this Project.'
},

{
    type: 'input',
    name: 'contributions',
    message: 'Can Users contribute to this project?'
},

{
    type: 'input',
    name: 'tests',
    message: 'How can Users test this project?'
},

]


// Function to prompt questions above

// Call function