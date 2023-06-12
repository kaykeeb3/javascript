/* Curso de Javascript: 09 | Objetos: */

/* OBJETOS são váriaveis com muitos valores dentro:

Ex: const carro = { marca: "ford", modelo: "kb", ano: 2015 }

Os valores dentro de um objeto são chamados propriedades

Objetos também podem ter métodos. Um Método é uma função colocadas dentro de uma propriedade;
*/

// OBJETOS: tem determinadas propriedades ou seja carro tem como MODELO, ANO, MARCA, PLACA...
const carro = {
  marca: "toyota", 
  modelo: "hilux", 
  ano: 2018, 
  placa: "ATG-248A",
  buzina: function(){ console.log('BIBIBIBIBIBI') },
  completo: function(){
    return "A marca é " +this.marca+" e o modelo é: " +this.modelo;  // this = este
  }
};

console.log(carro.completo());

