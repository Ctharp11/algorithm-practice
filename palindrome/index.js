// word or phrase that reads same backwards as forwards
function palindrome(str) {
 if (str.charAt(0) === ' ' || str.charAt(str.length -1) === ' ') return false
 const rev = str.split('').reverse().join('')
 if (rev === str) {
     return true
 }
 else {
     return false
 }
}

module.exports = palindrome;