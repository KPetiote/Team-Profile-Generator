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
    const testValue = "email@email.com";
    const emp = new Employee("Cole", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "Kenneth";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Get ID via getId()", () => {
    const testValue = 61;
    const emp = new Employee("Cole", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Get Email via getEmail()", () => {
    const testValue = "email@email.com";
    const emp = new Employee("Cole", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Employee";
    const emp = new Employee("Kenneth", 1, "email@email.com");
    expect(emp.getRole()).toBe(testValue);
});