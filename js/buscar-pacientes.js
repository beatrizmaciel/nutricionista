// cria a variável do Botão Adicionar
var botaoAdicionar = document.querySelector("#buscar-pacientes");

//adiciona um Event Listener e inclui uma função anônima com console.log
botaoAdicionar.addEventListener("click", function(){
    // para fazer a requisição do conteúdo de novos pacientes
    // o XMLHttpRequest faz requisições HTTP. Antes ele fazia o transporte de dados
    // do tipo XML, mas agora consegue trafegar outros tipos de dados, como textos.
    var xhr = new XMLHttpRequest();
    // para verificar o endereço correto, precisamos usar o seguinte código:
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    // para pegar o conteúdo do endereço acima, usamos mais um eventListener
    // e o evento load:
    xhr.addEventListener("load", function(){
        // aqui para selecionar o span "erro-ajax" do html
        var erroAjax = document.querySelector("#erro-ajax");


            // criei o if para testar o status dos dados (caso seja erro 404),
            // para saber que deu tudo certo precisa ser 200.
            if(xhr.status == 200){
                // criei a variável resposta para investigar o formato dos dados
                var resposta = xhr.responseText;
                // o console retorna uma string, mas na verdade o que pegamos é uma JSON
                // JSON (JavaScript Object Notation), um formato que podemos transportar pela web.
                // para transformarmos essa resposta de string para array, usamos o um parseados (ou transformador)
                // de JSON para objetos no JavaScript. Para isso, utilizamos o parse()
                // com o parse() tornaremos a string em array
                var pacientes = JSON.parse(resposta);
                // usamos o forEach para retornar cada um dos pacientes
                // e passamos (paciente) como parâmetro da função anônima para ser adicionado na tabela
                pacientes.forEach(function(paciente) {
                    adicionaPacienteNaTabela(paciente);
                });
            // se der erro e não retornar o 200 (sem erro), retorno o else
            } else {
                erroAjax.classList.remove("invisivel"); 
            }
    });
            
        // aqui para terminar a função e enviar
        // isso não significa que será impresso no site, só que será "capturado"
        xhr.send();

});

// * COMENTÁRIOS * //

// Aqui usei o AJAX, uma técnica de requisição assíncrona com JavaScript //
// É uma requisição assíncrona porque não está parando o fluxo do código,
// ou seja, no momento em que a requisição é feita, a execução continua normalmente.
// Durante esse processo de busca de pacientes no servidor externo,
// é possível excluir e adicionar pacientes.