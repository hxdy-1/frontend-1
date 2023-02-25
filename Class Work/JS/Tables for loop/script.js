const num = prompt("Enter a number:");

for (let i = 1; i <= 10; i++){
    let str = `${num} * ${i}` + " => ";

    console.log(`${str} ${i * num}`)

}

// str + " " + i * num