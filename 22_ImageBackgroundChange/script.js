let imgBox = document.querySelector(".img-box")
let imgWrap = document.querySelector(".img-wrap")

let originalImg = document.querySelector("#originalImg")
let arrowLine = document.querySelector("#arrow-line")

originalImg.style.width = imgBox.offsetWidth + "px"

let leftSpace = imgBox.offsetLeft

imgBox.onmousemove = function (e) {
    let boxWidth = (e.pageX - leftSpace) + "px"
    imgWrap.style.width = boxWidth
    arrowLine.style.left = boxWidth
}