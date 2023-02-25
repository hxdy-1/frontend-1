// declaration function: 

// function oddEven(num) {
//     if (num % 2 === 0) {
//         console.log(`${num} is even`);
//     }
//     else {
//         console.log(`${num} is odd`);
//     }
// }

// oddEven(10);

// expression function:

// const oddEven = function (num) {
//     if (num % 2 === 0) {
//         console.log(`${num} is even`);
//     }
//     else {
//         console.log(`${num} is odd`);
//     }
// }

// arrow function:

const oddEven = num => num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);
oddEven(33);