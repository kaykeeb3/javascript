/* Curso de Javascript: 15 | Laço de repetição: */

/*
Laço de repetiçãp é um jeito fácil e rápido de executar uma ação repetidas vezes.
*/

/*
for (let i = 0; i < 11; i++ ) {
  document.getElementById("teste").innerHTML += i + ", ";
}
*/

/*for (let i = 2019; i <= 2023; i++){
  document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}*/

/*var ano = new Date().getFullYear()

for (let i = ano; i >= 2019; i--){
  document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}*/

const carros = [
  "Golf",
  "Hilux",
  "Corolla",
  "Gol",
  "Brasília",
  "Del Rey"
];

var tamanho = carros.length;

for (i = 0; i < tamanho; i++){
  document.getElementById("teste").innerHTML += carros[i] + " - ";
}