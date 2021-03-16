//JSON source
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//Fetch the Promise
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Soda Springs"
            || towns[i].name == "Fish Haven" ) {

            let section = document.createElement('section');
            let image = document.createElement('img');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yrFounded = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');

            image.setAttribute('src', './img/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name)
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yrFounded.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Current Population: " + towns[i].currentPopulation;
            rain.textContent = "Average Rainfall: " + towns[i].averageRainfall;

            section.append(image);
            section.append(h2);
            section.append(motto);
            section.append(yrFounded);
            section.append(population);
            section.append(rain);

            document.querySelector('div.homeGrid').append(section);
        }}
    });