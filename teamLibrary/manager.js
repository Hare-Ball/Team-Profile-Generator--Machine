const Manger = require("./employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, title, email)
        this.officeNumber = officeNumber
        this.title = "Manager"
    }


    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager