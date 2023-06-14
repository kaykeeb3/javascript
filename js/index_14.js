/* Curso de Javascript: 14 | Switch: */

/* É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não será executada e o valor padrão será acionado.
*/

function verificaCor() {
  let cor = document.getElementById("cor").value;


switch (cor) {
  case "azul": 
    // o que acontece
    document.body.style.backgroundColor = "blue";
    break;
  case "vermelho": 
    document.body.style.backgroundColor = "red";
    // o que acontece
    break;
  case "amarelo": 
    // o que acontece
    document.body.style.backgroundColor = "yello";
    break;
  default:
    // o que acontece
  document.getElementById("teste").innerHTML = "Nenhuma cor dispoível para: " + cor;
  }
}
