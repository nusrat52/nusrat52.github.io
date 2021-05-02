"use strict";

function counter() {
  var count = 0;
  return function () {
    return (count = count + 1);
  };
}


let bir = counter()
let iki = counter()
let uc = counter()

console.log(bir(), iki() , uc())