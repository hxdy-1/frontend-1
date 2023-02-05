const inputOne = prompt("Enter a non zero number:");
const inputTwo = prompt("Enter another non zero number:");

// const isGreaterLesser = inputOne > inputTwo ? inputOne : inputTwo;
// console.log(`The greater number is : ${isGreaterLesser}`);

console.log(`The greater number is : ${inputOne > inputTwo ? `${inputOne}` : `${inputTwo}`}`);