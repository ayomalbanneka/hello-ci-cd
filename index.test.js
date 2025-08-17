import sayHello from './index';

test("say hello to given name",()=>{
    expect(sayHello("World")).toBe("Hello, Student!");
})