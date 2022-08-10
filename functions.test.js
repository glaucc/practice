const capitalize = require('./functions');

test("Capitalizing the first letter", () => {
    expect(capitalize("hello")).toBe("Hello")
}
);