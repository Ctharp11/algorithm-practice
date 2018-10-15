function reverse(str) {
    letterHolder = ''
    str.split('').map(i => {
        console.log(i)
        letterHolder = i + letterHolder
    })
    return letterHolder;
}

module.exports = reverse;