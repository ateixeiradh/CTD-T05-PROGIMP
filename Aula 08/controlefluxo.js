// validação ESTRUTURA IF-ELSE
function validaSenha(senha) {
    let senhaCorreta = "batataBananaTomate";

    // se a senha estiver CORRETA
    // retorna - acesso permitido
 if (senha == senhaCorreta) {
     // if FAZ uma ação
     // SE a condição dele estiver VERDADEIRA
     console.log("acesso permitido");

 } else {
     // se a senha estiver INCORRETA
    // retorna - acesso negado
     console.log("acesso negado");
 }

}

// validaSenha("estruturaCondicional");
// validaSenha("batataBananaTomate");

function validaNovaSenha(senha) {
    let senhaCorreta = "thugstools"
    return senha == senhaCorreta ? console.log("permitido") : console.log("negado");
}

// validaNovaSenha("ifTernario");
// validaNovaSenha("thugstools");

// exemplo
// function limiteDeConsumo(valor) {
//     return valor <= limitePermitido ? aumentarLimite(valor+10) : zerarLimite();
// }

function qualOMes(valor) {
    // 1 a 12
    switch (valor) {
        case '1':
            console.log("JANEIRO");
            break;
        case '2':
            console.log("FEVEREIRO");
            break;
        case '3':
            console.log("MARÇO");
            break;
        case '4':
            console.log("ABRIL");
            break;
        case '5':
            console.log("MAIO");
            break;
        case '6':
            console.log("JUNHO");
            break;
        case '7':
            console.log("JULHO");
            break;
        case '8':
            console.log("AGOSTO");
            break;
        case '9':
                console.log("SETEMBRO");
                break;
        case '10':
            console.log("OUTUBRO");
            break;
        case '11':
            console.log("NOVEMBRO");
            break;
        case '12':
            console.log("DEZEMBRO");
            break;
        default:
            console.log("Mês INVÁLIDO");
            break;
    }

}

qualOMes(0);
qualOMes('1');
qualOMes('13');