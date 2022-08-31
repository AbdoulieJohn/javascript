// let hastag = "#";

// //console.log(hastag);
// for(let i = 1; i <= 7; i++){
//   console.log(hastag.repeat(i));
// }

// for(let i = 1; i <= 100; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz")
//   }
//   else if(i % 3 === 0){
//     console.log("Fizz");
//   }
//   else if(i % 5 === 0){
//     console.log("Buzz");
//   }
//   else console.log(i);
// }


function reverseThis(num) {
  
let arr = num.toString().split("");
newNum = arr.reverse();
console.log(newNum.join(''));

}
reverseThis(87654321);
reverseThis(232322222);


function reverse(num) {
string=num.toString();
revnum='';
for (let index =string.length-1 ; index >=0; index--) {
  revnum+=string[index];
  
}
console.log(revnum);
}
reverse(87654322);