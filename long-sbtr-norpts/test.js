var substring = require('./index');

test('substring function exists', () => {
    expect(typeof substring).toEqual('function');
})

// test('abcdef is most common', () => {
//     expect(substring('abcabcdefab')).toEqual('abcdef');
// })

test('mock is most common', () => {
    expect(substring('bananahammock')).toEqual('mock')
})