const popup = document.querySelector(".popup")
const btn = document.querySelector(".btn")
const okBtn = document.querySelector("#okBtn")

btn.addEventListener("click", () => {
    popup.classList.add("open-popup")
})

okBtn.addEventListener("click", () => {
    popup.classList.remove("open-popup")
})

