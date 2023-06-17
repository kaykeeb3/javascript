/* Curso de Javascript: 19 | JSON: */

/* 
JSON significa Javascript Object Notation no português: Fica algo como anotação de objeto com Javascript.

Explicando de um modo simples JSON é basicamente um formato de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido pro praticamente toda linguagem de programação:

obs: Para trabalhar com JSON no JS usamos dois métodos:

=> JSON.parse() = Converte texto no padrão JSON em um objeto.
=> JSON.stringify() = Converte objetos em texto padrão JSON.
*/

/*
// Objeto
const carro = {
  marca: "Toyota",
  modelo: "Hilux",
  ano: 2020,
  motor: ["1.4", "1.6", "1.7"]
}

// Converteu para texto JSON:
let texto = JSON.stringify(carro);

// Colocou o texto no HTML:
//document.getElementById('area').innerHTML = texto;

// Convertemos texto em objeto:
let obj = JSON.parse(texto);

*/

function buscarCEP(){
  let input = document.getElementById('cep').value;

  const ajax = new XMLHttpRequest();
  ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
  ajax.send();

  ajax.onload = function(){
    //document.getElementById('texto').innerHTML = this.responseText;
    // Tranformei o texto em objeto:
    let obj = JSON.parse(this.responseText);

    // Peguei os valores que desejei pegar:
    let logradouro =  obj.logradouro;
    let cidade =  obj.cidade;
    let estado = obj.uf;

    document.getElementById('texto').innerHTML = "Logradouro:" + logradouro + "<br> Cidade: " + cidade + "<br> Estado:" + estado;
  }
}

