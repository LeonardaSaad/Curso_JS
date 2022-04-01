function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)

/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade:25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade); */