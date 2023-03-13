"use strict"

let str = 'raNdoM somEoNe PiyUSH RAJU SAtiSH';

str = str.toLowerCase().split(" ");
let arr = [];

for(let ofElement of str){
    let merged1 = ofElement[0].toUpperCase()+ofElement.slice(1);

    arr.push(merged1)
};

console.log(arr.toString().replaceAll(",", " "));