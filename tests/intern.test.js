const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test("Getting School", ()=>{
    var testSchool = new Intern("George", 6, "george@email.com", "SMU Bootcamp")
    expect(testSchool.getSchool()).toBe("SMU Bootcamp")
})

test("Getting role", ()=>{
    var testRole = new Intern("George", 6, "george@email.com")
    expect(testRole.getRole()).toBe("Intern")
})