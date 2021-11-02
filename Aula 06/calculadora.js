// exercicio calculadora aula 06
// exemplo executado em sala de aula 

function adicionar(a, b) {
    return a+b;
}

function subtrair(a, b) {
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;
}

function quadradoDoNumero(a){
    return multiplicar(a,a);
}

console.log("-------------- Teste de Operações / Calculadora --------------");
// console.log(adicionar(1,3));
// console.log(subtrair(3,1));
adicionar(1,2);

function media3valores(num1, num2, num3) {

let soma2 = adicionar(num1, num2);
console.log(soma2);
let somaTodos = adicionar(soma2, num3);
console.log(somaTodos);
let resultado = dividir(somaTodos, 3);

    return resultado;
}

console.log(media3valores(1,1,1));

function calculaPorcentagem(num1, num2) {
    let produto = (dividir(num2, 100));
    return multiplicar(num1, produto);
  }
  console.log(calculaPorcentagem(300, 15));
  

  function mediaDeTresNumeros(x, y, z) {
    let soma1 = adicionar(x, y)
    let somatotal = adicionar(soma1, z)
    return dividir(somatotal, 3);
  }
