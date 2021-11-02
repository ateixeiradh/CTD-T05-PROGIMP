// arquivo para brincar com o ESCOPO da variável nome
let nome = "Danilo";

console.log(nome);

function testar(){
    let nome = "ANA";
    return console.log(nome);
}
testar();
console.log(nome);


// ESCOPO: GLOBAL: var
let teste = 1;
const fixa;

function nova() {
    const interna = 2;
    fixa = 10;
    let teste = 0;
    return teste;
}