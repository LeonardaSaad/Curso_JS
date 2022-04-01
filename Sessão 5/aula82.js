const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallece', idade: 47 },
];

const pessoasMaisDe50Anos = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasMaisDe50Anos)