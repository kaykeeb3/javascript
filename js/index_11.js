/* Curso de Javascript: 11 | Arrays: */

/* Os arrays são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição .


Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "carne", "leite"];

*/


var item_1 = "feijão";
var item_2 = "arroz";
var item_3 = "leite";
var item_4 = "pão";


//Array Líteral ou Matriz
const lista = [
  "arroz", 
  "feijão", 
  "pão", 
  "leite"
];

// Alterando a lista adicionando na posição 2;
lista[2] = "biscoito"

let x = lista[2];

/*const lista_1 = new Array("carne", "pão", "leite", "café");*/

/* Passando a Posição 
const lista = [];
  lista[0] = "arroz";
  lista[1] = "feijão";
  lista[2] = "pão";
  lista[3] = "leite";
*/
//console.log(lista)

const pessoa = [
  "Kayke", 
  "Barbosa",
  18
]

pessoa.push("Brasileiro") // adiciona no final da lista

console.log(Array.isArray(pessoa)); // verifica-se é realmente uma matriz "Array";

//console.log(pessoa[pessoa.length - 1]); // retorna a quantidade de infotmações dentro do array;
