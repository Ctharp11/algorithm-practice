function maxChar(s) {
    const obj = {}
    for (let i of s) {
        if (!obj[i]) {
           obj[i] = 1
        }
        else {
            obj[i]++
        }
    }
    console.log(obj)
    let hn = 0;
    let n = '';
    for (let key in obj) {
        if (obj[key] > hn) {
            hn = obj[key]
            n = key
        }
    }
    console.log(n, hn)
}

maxChar('abcbdeefghfijklggmnaaaakllla')