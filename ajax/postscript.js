
document.addEventListener('DOMContentLoaded' ,bindButton);

function bindButton(){
    document.getElementById('submitpost').addEventListener('click', function(event) {
        var req = new XMLHttpRequest();
        var urlSubmission = 'http://httpbin.org/post';
        var payload = {
            'city' : null,
            'temperature' : null,
            'weather' : null,
        };

        payload.city = document.getElementById('city').value;
        payload.temperature = document.getElementById('temperature').value;
        payload.weather = document.getElementById('weather').value;

        req.open('POST', urlSubmission, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function() {

            if (req.status >= 200 && req.status < 400) {
                var result = JSON.parse(req.responseText);
                console.log("Success");
                document.getElementById("form_response").textContent = JSON.stringify(result);
            } else {
                console.log("Error: " + result.status);
            }
        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}