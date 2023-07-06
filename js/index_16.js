/* Curso de Javascript: 16 | SetTimeount e SetInterval: */

/*
  Os eventos de tempo permitem a execução do código em intervalos de tempo especifícados.
  Esses intervalos de tempo são chamados de eventos de cronometragem.
  
  Os dois métodos-chave para usar com JS são:

  => SetTimeount: function, Tempo em milessegundos;
    executa uma função, depois de esperar um número especifidado de milissegundos.

  => SetInterval: function, miliseconds;
    é o mesmo  que o SetTimeount(), mas repete a execução da função continuamente.

*/


function ativarContagem(){
  //document.getElementById('tempo').innerHTML = "Começou a contar!";
  // executa  apenas uma única vex após o tempo determindado:
  /*tempo = setTimeout(function(){ 
    document.getElementById('tempo').innerHTML = "Executou!";
   }, 2000);*/

   tempo = setInterval(function () {
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) + 1;
    document.getElementById('tempo').innerHTML = soma;
   }, 1000);
}

function pararContagem(){
  clearTimeout(tempo);

  //document.getElementById('tempo').innerHTML = "Parou de Executar";
}