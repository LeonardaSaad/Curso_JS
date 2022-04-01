const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'class', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
    let Tag = document.createElement(tag);
    Tag.innerText = texto;
    div.appendChild(Tag);
};

container.appendChild(div);
