// INTERN JEST TEST
// ---------------------------------------------------------------------------
const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
    const testValue = "Rutgers";
    const emp = new Intern("Cole", 1, "email@email.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Intern";
    const emp = new Intern("Charles", 1, "email@email.com", "Rutgers");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "Rutgers";
    const emp = new Intern("Cole", 1, "email@email.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});