const pontuaçãoUsuário = 1000;
const nívelUsuário = pontuaçãoUsuário >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuário = "Pink"
const corPadrão = corUsuário || 'Preta'

console.log(nívelUsuário, corPadrão)