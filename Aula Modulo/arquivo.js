
// criar consumidores.txt -> objeto a partir do texto

// importou o modulo de gerenciamento de arquivos: fs nativo do node  file system
const fs = require('fs');

// modulo nativo, npm init pra iniciar um projeto node
// npm install para criar a referencia nativa do node

// console.log(fs.readFileSync(__dirname + '/texto.txt', 'utf-8')) no vídeo explica assim

// leitura do arquivo
// o arquivo salvo na variavel customers
let consumidores = fs.readFileSync('./consumidores.txt', 'utf-8');

// separou nosso arquivo pelas virgulas
const lista = consumidores.split(',');

const novaLista = lista.toString();

console.log(lista);

console.log(novaLista);

console.log(lista[0]);
console.log(novaLista[0]);

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);

const nomesPessoa = fs.readFileSync('./nomes.json', 'utf-8');
const novo = JSON.parse(nomesPessoa);
console.log(novo);
console.log(novo.idade);