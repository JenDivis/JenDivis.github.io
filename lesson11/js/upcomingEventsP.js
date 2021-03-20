const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch (eventURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById("events").textContent = jsObject.towns[6].events;
    })