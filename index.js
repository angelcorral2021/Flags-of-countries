
const input = document.getElementById("input");
const content = document.querySelector(".content");

function enter(event) {
    if (event.code == "Enter") {
        getInfo()
    }
}

function getInfo() {
    if (input.value != "") {
        fetch(`https://restcountries.com/v3.1/name/${input.value}`)

            .then((info) => info.json())
            .then((data) => {
                let currency = Object.values(data[0].currencies);
                content.innerHTML = `
                    
                    <h3 class = "titulo"> ${data[0].name.common}</ h3>
<img src="${data[0].flags.png}" class="flag" width="250" alt="bandera del pais" />
<table>
    <tr>
        <td>Capital</td>
        <td>${data[0].capital}</td>
    </tr>
    <tr>
        <td>Continente</td>
        <td>${data[0].continents[0]}</td>
    </tr>
    <tr>
        <td>Moneda</td>
        <td>${currency[0].name}</td>
    </tr>
    
    <tr>
        <td>Poblacion</td>
        <td>${data[0].population}</td>
    </tr>
    
    <tr>
        <td>Area</td>
        <td>${data[0].area}</td>
    </tr>
</table>
`            ;
            });
    } else {
        return false;
    }
    input.value = '';

};

