const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arr2 = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

// const userInput1 = +prompt("Enter a number u wanna pop!");
// console.log(userInput1);

// const indexOfUserInput1 = arr1.indexOf(userInput1);
// const newArr1 = [];

// for (i = 0; i < arr1.length; i++) {
//     if (i === indexOfUserInput1) {
//         continue;
//     }
//     newArr1.push(arr1[i]);
// }

// console.log(newArr1);

// const userInput1Cnf = +prompt("Provide a number from updated array for confirmation:");

// const indexOfNewArray1 = alert(newArr1.indexOf(userInput1Cnf));

function popPush(arr, input, prompt, alert) {
    const userInput1 = +prompt(`Enter a number u wanna pop from ${arr}!`);
    console.log(input);

    const indexOfUserInput = arr.indexOf(input);
    const newArr = [];

    for (i = 0; i < arr.length; i++) {
        if (i === indexOfUserInput) {
            continue;
        }
        newArr.push(arr[i]);
    }

    console.log(newArr);

    const userInputCnf = +prompt(`Provide a number from updated ${arr} for confirmation:`);

    const indexOfNewArray1 = alert(newArr.indexOf(userInputCnf));

}

popPush(arr1);
popPush(arr2);


// console.log(indexOfNewArray1);

// for second array

// const userInput2 = +prompt("Enter a number u wanna pop from 2nd array!");
// console.log(userInput2);

// const indexOfUserInput2 = arr2.indexOf(userInput2);
// const newArr2 = [];

// for (i = 0; i < arr2.length; i++) {
//     if (i === indexOfUserInput2) {
//         continue;
//     }
//     newArr2.push(arr2[i]);
// }

// console.log(newArr2);

// const userInput2Cnf = +prompt("Provide a number from second updated array for confirmation:");

// const indexOfNewArray2 = alert(newArr2.indexOf(userInput2Cnf));

// console.log(indexOfNewArray2);