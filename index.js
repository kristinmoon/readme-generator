const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

let fileName;

// array of questions for user
// const questions = (data) => {
//   return inquirer.prompt([
//     {

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title? (Required)',
    validate: titleInput => {
      if (titleInput) {
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
    type: 'list',
    name: 'license',
    message: 'What license should be attributed to your project?',
    choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'WTFPL'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide information on how to contribute to this project/application:'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide instructions for testing your project/application:'
  },
  {
    type: 'input',
    name: 'githubName',
    message: 'What is your GitHub Username?'
  },
  {
    type: 'input',
    name: 'link',
    message: 'Please provide a link to your GitHub profile (Required):',
    validate: linkInput => {
      if (linkInput) {
        return true;
      } else {
        console.log('Please enter your link!');
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address (Required):',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
      }
    }
  },
];



// function to write README file
function writeToFile(file, data) {
  fs.writeFile(file, generateMarkdown(data), function (err) {
    if (err) throw err;
    console.log("README creation complete");
  })
};

// function to initialize program
const init = () => {
  inquirer.prompt(questions)
    .then(ans => {
      fileName = 'README.md'
      return ans;
    })
    .then(ans => {
      writeToFile(fileName, ans)
    })
    .catch(err => console.log(err))
};

// function call to initialize program
init();

