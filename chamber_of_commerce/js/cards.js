const jsonSource = 'https://next.json-generator.com/api/json/get/Nk61eDdS5';

fetch(jsonSource)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);

        const business = jsonObject['Businesses'];

        for (let i = 0; i < business.length; i++ ) {
            let card = document.createElement('section');
            let image = document.createElement('img')
            let name = document.createElement('h2');
            let phone = document.createElement('p');
            let address = document.createElement('p');
            let web = document.createElement('p');
            

            image.setAttribute('src', business[i].logo);
            image.setAttribute('alt', name.textContent);
            name.textContent = business[i].name;
            phone.textContent = 'Phone#: ' + business[i].phone;
            address.textContent = business[i].address.street;
            web.textContent = business[i].weblink;
            

            card.append(image);
            card.append(name);
            card.append(phone);
            card.append(address);
            card.append(web);

            document.querySelector('div.cards').append(card);
        }

        
    });