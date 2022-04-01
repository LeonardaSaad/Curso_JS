const text = document.querySelector('.tarefas')
const enviar = document.querySelector('.button')

//KeyEvent
text.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        if (text.value == 0) {
            alert("Digite uma tarefa!");
        } else {
            criaTarefa();
        }
    }
});


// Cria li 
function criaLi() {
    const li = document.createElement('li');
    return li;
};

// Cria Tarefa
function criaTarefa() {
    const li = criaLi();
    li.innerHTML = text.value;
    list.appendChild(li);
    limpaText();
    buttonApagar(li);
    salvarTarefas();
} 

// Botão Apagar
function buttonApagar(li) {
    li.innetText += " "; 
    const button = document.createElement("button");
    button.setAttribute('class', 'apagar');
    button.innerHTML = "Apagar";
    li.appendChild(button);
}

// Limpa text
function limpaText() {
    text.value = '';
    text.focus();
};


// Botão enviar
enviar.addEventListener ('click', function(event) {
    if (!text.value) return;
    criaTarefa(text.value);
});

// Botão apagar
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

// Salvar as tarefas
function salvarTarefas() {
    const liTarefas = list.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
};

adicionaTarefasSalvas();
