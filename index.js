// Required packages for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions to ask the user to generate the README
const questions = [
    {
        type: 'input',
        message: 'Please enter the title of your project: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter the description of your project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions: ',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please enter the usage information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter the contributions for this project: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter the test instructions: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please select the license you would like to use: ',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License 1.0', 'Creative Commons Zero Universal', 'Eclipse Public License 2.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email address: ',
        name: 'email'
    }
]

// Writes the README file and logs out of it works or had an error
function writeToFile(fileName, data) {
    const filePath = fileName + '.md';

    fs.writeFile(filePath, data, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README Generated!');
        }
    })
}

// Calls Inquirer to run through the array of questions and generates the README file
function init() {
        inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('GeneratedREADME', generateMarkdown(response))
        }); 
}

// Initializes the application
init();
