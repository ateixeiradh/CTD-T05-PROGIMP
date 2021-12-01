// Exercício “Métodos de arrays”

// Exercício 02
// Crie um array de nomes, que possua dois índices com o nome Maria.
// Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ["Pedro", "João", "Maria", "Alberto", "Maria", "Matheus"];

let marias = nomes.filter(function (nome) {
    return nome === "Maria"
});
console.log(marias);

let buscarPorLetra = nomes.filter(function (nome) {
    return nome.toUpperCase().includes('O');
});
console.log(buscarPorLetra);

////// INCLUDES sozinho
let numeros = [3, 4, 5, 6, 7];

let existe = numeros.includes(4); // true
console.log("1 - "+ existe)

existe = numeros.includes(4, 2); // false

console.log("2 - "+ existe)

///// SORT
let numerosSort = [10, 3, 4, 52, 6, 7];

numerosSort.sort(
  function(a,b){
    return a-b;
}); // [4, 7, 8, 9, 10, 52]


numerosSort.sort(
    function(a,b){
      return b-a;
  }); // [4, 7, 8, 9, 10, 52]
  
  // ["Pedro", "João", "Maria", "Alberto", "Maria", "Matheus"];
nomes.sort();
console.log(nomes);

let ordernar = ['A', '!', 'c', 'o', 'a', 'O']
ordernar.sort();
console.log(ordernar)