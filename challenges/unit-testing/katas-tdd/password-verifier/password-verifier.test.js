const verify = require('./password-verifier')

test("If the password is less than 8 characters, should return 'Password rejected'", () => {
    expect(verify("123")).toEqual('Password rejected')
})

test("If the password is null, should return 'Password rejected'", () => {
    () => {
    expect(verify("")).toEqual('Password rejected')}
})

test("If the password does not have at least 1 uppercase letter, return 'Password rejected'", () => {
    () => {
    expect(verify("abc")).toEqual('Password rejected')}
})

test("If the password does not have at least 1 number, return 'Password rejected'", () => {
    () => {
    expect(verify("abc")).toEqual('Password rejected')}
})

test("If the password have at least 1 number, 1 uppercase letter, and more than 7 letters, return 'Password rejected'", () => {
    () => {
    expect(verify("Abc1234")).toEqual('Password accepted')}
})