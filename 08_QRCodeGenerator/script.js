const inputText = document.querySelector("#inputText")
const generateBtn = document.querySelector("#generateBtn")
const imgBox = document.querySelector("#imgBox")
const qrimg = document.querySelector("#qrimg")

function generateQR(input) {

    if (inputText.value.length > 0) {
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
        imgBox.classList.add("show-img")
    } else {
        inputText.classList.add("error")
        setTimeout(() => {
            inputText.classList.remove("error")
        }, 1000)
    }


}

generateBtn.addEventListener("click", () => {
    generateQR(inputText.value)
})
