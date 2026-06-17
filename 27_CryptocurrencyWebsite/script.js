const acessKey = "Use your access key"

const bitcoin = document.querySelector("#bitcoin")
const ethereum = document.querySelector("#ethereum")
const dogecoin = document.querySelector("#dogecoin")

async function getCryptoPrice() {
    try {

        // API se data fetch karna
        let response = await fetch(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdogecoin&x_cg_demo_api_key=${acessKey}`)

        // JSON me convert karna
        let data = await response.json()

        // HTML me value show karna
        bitcoin.innerHTML = `${data.bitcoin.usd}`
        ethereum.innerHTML = `${data.ethereum.usd}`
        dogecoin.innerHTML = `${data.dogecoin.usd}`

    } catch (error) {
        console.log("Error:", error)
    }
}

// Function call
getCryptoPrice()

// Har 10 second me price update hoga
setInterval(() => {
    getCryptoPrice()
}, 10000)

