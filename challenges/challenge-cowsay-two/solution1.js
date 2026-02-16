// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
const args = process.argv.slice(2)
let input = args.join(' ')

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = input;

// 3. Make a cow that takes a string

function cowsay(saying) {
    // empty parameter
    if (!saying || saying.trim() === '') {
        saying = 'Moo';
    }
    // how will you make the speech bubble contain the text?
    const length = saying.length
    const top = ' ' + topLine.repeat(length + 2)
    const middle = `< ${saying} >`
    const bottom = ' ' + bottomLine.repeat(length + 2)
    // where will the cow picture go?
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

    //4. Pipe argument into cowsay function and return a cow

    console.log(cowsay(saying))
