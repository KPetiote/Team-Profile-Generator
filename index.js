// DEPENDENCIES
// ---------------------------------------------------------------------------

const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./dist/style");

// Gets the required js class files
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Empty Array for team members
const teamMembers = [];

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
