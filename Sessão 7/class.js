//class Pessoas {
//    constructor(nome, sobrenome) {
//        this.nome = nome;
//        this.sobrenome = sobrenome;
//    }
//    //...métodos   
//}
//
//const p1 = new Pessoas('Luiz', 'Miranda');
//console.log(p1);

class DispositivoEletronico {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome); //Pegou o nome da class DispositivoEletronico
        this.cor = cor;
    }
}

const s1 = new Smartphone("X", "Preto");
console.log(s1)
