"use strict";

const tmdbApiKey = "6dd8e9dd33a7616c60ab535b550e0c55";
const geocodeApiKey = "341604319376036598076x33855";

const trendingUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=";

const movieDataCont = document.querySelector(".movie_data_container");
const moviePosterCont = document.querySelector(".movie_poster_container");
const movieOverview = document.querySelector(".movie_overview");
const releaseDate = document.getElementById("release_date");
const leadCast = document.getElementById("lead_cast");
const moreMovies1 = document.getElementById("more_movies--1");
const moreMovies2 = document.getElementById("more_movies--2");

const errorCont = document.querySelector(".error_container");
const errorMsg = document.querySelector(".error_message");

const displayMoviesBtn = document.getElementById("trending_button--display");
const coordinatesBtn = document.getElementById("trending_button--coordinates");

// Additional functionalities related code:

// The scrolling-in animation of the movie-title:
moviePosterCont.addEventListener("mouseenter", (e) => {
    moviePosterCont.classList.remove("animate_out");
    moviePosterCont.classList.add("animate_in");
});

moviePosterCont.addEventListener("mouseleave", (e) => {
    moviePosterCont.classList.remove("animate_in");
    moviePosterCont.classList.add("animate_out");
});

// Truncating to fit: Populate an element with text so as to fit into height (we usually use library for this).
const truncate = function (elt, content, height) {
    function getHeight(elt) {
        return elt.getBoundingClientRect().height;
    }
    function shorten(str) {
        return str.slice(0, -1);
    }

    elt.style.height = "auto";
    elt.textContent = content;

    // Shorten the string until it fits vertically.
    while (getHeight(elt) > height && content) {
        elt.textContent = (content = shorten(content)) + "...";
    }
};

const customFetch = async (url, errMsg) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${errMsg} ${response.status}`);
    return response.json();
};

const handleError = (msg) => {
    errorMsg.textContent = msg;
    errorCont.classList.remove("container_hidden");
};

const displayTrendingMovie = async (url) => {
    try {
        const {
            results: [topTrending],
        } = await customFetch(`${url}`, "Failed to find the trending movie, the error is:");

        moviePosterCont.dataset.title = topTrending.title;
        moviePosterCont.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${topTrending.poster_path})`;
        truncate(movieOverview, topTrending.overview, (window.innerHeight * 40) / 100);
        releaseDate.textContent = topTrending.release_date;

        const {
            cast: [
                { original_name: firstLeadName, id: firstLeadID },
                { original_name: secondLeadName, id: secondLeadID },
            ],
        } = await customFetch(
            `https://api.themoviedb.org/3/movie/${topTrending.id}/credits?api_key=${tmdbApiKey}`,
            "failed to make a request for lead cast :"
        );

        leadCast.textContent = `${firstLeadName}, ${secondLeadName}`;

        const leadIDArray = await Promise.all([
            customFetch(
                `https://api.themoviedb.org/3/person/${firstLeadID}/movie_credits?api_key=${tmdbApiKey}`,
                "failed to make a request for more movies from the cast :"
            ),
            customFetch(
                `https://api.themoviedb.org/3/person/${secondLeadID}/movie_credits?api_key=${tmdbApiKey}`,
                "failed to make a request for more movies from the cast :"
            ),
        ]);

        const [
            {
                cast: [{ title: firstLeadSuggestion }],
            },
            {
                cast: [{ title: secondLeadSuggestion }],
            },
        ] = leadIDArray;

        moreMovies1.textContent = firstLeadSuggestion;
        moreMovies2.textContent = secondLeadSuggestion;

        movieDataCont.classList.remove("container_hidden");

        errorCont.classList.add("container_hidden");
    } catch (error) {
        movieDataCont.classList.add("container_hidden");

        handleError(`Error occured :( ${error.message}`);
    }
};

const trendingOnTMDB = () => {
    displayTrendingMovie(`${trendingUrl}${tmdbApiKey}`);
};

displayMoviesBtn.addEventListener("click", trendingOnTMDB);

const trendingOnCoords = async () => {
    try {
        const userInput = prompt("Enter co-ordinates");
        const url = `https://geocode.xyz/${userInput}?geoit=json&auth=${geocodeApiKey}`;

        const res = await customFetch(`${url}`, `Failed to fetch ISO code :`);

        if (res.error) throw new Error(res.error.description);

        displayTrendingMovie(
            `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&with_origin_country=${res.prov}`
        );
    } catch (err) {
        movieDataCont.classList.add("container_hidden");
        handleError(`Error occured :( ${err.message}`);
    }
};

coordinatesBtn.addEventListener("click", trendingOnCoords);
// 19.213826,72.8455621     => Bhiwandi India
// 36.1248871,-115.3398099  => LA USA
// -18.8523279,135.1137527  => Australia
// 47.6963412,63.3017733    => Russia
// 25.0756584,54.8978302    => Dubai
// 38.9681602,29.8425187    => Turkiye
