const user = 'John';
const age = 22;
const job = 'Software Engineer';
const city = 'Banjul';

let html;

//without template strings (es5) old ways

html ='<ul>' +
        '<li>Name: ' + user + ' </li>' +
        '<li>Age: ' + age + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
      '</ul>';


// with template literals

html = `
  <ul>
      <li>Name: ${user} </li>
      <li>Age: ${age} </li>
      <li>Job: ${job} </li>
      <li>City: ${city} </li>
      <li>${2 + 2} </li>
  </ul>
`;

document.body.innerHTML = html;

let values = [34, 67, 27, 78, 83, 28, 6];

values.splice(2, 2);

console.log(values);


const square = function(x){
  return x * x;
}

//console.log(square(7));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(Name){
  console.log('Hello ' + Name);
});
// PROPERTY METHODS

const todo = {
  add: function(){
    console.log("Come here...")
  }
}

todo.add();

//MAPS

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'May'},
  {id: 3, name: 'Jallow'},
  {id: 4, name: 'Sheikh'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

const cars = ['ford', 'chevy', 'benz', 'honda'];

cars.forEach(function(car){
  console.log(car);
});

cars.forEach(function(car, index){
  console.log(`${index} : ${car}`);
});

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

// FOR IN

const person = {
  firstName : 'John',
  lastName : 'Abdoulie',
  age : 22
}

for(let x in person){
  console.log(`${x} : ${person[x]}`);
}

let value = window.navigator;
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.language;

console.log(value);