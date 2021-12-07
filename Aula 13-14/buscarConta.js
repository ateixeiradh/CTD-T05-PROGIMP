const listaContas = require("./criarContas");

function buscarConta(nome){

    for (let i=0; i < listaContas.length; i++) {
        // for (let i of listaContas)
        
        if ( listaContas[i].titular == nome) {
            return listaContas[i];
        }
    }

    return "CONTA NÃO ENCONTRADA.";
}

console.log(buscarConta("Bendite Huggett"));
console.log(buscarConta("Bendite"));

function exportarPoupanca(tipo){
    let resposta = [];

    for (let i=0; i < listaContas.length; i++) {
        // for (let i of listaContas)
        
        if ( listaContas[i].tipoConta == tipo ) {
            // acumulador para salvar
            resposta.push(listaContas[i]);
        }
    }

    return resposta;
}

console.log(exportarPoupanca("Conta Corrente"));