// new Object -> Object.prototype
/* const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveA: 'B'
    // __proto__: Object.prototype
}

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA) */

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p1, Produto.prototype)


p2.aumento(10);

console.log(p1);
console.log(p2);
