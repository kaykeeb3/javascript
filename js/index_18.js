/* Curso de Javascript: 18 | Manipulação de Datas: */

// PEGAR A DATA ATUAL:
let data =  new Date();

// PEGAR O ANO ATUAL:
let ano = data.getFullYear();

// PEGAR O MÊS ATUAL: DE 0 ATÉ 11 SENDO 0 JANEIRO E 11  DEZEMBRO
let mes = data.getMonth();

// MOSTRAR O MÊS NO FORMATO ESCRITO:
const mesesAno = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio", 
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

let mesEscrito = mesesAno[data.getMonth()];

// PEGAR DIA DO MÊS - 1 ATÉ 31:
let diaMes = data.getDate();

// PEGAR O DIA DA SEMANA 
let diaSemana = data.getDay();

const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
];

let diaDaSemanaEscrito = diaSemana[data.getDay()];

// PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();

// PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();

// PEGAR OS SEGUNDOS - DE 0 ATÉ 59
let segundos = data.setSeconds();

// PEGAR OS MILESEGUNDOS - DE 0 ATÉ 999  
let milesegundos = data.getMilliseconds();

// PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MÊS / ANO 

// let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'}); Pega diretamente a data sem a hora

let dataBR = data.toLocaleString('pt-BR'); 

// PEGAR OS VALORES SEPARADOS 
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x };

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;

// COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2023, 5, 18);

/*if (hoje > vencimento){
  console.log("Sua conta está vencida!")
} else {
  console.log("Sua conta está aberta!")
}*/

// DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.get();

var difenciaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));