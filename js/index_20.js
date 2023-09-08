/* Resumo geral dos conteúdos abordados até o momento */

// 1. Variáveis
var nome = "ChatGPT";
let idade = 2;
const versao = "3.5";

// 2. Tipos de dados
let numero = 42;
let texto = "Olá, mundo!";
let booleano = true;
let array = [1, 2, 3];
let objeto = { nome: "João", idade: 30 };

// 3. Funções
function saudacao() {
  console.log("Olá!");
}
saudacao();

// 4. Escopo
function escopoExemplo() {
  let dentroDoEscopo = "Visível apenas aqui";
}
// fora do escopo: console.log(dentroDoEscopo);

// 5. Estruturas condicionais
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// 6. Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 7. Arrays
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);

// 8. Objetos
let pessoa = {
  nome: "Alice",
  idade: 25,
};
console.log(pessoa.nome);

// 9. Métodos de Array
frutas.push("uva");
frutas.pop();
frutas.forEach((fruta) => {
  console.log(fruta);
});

// 10. Eventos
document.getElementById("botao").addEventListener("click", function() {
  alert("Botão clicado!");
});

// 11. Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promessa resolvida!");
  }, 2000);
});
promise.then((resultado) => {
  console.log(resultado);
});

// 12. AJAX
// Exemplo de requisição AJAX usando XMLHttpRequest ou fetch

// 13. Closure
function criarContador() {
  let contador = 0;
  return function() {
    contador++;
    console.log(contador);
  };
}
const meuContador = criarContador();
meuContador();

// 14. Callbacks
function fazerAlgo(callback) {
  setTimeout(() => {
    console.log("Ação concluída");
    callback();
  }, 1000);
}
fazerAlgo(() => {
  console.log("Callback chamado");
});

// 15. Arrow Functions
const soma = (a, b) => a + b;
console.log(soma(3, 4));

// 16. Template Literals
const nomeUsuario = "Maria";
console.log(`Olá, ${nomeUsuario}!`);

// 17. Desestruturação
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa, idadePessoa);

// 18. Classes
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`${this.nome} faz um som.`);
  }
}
const gato = new Animal("Whiskers");
gato.falar();

// 19. Módulos
// Importar/exportar módulos em JavaScript

// 20. Promises
// Gerenciamento de assincronia usando Promises

// 21. Callbacks
// Gerenciamento de assincronia usando callbacks

// 22. Fetch API
// Fazer requisições HTTP usando Fetch

// 23. Async/Await
async function buscarDados() {
  const resposta = await fetch("https://exemplo.com/dados.json");
  const dados = await resposta.json();
  console.log(dados);
}

// 24. Event Loop
// Como o JavaScript lida com eventos e tarefas assíncronas

// 25. Prototype
// Herança e prototipagem em JavaScript

// 26. DOM Manipulation
// Manipulação do Document Object Model (DOM)

// 27. Local Storage
// Armazenamento de dados localmente no navegador

// 28. WebSockets
// Comunicação bidirecional em tempo real

// 29. Node.js
// Ambiente de execução JavaScript no lado do servidor

// 30. Frameworks
// Exemplos de frameworks populares: React, Angular, Vue, Express
