function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
};

const pessoa1 = new Pessoa('Luiz', 'O.');

console.dir(pessoa1);
console.dir(pessoa1.nomeCompleto());

// Olhar no console do navegador pra ver que nomeCompleto tá no __proto__;