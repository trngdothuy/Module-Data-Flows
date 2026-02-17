const add = require('./calculator')

test("return 0 if input is empty", () => {
    expect(add("")).toEqual(0)
})

test("return number itself if input is a single number", () => {
    expect(add("5")).toEqual(5)
})

test("return sum of 2 numbers from input", () => {
    expect(add("5,1")).toEqual(6)
})

test("return sum of more than 2 numbers from input", () => {
    expect(add("5,1,2,4")).toEqual(12)
})

test("should ignore number bigger than 1000, return sum of input", () => {
    expect(add("5,1,2,4,1001")).toEqual(12)
})