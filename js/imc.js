var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso); //true or false
    var alturaValida = validaAltura(altura);

    // usamos a exclamação para obter a informação negativa

    if (!pesoValido){
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida){
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido){
        var imc = calcularImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){

    if (peso >= 0 && peso < 800){
        return true;

    } else {
        return false;
    }

}

function validaAltura(altura){

    if (altura >= 0 && altura <= 3.0){
        return true;

    } else {
        return false;
    }

}

// essa função calcula o imc para novos pacientes adicionados //

function calcularImc(peso,altura){

    var imc = 0;
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);

}


//---- Exemplo de Botão -----//

// var botao = document.querySelector('#botao');

//    function botaoHandler() {

//        alert('Botão clicado');
//    }

//    botao.addEventListener('click', botaoHandler);

// ----- Aqui tem testes ----- //

// Javascript
//var form = document.querySelector('.adicionar-tarefa');
//var botao = document.querySelector('#botao-adicionar');
//botao.addEventListener("click", function(){
//    console.log(form.tarefa.value);
    //Código para adicionar na lista de tarefas
//});