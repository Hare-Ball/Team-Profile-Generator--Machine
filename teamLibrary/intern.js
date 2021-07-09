const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, title, email)
        this.school = school;
        this.title = "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern