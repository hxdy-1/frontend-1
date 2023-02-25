//keys of an object are strings.
// latest key overwrites the previous key and only print the latest one.


const myObj = {
    1: "Human",
    firstName: "Hadi",
    LastName: "Momin",
    age: 2023 - 1 - 2002,
    "active social media": "Instagram",
    hobbies: ["jim", "code", "eat"],
    age: 19,
}

// there are two notations to read objects: Dot notation and Square-Bracket notation.

console.log(myObj);

// Dot notation:
console.log(myObj.firstName);

// Square-Bracket notation: always prefer this one.  

console.log(myObj["active social media"])

// computation is possible in square-bracket notation.

const something = myObj[5 - 4];
console.log(something);
const nameKey = 'Name';
console.log(myObj[`first${nameKey}`]);
console.log(myObj[`last${nameKey}`]);
console.log(myObj.hobbies);

const lastHobby = myObj.hobbies.length - 1;
console.log(lastHobby);

console.log(`${myObj["firstName"]} has ${myObj.hobbies.length} hobbies and his favourite ones are to ${myObj.hobbies[0]} and ${myObj.hobbies[lastHobby]}`);

// objects are dynamic in js.

// to update an object.

console.log(myObj.hobbies[2] = "sleep");

console.log(myObj["hobbies"][2] = "scroll");

// functions inside an object are methods.