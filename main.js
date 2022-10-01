import Person from './src/js/Pessoa';

let person1 = new Person('Edson Maia', 40, 84.5, 1.75);
let person2 = new Person('Maria da Silva', 66, 73.4, 1.65);

console.log(person1.imcLevel());
console.log(person2.imcLevel());
