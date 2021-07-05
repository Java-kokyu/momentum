const API_KEY = "d5fab130261f4f71dc23acdbae304694";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json().then())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
            city.innerText = data.name;
        }         
        )
}

function onGeoError(){
    alert("can not find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
