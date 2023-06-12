/* Curso de Javascript: 06 | Variáveis: */

/*  
  Variáveis são "recipientes" onde podemos armazenar informações que podem variar ou seja, podem ser qualquer tipo de valor:

No Javascript temos 3 tipos de declarar variáveis:
  => var = possível ter definições diferentes: universal!
  => let = torna a variável única: como fosse o CPF da variável, só que aceita ter reatribuições em blocos!
  => const = uma coisa que não pode mudar ou seja como fosse o CPF e RG, são únicos!
*/

/* DECLARAÇÃO DE VARIÁVEIS: VAR
var d, e, f;

// ATRIBUIÇAÕ DE VALORES:
  d = 5;
  e = 6;
  f = d + e;

//console.log(f)

// Exemplo 02:
var a = 2;
var b = 3;
var c = a + b;

// REATRIBUIÇÃO DE VALOR:
// var a = 5;

//console.log(c);


// DECLARAÇÃO DE VARIÁVEIS:
var nome, sobrenome, nomeCompleto, idade, soma;

// ATRIBUIÇÃO DE VALORES:
  nome = "Kayke";
  sobrenome = "Barbosa";
  idade = 18;
  nomeCompleto = nome + " " + sobrenome;

  soma = idade + 10;

  pessoa = nome + " " + soma; 

  document.getElementById("text").innerHTML = pessoa;
  */

/* DECLARAÇÃO DE VARIÁVEIS: LET 

let x = 10; // 1° = 10

// LET não permite ter reatribuições:
{
   let x = 2; // 2° = 2
}

// Aqui também vai ser 10:
document.getElementById("text").innerHTML = x; */

/* DECLARAÇÃO DE VARIÁVEIS: CONST 

const x = 8; // 1° = 8

// CONST não permite ter reatribuições de maneira alguma!:
{
   let x = 5; // 2° = 5
}

// Aqui também vai ser 8:
document.getElementById("text").innerHTML = x; */