const URL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=02eaf08eecc272834894871326e63e1d";

    fetch(URL)
        .then((response) => response.json())
        .then((jsonObject) => {
            console.log(jsonObject);
            
            //filter
            const filter = jsonObject.list.filter((element) => element.dt_txt.includes("18:00:00"));

            const daynames = [
                "Sun",
                "Mon",
                "Tues",
                "Wed",
                "Thur",
                "Fri",
                "Sat"
            ];
            
            //loop here? through each day
            for (let i = 0; i < filter.length; i++) {
                const day = new Date(filter[i].dt_text);
                const wIcon = `https://openweathermap.org/img/w/${jsonObject.list[i].weather[0].icon}.png`;
                const temp = Math.round(jsonObject.list[5].main.temp);
                const forHtml = `<h4>${day}</h4>
                    <img src="${wIcon}"></img>
                    <div>${temp} °F</div>`;

               document.getElementById("forecastDiv").innerHTML = forHtml;
            }
            
        })