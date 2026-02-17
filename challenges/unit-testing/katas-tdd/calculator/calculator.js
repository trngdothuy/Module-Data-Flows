function add(numbers) {
    if (numbers == "") {
        return 0
    } 
    const arr = numbers.split(",")
    let filterArr = arr.filter((num) => Number(num) <= 1000)

    if (filterArr.length == 1) {
        return Number(filterArr[0])
    } else {
        return filterArr.reduce((accumulator, value) => accumulator + Number(value), 0)
    }
}

module.exports = add;