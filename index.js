const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const generatePage = require("./src/generateHTML")

const employeeTeam = [];

const init = ()=> {
    addEmployee()
};

const addNewEmployee = [
    {
     type:"list",
     name:"employeeRole",
     message:"Would you like to add an Employee?",
     choices: ["Yes, I'd like to add a Manager", "Yes, I'd like to add an Engineer.", "Yes, I'd like to add an Intern.", "No, Thanks."]
    },
]

function addEmployee() {
    inquirer.prompt(addNewEmployee)
    .then(choices => {
        switch (choices.employeeRole) {
            case "Yes, I'd like to add a Manager":
                addManager();
                break;
            case "Yes, I'd like to add an Engineer.":
                addEngineer();
                break;
                case "Yes, I'd like to add an Intern.":
                addIntern();
                break;
            case "No, Thanks.":
                generateHTML(employeeTeam);
                break;
        }
    })
}

const managerQuestions = [
    {
        type:"input",
        name:"managerName",
        message:"What is the manager's name?"
    },
    {
        type:"input",
        name:"managerID",
        message:"What is the manager's employee ID?"
    },
    {
        type:"input",
        name:"managerEmail",
        message:"What is the manager's email address?"
    },
    {
        type:"input",
        name:"managerOfficeNumber",
        message:"What is the manager's office number?"
    }, 
]

function addManager(){
    inquirer.prompt(managerQuestions)
    .then (answers => {
        const manager = new Manager (answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
        employeeTeam.push(manager);
        console.log("Manager added to your team")
        addEmployee();
    })
};

const engineerQuestions = [
    {
        type:"input",
        name:"engineerName",
        message:"What is the engineer's name?"
    },
    {
        type:"input",
        name:"engineerID",
        message:"What is the engineer's employee ID?"
    }, 
    {
        type:"input",
        name:"engineerEmail",
        message:"What is the engineer's email address?"
    },
    {
        type:"input",
        name:"engineerGithub",
        message:"What is the engineer's GitHub profile?"
    }, 
]

function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then (answers => {
        const engineer = new Engineer (answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
        employeeTeam.push(engineer);
        console.log("Engineer added to your team")
        addEmployee();
    })
};

const internQuestions = [
    {
        type:"input",
        name:"internName",
        message:"What is the intern's name?"
    },
    {
        type:"input",
        name:"internID",
        message:"What is the intern's employee ID?"
    }, 
    {
        type:"input",
        name:"internEmail",
        message:"What is the intern's email address?"
    },
    {
        type:"input",
        name:"internSchool",
        message:"What school does the intern attend?"
    }, 
]

function addIntern(){
    inquirer.prompt(internQuestions)
    .then (answers => {
        const intern = new Intern (answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        employeeTeam.push(intern);
        console.log("Intern added to your team")
        addEmployee();
    })
};

function generateHTML(employeeTeam) {
    fs.writeFileSync("./dist/index.html", generatePage(employeeTeam),"UTF-8")
}

// Function call to initialize app 
init();
