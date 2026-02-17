function convertToOldRoman(n) {
    let result = ""
    if (n < 5) {
        result = 'I'.repeat(Number(n / 1))
    } else if (n < 10) {
        result = 'V' + 'I'.repeat(Number((n - 5) / 1))
    } else if (n < 50) {
        result = 'X'.repeat((n / 10)) 
        let unitsDigit = Number(n - (Math.floor((n / 10)) * 10))
        
        console.log("unitsDigit", unitsDigit)
        if (unitsDigit >= 5 && unitsDigit <= 9) {
            result += 'V' 
            result += 'I'.repeat((unitsDigit - 5) / 1)
        } else {
            result += 'I'.repeat(unitsDigit / 1)
        }
    } return result
}

console.log(convertToOldRoman(22))

module.exports = convertToOldRoman;
