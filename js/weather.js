const API_KEY = "fd909077c54a49b0f8f3a9acd38b2854";

function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("you live in", latitude, longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `Hi! You are in ${data.name} and the temperature is ${data.main.temp}.`;
    });
}
function onGeoError(){
    alert("Can't find you. No Weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
