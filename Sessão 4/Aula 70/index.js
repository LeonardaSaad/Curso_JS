(function() {

    const sobrenome = "Miranda";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luíz'));
    }

    falaNome();
    
})();