const weatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=48.5465695&lon=-117.905537&exclude=minutely,hourly&units=imperial&appid=02eaf08eecc272834894871326e63e1d";

fetch(weatherAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //current weather
        document.getElementById("currentTemp").textContent = Math.round(jsObject.current.temp);

        document.getElementById("currentCond").textContent = jsObject.current.weather[0].description;

        document.getElementById("currentHum").textContent = jsObject.current.humidity;

        //3 day Forecast
        const daynames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

        for (let i = 0; i < jsObject.daily.length; i++) {
            let d = new Date(jsObject.daily[i]);
            let card = document.createElement('section');
            let day = document.createElement('h3');
            let icon = document.createElement('img');
            let temp = document.createElement('p');

            day.innerHTML = daynames[d.getDay()];
            icon.setAttribute('src', `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}.png`);
            icon.setAttribute('alt', 'daily weather icon');
            temp.textContent = Math.round(jsObject.daily[i].temp) + '°F';

            card.append(day);
            card.append(icon);
            card.append(temp);

            document.querySelector('#forecastSpan').append(card);
        }

    })