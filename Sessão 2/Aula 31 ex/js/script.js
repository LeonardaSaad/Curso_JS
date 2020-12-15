const nome  = document.getElementById('Nome-input')
const sobre  = document.getElementById('Sobrenome-input')
const peso  = document.getElementById('Peso-input')
const altura  = document.getElementById("Altura-input")
const array = []

function enviar() {
    res.innerHTML += `${nome.value} ${sobre.value} ${peso.value} ${altura.value} <br \>`;
    array.push({nome: nome.value, sobrenome: sobre.value, peso: peso.value, altura: altura.value})
    console.log(array);
};
