// INTERN CLASS
// ---------------------------------------------------------------------------

// Required to Extend From Employee Class
const Employee = require('./employee');

// Creates Intern Class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role ="Manager";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;