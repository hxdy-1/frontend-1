'use strict';

const leftArrowEl = document.querySelector('.left_arrow');
const rightArrowEl = document.querySelector('.right_arrow');
const slidesEl = document.querySelectorAll('.slide');

const dotsContEl = document.querySelector('.dots_container');

let currentlyActiveSlide = 0;
const slidesLength = slidesEl.length;

const createDots = () => {
    slidesEl.forEach((slide, index) => {
        const dotHTML = `<div data-slide=${index} class="dot ${index === 0 ? "dot--active" : ""}" id="dot--${index}"></div>`

        dotsContEl.insertAdjacentHTML("beforeend", dotHTML)
    })
}

const handleTranslation = (slideNo) => {
    slidesEl.forEach(slide => {
        slide.style.transform = `translateX(-${slideNo}00%)`;
    })
}

const handleActiveDots = (activeDotNumber) => {
    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("dot--active"));
    document.getElementById(`dot--${activeDotNumber}`).classList.add("dot--active")
}

rightArrowEl.addEventListener("click", () => {
    currentlyActiveSlide++;
    
    if(currentlyActiveSlide === slidesLength){
        currentlyActiveSlide = 0
    }
    
    handleTranslation(currentlyActiveSlide)
    
    handleActiveDots(currentlyActiveSlide)
})

leftArrowEl.addEventListener("click", () => {
    currentlyActiveSlide--;
    
    
    if(currentlyActiveSlide === -1){
        currentlyActiveSlide = slidesLength - 1;
    }
    
    handleTranslation(currentlyActiveSlide)
    
    handleActiveDots(currentlyActiveSlide)
})

dotsContEl.addEventListener("click", (e) => {
    
    const slideNumber = e.target.dataset.slide
    
    console.log(slideNumber)

    if(!slideNumber) return
    
    currentlyActiveSlide = slideNumber
    
    handleTranslation(slideNumber)
    handleActiveDots(slideNumber)
})

createDots()