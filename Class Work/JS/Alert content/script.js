// Task 1:

const task1BtnEls = document.querySelectorAll(".btn_task-1");

for (const BtnsOfTask1 of task1BtnEls) {
  BtnsOfTask1.addEventListener("click", function () {
      alert(`${this.textContent}`);
    // console.log(this);
    // alert(`${BtnsOfTask1.textContent}`);
  });
}


// Task 2: 

const firstProduct = {
    name: 'Something random',
    price: 123,
};

const secondProduct = {
    name: 'Random something',
    price: 321,
};

const btnClickEventListener = function () {
    // console.log(this)
    alert(`You clicked '${this.name}' that's worth Rs.${this.price}`);
};

const task2Btn1El = document.getElementById("btn_task-21")
const task2Btn2El = document.getElementById("btn_task-22")

task2Btn1El.addEventListener("click", btnClickEventListener.bind(firstProduct))
task2Btn2El.addEventListener("click", btnClickEventListener.bind(secondProduct))