function reverseInt(int) {
 if (int === 0) return 0
 let num = parseInt(int.toString().split('').reverse().join(''));
 if (int < 0) {
     return num * -1
 }
 return num
}

module.exports = reverseInt; 