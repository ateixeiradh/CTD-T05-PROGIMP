let altpessoa = 1.65;
let acompanhada = true;


function podeSubir(altpessoa, acompanhada) {
    switch (altpessoa) {

        case (altpessoa < 2.0) && (altpessoa > 1.4):
            case acompanhada: // true
                // QUE QUANDO A CONDIÇÃO VERDADEIRA
                // FAZ AÇÃO
                //console.log("Pode subir");
                podeSubir = true;
                break;
        case (altpessoa < 1.40 && acompanhada): // resposta da condição
            console.log("Pode subir");
            break;

        default:
            return console.log("Não Pode subir");

            
    }
    return podeSubir;
}

podeSubir(1.65, true);
podeSubir(1.25, true);
podeSubir(1.20, false);