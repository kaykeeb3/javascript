/* Curso de Javascript: 12 | Métodos para Arrays(Matizes): */

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

lista[2] = "biscoito";

let x = lista[2];


const pessoa = ["Kayke", "Barbosa", 18, "Aluno"];

/* JOIN: 
possíbilita adicionar algo a mais entre os items. é um separador entre os valores do Array:
  document.getElementById("teste").innerHTML = pessoa.join(" - "); 

POP: 
remove o último item do Array
  pessoa.pop();

PUSH:
adiciona um item no array:
  pessoa.push("Desenvolvedor");

SHIFT: 
remove o primeiro item do Array
  pessoa.shift();

UNSHIFT: 
adiciona o primeiro item do Array
  pessoa.unshift("Jogador");

SPLICE:
adiciona valores do Array na posição, deleta os valores desejados e sobre escreve a posição dos valores:
  pessoa.splice(1, 0, "Iten adicionado 1", "Iten adicionado 2");

*/

/*const lista1 = ["Arroz", "Carne", "Açúcar", "Macarrão"];
const lista2 = ["Suco", "Cerveja", "Fruta", "Salgado"];

// CONCAT: justa os dois arrays... 
const superLista = lista1.concat(lista2); 
*/


/*
const jogadores = [
  "Pelé", 
  "Lucas", 
  "GabiGol", 
  "Osmael",
  "Neymar",
  "Messi",
  "Cristiano Ronaldo",
  "Kayke",
  "Pedro"
];

// SLICE: fatia a posição desejada pela posição

const craques = jogadores.slice(2, 6);

// SORT: mostra em ordem alfabetica: texto
// REVERSE: mostra em ordem ao contrario da ordem alfabetica

/*
  jogadores.sort();
  jogadores.reverse();
const jogOrdem = jogadores.sort();
*/

const numeros = [
  10,
  105,
  1,
  5,
  25,
  10
];

const maior20 = numeros.filter(filtragem);

document.getElementById("teste").innerHTML = MenorNumero(numeros); 

// faz uma filtragem nos números que são maiores do qye 20
function filtragem(value, index, array){
  return value > 20;
}

/*
retorna em ordem numerica do menor para o maior:
numeros.sort(function (a, b ) { return a - b });
*/




/*
// Pega o maior valor do array:
function MaiorNumero(array){
  return Math.max.apply(null, array) 
}

// Pega o menor valor do array:
function MenorNumero(array){
  return Math.min.apply(null, array) 
}
*/