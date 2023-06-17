/* Curso de Javascript: 17 | Classes: */


/* Basicamente classes são como fábricas para criar objetos.
Pode se dizer que são "funções especias" para criação de objetos
*/

class Carro {
  constructor(valor_1, valor_2, valor_3){
    this.marca = valor_1;
    this.modelo = valor_2;
    this.ano = valor_3;
  }
  buzina() {
    return this.modelo +  " buzinou: Biiiiiiii";
  }
}

/*
const uno = new Carro("Fiat", "Uno", 2001);
const golf = new Carro("Volkswagen", "Golf", 2012);

console.log(uno);
console.log(golf.buzina());
*/