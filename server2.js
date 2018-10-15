//compare two strings and output the longest similar substring
//str1 and str2 have similar substrings of 12, 1234, 123, and 1234567
//the output would be 1234567, since that's the longest substring

//compare two strings
// const str1 = '123456789';
// const str2 = '1212341231234567';
const str1 = 'bananahamic';
const str2 = 'ancbandanahwhamicz';
let longestStr;
if (str1.length >= str2.length) {
  longestStr = str1
}
else {
  longestStr = str2;
}
console.log(longestStr)
// longest similar substring is hamic
let case1A = 0;
let case2A = 0;
let case1B = 1;
let case2B = 1;
const case1 = str1.substring(case1A, case1B);
const case2 = str2.substring(case2A, case2B);
let strHolder = [];
let placeHolder;


do {
  if (case1 === case2) {
    console.log('equal')
    placeHolder = case1;
    console.log(placeHolder);
    strHolder.push(case1);
    console.log('strHolder', strHolder);
    case1A++
    case1B++
    console.log('case1', case1A, case1B)
    case2A++
    case2B++
    console.log('case2', case2A, case2B)
    console.log(case1);
    console.log(case2);
  }
  else if (case1 !== case2) {
    console.log('not equal') 
    case1A++
    case1B++
    console.log(case1A, case1B)
    console.log(case1);
    console.log(case2);
  }
}
while (longestStr <= str1.length);









