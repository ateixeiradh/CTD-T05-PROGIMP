// PROBLEMA = DETERMINAR O VENCEDOR DE UM CONCURSO
// ANALOGIA DO PROBLEMA PRA MUNDO REAL = CONCURSOS, VALIDAÇÃO DE NOTAS (APROVADO OU REPROVADO), VALOR DE PAGAMENTO

// ESTRUTURA DE ARRAY
// DE POSICOES DE UM ARRAY
// TABELA DO CONCURSO: [LINHA][COLUNA]
// ARRAY[LINHAS]
// ARRAY[COLUNAS]

// CONSTANTE = VALOR FIXO
// VALOR FIXO DA COLUNA DE PARTICIPANTE
const novoParticipante = []; // este é APENAS um exemplo

const alice = [23, 82, 46]; // cada posição do array do participante é o RESULTADO de uma rodada votação
const bob = [45, 82, 32];

// POSICOES DO ARRAY -> [0][1][2]

// exemplo de dados por array
const participanteDeOutroConcurso = [28, "ana teixeira", "ateixeira@digitalhouse.com"];

function encontrarGanhador(a, b) { 

    // ESTRUTURA DE REPETIÇÃO = FOR
    // INÍCIO
    // CONDIÇÃO DE LIMITES = CONDIÇÃO DE PARADA
    // INCREMENTO/DECREMENTO = O MOVIMENTO DA REPETIÇÃO = O QUE FAZ A REPETIÇÃO
    
    // decremento--; // sempre igual:  decremento = decremento -1;


    // ESTRUTURA DE CONTROLE DE FLUXO = IF-ELSE
    
    let pontosParticipanteA = 0; // participante a = parâmetro a
    let pontosParticipanteB = 0; // participante b = parâmetro b


    // A tarefa é enfrentar esses votos comparando a[0] com b[0], a[1] com b[1] e a[2] com b[2]. 
    
    // MESA DE TESTES OU DEBUG MANUAL OU TÉCNICA DO CHINESIN

    // vai de tamanho do array, 2, 1, 0 PARA NA posicao INICIAL
    // [0][1][2] = tamanho = 3
    // contador = 3
    // contador = 2
    // contador = 1
    // contador = 0
    // SAIR DO FOR sem fazer a posicao 0

    // for (let contador = a.length-1; contador > 0; contador--)

        // vai de 0, 1, 2 .. tamanho do array = ANDAR PRA FRENTE
    for (let contador = 0; contador < a.length; contador++) { // arrays iguais
        
        console.log("contador = ", contador);
        console.log("a[contador] = ", a[contador]);
        console.log("b[contador] = ", b[contador]);
        console.log("------ PASSEI AQUI");
        
        // Se a[i] > b[i], então Alice recebe 1 ponto.
        // Se a[i] < b[i], então Bob recebe 1 ponto. 
        
    }

    // usar TESTE IF ELSE para validar pontosParticipante

} 

console.log("O ganhador é: " + encontrarGanhador (alice, bob));

function digitalHouse(numero1, numero2)  {
    
    // A função deve imprimir na tela os números de 1 a 100
    let contador = 1; // iniciei de 1
    let numeros = []; // saida dos numeros de 1 a 100

    // console.log("ANTES DO-WHILE "+ numeros);

    // DO - FAÇA
    // WHILE - ENQUANTO
    do {
        numeros.push(contador); // AÇÃO: SALVAR O NUMERO EM CADA POSICAO DO ARRAY DE RESPOSTA

        contador++; // INCREMENTO
    } while (contador <= 100); // CONDIÇÃO DE PARADA = ATÉ 100
    
    // console.log("DEPOIS DO-WHILE "+ numeros);

    // COMPLETAR COM VARIAÇÕES DOS MULTIPLOS

}

digitalHouse();
digitalHouse(2, 3);