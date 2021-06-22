// MANAGER CLASS
// ---------------------------------------------------------------------------

// Required to Extend From Employee Class
const Employee = require('./Employee');

// Creates Manager Class
class Manager extends Employee {
    constructor (managerName, managerId, managerEmail, officeNumber) {
        super(managerName, managerId, managerEmail);
        this.officeNumber = officeNumber;
        this.role ="Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;