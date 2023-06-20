"use strict";

const welcomeHeading = document.querySelector(".welcome_heading");
const logoutMessage = document.querySelector(".logout_message");
const dateMessage = document.getElementById("date_msg");

const loginForm = document.getElementById("login_form");
const loginName = document.getElementById("input_login--name");
const loginPassword = document.getElementById("input_login--password");

const sectionLogin = document.querySelector(".section_login");

const appContainer = document.querySelector(".container");

const currentValue = document.getElementById("curr_val");
const investedValue = document.getElementById("invested_val");

const transactionsContainer = document.querySelector(".transactions");
const instrumentsContainer = document.querySelector(".instruments_cont");

const giftStocksForm = document.getElementById("user_action--gift");
const deleteAccForm = document.getElementById("user_action--delete");
const switchAccForm = document.getElementById("user_action--switch");

const giftActionNameEl = document.getElementById("gift_action--name");
const giftActionStockEl = document.getElementById("gift_action--stock");

const deleteActionNameEl = document.getElementById("delete_action--name");
const deleteActionPasswordEl = document.getElementById(
  "delete_action--password"
);

const switchActionNameEl = document.getElementById("switch_action--name");
const switchActionPasswordEl = document.getElementById(
  "switch_action--password"
);

// TODO: Select the input elements

const btnBought = document.querySelector(".btn_bought");
const btnSold = document.querySelector(".btn_sold");
const btnSort = document.querySelector(".btn_sort");

const instruments = [
  { instName: "RELIANCE", plRatio: -0.09, instValue: 2500.1 },
  { instName: "HDFC", plRatio: +1.12, instValue: 6100.8 },
  { instName: "INFY", plRatio: +2.23, instValue: 1700 },
  { instName: "TCS", plRatio: -0.04, instValue: 5000 },
  { instName: "ASIANPAINT", plRatio: -0.93, instValue: 3500.5 },
];

const users = [
  {
    fullName: "Pravin Mudaliyar",
    password: 1111,
    transactions: [
      { instName: "RELIANCE", date: "23-04-21", amt: 2030 },
      { instName: "HDFC", date: "26-04-22", amt: 1330 },
      { instName: "TCS", date: "05-05-22", amt: 760 },
      { instName: "HDFC", date: "13-05-22", amt: -2413 },
      { instName: "RELIANCE", date: "27-05-23", amt: 1761 },
      { instName: "RELIANCE", date: "14-10-23", amt: -1654 },
      { instName: "TCS", date: "15-11-23", amt: 961 },
      { instName: "RELIANCE", date: "14-12-23", amt: 743 },
      { instName: "RELIANCE", date: "14-10-24", amt: -654 },
    ],
    locale: "ta-IN",
  },
  {
    fullName: "Michael Gayle",
    password: 2222,
    transactions: [
      { instName: "TCS", date: "14-10-20", amt: 5490 },
      { instName: "HDFC", date: "15-10-20", amt: 1832 },
      { instName: "RELIANCE", date: "27-11-20", amt: 1954 },
      { instName: "TCS", date: "21-02-21", amt: -1330 },
      { instName: "ASIANPAINT", date: "12-10-21", amt: 654 },
      { instName: "HDFC", date: "04-04-22", amt: 761 },
      { instName: "RELIANCE", date: "23-04-22", amt: -2030 },
      { instName: "TCS", date: "19-10-22", amt: 654 },
      { instName: "ASIANPAINT", date: "03-01-23", amt: -2410 },
      { instName: "INFY", date: "07-10-23", amt: 6540 },
      { instName: "ASIANPAINT", date: "21-10-23", amt: 6512 },
      { instName: "INFY", date: "28-10-23", amt: -6512 },
    ],
    locale: "de-DE",
  },
  {
    fullName: "Dravid Jaiswal",
    password: 3333,
    transactions: [
      { instName: "ASIANPAINT", date: "03-01-21", amt: 2413 },
      { instName: "HDFC", date: "21-02-21", amt: 1330 },
      { instName: "ASIANPAINT", date: "22-02-21", amt: -4013 },
      { instName: "ASIANPAINT", date: "23-02-21", amt: 4014 },
      { instName: "RELIANCE", date: "23-04-22", amt: 2030 },
      { instName: "HDFC", date: "14-10-22", amt: -654 },
      { instName: "INFY", date: "14-10-22", amt: 504 },
      { instName: "INFY", date: "14-10-22", amt: -504 },
      { instName: "ASIANPAINT", date: "24-04-23", amt: -761 },
      { instName: "ASIANPAINT", date: "04-05-23", amt: 581 },
      { instName: "TCS", date: "24-05-23", amt: 1061 },
      { instName: "TCS", date: "24-05-23", amt: 1061 },
    ],
    locale: "en-IN",
  },
  {
    fullName: "Mohammed Baabar",
    password: 4444,
    transactions: [
      { instName: "INFY", date: "23-04-20", amt: 2030 },
      { instName: "ASIANPAINT", date: "21-05-20", amt: 1330 },
      { instName: "INFY", date: "03-01-21", amt: -2413 },
      { instName: "RELIANCE", date: "14-04-21", amt: 6054 },
      { instName: "TCS", date: "14-04-21", amt: 504 },
      { instName: "ASIANPAINT", date: "19-04-21", amt: -6000 },
    ],
    locale: "ar-AE",
  },
];

users.forEach((user) => {
  user.nameCode = user.fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toLocaleLowerCase();
});

// console.log(users)

// const firstNameArr = users.map((user) => user.fullName.split(" ")[0]);

// console.log(users.map((user) => user.nameCode));

let loggedInUser;

const showUserTransaction = () => {
  transactionsContainer.innerHTML = "";

//   const currentUserLocale = loggedInUser.locale;

//   const myOptions = {
//     style: "currency",
//     currency: `${currentUserLocale.split("-")[1]}`,
//   };

//   const currUserCurrency = new Intl.NumberFormat(
//     `${currentUserLocale}`,
//     myOptions
//   );

  loggedInUser.transactions.forEach(({ instName, date, amt }) => {
    const amtType = amt > 0 ? "bought" : "sold";

    const transactionHTML = `
      <li class="transaction">
          <span class="transaction_type | transaction_type--${amtType}">${amtType}</span>
          <span class="color_light-100">${instName}</span>
          <span>${date}</span>
          <span>${amt}&#8377;</span>
      </li>`;

    transactionsContainer.insertAdjacentHTML("afterbegin", transactionHTML);
  });
};

const showUserInfo = () => {
  welcomeHeading.textContent = `Welcome, ${
    loggedInUser.fullName.split(" ")[0]
  }!`;

  showUserTransaction();
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameCodeVal = loginName.value;
  const passwordVal = +loginPassword.value;

  const result = users.find(
    (user) => user.nameCode === nameCodeVal && user.password === passwordVal
  );

  if (!result) {
    alert("Error, Please enter correct credentials");
    return;
  }

  loggedInUser = result;

  console.log("login successfully");

  sectionLogin.classList.add("display_none");
  appContainer.classList.remove("display_none");
  appContainer.classList.add("display_visible");

  showUserInfo();
});
