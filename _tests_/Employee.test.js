// EMPLOYEE JEST TEST
// ---------------------------------------------------------------------------
const Employee = require("../lib/Employee");

test("New Employee created", ()=> {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Set Employee Name via constructor argument", () => {
    const name = "Kenneth";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Set ID via constructor argument", () => {
    const testValue = 100;
    const emp = new Employee("Cole", testValue);
    expect(emp.id).toBe(testValue);
});

test("Set Email via constructor argument", () => {
    const testValue = "email@fakemail.com";
    const emp = new Employee("Cole", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "Kenneth";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Get ID via getId()", () => {
    const testValue = 83;
    const emp = new Employee("Cole", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Get Email via getEmail()", () => {
    const testValue = "email@fakemail.com";
    const emp = new Employee("Cole", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("getRole() function should return 'Employee'", () => {
    const testValue = "Employee";
    const emp = new Employee("Kenneth", 1, "email@fakemail.com");
    expect(emp.getRole()).toBe(testValue);
});