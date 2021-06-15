// DEPENDENCIES
// ---------------------------------------------------------------------------

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Gets the required js class files
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Empty Array for team members
const teamMembers = [];
const canAddManager = true;

// Variable to select the new member
const selectRoleType = [
    {
        type: "list",
        name: "roleType",
        message: "Please choose the role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

// Output location
const outputDirectory = path.resolve(__dirname, "src");
const outputPath = path.join(outputDirectory, "teamProfile.html");

// ARRAY OF QUESTIONS
// ---------------------------------------------------------------------------

const questions = {
    // Prompts for Manager
    Manager: [
        // Manager's Name
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's name." }
            },
        },
        // Manager's ID
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's id." }
            },
        },
        // Manager's Email
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        // Manager's Office Number
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's office number." }
            },
        },
        // Adding Another Employee
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee?",
            choices: ["Yes", "No"]
        }
    ],

    // Prompts for Engineer
    Engineer: [
        // Engineer's Name
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's name." }
            },
        },
        // Enginner's ID
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's id." }
            },
        },
        // Enginner's Email
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        // Enginner's GitHub
        {
            type: "input",
            name: "gitHub",
            message: "What is the engineer's GitHub username?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's GitHub." }
            },
        },
        // Adding Another Employee
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["Yes", "No"]
        }
    ],

    // Prompts for Intern
    Intern: [
        // Intern's Name
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter intern's name." }
            },
        },
        // Intern's ID
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter intern's id." }
            },
        },
        // Intern's Email
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        // Intern's School
        {
            type: "input",
            name: "internSchool",
            message: "What school is the intern attending?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the name of school." }
            },
        },
        // Adding Another Employee
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee?",
            choices: ["Yes", "No"]
        }
    ]
};

// FUNCTIONS
// ---------------------------------------------------------------------------

function addNewMember() {
    inquirer.prompt(selectRoleType)
        .then(answer => {
            // console.log(answer.roleType);

            if (answer.roleType === "Manager") {
                if (canAddManager) {
                    inquirer.prompt(questions.Manager)
                        .then(answer => {
                            //save employee info
                            const manager = new Manager
                                (
                                    answer.name,
                                    answer.id,
                                    answer.email,
                                    answer.officeNumber
                                );

                            //add info to team array if manager doesn't exist
                            teamMembers.push(manager);
                            canAddManager = false;
                            if (answer.addNew === "yes") {
                                addNewMember();
                            } else {
                                generate();
                            }
                        });
                } else {
                    //only 1 manager
                    console.log("There is a manager already!")
                    addNewMember();
                }

            } else if (answer.roleType === "Engineer") {
                inquirer.prompt(questions.Engineer)
                    .then(answer => {
                        //save ee info
                        const engineer = new Engineer
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.github
                            );
                        //add info to team array
                        teamMembers.push(engineer);
                        if (answer.addNew === "yes") {
                            addNewMember();
                        } else {
                            generate();
                        };
                    });

            } else if (answer.roleType === "Intern") {
                inquirer.prompt(questions.Intern)
                    .then(answer => {
                        //save ee info
                        const intern = new Intern
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.school
                            );
                        //add info to team array
                        teamMembers.push(intern);
                        if (answer.addNew === "yes") {
                            addNewMember();
                        } else {
                            generate();
                        };
                    });
            };
        });
};

addNewMember();

// Function to generate output file
function generate() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    process.exit(0);
}