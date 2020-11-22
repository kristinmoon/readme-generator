
// function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table Of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
