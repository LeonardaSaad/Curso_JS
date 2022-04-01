const paragrafos = document.querySelector('.container')
const ps = paragrafos.querySelectorAll('p')

const estilo = getComputedStyle(document.body)
const background = estilo.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = background;
    p.style.color = "#FFFFFF";
}