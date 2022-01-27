// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a simple description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['a', 'b', 'c', 'd'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Instructions on how to test.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();
