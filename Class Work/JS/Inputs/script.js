const firstName = prompt("Enter the first name:");
const currentAge = prompt("Enter the current age:");
const futureYear = prompt("Enter the future year:");

const currentYear = 2023;
// const futureAge = (currentAge + (futureYear - currentYear));
const birthYear = (currentYear - currentAge);
const futureAge = (futureYear - birthYear); 

alert(`${firstName} your age in ${futureYear} will be ${futureAge} and your birth year is ${birthYear}`);

console.log(birthYear > 1997);
