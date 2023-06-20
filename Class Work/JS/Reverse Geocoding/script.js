"use strict";

const userInput = prompt("Enter latitude and longitude(comma seprated without space)");

const findPlaceByCoords = (coords) => {
    const URL = `https://geocode.xyz/${coords}?json=1&auth=341604319376036598076x33855`;

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert(`You're in ${data.city}, ${data.country || data.prov}`);
        });
};

findPlaceByCoords(userInput);
