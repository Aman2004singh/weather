const Apikey = "e92c76e15291f52251a0bf208547b93f"
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search")
const btn = document.querySelector(".btn")
const icon = document.querySelector(".icon")

async function checkweather(city) {
    const response = await fetch(Apiurl + city + `&appid=${Apikey}`);
    var data = await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".hum").innerHTML = data.main.humidity + "%"
    document.querySelector(".win").innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main === "Clouds") {
    icon.src = "clouds.png"
} else if (data.weather[0].main === "Clear") {
    icon.src = "clear.png"
} else if (data.weather[0].main === "Rain") {
    icon.src = "rain.png"
} else if (data.weather[0].main === "Mist") {
    icon.src = "mist.png"
} else if (data.weather[0].main === "Drizzle") {
    icon.src = "drizzle.png"
}



}

btn.addEventListener("click", () => {
    checkweather(searchbox.value )

})
