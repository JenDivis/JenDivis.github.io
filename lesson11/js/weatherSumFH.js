const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=02eaf08eecc272834894871326e63e1d";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        
        document.getElementById("current").textContent = jsObject.weather[0].description;
        document.getElementById("temp").textContent = Math.round(jsObject.main.temp);
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("windSpeed").textContent = Math.round(jsObject.wind.speed);

        wChill();
    });
