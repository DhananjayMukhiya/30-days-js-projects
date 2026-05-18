const backBtn = document.querySelector("#backBtn")
const nextBtn = document.querySelector("#nextBtn")
const scrollContainer = document.querySelector(".gallery")

scrollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault()
    scrollContainer.scrollLeft += e.deltaY
    scrollContainer.style.scrollBehavior = "smooth"
})

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900
})
backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900
})
