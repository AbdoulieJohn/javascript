let val;

val = document;

val = document.all;

val = document.all[2];

val = document.all.length;
let data = 12;
console.log(data)

val = document.body;

val = document.domain;

val = document.URL;

val = document.doctype;


val = document.forms[0].id;

console.log(val);
// single selectors
// first selector

console.log(document.getElementById("task-title").id) ;

const taskTitle = document.getElementById("task-title");

taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";

taskTitle.textContent = "TASK LIST.....";
taskTitle.innerText = "My LIST...";
taskTitle.innerHTML = '<span style = "color: yellow">TASK LIST</span>';

// Query selector

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector('li').style.color = "red";
document.querySelector('li:last-child').style.color = "green";
document.querySelector('li:nth-child(2)').style.color = "blue";
document.querySelector('li:nth-child(3)').textContent = "orange";
document.querySelector('li:nth-child(3)').style.color = "orange";
document.querySelector('li:nth-child(odd)').style.background = "#ccc";

////***********************multiple selectors */

let items = document.getElementsByClassName("collection-item");

console.log(items);
console.log(items[0]);
items[3].style.color = 'purple';
items[3].textContent = 'purple';

// CONVERTING HTML COLLECTIONS INTO ARRAYS

items = Array.from(items);
items.reverse();

items.forEach(function(li, index){
  //console.log(items);
  items.textContent = '${index}: Hello';
});