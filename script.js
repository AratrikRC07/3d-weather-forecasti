const getWeather = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c3037f77d5msh91f27d8886a879ap154ce0jsn1adb4b01baaf',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);

        console.log(data);
        const cloud_pct = document.getElementById('cloud_pct');
        const temp = document.getElementById('temp');
        const feels_like = document.getElementById('feels_like');
        const humidity = document.getElementById('humidity');
        const min_temp = document.getElementById('min_temp');
        const max_temp = document.getElementById('max_temp');
        const wind_speed = document.getElementById('wind_speed');
        const wind_degrees = document.getElementById('wind_degrees');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');

        cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;

        // Use the retrieved weather data as needed
        console.log(data.cloud_pct, data.temp, data.feels_like, data.humidity, data.min_temp, data.max_temp, data.wind_speed, data.wind_degrees, data.sunrise, data.sunset);
    } catch (error) {
        console.error(error);
    }
};

const submitEvent = document.getElementById("submit-button");
const cityInput = document.getElementById("city-input");

submitEvent.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    getWeather(city);
});

getWeather("Jalpaiguri");
