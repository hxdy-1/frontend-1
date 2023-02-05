const age = prompt("Enter your age:");
const value = true;

if(age >= 18){
  console.log(value);
  console.log("Your're eligible for taking license.");
}
else{
  console.log(!value);
  console.log(`you have to wait for ${18 - age} years to become eligible.`);
}