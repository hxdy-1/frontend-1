// The restaurant "xyz" on "x-weekday" opens at "open" and closes at "close".

const weekDays = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

const restaurant = {
    name: "Random",
    openingHours: {
        [weekDays[1]]: {
            open: 9,
            close: 17
        },

        [weekDays[3]]: {
            open: 8,
            close: 16
        },

        [weekDays[5]]: {
            open: 10,
            close: 19
        }
    }
}

console.log(restaurant)

let {[weekDays[1]]: firstDay, [weekDays[3]]: secondDay, [weekDays[5]]: thirdDay} = restaurant.openingHours;

console.log(firstDay, secondDay, thirdDay)

console.log(`The restaurant ${restaurant.name} on ${weekDays[1]} opens at ${firstDay.open} and closes at ${firstDay.close}`)
console.log(`The restaurant ${restaurant.name} on ${weekDays[3]} opens at ${secondDay.open} and closes at ${secondDay.close}`)
console.log(`The restaurant ${restaurant.name} on ${weekDays[5]} opens at ${thirdDay.open} and closes at ${thirdDay.close}`)