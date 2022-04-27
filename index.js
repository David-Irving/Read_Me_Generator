const fs = require(`fs`);
const inquirer = require(`inquirer`)

const generatePage = require(`./generateMarkdown.js`);

const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            validate: nameIn => {
                if (nameIn) {
                    return true;
                }   else {
                    console.log("Please enter your username.");
                    return false;``
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            validate: nameIn => {
                if (nameIn) {
                    return true;
                }   else {
                    console.log("Please enter your email address.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?",
            validate: nameIn => {
                if (nameIn) {
                    return true;
                }   else {
                    console.log("Please enter the name of your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "projectDescription",
            message: "What is your project about?",
            validate: nameIn => {
                if (nameIn) {
                    return true;
                }   else {
                    console.log("Please describe your project.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "What license if your project using?",
            choices: ["MIT", "Apache", "GNU", "BSD", "Boost", "Creative", "Eclipse", "Mozilla"],
            default: ["MIT"],
            validate: nameIn => {
                if (nameIn) {
                    return true;
                }   else {
                    console.log("Please choose a license.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installSteps",
            message: "What are the steps to install your project?",
            validate: nameIn => {
                if (nameIn) {
                    return true;
                }   else {
                    console.log("Please enter the steps to install your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "What does the app do?",
            validate: nameIn => {
                if (nameIn) {
                    return true;
                }   else {
                    console.log("Please explain what the app does.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "What command she be used to run tests?",
            default: "NPM test",
        },
        {
            type: "input",
            name: "contributors",
            message: "What does the user need to know?",
        }
    ]);
};

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been created.")
        }
        })
    };

questions ()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})