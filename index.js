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