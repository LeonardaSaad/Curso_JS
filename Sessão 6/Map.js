const pessoas = [{ id: 1, nome: 'y'}]
const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);