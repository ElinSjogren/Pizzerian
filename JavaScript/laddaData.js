
const menyTabell = document.getElementById("meny");
const URL = "http://private-anon-ff066bf168-pizzaapp.apiary-mock.com/restaurants/2/menu?category=Pizza";






fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (meny) {
        return meny;
    })
    .then(function (meny) {
        for (var maträtt of meny) {
            var pålägg = "";
            const radElement = document.createElement("tr");
            const nummer = maträtt.id;
            LäggTillIRad(nummer);
            const namn = maträtt.name;
            LäggTillIRad(namn);

            if (maträtt.topping != null) {
                for (let varv = 0; varv < maträtt.topping.length; varv++) {
                    pålägg = pålägg + " " + maträtt.topping[varv];
                }
            }
            else pålägg = " ";

            LäggTillIRad(pålägg);

            let pris = maträtt.price + " kr";
            LäggTillIRad(pris);


            function LäggTillIRad(text) {
                const cellElement = document.createElement('td');
                cellElement.innerHTML = text;
                radElement.appendChild(cellElement);
            }
            menyTabell.appendChild(radElement); //BUGG! :c det ska bara hämta på menysidan
        }
    })














// läs in all data i en string
//dela in så att det blir en tr-element med brytning för varje "/n" eller radbyte
//för varje cell i varje rad, skapa ett cellelement (td) och lägg in i raden.

