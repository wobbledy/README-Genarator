// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        message: 'Please enter the contribution guidelines: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter the test instructions: ',
        name: 'test'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = fileName + '.md';

    fs.writeFile(filePath, data, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('It Worked');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
        
        inquirer
        .prompt(questions)
        .then((response) => {
            //generateMarkdown(response)

            //Write to file after Markdown is generated here
            writeToFile('GeneratedREADME', generateMarkdown(response))
        });
    

    

}

// Function call to initialize app
init();
