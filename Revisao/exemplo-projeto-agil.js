// simular um projeto ágil em código JS

// OBJETO PROJETO
// com os atributos que compoem aquele projeto

const numeroSprint = 77;
const nomeProjeto = "Projeto DH";
const inicioSprint = "06/12/21";
const fimSprint = "17/12/21";

// 5 - CONTROLE DE FLUXO DA APLICAÇÃO
// IF-ELSE
function validarDataValidaNaSprint(data) {
    let mensagem;
    if (data === inicioSprint) {
        mensagem = "VOCÊ COMEÇOU A SPRINT HOJE!";
    } else if (data === fimSprint) {
        mensagem = "VOCÊ ESTÁ NO ÚLTIMA DIA DA SPRINT!"
    }
    else {
        mensagem = "DATA INVÁLIDA PRO MOMENTO."
    }

    return mensagem;
}

console.log(validarDataValidaNaSprint("06/12/21"));
console.log(validarDataValidaNaSprint("17/12/21"));
console.log(validarDataValidaNaSprint("20/12/21"));

// CONDICIONAL(TERNÁRIO)
function validarData(data) {
    return (data === inicioSprint || data === fimSprint) ? 'VOCÊ ESTÁ NA SPRINT' : 'VOCÊ NÃO ESTÁ SPRINT';
}

console.log("intervalo válido inicio - " + validarData(inicioSprint));
console.log("intervalo válido fim - " + validarData(fimSprint));
console.log("intervalo FORA - " + validarData("20/12/21"));

// SWITCH CASE pelo menos 3 opções
function oQueCriar(entrada) {
    let resposta;
    switch (entrada) {
        // SE você precisar fazer um SWITCH para DUAS opções válidas: USE uma estrutura IF/ELSE

        case 'Epico': // entrega maior quem contem estórias (user story)
            resposta = 'Estoria';
            break;
        case 'Estoria':
            resposta = 'Tarefa';
            break;
        case 'Tarefa': // atividade
            resposta = 'Dev: LOG SUAS HORAS TRABALHADAS';
            break;
        default:
            resposta = 'ENTRADA INVÁLIDA';
            break;
    }
    return resposta;
}

console.log("Criei o Epico, e agora? Agora: " + oQueCriar('Epico'));
console.log("Criei o Estoria, e agora? Agora: " + oQueCriar('Estoria'));
console.log("Criei o Tarefa, e agora? Agora: " + oQueCriar('Tarefa'));
console.log("Criei o Tarefa, e agora? Agora: " + oQueCriar('Aleatoria'));

// 6 - STRING E ARRAY

let nomeEpicos = ["Epico Login", "Epico Lista Disciplinas", "Epico Praticar Disciplina"];
// lista de compras, lista de contas bancárias, lista de notas de concurso, lista de estilos musicais, VISÃO DE SEMELHANÇA ENTRE OS ITENS DA LISTA

let [epico1, epico2, epico3] = nomeEpicos;

let detalhesEpico1 = ["Epico Login", 5701, "300h", true]; // exemplo de situação com vários tipos de dados no mesmo array

console.log("nomeEpicos ORIGINAL: " + nomeEpicos);
console.log("epico1: "+ epico1);
console.log("epico2: "+ epico2);
console.log("epico3: "+ epico3);

nomeEpicos.push("Epico Evolução")

// 7 - ESTRUTURA DE REPETIÇÃO
    // DO-WHILE
    function mostrarListaEpicos(entrada) {
        // inicio FORA da estrutura
        let contador = 0;
        do {  // PRIMEIRO FAZ a ação
            console.log("Lista [" + contador + "] = " + entrada[contador]);
            // modificação INCREMENTO/DECREMENTO
            contador++;
        } while (contador < entrada.length); // DEPOIS testa a condição de parada
    }
    
    console.log("=================================== DO WHILE ===================================");
    mostrarListaEpicos(nomeEpicos);
    
    // WHILE
    function mostrarListaEpicosWhile(entrada) {
        let contador = 0;
        while (contador < entrada.length) {
            console.log("Lista [" + contador + "] = " + entrada[contador]);
            contador++;
        }
    }

    console.log("=================================== WHILE ===================================");
    mostrarListaEpicosWhile(nomeEpicos);

    // FOR
    // MÉTODOS AVANÇADOS: forEach
    // map, includes, filter, reduce, reverse