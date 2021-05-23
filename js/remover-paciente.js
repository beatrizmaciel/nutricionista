var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("#tabela-pacientes");


// usamos o "event" para remover só o que foi clicado, funciona diferente
// do "this", //
// aqui, quem escuta é a tabela, mas quem é clicado é o "target" //
tabela.addEventListener("dblclick", function(event){
    // target é o "alvo" do duplo clique //
    //console.log(event.target);

    // fadeOut está declarado no CSS
    event.target.parentNode.classList.add("fadeOut");

    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode; // TR = paciente, o que queremos remover

    // para esperar (para colocar o fadeOut) usar setTimeout //
    setTimeout(function(){
        event.target.parentNode.remove();
        // 400 porque são milisegundos.
    }, 400);
})



    // para cada item do meu array eu farei... //
    // uma função anônima //
    // do meu array paciente para cada paciente eu quero colocar um eventListener //
//pacientes.forEach(function(paciente){
    // dblclick = duplo clique , depois de ouvir esse dblclique chamo uma função //
//    paciente.addEventListener("dblclick", function(){
//        console.log("Double click");
        // usamos this para saber a quem está atrelado o evento, isso não funciona //
        // muito bem com o event bubbling, porque todos serão removidos //
        // o this é quem foi clicado e quem é "dono" do evento //
//        this.remove();
//    });
//})

    // ^ essa função só é válida para quem já estava na página HTML //
    // não funciona para os novos //

    // usamos o event bubbling para não termos que usar o eventListener individualmente //
    // com o event bubbling, o "escutador de evento" sobre até o <body> //