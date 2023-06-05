"use strict";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".friend_input");
const pplCntEl = document.querySelector(".people_container");
const addBtnEl = document.querySelector(".add_btn");
const clrBtn = document.querySelector(".clear_btn");

const data = [
  { firstName: "Random1", age: 30 },
  { firstName: "Random2", age: 21 },
  { firstName: "Random3", age: 45 },
  { firstName: "Random4", age: 25 },
  { firstName: "Random5", age: 39 },
];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  pplCntEl.innerHTML = "";

  let friendName = inputEl.value || "Enter friend's name";

  //   data.forEach((user) => {
  //     const html = `
  //     <li class="border | person">
  //         <span>${user.firstName}</span>
  //         <span>${user.age}</span>
  //         <span>${friendName}</span>
  //     </li>
  //     `;

  //     pplCntEl.insertAdjacentHTML("beforeend", html);
  //     inputEl.blur()
  //   });

  const str = data
    .map((user) => {
      const html = `
        <li class="border | person">
            <span>${user.firstName}</span>
            <span>${user.age}</span>
            <span>${friendName}</span>
        </li>
        `;
      return html;
    })
    .join("");

  pplCntEl.innerHTML = str;

  inputEl.blur();
});

clrBtn.addEventListener("click", (e) => {
  pplCntEl.innerHTML = "";
  inputEl.focus();
});
