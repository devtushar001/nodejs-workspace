// import greet from "./greet";
const greet = require('./greet');
const { person1, person2, person3 } = require('./peoples')
// console.log('Modules');
greet(person1);
greet(person2);
greet(person3);