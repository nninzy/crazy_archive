const onGeoOk = function (position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&nits=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".header__weather")
        weather.textContent = `${data.name}, ${data.weather[0].main}`
    });
}
const onGeoError = function () {
    alert("위치 정보 추가 필요")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)