//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const numerosEmDobro = numeros.map(valor => valor * 2);
//console.log(numerosEmDobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallece', idade: 47 },
];

const nome = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj=> ({idade: obj.idade}));

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(comIds)