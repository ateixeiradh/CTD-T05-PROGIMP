let filmes = ['star wars', 'matrix', 'robot', 'o Preço do Amanhã', 'a Vida é Bela', 'pantera negra', 'avatar'];
let lista = ["Macarrão", "Feijão", "Sabonete", "Arroz", "Escova", "Farinha"];

function converterMaisculas(array){

    // array[0] = array[0].toUpperCase();
    // array[1] = array[1].toUpperCase();
    // array[2] = array[2].toUpperCase();
    // array[3] = array[3].toUpperCase();
    // array[4] = array[4].toUpperCase();

    for (let contador = 0; contador < array.length; contador++) {

        // A AÇÃO QUE SUA REPETIÇÃO
        array[contador] = array[contador].toUpperCase();
        
    }

    return array;
}

console.log(filmes);
console.log(converterMaisculas(filmes));

