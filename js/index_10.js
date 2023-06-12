/* Curso de Javascript: 10 | Eventos: */

/* EVENTOS são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

onclick => Disparado quando recebe um click. 
ondblclick => Disparado quando recebe clique duplo
onmouserover => Disparado quando o mouse está sobre.
onmouseout => Disparado quando o mouse está para fora do elemento.
onmousemove => Disparado quando o mouse está para o elemento.
onmousedown => Disparado quando o clique do botão foi pressionado.
onmouseup => Disparado quando clique do botão é liberado.
onfocus => Disparado quando o elemento  recebe o foco.
onchange => Dispado quando existe uma mudança no conteúdo. "Ao mudar"
onblur => Dispado quando o elemento perde o foco.
onkeydown => Dispado quando uma tecla é pressionada.
onkeypress => Dispado quando uma tecla é pressionada e solta.
onkeyup => Dispado quando uma tecla é solta sobre um elemento.
onload => Disparado quando a página terminou de ser carregada. Body.
onresize => Disparado quando há um redirecionamento da janela. 
*/


function eventoClick(){
  //console.log("DEU CERTO!");
  document.body.style.backgroundColor = "#FA4A44";
}

function eventoDblClick(){
  alert("Evento de clique duplo");
}

function viraVermelho(){
  let div = document.getElementById("teste");
  div.style.backgroundColor = "#FA4A44";
}


function viraAzul(){
  let div = document.getElementById("teste");
  div.style.backgroundColor = "#4AEE";
}

function adicionaTexto(){
  let p = document.getElementById("text"); 
  p.append('O mouse movel<br>');
}

function limpaTexto(){
  document.getElementById("campoTexto").value = "";
}

function mudou(){
  console.log("Mudou");
}