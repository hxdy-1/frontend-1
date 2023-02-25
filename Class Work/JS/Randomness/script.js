const btn_cmnEl = document.querySelectorAll(".btn_cmn");
const ans_boxEl = document.querySelector(".ans_box");
const infoEl = document.getElementById("info");

const generateRandomNum = (min, max) => Math.trunc(Math.random(max - min) * max) + 1;

// console.log(generateRandomNum(1, 10))

ans_boxEl.textContent = "?";
infoEl.textContent = "Start the game by clicking a no...";

for (let i = 0; i < btn_cmnEl.length; i++) {
    btn_cmnEl[i].addEventListener("click", () => {
        ans_boxEl.textContent = generateRandomNum(1, 10)
        console.log(ans_boxEl.textContent);
    })
}