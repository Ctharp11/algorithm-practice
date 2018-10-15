//given a string, return the character that is used most frequently
function maxChar(str) {
    const obj = {};
    for (let char of str) {
        obj[char] = obj[char] + 1 || 1
    }
    let hn = 0;
    let k = '';
    for (let key in obj) {
        if (obj[key] > hn) {
            hn = obj[key]
            k = key
        }
    }
    return k
}

module.exports = maxChar;