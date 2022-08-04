const greetings = (name) => {
  console.log(`Hello ${name}`);
};

greetings("Rahul");
greetings("Abhi");

import { add, sub } from "./calculator.mjs";

console.log(add(6, 3));
console.log(sub(6, 3));
