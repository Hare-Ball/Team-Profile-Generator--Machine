const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./templates/css")
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern");
const Choices = require("inquirer/lib/objects/choices");

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

// {
//     type:"list",
//     name:"addNewEmployee",
//     message:"Would you like to add another Employee?",
//     Choices: ["Yes, I'd like to add an Engineer.", "Yes, I'd like to add an Intern.", "No, Thanks."]
// },

function init() {
    // inquire.prompt(managerQuestions).then(
    //     answers=>{
    //         console.log(answers)
    //         let template = generateMarkdown(answers)
    //         console.log(template)
    //         writeToFile(template)
    //     }
    // )
}

// Function call to initialize app
init();