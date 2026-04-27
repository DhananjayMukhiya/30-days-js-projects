const apiKey = "b1a8357ee6d17395f1b0e6ea483b77c9"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
        return
    }


    let data = await response.json()

    document.querySelector('.error').style.display = "none"
    document.querySelector('.weather').style.display = "block"

    console.log(data);

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
    document.querySelector('.weather p').innerHTML = data.weather[0].description

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }


}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})

