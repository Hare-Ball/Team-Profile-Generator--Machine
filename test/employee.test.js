
const { test, expect } = require("@jest/globals")
const Employee = require("../employeeLibrary/Employee")

test("Testing for the Employee Name", ()=>{
    var testEmployee = new Employee("Fred", 5, "fred@email.com")
    expect(testEmployee.getName()).toBe("Fred")
})

test("Testing to get ID", ()=>{
    var testId = new Employee("Fred", 5, "fred@email.com")
    expect(testId.getId()).toBe(5)
})

test("Getting email", ()=>{
    var testEmail = new Employee("Fred", 5, "fred@email.com")
    expect(testEmail.getEmail()).toBe("fred@email.com")
})

test("Getting role", ()=>{
    var testRole = new Employee("Fred", 5, "fred@email.com")
    expect(testRole.getRole()).toBe("Employee")
})