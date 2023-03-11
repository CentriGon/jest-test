const code = require('./code');

test('capitalize', () => {
    expect(code.capitalize("horse")).toBe("Horse");
})

test("reversing string", () => {
    expect(code.reverseString("racecar")).toBe("racecar");
})

test("added 2 + 3", () => {
    expect(code.calc().add(2, 3)).toBe(5);
})

test("subtracted 2 + 3", () => {
    expect(code.calc().subtract(2, 3)).toBe(-1);
})

test("mupltiplied 2 + 3", () => {
    expect(code.calc().divide(2, 3)).toBe(0);
})

test("divided 2 + 3", () => {
    expect(code.calc().multiply(2, 3)).toBe(6);
})

test("caesar cipher that mah favorite", () => {
    expect(code.caesarCipher("that mah favorite.", 7)).toBe("aoha tho mhcvypal.");
})

test("array of 2 5 1 3 0 6", () => {
    expect(code.arrayInfo([2, 5, 1, 3, 0, 6])).toStrictEqual({minimum: 0, maximum: 6, avg: 3, Length: 6})
})