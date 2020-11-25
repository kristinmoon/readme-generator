const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = (data) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a title');
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmDescription',
      message: 'Would you like to provide a description of your project?',
      default: true
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter your description here:',
      when: ({ confirmDescription }) => {
        if (confirmDescription) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide instructions for installation:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions for usage:'
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What license should be attributed to your project? (Check all that apply)',
      choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'WTFPL'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide information about any contributors:'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide instructions for testing your application:'
    },
  ]);
}



// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(file, generateMarkdown(data), function (err) {
    if (err) throw err;
    console.log("README creation complete");
  })
}

// function to initialize program
const init = () => {
  inquirer.prompt(questions)
    .then(ans => {
      writeToFile(fileName, ans);
    })
}

// function call to initialize program
init();
