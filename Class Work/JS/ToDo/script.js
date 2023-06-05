"use strict";
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const clrBtnEl = document.querySelector(".btnClr");
const listEl = document.querySelector(".list");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskHtml = `
    <li class="list_item">
    <p class="task">${inputEl.value}</p>
    <button type="button" class="btn btnDelete">DELETE</button>
  </li>`;

  !inputEl.value ? alert("Enter a Task") : listEl.insertAdjacentHTML("afterbegin", taskHtml);
  inputEl.value = "";
});

listEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btnDelete")) return;
  e.target.parentElement.remove();
});

clrBtnEl.addEventListener("click", (e) => {
  listEl.innerHTML = "";
});
