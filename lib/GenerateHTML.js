const path = require("path");
const fs = require("fs");

const helperDir = path.resolve(__dirname, "../src");

const render = employees => {
  const html = [];

  html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );
  return renderMain(html.join(""));
};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(helperDir, "Manager.html"), "utf8");
  template = swapPlaceholder(template, "managerName", manager.getName());
  template = swapPlaceholder(template, "role", manager.getRole());
  template = swapPlaceholder(template, "managerEmail", manager.getEmail());
  template = swapPlaceholder(template, "managerId", manager.getId());
  template = swapPlaceholder(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(helperDir, "Engineer.html"), "utf8");
  template = swapPlaceholder(template, "engineerName", engineer.getName());
  template = swapPlaceholder(template, "role", engineer.getRole());
  template = swapPlaceholder(template, "engineerEmail", engineer.getEmail());
  template = swapPlaceholder(template, "engineerId", engineer.getId());
  template = swapPlaceholder(template, "gitHub", engineer.getGitHub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(helperDir, "Intern.html"), "utf8");
  template = swapPlaceholder(template, "internName", intern.getName());
  template = swapPlaceholder(template, "role", intern.getRole());
  template = swapPlaceholder(template, "internEmail", intern.getEmail());
  template = swapPlaceholder(template, "internId", intern.getId());
  template = swapPlaceholder(template, "internSchool", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(helperDir, "Employee.html"), "utf8");
  return swapPlaceholder(template, "team", html);
};

const swapPlaceholder = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;