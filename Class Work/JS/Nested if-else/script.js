const inputOne = prompt("Enter a non zero number:");
const inputTwo = prompt("Enter another non zero number:");

if (inputOne > 0) {
    if (inputTwo > 0) {
        console.log("Both the numbers are positive.")
    } else {
        console.log("One of the number is negative.")
    }
}

else {
    if (inputTwo > 0){
        console.log("One of the number is negative.")
    }else{
        console.log("Both the numbers are negative.")
    }
}