// Task I: Given a product's price. Calculate it's total price after taxation. The tax-rate is IO% of the actual product's price.

const productPrice = 500;

function calcTotalPrice() {
    return productPrice + .10 * productPrice;
}

console.log(calcTotalPrice())

// Task 2: This time, we're provided with 2 types of goods i.e. foreign and domestic. The product with price greater than 1000 is a domestic good and less than 1000 is foreign. Just convert the foreign product's price to INR and then calculate the total price.