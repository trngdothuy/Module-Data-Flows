// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// 2. Make supplies for our speech bubble
let topLine = '_';
let bottomLine = '-';

// 3. Make a cow that takes a string
const cow = (saying) => {
    // empty parameter
    if (!saying || saying.trim() === '') {
        saying = 'Moo';
    }

    // speech bubble 
    const length = saying.length
    const top = ' ' + topLine.repeat(length + 2)
    const middle = `< ${saying} >`
    const bottom = ' ' + bottomLine.repeat(length + 2)

    const cow = `
       /
      /
^__^ /
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||

    `
    return `
    ${top}
    ${middle}
    ${bottom}
    ${cow}
    `
}

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
rl.question('What does the cow say?', (saying) => {
    console.log(cow(saying))
    rl.close()
})