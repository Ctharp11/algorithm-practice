const repeatChars = require('./index');

test('does repeatChars functione exist', () => {
    expect(typeof repeatChars).toEqual('function');
})

test('bananahammock has repeats', () => {
    expect(repeatChars('bananahammock')).toBeTruthy();
})

test('ice no repeats', () => {
    expect(repeatChars('ice')).toBeFalsy();
})

test('coffee has repeats', () => {
    expect(repeatChars('coffee')).toBeTruthy();
})

test('taco no repeats', () => {
    expect(repeatChars('taco')).toBeFalsy();
})