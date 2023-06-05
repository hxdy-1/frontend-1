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

// console.log(restaurant)

// let {[weekDays[1]]: firstDay, [weekDays[3]]: secondDay, [weekDays[5]]: thirdDay} = restaurant.openingHours;

// console.log(firstDay, secondDay, thirdDay)

const timings = Object.entries(restaurant.openingHours);
// console.log(timings)

for (const openingTimes of timings) {
    // console.log(openingTimes[0], openingTimes[1].open, openingTimes[1].close)

    const [weekDay, {open: opensAt, close: closesAt}] = openingTimes

    // console.log(weekDay, opensAt, closesAt)

    console.log(`The restaurant ${restaurant.name} on ${weekDay}${weekDay === "wed" ? "nes" : ""}day opens at ${opensAt} and closes at ${closesAt}`)
}