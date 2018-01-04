var api_key = '&APPID=eb8e2c42cb5dbb7904691ca35e1ba416';

document.addEventListener('DOMContentLoaded', buttons);

function buttons() {
    document.getElementById("weather").addEventListener("click", function(event) {
        
        var req = new XMLHttpRequest();
        
        var rad_value = document.getElementById('city_button').checked;
        
        var payload = {k: null, v: null};

        if (rad_value == true) 
        {
            var val = document.getElementById("userCity").value;
            var payload = {k: "q", v: val};

        } else 
        {
            var val = document.getElementById("userZip").value;
            var payload = {k: "zip", v: (val + ',us')};
        }
        
        req.open('POST', 'http://api.openweathermap.org/data/2.5/weather?' 
                 + payload.k + '=' + payload.v 
                 + api_key, true);
     

        req.addEventListener('load',displayResults); 
        req.send(null);
        event.preventDefault();
    })
}


function displayResults(response) {
    console.log("Printing response: ", response);

    var rJSON;

    if(response.srcElement.status >= 200 && response.srcElement.status < 400) {
        rJSON = JSON.parse(response.srcElement.responseText);
        console.log(rJSON);
    }

    document.getElementById("name").textContent = rJSON.name;
    document.getElementById("temp").textContent = rJSON.main.temp;
    document.getElementById("description").textContent = rJSON.weather[0].description;
    document.getElementById("humidity").textContent = rJSON.main.humidity;
    document.getElementById("wind").textContent = rJSON.wind.speed;
    document.getElementById("sunrise").textContent = rJSON.sys.sunrise;
    document.getElementById("sunset").textContent = rJSON.sys.sunset;
}


