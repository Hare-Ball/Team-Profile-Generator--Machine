const { test, expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test("Getting GitHub", ()=>{
    var testGithub = new Engineer("Ginny", 8, "ginny@email.com", "EnGinnyEer@github.com")
    expect(testGithub.getGithub()).toBe("EnGinnyEer@github.com")
})

test("Getting role", ()=>{
    var testRole = new Engineer("Ginny", 7, "ginny@email.com")
    expect(testRole.getRole()).toBe("Engineer")
})