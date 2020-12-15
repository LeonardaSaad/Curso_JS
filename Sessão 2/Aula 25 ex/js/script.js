const num = Number(prompt("Digite um número:"))
const numT = document.getElementById("numTítulo")

numT.innerHTML = num;
Texto.innerHTML = `Raiz quadrada: ${num ** 0.5} <br \>`
Texto.innerHTML += `${num} é inteiro: ${Number.isInteger(num)} <br \>`
Texto.innerHTML += `É NaN: ${Number.isNaN(num)} <br \>`
Texto.innerHTML += `Arrendondado para baixo: ${Math.floor(num)} <br \>`
Texto.innerHTML += `Arredondado para cima: ${Math.floor(num)} <br \>`
Texto.innerHTML += `Com duas casas decimais: ${num.toFixed(2)} <br \>`
