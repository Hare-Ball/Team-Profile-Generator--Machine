const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        super (name, id, title, email)
        this.github = github;
        this.title = "Engineer"
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer