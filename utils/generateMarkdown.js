
// Generates the license badge at the top of the README depending on which license was selected
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'BSD 2-Clause License':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    case 'BSD 3-Clause License':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case 'Boost Software License 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    case 'Creative Commons Zero Universal':
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    case 'Eclipse Publice License 2.0':
      return `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    case 'GNU General Public License v2.0':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)` 
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `https://opensource.org/license/apache-2-0/`
    case 'GNU General Public License v3.0':
      return `https://www.gnu.org/licenses/gpl-3.0`
    case 'MIT License':
      return `https://opensource.org/license/mit/`
    case 'BSD 2-Clause License':
      return `https://opensource.org/license/bsd-2-clause/`
    case 'BSD 3-Clause License':
      return `https://opensource.org/license/bsd-3-clause/`
    case 'Boost Software License 1.0':
      return `https://www.boost.org/LICENSE_1_0.txt`
    case 'Creative Commons Zero Universal':
      return `https://creativecommons.org/publicdomain/zero/1.0/`
    case 'Eclipse Publice License 2.0':
      return `https://opensource.org/license/epl-2-0/`
    case 'GNU General Public License v2.0':
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
    case 'Mozilla Public License 2.0':
      return `https://opensource.org/license/mpl-2-0/`
    case 'The Unlicense':
      return `https://unlicense.org/` 
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return renderLicenseBadge(data.license) + `
  # ${data.title}
  ${data.description}
  ## Installation Instructions
  ${data.install}
  ## Usage Information
  ${data.usage}
  ## Contribution Guidelines
  ${data.contribution}
  ## Test Instructions
  ${data.test}
  ### Licensing Information
  ${data.license}


` + renderLicenseLink(data.license);
}

module.exports = generateMarkdown;
