// para detectar o evento de digitar

var campoFiltro = document.querySelector("#filtrar-tabela");

// para ouvir cada caractere digitado no input
campoFiltro.addEventListener("input", function(){
    // para pegar o atributo do input usamos value
    console.log(this.value);

    // para retornar todos os pacientes da tabela
    var pacientes = document.querySelectorAll(".paciente");

    // para passar pelo array de nomes de pacientes


    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            // passar por todos os pacientes para avaliar
            var paciente = pacientes[i];
            // analisar os nomes da tabela
            var tdNome = paciente.querySelector(".info-nome");
            // retorna o texto do nome
            var nome = tdNome.textContent;
            // procurar letra a letra para filtrar por caracter
            // expressão regular é o nome do objeto
            // "i" (uma flag) para ser case insensitive (usar maiusculas e minusculas)
            var expressao = new RegExp(this.value, "i");
            // usamos .test para ver se vai ter um pedacinho dos caracteres:
            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } 
            // caso contrário, removemos a classe invisível
            else {
                paciente.classList.remove("invisivel");
            }
        }
    }
    else {
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes [i];
            paciente.classList.remove("invisivel");
        }
    }



});