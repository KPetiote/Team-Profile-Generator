// ENGINEER CLASS
// ---------------------------------------------------------------------------

// Required to Extend From Employee Class
const Employee = require("./Employee");

// Creates Engineer Class
class Engineer extends Employee {
    constructor(engineerName, engineerId, engineerEmail, gitHub){
        super(engineerName, engineerId, engineerEmail);
        this.github = gitHub;
        this.role = "Engineer";
    }
    getGitHub(){
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;