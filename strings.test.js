const {stringLength} = require('./strings');
const {reverseString} = require('./strings');
const {capitalize}=require('./strings');

//Task 1
test("string Length",()=>{
    const str="aisha";
    expect(stringLength(str)).not.toBeLessThan(1);
    expect(stringLength(str)).not.toBeGreaterThan(10);
})

//Task 2
test("string reverse",()=>{
    const str="go aisha";
    expect(reverseString(str)).toBe('ahsia og');
})

// Test 4
test('capitalizedString',()=>{
    const testString = "hello";
    expect(capitalize(testString)).toBe("Hello");
}) 