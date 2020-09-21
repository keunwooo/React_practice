//import React, { Component } from 'react';
var a = "global";
function data() {
  let a = "function variable";

  if (true) {
    let a = "bye";
    console.log(a);
  }

  console.log(a);
}
console.log(a);
data();
console.log(a);
//export default data;
