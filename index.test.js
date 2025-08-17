const sayHello = require("./index");

test("says hello to given name", () => {
  expect(sayHello("Student")).toBe("Hello, Student!");
});
