function verify(password) {
    if (password.length < 8) {
        return 'Password rejected'
    } 
    let passwordArr = password.split("")
    if (!passwordArr.includes(/A-Z/) || !passwordArr.includes(/0-9/)) {
        return 'Password rejected'
    } 
    return 'Password accepted'
}

module.exports = verify;