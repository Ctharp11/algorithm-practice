var palindrome = require('./index');

test('Palindrome function exists', () => {
    expect(typeof palindrome).toEqual('function');
})

test('aba is palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
}) 

test('racecar is palindrome', () => {
    expect(palindrome('racecar')).toBeTruthy();
}) 

test('snapcrackle is palindrome', () => {
    expect(palindrome('snapcrackle')).toBeFalsy();
}) 

test('tacoocat is palindrome', () => {
    expect(palindrome('tacoocat')).toBeTruthy();
}) 

test('poptart is palindrome', () => {
    expect(palindrome('poptart')).toBeFalsy();
}) 

test('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
});