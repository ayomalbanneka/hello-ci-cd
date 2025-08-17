const sayHello = require('./index');

test("say hello to given name",()=>{
    expect(sayHello("World")).toBe("Hello, Student!");
})