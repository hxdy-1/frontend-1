"use strict";
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const clrBtnEl = document.querySelector(".btnClr");
const listEl = document.querySelector(".list");

const myKey = "My todo",
  myKey2 = "My id";
let uniqueId, todoArr;

if (localStorage.getItem(myKey2)) {
  uniqueId = +localStorage.getItem(myKey2) + 1;
} else {
  uniqueId = 1;
}

const retrievedData = localStorage.getItem(myKey);
const parsedRetrievedData = JSON.parse(retrievedData);

if (!parsedRetrievedData) {
  todoArr = [];
} else {
  todoArr = parsedRetrievedData;
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskHtml = `
    <li class="list_item" id="${uniqueId}">
    <p class="task">${inputEl.value}</p>
    <button type="button" class="btn btnDelete">DELETE</button>
  </li>`;

  todoArr.push({ todo: inputEl.value, id: uniqueId });
  localStorage.setItem(myKey2, uniqueId);

  uniqueId++;

  !inputEl.value
    ? alert("Enter a Task")
    : listEl.insertAdjacentHTML("afterbegin", taskHtml);
  inputEl.value = "";

  const todoArrStr = JSON.stringify(todoArr);
  localStorage.setItem(myKey, todoArrStr);
});

todoArr.forEach(({ todo, id }) => {
  const taskHtml = `
    <li class="list_item" id="${id}">
    <p class="task">${todo}</p>
    <button type="button" class="btn btnDelete">DELETE</button>
  </li>`;

  listEl.insertAdjacentHTML("afterbegin", taskHtml);
});

listEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btnDelete")) return;

  const parentEl = e.target.parentElement;
  const parentElId = +parentEl.getAttribute("id");

  const newTodo = todoArr.filter(({ todo, id }) => id !== parentElId);

  localStorage.setItem(myKey, JSON.stringify(newTodo));

  parentEl.remove();
});

clrBtnEl.addEventListener("click", (e) => {
  listEl.innerHTML = "";
  localStorage.removeItem(myKey);
});
