/** implementando fetch **/

let clima_api = document.getElementById("crypto");
let key = "bbf8893c6e8030e157bb633d11a66e17";

fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&appid=bbf8893c6e8030e157bb633d11a66e17")
.then((response) => response.json())
.then((data) => {

    let clima = Object.values(data.main);
    clima.map(() => {
        let content = document.createElement("div");
        content.className = "clima"
        content.innerHTML = `
        <p>Temp: ${clima[0]}, Sensación: ${clima[1]}, Temp. Min: ${clima[2]}, Temp. Max: ${clima[3]}, Presión: ${clima[4]}</p>`;
    
        clima_api.append(content);
    });



});