/* Curso de Javascript: 08 | Funções: */

/*   
Uma função JS é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas"  projetados para fazer uma tarefa que vai contribuir para todo o código 

Uma função no JS é executada quando "algo" a invoca (chama-a) 

*/

// FUNÇÃO DE SOMA
function soma(valor_1, valor_2){
  return valor_1 + valor_2;
}


// FUNÇÃO DE COTAÇÃO DO DÓLAR
function realParaDolar(real, cotacaoDolar){
  return real * cotacaoDolar
}

var valorReal = 7.89;
var cotacao = 5.08;


var total = realParaDolar(valorReal, cotacao);

console.log("O valor em real é R$: " + valorReal + " o valor en U$ é: " + total);

//document.getElementById("text").innerHTML = soma(10, 10);