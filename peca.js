let readlineSync = require('readline-sync');

var nome_peca, pesoPeca, cadastrarQuest;
var listPeca = [];

cadastrarPeca();


function cadastrarPeca() {
    nome_peca = readlineSync.question("Digite o nome da peca: ");
    pesoPeca = readlineSync.questionFloat("Digite o peso da peca:  ");

    if (pesoPeca > 100) {
        if (listPeca.length > 10) {
            console.log("Não Cadastar!! Capacidade Máxima atiginda!");
        } else if (nome_peca.length < 3) {
            console.log("Não Cadastar!! Nome Inválido!");
        } else {
            listPeca.push(`Peça: ${nome_peca} Peso: ${pesoPeca}`)
            console.log("Cadastrado com Sucesso!\n" + listPeca);
        }
    } else {
        console.log("Não Cadastar!! Peso Insuficiente!");
    }
    //RECURSIVIDADE
    cadastrarQuest = readlineSync.question("Deseja cadastrar outra peca? (S) para SIM ou (N) para NÃO  ");
    if (cadastrarQuest == "s" || cadastrarQuest == "S") {
        cadastrarPeca();

    } else {
        console.log(listPeca);
    }
}


