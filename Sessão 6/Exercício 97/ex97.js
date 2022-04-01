//705.484.450-52

const cpfBruto = "705.484.450-52";
const cpf = cpfBruto.replace(/\D+/g, '');


function primeiro() {
    const array = []
    for (let i = 0; i < cpf.length-2; i++) {
        let cu = cpf[i]*(10-i);
        array.push(cu)
    };
    const total = array.reduce(function(acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
    const formula = 11 - (total % 11)
    if (formula > 9){
        return 0
    }
    return formula
};

function segundo() {
    const array = []
    for (let i = 0; i < cpf.length-1; i++) {
        let cu = cpf[i]*(11-i);
        array.push(cu);
        console.log(cu);
    };
    const total = array.reduce(function(acumulador, valor) {
        acumulador += valor;
        return acumulador;  
    }, 0);
    console.log(total)
    const formula = 11 - (total % 11)
    if (formula > 9){
        return 0
    }
    return formula
};

const batata = [];
batata.push(primeiro());
batata.push(segundo());

const arrayCpf = cpf.split('').map(x=>+x)
const numeros = arrayCpf.splice(9,10);

function ValidaCpf() {
    if (batata !== numeros) {
        console.log('CHUPA MEU PAU')
    } else {
        console.log("DEU ERRADO, SUA PUTA!");
    };
    return "Amor, você casar comigo?"
}


console.log(ValidaCpf());