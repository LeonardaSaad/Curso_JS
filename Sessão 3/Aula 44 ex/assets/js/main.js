const h1 = document.querySelector('.container h1')
const data = new Date()
const dia = data.getDate()
const ano = data.getFullYear()
const numHora = data.getHours()
const numMinuto = data.getMinutes()

function getDiaSemana(numSemana) {
    const DiaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return DiaSemana[numSemana];
}

function getNomeMês(numMês) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numMês];
}

function hora(numHora) {
    return numHora >= 10 ? nuHoram : `0${numHora}`;
}

function minuto(numMinuto) {
    return numMinuto >= 10 ? numMinuto : `0${numMinuto}`;
}

function Data(data) {
    const numSemana = data.getDay()
    const numMês = data.getMonth()

    const nomediaSemana = getDiaSemana(numSemana)
    const mês = getNomeMês(numMês)

    return (`${nomediaSemana}, ${dia} de ${mês} de ${ano} ${hora(numHora)}:${minuto(numMinuto)}`)
}

h1.innerHTML = Data(data);
