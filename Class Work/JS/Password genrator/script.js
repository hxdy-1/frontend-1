'use strict';

const userName = prompt("Enter your name:");
const digitCount = +prompt(`${userName}, Enter the count of digits you want in your password:`);
const socialMedias = prompt("Enter comma seprated names of social medias you want to generate password for:");


const generateRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min) + 1;

const socialMediasArr = socialMedias.split(', ')
// console.log(socialMediasArr)

// making object:
const data = {
    firstName: userName,
}

function generateRandomPassword(alphabet, digits, callback) {
    let randomStr = '';
    randomStr += `${alphabet}@`;

    randomStr += callback((10 ** digits), ((10 * digits) - 1));
    randomStr += '_';
    randomStr += String.fromCharCode(callback(64, 90))
    return randomStr;
}

for (let i = 0; i < socialMediasArr.length; i++) {
    const firstLetter = socialMediasArr[i];
    data[firstLetter] = generateRandomPassword(firstLetter[0], digitCount, generateRandomNumber)
}

let output = `${data.firstName}, your password: `;

for (const socialMediaKey in data) {
    if (socialMediaKey !== 'firstName') {
        output += `${data[socialMediaKey]} `;
    }
}

console.log(output);

const retrivePassOf = prompt("Enter platform name to retrive password for:");

alert(data[retrivePassOf] ? `${data.firstName} your password for ${retrivePassOf} is: ${data[retrivePassOf]}` : "invlid request :(")
// console.log(data[retrivePassOf]);
