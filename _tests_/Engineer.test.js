// ENGINEER JEST TEST
// ---------------------------------------------------------------------------
const Engineer = require("../lib/Engineer");

test("Set GitHub Account via constructor", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Cole", 1, "email@fakemail.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() function should return 'Enginner'", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Cole", 1, "email@fakemail.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
});

test("getGitHub() function should return Github Username", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Cole", 1, "email@fakemail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});