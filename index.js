const greetings = (name) => {
  console.log(`Hello ${name}`);
};

greetings("Rahul");
greetings("Abhi");

const { add, sub } = require("./calculator");
console.log(add(6, 3));
console.log(sub(6, 3));
