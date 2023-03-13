const postEL = document.querySelectorAll(".post");
const modalEl = document.querySelector(".modal_container");
const modalDropShadowEl = document.querySelector(".modal_drop_shadow");
const xMarkEl = document.querySelector("button");

const toggelModalVisibility = () => {
    modalEl.classList.toggle("hidden");
    modalDropShadowEl.classList.toggle("hidden");
    console.log("kuch bhi")
};

for (let i = 0; i < postEL.length; i++){
    postEL[i].addEventListener("click", toggelModalVisibility)
}

modalDropShadowEl.addEventListener("click", toggelModalVisibility);

xMarkEl.addEventListener("click", () => {
    modalEl.classList.remove("hidden");
    modalDropShadowEl.classList.remove("hidden");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        toggelModalVisibility();
    }
});