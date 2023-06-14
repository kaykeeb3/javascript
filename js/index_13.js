/* Curso de Javascript: 13 | If e Else: */

function verificar(){
  let nome  = document.getElementById("nome").value;

  if (nome == "" || nome == null){
    let p = document.getElementById("teste");
    p.innerHTML = "O campo não pode ser vazio!";
    p.style.color = "red";
  } else {
    let p = document.getElementById("teste");
    p.innerHTML = "Tudo certo!";
    p.style.color = "green";
  }
}