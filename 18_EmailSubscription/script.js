
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRbIiLo2-Zd9chpoJ1Ux0EmRHpa3pi8Ou1IhYx_XOamGRw8Azti7M9klb2S2D2TfYn/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector("#msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(response => {
            setTimeout(() => {
                msg.innerHTML = "Tnank You For Subscribing!"
            }, 5000)
        })
        .catch(error => console.error('Error!', error.message))
})
