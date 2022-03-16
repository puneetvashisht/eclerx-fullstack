const sum = require('./sum');

test('worlds simplest test case', ()=> {
    // call a funtion
    let result = false;
    expect(true).toBe(result)
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});