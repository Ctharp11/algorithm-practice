
//compare two strings and output the longest similar substring
//str1 and str2 have similar substrings of 12, 1234, 123, and 1234567
//the output would be 1234567, since that's the longest substring

//sort through each str comparing each index to the next, if the two are the same keep going until they aren't the same
//when one index isn't the same, capture the substring and push to array


//compare two strings
// const str1 = '123456789';
// const str2 = '1212341231234567';
const str1 = 'bananahamic';
const str2 = 'ancbandanahwhamicz';
let lengthCheck1B = 0;
let lengthCheck2B = 0;
let lengthCheck1 = 1;
let lengthCheck2 = 1;
let subHolder = [];

do {
  if (str1.substring(lengthCheck1B, lengthCheck1) === str2.substring(lengthCheck2B, lengthCheck2)) {
    subHolder.push(str1.substring(lengthCheck1B, lengthCheck1));
    lengthCheck1 ++
    lengthCheck2 ++
    console.log('subHolder', subHolder)
  } 
  else {
    //if fails at beginning, move str2 +1 each
    if (lengthCheck2B === 0 || lengthCheck2B === lengthCheck1B + 1) {
        lengthCheck1B = 0;
        lengthCheck1 = 1;
        lengthCheck2B ++;
        lengthCheck2 ++;
    }
    // move str1 back to starting place
    else {
        lengthCheck1B = 0;
        lengthCheck1 = 1;
        lengthCheck2B = lengthCheck2 - 1;
    }
    


    // start str2 where left off

    // lengthCheck1 = lengthCheck1B + 1;
    // lengthCheck2 = lengthCheck2 + 1;
    console.log('lengthCheck1', lengthCheck1, 'else lengthCheck1B', lengthCheck1B)
    console.log('else lengthCheck2B', lengthCheck2B, 'lengthCheck2', lengthCheck2)
  }
} 
while (lengthCheck2 <= str2.length)

let length = 0;
let longest;
subHolder.map(i => {
    if (i.length > length) {
        longest = i;
    }
})
console.log('longest', longest)

