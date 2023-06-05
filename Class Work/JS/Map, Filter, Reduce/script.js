// Task 1:

// Log the firstname of all the users:

// Log an array that contains the firstName of all the users:

// Log an array of users whose age is greater than 20:

// Calculate total_age of the users:

// Return an array containing birth-year of each user:

const users = [
  { firstName: "Random", age: 26 },
  { firstName: "Piyush", age: 14 },
  { firstName: "Kunal", age: 22 },
  { firstName: "Raju", age: 16 },
];

// Firstname of all users:
users.forEach((param) => console.log(param.firstName));

// Array containing firstname of all users:
console.log(users.map((user) => user.firstName));

// Array of users whos age is greater than 20:
console.log(users.filter((user) => user.age > 20));

// Total age:
console.log(users.reduce((sum, user) => sum + user.age, 0));

// Array containing birthyear of all users:
console.log(users.map((user) => 2023 - user.age));

// Task 2:

// Log list of full name:

// Log frequency of ages:

// Log first name of all the people with an age less than 35:

const arr = [
  { firstName: "Piyush", lastName: "Gupta", age: 32 },
  { firstName: "Kunal", lastName: "Sharma", age: 41 },
  { firstName: "Taimur", lastName: "Khan", age: 12 },
  { firstName: "Raju", lastName: "Macha", age: 23 },
  { firstName: "Ajinkya", lastName: "Dhawan", age: 32 },
  { firstName: "David", lastName: "Laid", age: 51 },
];

// List of full names:
arr.forEach((user) => console.log(`${user.firstName} ${user.lastName}`));

// Frequency of ages:
console.log(
  arr.reduce((acc, { age }) => {
    acc[age] = acc[age] ? ++acc[age] : 1;
    return acc;
  }, {})
);

// const count = {}
// arr.forEach((person) =>{
//         const age = person.age
//         count[age] = (count[age] || 0) + 1;
    
//     })
//     console.log(count)

// Array containing first name of all people with an age less than 35:
console.log(arr.filter((user) => user.age > 35).map((user) => user.firstName));
