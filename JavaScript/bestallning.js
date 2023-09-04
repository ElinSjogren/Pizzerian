const bestalltryck = document.getElementById("bestallknapp");
const checkmarkElement = document.getElementById("checkmark");



var formular = document.getElementById("bestallningsformular");
console.dir(formular);


    formular.addEventListener("click", function (event) {
    event.preventDefault();
    let varor = document.getElementById("varor").value;
    let fnamn = document.getElementById("fnamn").value;
    let mobilnr = document.getElementById("mobilnr").value;
    let allergi = document.getElementById("allergi").value;

    console.dir(varor);

    /*//lagra beställningen så att man kan använda den i betalningen :)*/
    var varorLista = varor.split(" ");
    let nyBeställning = { varorna: varorLista, fnamnet: fnamn, mobilnret: mobilnr, allergier: allergi };
    let text = JSON.stringify(nyBeställning);
    localStorage.setItem("bestallning", text);
   
})


bestalltryck.addEventListener("click", function(event) {
    event.preventDefault();
    if(document.getElementById("varor").value != [""] && document.getElementById("mobilnr").value != ""){
        checkmarkElement.removeAttribute("class");
    }
})


