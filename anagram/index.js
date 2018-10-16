//does string a have the same character as string b? Are the two anagrams? 
function anagram(x, y) {
    const arrx = new Array();
    const arry = new Array();
    for(let i of x) {
        arrx.push(i)
    }
    for(let i of y) {
        arry.push(i)
    }
    const xSort = arrx.sort().join('');
    const ySort = arry.sort().join('');
    if (xSort === ySort) {
        return true
    }
    else return false
}

module.exports = anagram;