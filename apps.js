console.log("Hello people");
console.log(123);
console.log();
console.error("this is some error");
console.log([1, 2, 3]);//array

var greetings;

greetings = ('hello world');

console.log(greetings);


const person = {
  name : 'John',
  age: 55
}

person.name = 'Karma'

// let person = 'Khadija';

console.log(person);

const numbers = [1, 2, 3, 4, 5] 
numbers.push(6)
numbers.push(8)

console.log(numbers);

console.log(typeof numbers);

// date to string
const today = String(new Date());

console.log(today);
console.log(typeof today);
console.log(today.length);


console.warn("I'll wound you deh!");

//Math object
let ran;
ran = Math.round(Math.random() * 20 +1);

console.log(ran);

let str;
str = greetings.indexOf(greetings.charAt(greetings.length - 1));

console.log(str);

console.table({LOVE : 06, HATE : 94});


//Conversion
//number to string

let val;
val = String(3);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//string to number

val = parseInt("100.4");
console.log(val);
console.log(typeof val);
console.log(val.length);
// a number method
console.log(val.toFixed(2));


val = Number(true);
console.log(val);

// ran = Math.floor(Math.random() * 21);
// console.log(ran);

//The concat method....

let firstName = 'Mariama';

let lastName = 'Cham';

console.log(firstName.length);

let fullName = firstName.concat(" ".concat(lastName));
console.log(fullName);


console.log(fullName.charAt(firstName.length - 1));

console.log(fullName.substring(2, 7));

console.log(firstName.slice(-5));

let intro = "Hello there is a missing a girl in the streets of mississippi";

console.log(intro.split(" "));

console.log(intro.includes('sintch'));