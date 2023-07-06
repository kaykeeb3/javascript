/* Curso de Javascript: 07 | Operadores: */

/* Os operadores são utilizados para atribuir valores, comparar, valores, executar operações aritméticas e muito mais...

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

Separados em 6 "categorias":

1) Operadores Aritméticos (matemáticos) -
2) Operadores de Atribuição -
3) Operadores de Sequência - 
4) Operadores de Comparação -
5) Operadores Condicional (Térnario) -  
6) Operadores Lógicos -

*/

/* 1) Operadores Aritméticos (matemáticos)
var valor_1, valor_2, total;
  valor_1 = 10;
  valor_2 = 20; 
  
  
  total = valor_1 + valor_2;
  total = valor_1 - valor_2;
  total = valor_1 * valor_2;
  total = valor_1 / valor_2;


  /*total = ++valor_1; incremento: + 1*/
  /*total = --valor_1; decremento: - 1*/

 //console.log(total);

/* 2) Operadores de Atribuição 

var valor_1, valor_2, total;
  valor_1 = 10;
  valor_2 = 15; 

  total = valor_1 + valor_2


  /*
  valor_1 += valor_2; // valor_01 + valor_02
  valor_1 -= valor_2; // valor_01 - valor_02
  valor_1 *= valor_2; // valor_01 * valor_02
  valor_1 /= valor_2; // valor_01 / valor_02 
  */

  //console.log(total)

/* 3) Operadores de Sequência 

var valor_1, valor_2, total;
  valor_1 = "Kayke ";
  valor_2 = "Barbosa"; 

  total = valor_2 + valor_1 
  console.log(total)
*/

/* 4) Operadores de Comparação 

var valor_1, valor_2, total;
  valor_1 =  8;
  valor_2 = 10; 

// Comparação: true (verdadeiro) ou false (falso) 
total = (valor_1 == valor_2); 

// Comparação valor e tipo: true (verdadeiro) ou false (falso) 
total = (valor_1 === valor_2); 

// Diferente ou não igual: true (verdadeiro) ou false (falso) 
total = (valor_1 != valor_2); 

// Diferente ou não igual e o tipo: true (verdadeiro) ou false (falso) 
total = (valor_1 !== valor_2); 

// Menor que: true (verdadeiro) ou false (falso) 
total = (valor_1 < valor_2); 

// Maior que: true (verdadeiro) ou false (falso) 
total = (valor_1 > valor_2); 

// Menor igual: true (verdadeiro) ou false (falso) 
total = (valor_1 <= valor_2); 

// Maior igual: true (verdadeiro) ou false (falso) 
total = (valor_1 >= valor_2); 
*/

/* 5) Operadores Condicional (Térnario) 

var idade, eleitor, resultado;
  idade = 18;
  eleitor = (idade < 18) ? "Não eleitor" : "Sim eleitor"; // operador ternário

  resultado = (idade === 65 || idade === 72); // || = ou;

  resultado = (idade > 60  && idade < 70); // && = é;

  resultado = !(idade === 65); // ! = não é;
  

*/

/* 6) Operadores Lógicos  
var idade, eleitor, resultado;
  idade = 18;

  resultado = (idade === 65 || idade === 72); // || = ou;

  resultado = (idade > 60  && idade < 70); // && = é;

  resultado = !(idade === 65); // ! = não é;

  console.log(resultado);
*/


/* Operadores de Comparação: ex */

var valor_01, valor_02, total
  valor_01 = 8; 
  valor_02 = 10;

// Comparação: true ou false
//total = (valor_01 == valor_02)

// Comparação: valor e tipo: true ou false
//total = (valor_01 === valor_02)

// Diferente ou não igual: true ou false
//total = (valor_01 != valor_02)

// Diferente ou não igual e o tipo: true ou false
//total = (valor_01 !== valor_02)


total = (valor_01 < valor_02)
total = (valor_01 < valor_02)

alert(total)