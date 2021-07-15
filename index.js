const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./employeeLibrary/Manager")
const Engineer = require("./employeeLibrary/Engineer")
const Intern = require("./employeeLibrary/Intern");
//const Choices = require("inquirer/lib/objects/choices");
//const { callbackify } = require("util");

const team = [];

const init = ()=> {
    addEmployee()
};

function addEmployee() {
    inquirer.prompt(addNewEmployee).then(choices => {
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
                generateHTML();
                break;
        }
    })
}

const addNewEmployee = [
    {
     type:"list",
     name:"employeeRole",
     message:"Would you like to add an Employee?",
     choices: ["Yes, I'd like to add a Manager", "Yes, I'd like to add an Engineer.", "Yes, I'd like to add an Intern.", "No, Thanks."]
    },
]

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
        team.push(manager);
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
        team.push(engineer);
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
        team.push(intern);
        console.log("Intern added to your team")
        addEmployee();
    })
};

function writeHTML() {
    let employeeCards ='';
    team.forEach(employee => {
        employeeCards =+ generateCards(employee);
    });

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" type="text/css" href="/assets/style.css" media="screen" />
                <title>Team Profile Generator</title>
            </head>
            <body>
                ${employeeCards}
            </body>
            </html>
            `;
}

function generateCards(employee){
    switch(employee.getRole()) {
        case "Manager":
            return `<section
                    <h5 class="card-header">${employee.getName()}:${employee.getRole()}</h5>
                    <ul>
                        <li> ID: ${employee.getID()} </li>
                        <li> Email Address:${employee.getEmail()}</li>
                        <li> Office: ${employee.getOfficeNumber()} </li>
                    </ul>
                    </section>
                    `;

        case "Engineer":
            return `<section
                    <h5 class="card-header">${employee.getName()}:${employee.getRole()}</h5>
                    <ul>
                        <li> ID: ${employee.getID()} </li>
                        <li> Email Address:${employee.getEmail()}</li>
                        <li> GitHub: ${employee.getGithub()} </li>
                    </ul>
                    </section>
                    `;

        case "Intern":
            return `<section
                    <h5 class="card-header">${employee.getName()}:${employee.getRole()}</h5>
                    <ul>
                        <li> ID: ${employee.getID()} </li>
                        <li> Email Address:${employee.getEmail()}</li>
                        <li> School: ${employee.getSchool()} </li>
                    </ul>
                    </section>
                    `;
    }
} 

function generateHTML(){
    let HTML = writeHTML();
    fs.writeFile('./assets/index.html', HTML,"UTF-8")
}

// Function call to initialize app 
init();
