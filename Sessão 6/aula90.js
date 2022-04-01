// .defineProperty()    -   .defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,       // mostra a chave
        value: estoque,         // valor
        writable: false,        // pode alterar (nesse caso não)
        consfigurable: true     // configurável
    });
};


const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
//console.log(Object.keys(p1))

//
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,      
            value: nome,         
            writable: false,        
            consfigurable: true 
        },
        preco: {
            enumerable: true,      
            value: preco,         
            writable: false,        
            consfigurable: true 
        },
        estoque: {
            enumerable: true,      
            value: estoque,         
            writable: false,        
            consfigurable: true 
        }
    });
};

for(let chave in p1) {
    console.log(chave);
}




