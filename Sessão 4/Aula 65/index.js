/*function funcao() {
    console.log(arguments[10]);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8 , 9, 'Luiz')*/

/*function funcao () { 
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}
funcao(1,2,3,4,5,6,7)*/

/*function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20)*/

/*function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao({nome: 'Luiz', sobrenome: 'Otávio', idade: 36})*/

function conta(operador, acumulador, ...numeros) {
   for (let numero of numeros) {
       if (operador === "+") acumulador += numero;
       if (operador === "-") acumulador -= numero;
       if (operador === "/") acumulador /= numero;
       if (operador === "*") acumulador *= numero;
   }

   console.log(acumulador)
}
conta('+', 0, 20, 30, 40 , 50)
