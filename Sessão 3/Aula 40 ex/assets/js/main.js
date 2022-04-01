let peso = document.getElementById("peso-input");
let altura = document.getElementById("altura-input");

altura.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {enviar()}
});

function enviar() {
    const Peso = Number(peso.value);
    const Altura = Number(altura.value);
    const resultado = Peso / (Altura * Altura);
    
    if (resultado < 18.5) {
        // Abaixo do peso 
        res.innerHTML = `Seu IMC é ${resultado.toFixed(1)} (Abaixo do peso)`;
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        // Peso normal
        res.innerHTML = `Seu IMC é ${resultado.toFixed(1)} (Peso normal)`;
    } else if (resultado >= 25 && resultado <=29.9) {
        //Sobrepeso
        res.innerHTML = `Seu IMC é ${resultado.toFixed(1)} (Sobrepeso)`;
    } else if (resultado >= 30 && resultado <= 34.9) {
        //Obesidade grau 1
        res.innerHTML = `Seu IMC é ${resultado.toFixed(1)} (Obesidade grau 1)`;
    } else if (resultado >= 35 && resultado <= 39.9) {
        //Obesidade grau 2
        res.innerHTML = `Seu IMC é ${resultado.toFixed(1)} (Obesidade grau 2)`;
    } else {
        //Obesidade grau 3
        res.innerHTML = `Seu IMC é ${resultado.toFixed(1)} (Obesidade grau 3)`;
    };
    
}


