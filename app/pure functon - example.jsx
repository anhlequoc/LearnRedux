var redux = require('redux');

console.log('starting redux example');

// pure function
function add (a, b) {
  return a + b;
}

// not pure function
var a = 3;
function add(b) {
  return a + b; // take variable from outsite of itself
}

// not pure function
var result;
function add (a, b) {
  result = a + b;
  return result; //update variable from outsite of function
}

// not pure function
function add (a, b) {
  return a + b + new Date().getSeconds(); //return different outputs
}

// pure function should also not update the data passed in
function changeProp(obj) {
  //does not update startingValue, make it a pure function
  return {
    ...obj,
    name: "le"
  };

  // update the startingValue, make it not a pure function
  // obj.name = "Jen";
  // return obj;
}

var startingValue = {
    name: "anh",
    age: 25
}
var result = changeProp(startingValue);
console.log(startingValue);
console.log(result);

//3 principles of pure function
//1. Same output with the same input
//2. No side effect
//3. avoide promises and asynchronous, only synchronous - meaning no request like accessing a database, making an HTTP request to some 3rd party API
