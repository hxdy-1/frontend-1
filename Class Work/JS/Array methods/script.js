let array = [2341232, '123212332', 23, '   12332   ', 234123212332324]

let arr1 = []

for (const iterator of array) {
    
    arr1.push(iterator.toString().trim())
}

// console.log(arr1)

let pyramidLeft = (rows) => {
   
   for(let i = 1; i <= rows; i++){
     
     let str = '';
     
     for(let j = 1; j <= i; j++){
       //Count the '*' for each row
       str += '🔒';
     }
     
     //Print the pyramid pattern for each row
     console.log(str);
   }
};


// pyramidLeft(arr1.length)

let arr2 = []

for (let i = 0; i < arr1.length; i++) {
    
    let random = arr1[i].slice(-4);
    
    var masked = random.padStart(arr1[i].length, "*");
    
    console.log(masked)

    // let final = masked

    arr2.push(masked)
    
    
}

console.log(arr2)

for(let j = 0; j < arr2.length; j++) {
    if(arr2[j].includes("*")){
        console.log(arr2[j])
    }
}

if(masked.includes("*")){
    // console.log(pyramidLeft(arr1.length))
    
    pyramidLeft(arr1.length)


}