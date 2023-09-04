const betalaRuta = document.getElementById("attBetala");
const slutförknapp = document.getElementById("tillTack");
const URL = "http://private-anon-ff066bf168-pizzaapp.apiary-mock.com/restaurants/2/menu?category=Pizza";
const texten = localStorage.getItem("bestallning");
console.dir(localStorage.getItem("bestallning"));

var totalpris = parseInt(0);
const textJson = JSON.parse(texten);
let varor = textJson.varorna;
/*
//hämta menyn och kolla upp priset på respektive nummer
//skriv ut i vår div :)*/

fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (meny) {
        for (let id of varor) {
            for (var maträtt of meny) {
                if (maträtt.id == parseInt(id)) {
/*
                    */let pris = parseInt(maträtt.price);
                    totalpris += pris;
                }
            }
        }
        betalaRuta.innerHTML = "Nummer: " + varor + " Pris: " + totalpris + " kr";
        return meny;
    })


