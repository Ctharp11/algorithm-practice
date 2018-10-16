const anagram = require('./index');

test('expect anagram function', () => {
    expect(typeof anagram).toEqual('function');
})

test('iceman and cinema', () => {
    expect(anagram('iceman', 'cinema')).toBeTruthy();
})

test('"hello" is an anagram of "llohe"', () => {
    expect(anagram('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagram('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagram('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
    expect(anagram('One one', 'One one c')).toBeFalsy();
});