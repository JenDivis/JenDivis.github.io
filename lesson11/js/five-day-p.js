const URL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=02eaf08eecc272834894871326e63e1d";

    fetch(URL)
        .then((response) => response.json())
        .then((jsonObject) => {
                        
            //filter
            const filter = jsonObject.list.filter((element) => element.dt_txt.includes("18:00:00"));
            //console.log(filter);

            const daynames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
            
            for (let i = 0; i < filter.length; i++) {
                let d = new Date(filter[i].dt_txt);
                let card = document.createElement('section');
                let day = document.createElement('h2');
                let icon = document.createElement('img');let temp = document.createElement('p');
                
                day.innerHTML = daynames[d.getDay()];
                icon.setAttribute('src', `https://openweathermap.org/img/w/${filter[i].weather[0].icon}.png`);
                icon.setAttribute('alt', 'weather icon')
                temp.textContent = Math.round(filter[i].main.temp) + '°F';
                
                card.append(day);
                card.append(icon);
                card.append(temp);

                document.querySelector('div#forecastDiv').append(card);
            }
            
        })