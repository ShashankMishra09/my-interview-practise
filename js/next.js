//////  Simple java script

console.log("tadaaa.....");

////////////////////////////////////////////////////////////////

// variables   number,string,null,undefined,boolean

// there are 3 ways in which we can define our variables that is let ,var, const and let and const have different scope than var, var is functional scoped while let and const are block scoped and const is used for constant values

// ex of let block scope

{
  let a = 3;
  console.log(a);
}

// ex of const

{
  const b = 44;
  console.log(b);
}

let a = null; // null
console.log(a);

let b; // undefined
console.log(b);

let x = 11;
let c = 12; // number

let d = x > 0; // boolean
console.log(d);

let e = "Ram"; // string

////////////////////////////////////////////////////////////////

// operators

// ternary

b = x > c ? "hello" : "no"; // can be used in place of if else

console.log(b);

// comparison

let num11 = 10;
let num21 = "10";
var n = num11 === num21; // this compares values and data types
console.log(n);

var n = num11 == num21; // the answer is true because it  compares only values not data types
console.log(n);
console.log((l = num11 && num21));

//////////////////////////////////////////////////////

// conditionals

// if and else statements

if (a > b) {
  console.log("a is big");
} else {
  console.log("b is big");
}

// nested if

if (x) {
  if (b) {
    console.log(b);
  }
}

///////////////////////////////////////////

// loops

// for loop

let array = [12, 11, 212, 12, 331]; // the loop will print undefined in place where there is no value

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// while

let i = 0;

while (i <= 5) {
  console.log(`Tera bhai seedhe maut ${i} baar`); // we can use backticks to put js code we use tamplet literal for that ${js}

  i++;
}

// for of loop

// this loop is mainly used to itirate the arrays and strings

for (let val of array) {
  console.log(val);
}

let str = "Shashank"

for(let i of str) {console.log(i);}

console.log(str.length);

// for in loop

// for in loop is used to itirate the keys in an object

let obj = {
  name:"tanu",
  age:20,
  face:"bad",

}

for(let key in obj) {console.log(key,obj[key]);}

// for each
