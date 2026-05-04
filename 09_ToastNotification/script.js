const successBtn = document.querySelector("#successBtn")
const errorBtn = document.querySelector("#errorBtn")
const invalidBtn = document.querySelector("#invalidBtn")
const toastBox = document.querySelector(".toastBox")

function showToast(e) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    if (e.target.innerHTML === "Success") {
        toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Successfully submitted'
        toast.classList.add('success')
        setTimeout(() => {
            toast.remove()
        }, 5000)
    } else if (e.target.innerHTML === "Error") {
        toast.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!'
        toast.classList.add('error')
        setTimeout(() => {
            toast.remove()
        }, 5000)
    } else if (e.target.innerHTML === "Invalid") {
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>invalid input, check again'
        toast.classList.add('invalid')
        setTimeout(() => {
            toast.remove()
        }, 5000)
    }

    toastBox.appendChild(toast)
}

successBtn.addEventListener("click", showToast)
errorBtn.addEventListener("click", showToast)
invalidBtn.addEventListener("click", showToast)
