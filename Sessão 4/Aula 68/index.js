function retornaFuncao() {
    const nome = 'Luíz';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao);

// Abrir o console do html
