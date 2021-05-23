var botaoAdicionar = document.querySelector("#adicionar-paciente");

// clicar e criar um evento a partir do click //

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar");

    // para pegar (extrair) os valores digitados //

    var paciente = pacienteForm(form);

    // cria a tr e a td do paciente //

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if(erros.length > 0 ){
        validarMensagensDeErro(erros);
        // usando o return, ele sai da função e não entra na tabela
        return;
    }


    // para imprimir a tabela com os novos pacientes //
    // adicionar pacientes //

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    // para resetar os dados depois de adicionar o paciente:

    form.reset();

    // para limpar as mensagens de erro se tudo der certo //

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});


// * FUNCTIONS * //

// criar um objeto (ao invés de pegar no html, podemos criar) //

function pacienteForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");

    // adicionar classe aos novos pacientes //
    // antes só os nativos tinham //

    pacienteTr.classList.add("paciente");

    // para criar elementos a partir dos valores //
    // aqui estamos criando novas Tr e Td's //
    // isso está especificado em montaTd(paciente.dado, "info-dado") abaixo

    // appendChild serve para que esse elementos sejam abraçados
    // pela variavel pacienteTr //
    // Td dentro da tabela //

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;
}

function montaTd(dado, classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){

    // usamos [] para declarar um array
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Por favor, preencha o nome");
    }

    // se o if for simples (se X acontecer, faça Y) então
    // nós podemos usar o código em uma linha, sem chaves.
    // --> não fiz isso aqui, mas é possível <-- //

    if(!validaPeso(paciente.peso)){
        // a função push adiciona algo dentro de um array
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    } 

    if(paciente.gordura.length == 0){
        erros.push("Por favor, preencha a gordura");
    }

    if(paciente.peso.length == 0){
        erros.push("Por favor, preencha o peso");
    }

    if(paciente.altura.length == 0){
        erros.push("Por favor, preencha a altura");
    }

    return erros;
    
}


function validarMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    // o innerHTML te permite controlar o HTML por dentro //
    // assim, apagamos as mensagens de erro anteriores antes de mostrar as novas //
    ul.innerHTML = "";

    // Podemos fazer com o forEach ao invés de for(var i = 0; i < erros.length; i++)//
    // o forEach não precisa que espeficique de 0 a tal, ele passa
    // por todos os elementos de forma inteligente //

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


// *** COMENTÁRIOS **** ///

    // para criar elementos a partir dos valores //
    // aqui estamos criando novas Tr e Td's //

//    var nomeTd = document.createElement("td");
//    var pesoTd = document.createElement("td");
//    var alturaTd = document.createElement("td");
//    var gorduraTd = document.createElement("td");
//    var imcTd = document.createElement("td");

    // os próximos elementos foram especificados em var acima //
    // aqui o código coloca as valores no Td //

//    nomeTd.textContent = paciente.nome;
//    pesoTd.textContent = paciente.peso;
//    alturaTd.textContent = paciente.altura;
//    gorduraTd.textContent = paciente.gordura;
//    imcTd.textContent = paciente.imc;

    // OOOOOOOUU

//    var nomeTd = montaTd(paciente.nome, "info-nome");
//    var pesoTd = montaTd(paciente.peso, "info-peso");
//    var alturaTd = montaTd(paciente.altura, "info-altura");
//    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
//    var imcTd = montaTd(paciente.imc, "info-imc");