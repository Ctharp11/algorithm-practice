//longest substring without repeating characters

function substring(s) {
    const obj = new Set();
    let left = 0;
    let right = 0;
    let res = 0;

    while(right < s.length) {
        const currentChar = s.charAt(right)
        if (!obj.has(currentChar)) {
            // console.log('nope')
            obj.add(currentChar)
            console.log(obj)
            res = Math.max(res, right - left + 1);
            right++;
            console.log('res', res)
        }
        else {
            obj.delete(s.charAt(left));
            left++;
        }
    }


}

module.exports = substring;