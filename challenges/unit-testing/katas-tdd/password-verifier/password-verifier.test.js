const verify = require('./password-verifier')

test("If the password is less than 8 characters, should return 'Password rejected'", () => {
    expect(verify("123")).toEqual('Password rejected')
})