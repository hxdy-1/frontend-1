"use strict";

const carouselEl = document.querySelector(".carousel");

carouselEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("next_slide")) return;

  const leftExtremeData = document.querySelector(".left_extreme").innerHTML;

  document.querySelector(".left_extreme").remove();

  document.querySelector(".prev_slide").classList.add("left_extreme");
  document.querySelector(".prev_slide").classList.remove("prev_slide");

  document.querySelector(".active_slide").classList.add("prev_slide");
  document.querySelector(".active_slide").classList.remove("active_slide");

  document.querySelector(".next_slide").classList.add("active_slide");
  document.querySelector(".next_slide").classList.remove("next_slide");

  document.querySelector(".right_extreme").classList.add("next_slide");
  document.querySelector(".right_extreme").classList.remove("right_extreme");

  const newRightExtreme = document.createElement("div");
  newRightExtreme.classList.add("slide", "right_extreme");
  newRightExtreme.innerHTML = leftExtremeData;
  carouselEl.append(newRightExtreme);
});

carouselEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("prev_slide")) return;

  const rightExtremeData = document.querySelector(".right_extreme").innerHTML;

  document.querySelector(".next_slide").classList.add("right_extreme");
  document.querySelector(".next_slide").classList.remove("next_slide");

  document.querySelector(".active_slide").classList.add("next_slide");
  document.querySelector(".active_slide").classList.remove("active_slide");

  document.querySelector(".prev_slide").classList.add("active_slide");
  document.querySelector(".prev_slide").classList.remove("prev_slide");

  document.querySelector(".left_extreme").classList.add("prev_slide");
  document.querySelector(".left_extreme").classList.remove("left_extreme");

  const newLeftExtreme = document.createElement("div");
  newLeftExtreme.classList.add("slide", "left_extreme");
  newLeftExtreme.innerHTML = rightExtremeData;
  carouselEl.prepend(newLeftExtreme);
});
