// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (questions.choices === 'MIT') {
    return `[![${license}](https://img.shields.io/badge/license-MIT-blue.svg)`
  }
  if (questions.choices === 'Apache') {
    return `[![${license}](https://img.shields.io/badge/license-Apache-blue.svg)`
  }
  if (questions.choices === 'GPL') {
    return `[![${license}](https://img.shields.io/badge/license-GPL-blue.svg)`
  }
}

// Available options ['MIT','Apache','GPL']


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;