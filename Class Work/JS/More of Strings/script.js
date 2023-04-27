// function to remove all the space from a sentence.

const makeOneWord = (str) => {
    console.log(str.split(" ").join(""));
};

makeOneWord("Random sentence with multiple words");

// function to convert first letter of a given sentence to uppercase.

const  makeFirstWordUpperCase = (sentence) => {
    let arr = sentence.split(" ");

    arr.splice(0, 1, arr[0].toUpperCase());
    
    console.log(arr.join(" "));
}

makeFirstWordUpperCase("Random sentence with multiple words");