const {hogwarts, gryffindorPeople} = require("./exercise")

test("test to filter all Grynffindor people", () => {
    expect(gryffindorPeople(hogwarts)).toEqual(["Harry Potter", "Ron Weasley", "Hermione Granger", "Minerva McGonagall", "Albus Dumbledore"])
})