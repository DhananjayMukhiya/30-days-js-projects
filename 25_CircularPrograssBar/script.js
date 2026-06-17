let number = document.querySelector('#number')
let counter = 0

let interval = setInterval(() => {
    counter++
    number.innerHTML = counter + "%"

    if (counter >= 65) {
        clearInterval(interval)
    }
}, 30)