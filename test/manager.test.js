const { test, expect } = require("@jest/globals")
const Manager = require("../employeeLibrary/Manager")

test("Getting Office Number", ()=>{
    var testOfficeNumber = new Manager("Bill", 9, "bill@email.com", "Office #101")
    expect(testOfficeNumber.getOfficeNumber()).toBe("Office #101")
})

test("Getting role", ()=>{
    var testRole = new Manager("Bill", 9, "bill@email.com", "Office #101")
    expect(testRole.getRole()).toBe("Manager")
})