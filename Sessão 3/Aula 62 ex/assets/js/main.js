function criarSeg(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone: 'GMT'});
}

let segundos = 0;
let timer;

function Iniciar() {
    timer = setInterval(function() { 
        segundos ++; 
        p.innerHTML = criarSeg(segundos);
    }, 1000)
}

p.innerHTML = "00:00:00"

//BOTÕES
iniciar = document.querySelector('.IniciarB')
pausar = document.querySelector('.PausarB')
zerar = document.querySelector('.ZerarB')

iniciar.addEventListener('click', function(event) {
    p.classList.remove('pausado')
    clearInterval(timer);
    Iniciar();
})

pausar.addEventListener('click', function(event) {
    p.classList.add('pausado')
    clearInterval(timer);
})

zerar.addEventListener('click', function(event) {
    p.classList.add('pausado')
    clearInterval(timer);
    p.innerHTML = "00:00:00";
    segundos = 0;
})
