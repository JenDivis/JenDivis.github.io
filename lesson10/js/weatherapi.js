const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=02eaf08eecc272834894871326e63e1d";

//request the apiURL
fetch(apiURL)
    //convert the string response to js object
    .then((response) => response.json())
    .then((jsObject) => {
        //print results to console
        console.log(jsObject);
        //write temp value to current-temp id
        //document.getElementById("current-temp").textContent = jsObject.main.temp;
        
        //variable to store the image address which needs to be concatenated together given the API icon code value result.
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        //variable to store the weather description
        const desc = jsObject.weather[0].description;
        //Assign the <span> tag  with the id of 'imagesrc' the concatenated image variable to to display the full address for testing purposes.
        //document.getElementById("imagesrc").textContent = imagesrc;
        //Set the src attribute for the <img> with the id of 'icon'.
        document.getElementById("icon").setAttribute('src', imagesrc);
        document.getElementById("icon").setAttribute('alt', desc);

        //Preston page
        document.getElementById("current").textContent = jsObject.weather[0].description;
        document.getElementById("temp").textContent = jsObject.main.temp;
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("windSpeed").textContent = jsObject.wind.speed;
    });