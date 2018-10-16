//longest substring without repeating characters

function substring(s) {
    const obj = {}
    const arr = []
    for (let i of s) {
        console.log(i)
        obj[i] = i
        arr[i] = i
    }
    console.log(obj)
    console.log(arr)
    //compare first character to second character to see if they match
    //if match, push preceding characters
   


}

module.exports = substring;