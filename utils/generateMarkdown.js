
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

  ## License(s)
  ${data.license}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
