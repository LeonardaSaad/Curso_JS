const cpfBruto = "705.484.450-52";
const cpf = cpfBruto.replace(/\D+/g, '');

function ValidaCpf() {
    const array = []
    const Primeiro = () => {
        for (let i = 0; i < cpf.length-2; i++) {
            let numMulti = cpf[i]*(10-i);
            array.push(numMulti)
        };
        const total = array.reduce((acumulador, valor) => {
            acumulador += valor;
            return acumulador;
        }, 0);
        const formula = 11 - (total % 11)
        if (formula > 9){ return 0 }
        return formula
    };
    const Segundo = () => {
        const array = []
        for (let i = 0; i < cpf.length-1; i++) {
            const numMulti = cpf[i]*(11-i);
            array.push(numMulti)
        };
        const total = array.reduce(function(acumulador, valor) {
            acumulador += valor;
            return acumulador;
        });
        const formula = 11 - (total % 11)
        if (formula > 9){
            return 0
        }
        return formula
    }

    const batata = [];
    batata.push(Primeiro());
    batata.push(Segundo());
    
    const arrayCpf = cpf.split('').map(x=>+x)
    const numCpf = arrayCpf.splice(9,10);
    const Verifica = () => {
        if (batata == numCpf) {
            return true
        } else {
            return false
        }
    }
    return Verifica()
};

console.log(ValidaCpf());