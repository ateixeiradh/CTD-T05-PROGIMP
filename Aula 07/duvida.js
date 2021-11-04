// Um desenvolvedor precisa de ajuda para escolher o operador correto na sua condição.
// OBJETIVO - ESCOLHER OPERADOR CORRETO

// A ideia dele é exibir uma mensagem “Esse produto não está ativo”
//  quando a variável produtoAtivo  estiver com o valor falso.

var produtoAtivo = false; // MOSTRAR: “Esse produto não está ativo”

if(!produtoAtivo) { // VALIDA SE É VERDADEIRO
    // produtoAtivo = false
    console.log('Esse produto não está ativo')
} else {
    console.log('Esse produto está ativo')
}

// Qual condição se encaixaria neste código:

// produtoAtivo != false -> false
// produtoAtivo || false -> FALSE
// produtoAtivo && false -> FALSE
// !produtoAtivo -> negar FALSE -> true
