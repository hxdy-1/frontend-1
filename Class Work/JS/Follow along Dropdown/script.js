"use strict";

const triggerElements = document.querySelectorAll(".trigger");
const dropDownBackgroundEl = document.querySelector(".dropdown_background");

const handleDropDownAppearance = function (e) {
  const dropDown = e.target.querySelector(".dropdown_container");
  if (!dropDown) return;

  dropDown.classList.add("hovered");

  setTimeout(() => {
    if (dropDown.classList.contains("hovered")) {
      dropDown.classList.add("visible");
    }
  }, 100);

  const { top, left, height, width } = dropDown.getBoundingClientRect();

  dropDownBackgroundEl.style.height = `${height}px`;
  dropDownBackgroundEl.style.width = `${width}px`;
  dropDownBackgroundEl.style.top = `${top}px`;
  dropDownBackgroundEl.style.left = `${left}px`;

  dropDownBackgroundEl.classList.add("removeOpacity");
};

const handleDropdownDisappearance = function (e) {
  const dropDown = e.target.querySelector(".dropdown_container");
  if (!dropDown) return;

  dropDownBackgroundEl.style.height = `0px`;
  dropDownBackgroundEl.style.width = `0px`;
  dropDownBackgroundEl.style.top = `0px`;
  dropDownBackgroundEl.style.left = `0px`;

  dropDown.classList.remove("hovered", "visible");
  dropDownBackgroundEl.classList.remove("removeOpacity");
};

triggerElements.forEach((element) =>
  element.addEventListener("mouseenter", handleDropDownAppearance)
);

triggerElements.forEach((element) =>
  element.addEventListener("mouseleave", handleDropdownDisappearance)
);
