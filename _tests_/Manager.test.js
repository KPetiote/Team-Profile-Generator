// MANAGER JEST TEST
// ---------------------------------------------------------------------------
const Manager = require("../lib/Manager");


test("Set Office Number via constructor argument", () => {
    const testValue = 83;
    const emp = new Manager("Cole", 1, "email@fakemail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("getRole() function should return 'Manager'", () => {
    const testValue = "Manager";
    const emp = new Manager("Cole", 1, "email@fakemail.com");
    expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number via getOffice()", () => {
    const testValue = 83;
    const emp = new Manager("Cole", 1, "email@fakemail.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});