const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch (eventURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        /*Loop through the events to enable styling*/
        for (let i = 0; i < jsObject.towns[6].events.length; i++)
        document.getElementById("events").innerHTML += "<p>" + jsObject.towns[2].events[i] + "</p>";
    })