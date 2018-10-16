//does string have any repeat characters
function repeatChars(s) {
    //loop through string
    //assign string index value to as object key with value 1
    //if string value exists again, increment value
    //loop through object and if any value equals 2, return false
    const obj = {};
    for (let i of s) {
        if (!obj[i]) {
          obj[i] = 1
        }
        else {
          obj[i]++
        }
    }
    for (let key in obj) {
        if (obj[key] >= 2) {
            return true
        }
    }
    return false
}

module.exports = repeatChars;